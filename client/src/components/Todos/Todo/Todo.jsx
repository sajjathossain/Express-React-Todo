import React from 'react'

const Todo = ({ todo, deleteTask }) => {
    const bgColors = ['primary', 'secondary', 'danger', 'info', 'dark', 'warning']
    const bgColor = bgColors[Math.floor(Math.random() * 6)]

    return (
        <div className={`card bg-${bgColor} text-light`} style={{ height: '15rem', width: '20rem' }}>
            <div className="card-body">
                <h3 className="d-flex justify-content-between">Task: <p className={`badge badge-light text-${bgColor}`} style={{ fontSize: '1rem' }}>{todo.isDone ? 'Done' : 'Pending'}</p></h3>
                <hr className="bg-light"/>
                <h5>{todo.task}</h5>
            </div>
            <button className={`btn btn-${bgColor} btn-block`} onClick={() => {deleteTask(todo.id)}}><i className="fa fa-trash"></i></button>
        </div>
    )
}

export default Todo
