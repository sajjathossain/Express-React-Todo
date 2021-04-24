import React from 'react'

const Todo = ({ todo }) => {
    const bgColors = ['primary', 'secondary', 'danger', 'info', 'dark', 'warning']
    const bgColor = bgColors[Math.floor(Math.random() * 6)]

    return (
        <div className={`card bg-${bgColor} text-light`} style={{ height: '12rem', width: '20rem' }}>
            <div className="card-body">
                <h3 className="d-flex justify-content-between">Task: <p className="badge badge-light text-warning" style={{ fontSize: '1rem' }}>{todo.isDone ? 'Done' : 'Pending'}</p></h3>
                <hr className="bg-light"/>
                <h5>{todo.task}</h5>
            </div>
        </div>
    )
}

export default Todo
