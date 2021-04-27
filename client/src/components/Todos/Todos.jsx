import React from 'react'
import Todo from './Todo/Todo'

const Todos = ({ todos, deleteTask, doneTask }) => {
    return (
        <div className="mt-2 container-fluid">
            <div className="row d-flex justify-content-center">
                {   
                    todos.map((todo) =>{
                        return (
                            <div key={todo.id} className="m-2">
                                <Todo todoCount={todos.indexOf(todo)} todo={todo} deleteTask={deleteTask} doneTask={doneTask} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Todos
