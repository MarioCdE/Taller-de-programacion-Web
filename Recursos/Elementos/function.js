$(document).ready(function () {
    obtenerDatos();
});
function obtenerDatos() {
    $.ajax('https://62aa6be43b31438554472332.mockapi.io/cocktails', {
        type: 'GET',  // http method
        success: function (data) {
            for (var indice = 0; indice < data.length; indice++) {
                var coctel = data[indice].coctel
                var ingredientes = data[indice].ingredientes
                var precio = data[indice].precio
                var filaTablaC = '<tr>'
                    + '<td>' + coctel + '</td>'
                    + '<td>' + ingredientes + '</td>'
                    + '<td>' + precio + ' CLP' + '</td>'
                '</tr>'
                console.log(filaTablaC)
                $("#tabla-cocteles").append(filaTablaC)
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
    errores = 0
    msjError = ""
    if (nombre.length < 3) {
        document.getElementById("errorNombre").style.display = "block"
        errores++
        msjError = msjError + " largo del nombre debe ser mayor a 3 /"
    } else {
        document.getElementById("errorNombre").style.display = "none"
    }
    if (apellido.length < 3) {
        document.getElementById("errorApellido").style.display = "block"
        errores++
        msjError = msjError + " largo del apellido debe ser mayor a 3 /"
    } else {
        document.getElementById("errorApellido").style.display = "none"
    }
    if (edad < 18) {
        document.getElementById("errorEdad").style.display = "block"
        errores++
        msjError = msjError + " debes ser mayor de 18 años /"
    } else {
        document.getElementById("errorEdad").style.display = "none"
    }
    if (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(email)) {
        document.getElementById("errorEmail").style.display = "none"
    } else {
        document.getElementById("errorEmail").style.display = "block"
        errores++
        msjError = msjError + " ingresar un mail valido /"
    }
    if (errores > 0) {
        document.getElementById("box-send").append("Uno de los campos es invalido")
        Swal.fire({
            icon: 'error',
            title: 'Favor completar campos correctamente ' + '\nErrores: ' + errores,
            text: msjError,

        })
        return false
    }
}
function mayorEdad() {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
        title: 'Eres mayor de edad?',
        text: "si no lo eres preparate para las consecuencias!",
        imageUrl: 'https://www.recreoviral.com/wp-content/uploads/2015/05/Gatos-que-se-sientas-chistosos-7.jpg',
        imageWidth: 400,
        imageHeight: 400,
        imageAlt: 'Gato juzgandote',
        showCancelButton: true,
        confirmButtonText: 'Si soy mayor de edad',
        cancelButtonText: 'No soy mayor de edad',
        reverseButtons: true
    })
        .then((result) => {
            if (result.isConfirmed) {

            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                var url = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
                $(location).attr('href', url);
            }
        })
}