let datos = [];
let op = null;
let indice = null;
function registro(params) {
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let documento = document.getElementById("documento").value;
  let telefono = document.getElementById("telefono").value;
  let email = document.getElementById("email").value;
  let fecha = document.getElementById("fecha").value;
  let tipo_documento = document.getElementById("tipo").value;
  let genero = document.querySelector('input[name="genero"]:checked').id;

  if (op === true) {
    datos[indice] = {
      nombre: nombre,
      apellido: apellido,
      genero: genero,
      tipo_documento: tipo_documento,
      documento: documento,
      fecha: fecha,
      email: email,
      telefono: telefono,
    };
  } else {
    datos.push({
      nombre,
      apellido,
      genero,
      tipo_documento,
      documento,
      fecha,
      email,
      telefono,
    });
  }

  console.log(datos);
}
function validar() {
  let email = document.getElementById("email").value;
  let telefono = document.getElementById("telefono").value;
  let documento = document.getElementById("documento").value;
  let fecha = document.getElementById("fecha").value;
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;

  let texto = /^[A-Za-z]+$/;
  let valido1 = texto.test(nombre);
  let texto2 = /^[A-Za-z]+$/;
  let valido2 = texto.test(apellido);
  let correo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let valido = correo.test(email);
  let fechaNace = new Date(fecha);
  let fechaActual = new Date();

  let mes = fechaActual.getMonth();
  let dia = fechaActual.getDate();
  let año = fechaActual.getFullYear();
  fechaActual.setDate(dia);
  fechaActual.setMonth(mes);
  fechaActual.setFullYear(año);
  let diferencia = fechaActual - fechaNace;
  edad = Math.floor(diferencia / (1000 * 60 * 60 * 24) / 365);

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
  } else if (apellido == "") {
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
  } else if (documento.length < 9) {
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
    document.getElementById("alerta6").textContent =
      "eres menor de edad no puedes registrarte";
    alerta6.style.display = "block";
    setTimeout(() => {
      alerta6.style.display = "none";
    }, 2000);
  } else if (fecha == "") {
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

    document.getElementById("tabla").innerHTML = "";
    pintar();
    op = false;

    document.getElementById("nombre").value="";
    document.getElementById("apellido").value="";
    document.getElementById("documento").value="";
    document.getElementById("telefono").value="";
    document.getElementById("email").value="";
    document.getElementById("fecha").value="";
    document.getElementById("tipo").value="";
  
  }
}

function pintar() {
  let frag = document.createDocumentFragment();

  datos.forEach((item, index) => {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let td6 = document.createElement("td");
    let td7 = document.createElement("td");
    let td8 = document.createElement("td");
    let td9 = document.createElement("td");

    let editar = document.createElement("button");

    let eliminar = document.createElement("button");
    editar.textContent = "📝";
    editar.textContent = "📝";
    editar.addEventListener("click", () => {
      edita(item, index);
    });

    eliminar.textContent = "❌";
    eliminar.addEventListener("click", () => {
      borrar(index);
    });
    td1.textContent = item.nombre;
    td2.textContent = item.apellido;
    td3.textContent = item.genero;
    td4.textContent = item.tipo_documento;
    td5.textContent = item.documento;
    td6.textContent = item.email;
    td7.textContent = item.fecha;
    td8.textContent = item.telefono;
    td9.appendChild(editar);
    td9.appendChild(eliminar);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tr.appendChild(td7);
    tr.appendChild(td8);
    tr.appendChild(td9);

    frag.appendChild(tr);
    document.getElementById("tabla").appendChild(frag);
  });
}

function edita(item, index) {
  op = true;
  indice = index;
  console.log(item);
  document.getElementById("nombre").value = item.nombre;
  document.getElementById("apellido").value = item.apellido;
  document.getElementById("documento").value = item.documento;
  document.getElementById("telefono").value = item.telefono;
  document.getElementById("email").value = item.email;
  document.getElementById("fecha").value = item.fecha;
  document.getElementById("tipo").value = item.tipo_documento;
  document.getElementById(item.genero).checked = true;
}

function borrar(i) {
  index = i;
  datos.splice(index, 1);
  document.getElementById("tabla").innerHTML = "";
  pintar();
}
