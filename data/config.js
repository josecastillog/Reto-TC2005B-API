const mysql = require('mysql')

const config = {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'reto_tc2005b'
}

const pool = mysql.createPool(config)

module.exports = pool