'use strict';
const mongoose = require('mongoose');

const schemaRegistro = new mongoose.Schema({
    nombreProducto: { type: String, required: true, unique: true},
    precioProducto: { type: Number, required: true, unique: false},
    ingredientesProducto: { type: Array, required: true, unique: false}
});

module.exports = mongoose.model('Producto', schemaRegistro, 'Productos');