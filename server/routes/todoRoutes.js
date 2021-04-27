import express from 'express'
// import api from '../api/todoApi.js'
import { getAllTodo, getOneTodo, addNewTodo, patchTodo, deleteTodoItem } from '../controllers/todoControllers.js'

const router = express.Router()

router.get("/", getAllTodo)

router.get("/:id", getOneTodo)

router.post("/", addNewTodo)

router.patch('/:id', patchTodo)

router.delete('/:id', deleteTodoItem)

export default router;