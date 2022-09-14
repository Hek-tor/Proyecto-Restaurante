'use strict';

async function RegistrarProducto(nameDish, costDish, optionsSelected) {
    let result = {};

    await axios({
        method: 'post',
        url: apiUrl + '/RegistrarProducto',
        responseType: 'json',
        data: {
            'nombreProducto': nameDish,
            'precioProducto': costDish,
            'ingredientesProducto': optionsSelected,
        }
    }).then((res) => {
        if (res.data.resultado == false) {
            switch (res.data.err.code) {
                case 11000:
                    res.data.msj = '¡Game Over! Ya alguien registró ese nombre de platillo, intenta con otro.';
                    console.log(res.data.err);
                    break;
                default:
                    break;
            }
        }
        result = res.data;
    }).catch((err) => {
        console.log(err);
    });
    return result;
};