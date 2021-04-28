import React from 'react'
import './Todo.css'


const Todo = ({ todo, todoCount, deleteTask, doneTask }) => {
    const bgColors = ['primary', 'secondary', 'danger', 'info', 'dark', 'warning']
    const bgColor = bgColors[Math.floor(Math.random() * 6)]

    return (
        <div className={`card border border-${bgColor} text-light`} style={{ height: '20rem', width: '22rem', opacity: todo.isDone ? "75%" : "100%", filter: todo.isDone ? 'grayscale(100%)' : "", backgroundColor: "#004F66" }}>
            <div className="card-body text-white">
                <h3 className="d-flex justify-content-between">Task - {todoCount+1} <p className={`badge badge-light text-${bgColor}`} style={{ fontSize: '1rem' }}>{todo.isDone ? 'Done' : 'Pending'}</p></h3>
                <hr className="bg-light"/>
                <h5 style={{ textDecoration: todo.isDone ? "line-through" : ""}}>{todo.task}</h5>
            </div>
            <div className="d-flex justify-content-around">
                {
                    todo.isDone ? '' : 
                    <button className={`btn btn-${bgColor} col-md-5 m-1 mb-3`} onClick={() => {doneTask(todo.id)}}><i className="fa fa-check-square"></i></button>
                }
                <button className={`btn btn-${bgColor} col-md-${todo.isDone ? "10" : "5"} m-1 mb-3`} onClick={() => {deleteTask(todo.id)}}><i className="fa fa-trash"></i></button>
            </div>
        </div>
    )
}

export default Todo
