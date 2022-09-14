function ErrorMsg(title, msg) {
    Swal.fire({
        icon: 'error',
        title: title,
        text: msg,
        confirmButtonText: 'Ok'
    });
};

function successMsg(title, msg) {
    Swal.fire({
        icon: 'success',
        title: title,
        text: msg,
        confirmButtonText: 'Ok'
    });
};
function alertMsg(title) {
    Swal.fire({
        icon: 'info',
        title: title,
        text: 'Lo invitamos a registrar un producto',
        footer: '<a href="registroProducto.html">Registrar aquí</a>',
        confirmButtonText: 'Ok'
    });
};
function showError(idElement) {

    idElement.classList.add('error');

    setTimeout(function () {
        idElement.classList.remove('error');
    }, 4000);
};

let apiUrl = 'http://localhost:3000/api';