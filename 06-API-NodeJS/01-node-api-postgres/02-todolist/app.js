const express = require('express')
const bodyParser = require('body-parser')
const todos = require('./app/routes/todos');
const app = express()
const PORT = 3000
var cors = require('cors')

app.use(cors());

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/todos', todos.getTodos);
app.post('/todos', todos.createTodo);
app.delete('/todos/:id', todos.deleteTodo);
app.patch('/todos/:id', todos.completeTodo);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}.`)
})