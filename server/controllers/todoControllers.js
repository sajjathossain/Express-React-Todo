import todoList from '../todoList.js'

// Get the todo list
export const getAllTodo = (req, res) => {
    res.send(todoList)
}

// get a single todo item
export const getOneTodo = (req, res) => {
    const id = parseInt(req.params.id)
    const requiredPost = todoList.find((todo) => todo.id === id)

    if(!requiredPost){
        return res.status(404).json({ message: `Post with id: ${id} not found` })
    }
    res.status(200).send(requiredPost)
}

// add a new todo item to the list
export const addNewTodo = (req, res) => {
    const todoBody = req.body
    const newTodo = { id: todoList.length +1, ...todoBody, isDone: false }

    todoList.push(newTodo)

    res.status(201).send(todoList)
}

// update a iten in the todo list
export const patchTodo = (req, res) => {
    const { task, isDone } = req.body
    const id = parseInt(req.params.id)

    const findTodo = todoList.find(todo => todo.id === id)
    
    if(!findTodo){
        return res.status(404).send(`Post whith id: ${id} not found`)
    }
    
    if(!task){
        return res.status(404).send(`Please add any task`)
    } 

    findTodo.isDone = isDone
    findTodo.task = task

    res.send(findTodo)
}

// delete a item from the todo list
export const deleteTodoItem = (req, res) => {
    const id = parseInt(req.params.id)
    const findTodo = todoList.find(todo => todo.id === id)
    if(!findTodo) {
        return res.status(404).json({ msg: `Id ${id} not found`})
    }

    const index = todoList.indexOf(findTodo)
    todoList.splice(index, 1)
    res.status(201).send(todoList)
}