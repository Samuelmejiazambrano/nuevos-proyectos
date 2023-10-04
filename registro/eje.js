let datos = []

function registro(params) {

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let documento = document.getElementById("documento").value;
    let telefono = document.getElementById("telefono").value;
    let email = document.getElementById("email").value;
    let fecha = document.getElementById("fecha").value;
    let tipo_documento = document.getElementById("tipo").value;
    let genero = document.querySelector('input[name="genero"]:checked').id;



    datos.push({ nombre, apellido, documento, telefono, email, fecha, tipo_documento, genero });
    console.log(datos);


}
function validar() {
    let email = document.getElementById("email").value;
    let telefono = document.getElementById("telefono").value;
    let documento = document.getElementById("documento").value;
    let fecha = document.getElementById("fecha").value;
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;



     let texto=/^[A-Za-z]+$/;
     let valido1=texto.test(nombre);
     let texto2=/^[A-Za-z]+$/;
     let valido2=texto.test(apellido);
    let correo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let valido = correo.test(email);
    let fechaNace = new Date(fecha);
    let fechaActual = new Date()


    let mes = fechaActual.getMonth();
    let dia = fechaActual.getDate();
    let año = fechaActual.getFullYear();
    fechaActual.setDate(dia);
    fechaActual.setMonth(mes);
    fechaActual.setFullYear(año);
    let diferencia = fechaActual - fechaNace;
    edad = Math.floor((diferencia / (1000 * 60 * 60 * 24) / 365))

    if (document.getElementById("nombre").value == "") {

        document.getElementById("alerta").textContent = "ingrese su nombre ";
        alerta.style.display = "block";

        setTimeout(() => {

            alerta.style.display = "none";
        }, 2000);

    } else if (valido1 === false) {

        document.getElementById("alerta").textContent = "ingrese texto ";
        alerta.style.display = "block";
        setTimeout(() => {
            alerta.style.display = "none";
        }, 2000);

    }else if (apellido == "") {

        document.getElementById("alerta2").textContent = "ingrese su apellido";
        alerta2.style.display = "block";

        setTimeout(() => {

            alerta2.style.display = "none";
        }, 2000);
    } else if (valido2 === false) {

        document.getElementById("alerta2").textContent = "ingrese texto ";
        alerta2.style.display = "block";
        setTimeout(() => {
            alerta2.style.display = "none";
        }, 2000);

    }else if (documento.length < 9) {

        document.getElementById("alerta3").textContent = "faltan digitos";
        alerta3.style.display = "block";
        setTimeout(() => {
            alerta3.style.display = "none";
        }, 2000);

    } else if (telefono.length < 10) {

        document.getElementById("alerta4").textContent = "faltan digitos";
        alerta4.style.display = "block";
        setTimeout(() => {
            alerta4.style.display = "none";
        }, 2000);

    } else if (valido == false) {

        document.getElementById("alerta5").textContent = "correo invalido";
        alerta5.style.display = "block";
        setTimeout(() => {
            alerta5.style.display = "none";
        }, 2000);

    } else if (edad < 18) {

        document.getElementById("alerta6").textContent = "eres menor de edad no puedes registrarte";
        alerta6.style.display = "block";
        setTimeout(() => {
            alerta6.style.display = "none";
        }, 2000);

    } else if (fecha== "") {

        document.getElementById("alerta6").textContent = "ingresa fecha";
        alerta6.style.display = "block";
        setTimeout(() => {
            alerta6.style.display = "none";
        }, 2000);

    } else {
        registro();

        document.getElementById("alerta7").textContent = "registrado";
        alerta7.style.display = "block";
        setTimeout(() => {
            alerta7.style.display = "none";
        }, 2000);

    }
    
}


