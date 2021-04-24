import React from 'react'
import Todo from './Todo/Todo'

const Todos = ({todos}) => {
    return (
        <div className="mt-2 container-fluid">
            <div className="row d-flex justify-content-center">
                {
                    todos.map((todo) =>{
                        return (
                            <div key={todo.id} className="m-2">
                                {/* { todo.task } */}
                                <Todo todo={todo} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Todos
