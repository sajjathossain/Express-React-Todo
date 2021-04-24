import React from 'react'
import Todo from './Todo/Todo'

const Todos = ({ todos, deleteTask }) => {
    return (
        <div className="mt-2 container-fluid">
            <div className="row d-flex justify-content-center">
                {   
                    todos.map((todo) =>{
                        return (
                            <div key={todo.id} className="m-2">
                                <Todo todo={todo} deleteTask={deleteTask} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Todos
