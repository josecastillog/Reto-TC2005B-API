// Load MySql pool connection
const pool = require('../data/config')

// Router para endpoint videojuego de bolsas
const express = require('express')
const { response } = require('express')
const router = express.Router()

// Insertar partida jugada
router.post('/insert/partida', (request, response) => {
    // console.log(request.body)
    pool.query('INSERT INTO partidas SET ?', request.body, (error, result) => {
        if (error) {
            console.log('Error al insertar datos')
            response.status(201).send(`Error al insertar datos`)
        } else {
            console.log(`Partida de empleado #${request.body.id_empleado} agregado`)
            response.status(201).send(`Partida de empleado #${request.body.id_empleado} agregado`)
        }
    })
})

// Obtener numero de vidas
router.get('/vidas/:id', (req, res) => {
    const id = req.params.id
    pool.query('SELECT num_vidas FROM empleado WHERE id = ?', id, (error, result) => {
        if (error) {
            res.send('Error')
        } else {
            res.send(result[0])
        }
    })
})

// Actualizar número de vidas
router.put('/vidas/update', (req, res) => {
    const params = [req.body.num_vidas, req.body.id]
    pool.query('UPDATE empleado SET num_vidas = ? WHERE `id` = ?', params, (error, result) => {
        if (error) {
            console.log(error)
            res.send('Error')
        } else {
            res.send(`Empleado con id ${req.body.id} se actualizo a ${req.body.num_vidas} vidas.`)
        }
    })
})

module.exports = router