'use strict';
const express = require('express');
const router = express.Router();
const Producto = require('../models/registroModel');

router.post('/RegistrarProducto', (req, res) => {
    let body = req.body;

    let nuevoProducto = new Producto({
        nombreProducto: body.nombreProducto,
        precioProducto: body.precioProducto,
        ingredientesProducto: body.ingredientesProducto
    });

    nuevoProducto.save((err, registroDB) => {
        if (err) {
            res.json({
                resultado: false,
                msj: 'Ocurrió un error, el producto no pudo ser registrado',
            });
        } else {
            res.json({
                resultado: true,
                msj: 'Registro realizado exitosamente',
                registroDB
            });
        }
    });
});

router.get('/ListarProductos', (req, res) => {
    Producto.find((err, ListaProductosBD) => {
        if (err) {
            res.json({
                resultado: false,
                msj: 'Error al obtener los datos: ',
                err
            });
        } else {
            res.json({
                resultado: true,
                msj: 'Los datos se obtuvieron de manera correcta: ',
                ListaProductosBD
            });
        }
    });
});

module.exports = router;