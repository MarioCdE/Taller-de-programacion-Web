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
function llamarMensaje() {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
        title: 'Deseas ir a la pagina de contacto?',
        text: "En caso de no querer realizar la accion presionar cancelar!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, redirigeme!',
        cancelButtonText: 'No, Cancelar!',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            var url = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
            $(location).attr('href', url);
        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire(
                'Cancelled',
                'Your imaginary file is safe :)',
                'error'
            )
        }
    })
}