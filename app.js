// Load MySql pool connection
const pool = require('./data/config')

const bodyParser = require('body-parser')

const express = require('express')
const { response } = require('express')
const app = express()

const port = process.env.PORT || 5000

// Importar routes
const bolsasRoutes = require('./routes/bolsas')
const casasRoutes = require('./routes/casas')

// Parse application/json
app.use(bodyParser.json())

// Cargar routes para usarlas
app.use(bolsasRoutes)
app.use(casasRoutes)

// Todos los usuarios
app.get('/users', (req, response) => {
    pool.query('SELECT * FROM login', (err, result) => {
        if (err) {
             return console.log(err)
        }

        response.send(result)
    })
})

// Usuario por id
app.get('/users/:id', (req, response) => {
    const id = req.params.id;
    pool.query('SELECT * FROM login WHERE id_empleado = ?', id, (error, result) => {
        if (error) {
            return console.log(error)
        }
     
        response.send(result);
    })
})

// Listen on port 5000 (Local)
app.listen(port, () => {
    console.log('Listening on port', port)
})