import React from 'react'

const Navbar = ({ newTaskBody, addNewTodo }) => {
    return (
        <div className="navbar bg-light text-info" style={{ height: "8vh" }}>
            <nav className="container-fluid">
                <div className="navbar-brand font-weight-bold" style={{ fontSize: "1.5rem" }}> <i className="fa fa-tasks"></i> Todos</div>
                <form action="/" className="form d-flex" onSubmit={addNewTodo}>
                    <input type="text" autoComplete="off" placeholder="Enter any task*" className="form-control border border-success" id="taskInput" onChange={newTaskBody} required/>
                    <button type="submit" className='btn btn-primary ml-2'><i className="fa fa-plus-square"></i></button>
                </form>
            </nav>
        </div>
    )
}

export default Navbar
