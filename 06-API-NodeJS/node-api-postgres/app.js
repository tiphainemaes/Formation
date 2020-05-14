const express = require('express');
const bodyParser = require('body-parser');
const pool = require('./app/db/connexion')
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

/* GET */

app.get('/users', (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
});


app.get('/users/:id', (request, response) => {
    const id = parseInt(request.params.id);

    pool.query(`SELECT * FROM users WHERE id = ${id}`, (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
});

/* POST */

app.post('/users', (request, response) => {
    const { name, username, email, address_street, address_suite, address_city, address_zip, address_geo_lat, address_geo_lng, phone, website, company_name, company_catchphrase, company_bs } = request.body

    pool.query(`INSERT INTO users ( name, username, email, address_street, address_suite, address_city, address_zip, address_geo_lat, address_geo_lng, phone, website, company_name, company_catchphrase, company_bs ) VALUES ('${name}', '${username}', '${email}', '${address_street}', '${address_suite}', '${address_city}', '${address_zip}', ${address_geo_lat}, ${address_geo_lng}, '${phone}', '${website}', '${company_name}', '${company_catchphrase}', '${company_bs}') `, (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`User added with ID: ${results.insertId}`)
    })
});

app.post('/posts', (request, response) => {
    const { user_id, title, body } = request.body

    pool.query(`INSERT INTO posts ( user_id, title, body ) VALUES (${user_id}, '${title}', '${body}') `, (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`User added with ID: ${results.insertId}`)
    })
});

app.post('/comments', (request, response) => {
    const { post_id, name, email, body } = request.body

    pool.query(`INSERT INTO comments ( post_id, name, email, body ) VALUES (${post_id}, '${name}', '${email}', '${body}') `, (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`User added with ID: ${results.insertId}`)
    })
});

/* DELETE */

app.delete('/users/:id', (request, response) => {
    const id = parseInt(request.params.id);

    pool.query(`DELETE FROM users WHERE id = ${id}`, (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
});


/* PUT */

app.put('/users/:id', (request, response) => {
    const id = parseInt(request.params.id);
    const { name, email } = request.body;

    pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [name, email, id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`User modified with ID: ${id}`)
        })
});


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}.`);
});