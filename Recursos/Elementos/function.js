$(document).ready(function () {
    obtenerDatos();
});
function obtenerDatos() {
    $.ajax('https://62aa6be43b31438554472332.mockapi.io/cocktails', {
        type: 'GET',  // http method
        success: function (data) {
            for (var indice = 0; indice < data.length; indice++) {
                var id = data[indice].id
                var coctel = data[indice].coctel
                var ingredientes = data[indice].ingredientes
                var precio = data[indice].precio
                var filaTAbla = '<tr>'
                    + '<td class="prc-25">' + id + '</td>'
                    + '<td class="prc-25">' + coctel + '</td>'
                    + '<td class="prc-25">' + ingredientes + '</td>'
                    + '<td class="prc-25">' + precio + ' CLP' + '</td>'
                '</tr>'
                console.log(filaTAbla)
                $("#tabla-cocteles").append(filaTAbla)
            }
        },
        error: function (textStatus, errorMessage) {
            alert("No me pude conectar a la api: error" + errorMessage + " estado:" + textStatus)
        }
    });
}
function validarDatos() {
    nombre = document.getElementById("nombre").value
    apellido = document.getElementById("apellido").value
    email = document.getElementById("email").value
    edad = document.getElementById("edad").value
    calle = document.getElementById("calle").value
    numero = document.getElementById("numero").value
    comuna = document.getElementById("comuna").value
    region = document.getElementById("region").value
    mensaje = "Nombre:" + nombre + "Apellido:" + apellido + "Email:" + email + "Edad:" + edad + "Calle:" + calle + "Numero:" + numero + "Comuna:" + comuna + "Region:" + region


    if (nombre.length < 3) {
        document.getElementById("errorNombre").style.display = "block"
    } else {
        document.getElementById("errorNombre").style.display = "none"
    }
    if (apellido.length < 3) {
        document.getElementById("errorApellido").style.display = "block"
    } else {
        document.getElementById("errorApellido").style.display = "none"
    }
    if (edad < 18) {
        document.getElementById("errorEdad").style.display = "block"
    } else {
        document.getElementById("errorEdad").style.display = "none"
    }
    if (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(email)) {
        document.getElementById("errorEmail").style.display = "none"
    } else {
        document.getElementById("errorEmail").style.display = "block"
    }
}