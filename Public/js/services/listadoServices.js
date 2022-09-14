'use strict';

async function ObtenerListaProducto() {
    let result = {};

    await axios({
        method: 'get',
        url: apiUrl + '/ListarProductos',
        responseType: 'json'
    }).then((res) => {
        result = res.data;
    }).catch((err) => {
        console.log(err);
    });
    return result;
}