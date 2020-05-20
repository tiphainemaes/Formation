const pool = require('../db/connexion');

const getComments = (request, response) => {
    pool.query('SELECT * FROM comments ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
};

const getCommentById = (request, response) => {
    const id = parseInt(request.params.id);

    pool.query(`SELECT * FROM comments WHERE id = ${id}`, (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
};

const getCommentByPostId = (request, response) => {
    const post_id = parseInt(request.params.post_id);

    pool.query(`SELECT * FROM comments WHERE post_id = ${post_id}`, (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
};

const createComment = (request, response) => {
    const { post_id, name, email, body } = request.body

    pool.query(`INSERT INTO comments ( post_id, name, email, body ) VALUES (${post_id}, '${name}', '${email}', '${body}') `, (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`User added with ID: ${results.insertId}`)
    })
};

const deleteComment = (request, response) => {
    const id = parseInt(request.params.id);

    pool.query(`DELETE FROM comments WHERE id = ${id}`, (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
};

const updateComment = (request, response) => {
    const id = parseInt(request.params.id);
    const { post_id, name, email, body } = request.body;

    pool.query(`UPDATE comments SET post_id = ${post_id}, name = ${name}, email = ${email}, body = ${body} WHERE id = ${id}`, (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`User modified with ID: ${id}`)
    })
};

module.exports = {
    getComments,
    getCommentById,
    getCommentByPostId,
    createComment,
    deleteComment,
    updateComment
}