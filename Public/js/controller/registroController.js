'use strict';

const inputProductName = document.querySelector('.space');
const inputCost = document.querySelector('.spaceNum');
const btnSubmit = document.querySelector('.btnSend');

async function getData(e) {
    e.preventDefault();

    const inputsCheck = document.querySelectorAll('input[type="checkbox"]');
    let nameDish = inputProductName.value;
    let costDish = inputCost.value;
    let optionsSelected = [];

    let resp = validator(nameDish, costDish, inputsCheck, optionsSelected);

    let result = null;

    if (resp == true) {
        result = await RegistrarProducto(nameDish, costDish, optionsSelected);

        if (result != null && result.resultado == false) {
            ErrorMsg('Error', result.msj);
        } else {
            successMsg('Registro Exitoso', 'Tu platillo fue agregado a nuestro menú, pronto estará a la venta.');
            setTimeout(function () {
                location.href = 'index.html';
            },2500);
        };
    };
};

const validator = (nameDish, costDish, inputsCheck, optionsSelected) => {

    let err = true;
    let regexText = /^([^0-9]*)$/;
    let checksMarcados = 0;

    if (nameDish == '' || !(regexText.test(nameDish)) || nameDish == undefined) {
        ErrorMsg('Hubo un problema', 'Ingresó incorrectamente el nombre del platillo');
        showError(inputProductName);
        err = false;
    };
    if (costDish == '' || costDish == Math.E || costDish == undefined || costDish <= 0) {
        ErrorMsg('Hubo un problema', 'Ingresó incorrectamente el costo del platillo');
        showError(inputCost);
        err = false;
    };
    for (let i = 0; i < inputsCheck.length; i++) {

        if (inputsCheck[i].checked === true) {
            let valor = inputsCheck[i].value;
            checksMarcados = checksMarcados + 1;
            optionsSelected.push(valor);
        };
    };
    if (checksMarcados < 3) {
        ErrorMsg('Hubo un problema', 'Debe marcar al menos 3 ingredientes principales');
        err = false;
    } else if (checksMarcados > 4) {
        ErrorMsg('Hubo un problema', 'No puede superar la cantidad de 4 ingredientes principales');
        err = false;
    }
    return err;
};

btnSubmit.addEventListener('click', getData);