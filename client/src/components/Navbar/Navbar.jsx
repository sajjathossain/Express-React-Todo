import React from 'react'

const Navbar = ({ newTaskBody, addNewTodo }) => {
    return (
        <div className="navbar bg-light text-info">
            <nav className="container-fluid">
                <div className="navbar-brand font-weight-bold">Todos</div>
                <form action="/" className="form d-flex" onSubmit={addNewTodo}>
                    <input type="text" placeholder="Enter any task*" className="form-control border border-success" onChange={newTaskBody} required/>
                    <input type="submit" className='btn btn-primary ml-2'/>
                </form>
            </nav>
        </div>
    )
}

export default Navbar
