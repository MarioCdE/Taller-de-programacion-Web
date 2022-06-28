
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
    if (edad < 18) {
        document.getElementById("errorEdad").style.display = "block"
    } else {
        document.getElementById("errorEdad").style.display = "none"
    }
}