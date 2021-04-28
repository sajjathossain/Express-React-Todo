import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Todos from './components/Todos/Todos'

const App = () => {
    const apiURL = 'http://localhost:5000/todos'
    const [listOfTodos, setListOfTodos] = useState([])
    const [taskBody, setTaskBody] = useState('')

    useEffect(() => {
        const getAllTodos = async () => {
            await fetch(apiURL)
            .then((response) => response.json())
            .then((data) => setListOfTodos(data))
        }

        getAllTodos()
    }, [])

    const addNewTodo = async (e) => {
        e.preventDefault()
        document.getElementById("taskInput").value = null

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({task: taskBody})
        };

        await fetch(apiURL, requestOptions)
        .then((response) => response.json())
        .then((data) => setListOfTodos(data))
    }

    const newTaskBody = (e) => {
        setTaskBody(e.target.value)
    }

    const doneTask = async (taskId) => {
        const donePost = listOfTodos.find(todo => todo.id === taskId)

        const requestOptions = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({...donePost, isDone: true})
        };

        await fetch(`${apiURL}/${taskId}`, requestOptions)
        .then((response) => response.json())
        .then((data) => setListOfTodos(data))
    }

    const deleteTask = async (taskID) => {
        const requestOptions = {
            method: 'DELETE',
        };

        await fetch(`${apiURL}/${taskID}`, requestOptions)
        .then((response) => response.json())
        .then((data) => setListOfTodos(data))
    }
    
    return (
        <div style={{height: '100vh', width: '100vw', backgroundColor: "#eee"}}>
            <Navbar addNewTodo={addNewTodo} newTaskBody={newTaskBody} />
            {
                listOfTodos.length === 0 ? 
                    <div className="container mt-4">
                        <div className="alert alert-danger text-center p-3 font-weight-bold">No Task Available! Add one.</div>
                    </div> 
                    :   <Todos todos={listOfTodos} deleteTask={deleteTask} doneTask={doneTask} />
            }
        </div>
    )
}

export default App
