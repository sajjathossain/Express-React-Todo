import express from 'express'
import todoRoutes from './routes/todoRoutes.js'
import cors from 'cors'

const PORT = process.env.PORT || 5000

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

app.use('/todos', todoRoutes)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})