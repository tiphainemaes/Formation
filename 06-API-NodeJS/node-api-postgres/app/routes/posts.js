const pool = require('../db/connexion')

const getPosts = (request, response) => {
    pool.query('SELECT * FROM posts ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
};

const getPostById = (request, response) => {
    const id = parseInt(request.params.id);

    pool.query(`SELECT * FROM posts WHERE id = ${id}`, (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
};

const getPostByUserId = (request, response) => {
    const user_id = parseInt(request.params.user_id);

    pool.query(`SELECT * FROM posts WHERE user_id = ${user_id}`, (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
};

const createPost = (request, response) => {
    const { user_id, title, body } = request.body

    pool.query(`INSERT INTO posts ( user_id, title, body ) VALUES (${user_id}, '${title}', '${body}') `, (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`User added with ID: ${results.insertId}`)
    })
};

const deletePost = (request, response) => {
    const id = parseInt(request.params.id);

    pool.query(`DELETE FROM posts WHERE id = ${id}`, (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
};

const updatePost = (request, response) => {
    const id = parseInt(request.params.id);
    const { user_id, title, body } = request.body;

    pool.query(`UPDATE posts SET user_id = ${user_id}, title = '${title}', body = '${body}' WHERE id = ${id}`, (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`User modified with ID: ${id}`)
    })
};

module.exports = {
    getPosts,
    getPostById,
    getPostByUserId,
    createPost,
    deletePost,
    updatePost
}