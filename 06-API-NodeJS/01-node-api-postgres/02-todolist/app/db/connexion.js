const Pool = require('pg').Pool
const pool = new Pool({
    user: 'tiphaine',
    host: 'localhost',
    database: 'todolist',
    password: 'password',
    port: 5000,
})

module.exports = pool;