const pool = require('../db/connexion');

const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
};

const getUserById = (request, response) => {
    const id = parseInt(request.params.id);
 
    pool.query(`SELECT * FROM users WHERE id = ${id}`, (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
};

const createUser = (request, response) => {
    const { name, username, email, address_street, address_suite, address_city, address_zip, address_geo_lat, address_geo_lng, phone, website, company_name, company_catchphrase, company_bs } = request.body

    pool.query(`INSERT INTO users ( name, username, email, address_street, address_suite, address_city, address_zip, address_geo_lat, address_geo_lng, phone, website, company_name, company_catchphrase, company_bs ) VALUES ('${name}', '${username}', '${email}', '${address_street}', '${address_suite}', '${address_city}', '${address_zip}', ${address_geo_lat}, ${address_geo_lng}, '${phone}', '${website}', '${company_name}', '${company_catchphrase}', '${company_bs}') `, (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`User added with ID: ${results.insertId}`)
    })
};

const deleteUser = (request, response) => {
    const id = parseInt(request.params.id);

    pool.query(`DELETE FROM users WHERE id = ${id}`, (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
};

const updateUser = (request, response) => {
    const id = parseInt(request.params.id);
    const { name, username, email, address_street, address_suite, address_city, address_zip, address_geo_lat, address_geo_lng, phone, website, company_name, company_catchphrase, company_bs } = request.body;

    pool.query(`UPDATE users SET name = '${name}', username = ${username}, email = ${email}, address_street = ${address_street}, address_suite = ${address_suite}, address_city = ${address_city}, address_zip = ${address_zip}, address_geo_lat = ${address_geo_lat}, address_geo_lng = ${address_geo_lng}, phone = ${phone}, website = ${website}, company_name = ${company_name}, company_catchphrase = ${company_catchphrase}, company_bs = ${company_bs}  WHERE id = ${id}`, (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`User modified with ID: ${id}`)
    })
};

module.exports = {
    getUsers,
    getUserById,
    createUser,
    deleteUser,
    updateUser
}