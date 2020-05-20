const pool = require('../db/connexion');

const getTodos = (request, response) => {
    pool.query('SELECT * FROM todos ORDER BY id DESC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
};

const createTodo = (request, response) => {
    const { title } = request.body

    pool.query(`INSERT INTO todos ( title ) VALUES ('${title}')`, (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`User added with ID: ${results.insertId}`)
    })
};

const deleteTodo = (request, response) => {
    const id = parseInt(request.params.id);

    pool.query(`DELETE FROM todos WHERE id = ${id}`, (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
};

const completeTodo = (request, response) => {
    const id = parseInt(request.params.id);
    const { completed } = request.body;

    pool.query(`UPDATE todos SET completed = ${!completed}  WHERE id = ${id}`, (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Todo modified with ID: ${id}`)
    })
};


module.exports = {
    getTodos,
    createTodo,
    deleteTodo,
    completeTodo
}