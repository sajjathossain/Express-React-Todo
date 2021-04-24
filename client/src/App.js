import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Todos from './components/Todos/Todos'

const App = () => {
    const apiURL = 'http://localhost:5000/todos/'
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
    
    return (
        <div style={{height: '100vh', width: '100vw'}}>
            <Navbar addNewTodo={addNewTodo} newTaskBody={newTaskBody} />
            <Todos todos={listOfTodos} />
        </div>
    )
}

export default App
