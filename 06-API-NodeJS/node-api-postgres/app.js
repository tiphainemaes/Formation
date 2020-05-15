const express = require('express');
const bodyParser = require('body-parser');
const users = require('./app/routes/users');
const posts = require('./app/routes/posts');
const comments = require('./app/routes/comments');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
});

app.get('/users', users.getUsers);
app.get('/users/:id', users.getUserById);
app.post('/users', users.createUser);
app.delete('/users/:id', users.deleteUser);
app.put('/users/:id', users.updateUser);

app.get('/posts', posts.getPosts);
app.get('/posts/:id', posts.getPostById);
app.get('/users/:user_id/posts', posts.getPostByUserId);
app.post('/posts', posts.createPost);
app.delete('/posts/:id', posts.deletePost);
app.put('/posts/:id', posts.updatePost);

app.get('/comments', comments.getComments);
app.get('/comments/:id', comments.getCommentById);
app.get('/posts/:post_id/comments', comments.getCommentByPostId);
app.post('/comments', comments.createComment);
app.delete('/comments/:id', comments.deleteComment);
app.put('/comments/:id', comments.updateComment);


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}.`);
});