'use strict';

let listaProductos = [];

GetProductos();

async function GetProductos() {
    let result = await ObtenerListaProducto();
    if (result != {} && result.resultado == true) {
        listaProductos = result.ListaProductosBD;
        ImprimirDatos();
    };
};
function ImprimirDatos() {
    var tableBody = document.querySelector('#tblProduct');
    tableBody.innerHTML = '';

    for (let i = 0; i < listaProductos.length; i++) {
        let fila = tableBody.insertRow();

        let celdaNombre = fila.insertCell();
        let celdaIngrediente = fila.insertCell();
        let celdaCosto = fila.insertCell();

        celdaNombre.innerHTML = listaProductos[i].nombreProducto;
        celdaIngrediente.innerHTML = `${listaProductos[i].ingredientesProducto} `;
        celdaCosto.innerHTML = `₡ ${listaProductos[i].precioProducto}`;
    };
};