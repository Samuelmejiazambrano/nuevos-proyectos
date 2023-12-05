

let op = null;
let estadoActual = null; 

function formulario() {
  let formulario2 = document.getElementById("formulario");
  document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault();  
    agregarCita();
   
  });
  formulario2.style.top = "10%";
  formulario2.style.display = "block";
  formulario2.style.display = "flex";
  formulario2.style.flexDirection = "column";
  limpiarFormulario();
}

function cerrar() {
  let formulario2 = document.getElementById("formulario");
  formulario2.style.top = "-200%";
}

let citas = [];

function agregarCita() {
  let nombreMascota = document.getElementById("nombreMascota").value;
  let nombrePropietario = document.getElementById("nombrePropietario").value;
  let telefono = document.getElementById("telefono").value;
  let tipoAnimal = document.getElementById("tipoAnimal").value;
  let fechaCita = document.getElementById("fechaCita").value;
  let horaCita = document.getElementById("horaCita").value;
  let sintomas = document.getElementById("sintomas").value;
  let fecha = new Date(fechaCita);
  let fechaActual = new Date();
  let validarHora = parseInt(horaCita.split(":")[0], 10);
  let validarMinutos = parseInt(horaCita.split(":")[1], 10);

  if (nombreMascota === "") {
    Swal.fire({
      title: "Error",
      text: "Ingrese el nombre de su mascota",
    });
  } else if (nombrePropietario === "") {
    Swal.fire({
      title: "Error",
      text: "Ingrese el nombre del propietario",
    });
  } else if (telefono.length < 10  ) {
    Swal.fire({
      title: "Error",
      text: "cantidad de numeros mayor a 10 digitos"
    });
  }else if (telefono.length > 10) {
    Swal.fire({
      title: "Error",
      text: "cantidad de numeros igual a 10 digitos"
    });}
  else if(telefono===""){
    Swal.fire({
      title: "Error",
      text: "Ingrese el número de teléfono",
    });

  } else if (fecha < fechaActual.setHours(0, 0, 0, 0) || fechaCita === "") {
    Swal.fire({
      title: "Error",
      text: "Fecha seleccionada inválida ",
    });
  } else if (validarHora < 8 || validarHora > 19 || validarMinutos < 0 || validarMinutos > 45) {
    Swal.fire({
      title: "Error",
      text: "Hora inválida, Horario de atencion de 8.am  a 7.pm",
    });
    return;
  } else if(sintomas==""){
    
    Swal.fire({
      title: "Error",
      text: "Ingrese los Sintomas de su Mascota",
    });
  }else {
    let nuevaCita = {
      nombreMascota: nombreMascota,
      nombrePropietario: nombrePropietario,
      telefono: telefono,
      tipoAnimal: tipoAnimal,
      fechaCita: fechaCita,
      horaCita: horaCita,
      sintomas: sintomas,
      estado:op? estadoActual:"abierta"
    };

    citas.push(nuevaCita);

    console.log(citas);
    cards(citas);
    filtrarCitas();
    limpiarFormulario();
  }
}

function limpiarFormulario() {
  document.getElementById("formulario").reset();
}

let citasFiltradas = [];



function cards(filtrar) {
  let cardContainer = document.getElementById("card");

  cardContainer.innerHTML = "";

  filtrar.forEach((item) => {
    let div = document.createElement("div");

    let buttonsContainer = document.createElement("div");
    let img = document.createElement("img");
    let p1 = document.createElement("p");
    p1.classList.add("cardp")
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let p4 = document.createElement("p");
    let p5 = document.createElement("p");
    let p6 = document.createElement("p");
    let p7 = document.createElement("p");
    let select = document.createElement("select");
    select.classList.add("selector");
    select.addEventListener("change", (event) => {
      accionCita(item, event.target.value);
    });
    select.value = item.estado; 
    let option1 = document.createElement("option");
   
    let option2 = document.createElement("option");
    let option3 = document.createElement("option");
    let button2 = document.createElement("button");

    let nombreMascota = item.nombreMascota;
    let nombrePropietario = item.nombrePropietario;
    let telefono = item.telefono;
    let tipoAnimal = item.tipoAnimal;
    let fechaCita = item.fechaCita;
    let horaCita = item.horaCita;
    let sintomas = item.sintomas;
    p1.textContent = nombreMascota;
    p2.textContent = "Propietario:" + nombrePropietario ;
    p3.textContent = "Telefono:" + telefono;
    p4.textContent = "TipoAnimal:" + tipoAnimal;
    p5.textContent = "Cita:" + fechaCita;
    p6.textContent = "Hora Cita:" + horaCita;
    p7.textContent = "Sintomas:" + sintomas;
    option1.value = "abierta";
    option1.textContent = "abierta";
 
    option2.textContent = "terminar";
    
    option3.textContent = "anular";
  
    button2.textContent = "editar";
    button2.addEventListener("click", () => {
      edita(item);
    });
    img.src = "perro.jpg";

    if (tipoAnimal === "perro") {
      img.src = "perro.jpg";
    } else if (tipoAnimal === "gato") {
      img.src = "gato.jpeg";
    } else if (tipoAnimal === "conejo") {
      img.src = "conejo.jpg";
    } else if (tipoAnimal === "serpiente") {
      img.src = "serpiente.jpg";
    } else if (tipoAnimal === "araña") {
      img.src = "arana.jpg";
    } else if (tipoAnimal === "pez") {
      img.src = "pez.jpg";
    } else {}


    if (item.estado === "abierta") {
      option1.selected = true;
    } 
    else if (item.estado === "terminada") {
      option2.selected = true;
    } else if (item.estado === "anulada") {
      option3.selected = true;
    }
    div.appendChild(img);
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    div.appendChild(p4);
    div.appendChild(p5);
    div.appendChild(p6);
    div.appendChild(p7);
    div.appendChild(button2);
    
    select.appendChild(option1);
    select.appendChild(option2);
    select.appendChild(option3);

    div.appendChild(select);
    div.appendChild(buttonsContainer);

    cardContainer.appendChild(div);
  });
  console.log(citas);
}


function filtrarCitas() {
  let estadoSeleccionado = document.querySelector('input[name="estado"]:checked');

  if (estadoSeleccionado) {
    let estado = estadoSeleccionado.value;
    let citasFiltradas = [];

    if (estado === "abierta") {
      citasFiltradas = citas.filter((cita) => cita.estado == "abierta");
    } else if (estado === "terminada") {
      citasFiltradas = citas.filter((cita) => cita.estado === "terminada");
    } else if (estado === "anulada") {
      citasFiltradas = citas.filter((cita) => cita.estado === "anulada");
    }

    cards(citasFiltradas);
  } else console.log("hola");
}

function accionCita(item, accion) {
  if (accion === "anular") {
    item.estado = "anulada";
  } else if (accion === "terminar") {
    item.estado = "terminada";
  } else if (accion === "abierta") {
    item.estado = "abierta";
  }
  
  cards(citasFiltradas);
  filtrarCitas()
  
}

function edita(item) {
  estadoActual = item.estado;
  op = true;

  document.getElementById("nombreMascota").value = item.nombreMascota;
  document.getElementById("nombrePropietario").value = item.nombrePropietario;
  document.getElementById("telefono").value = item.telefono;
  document.getElementById("tipoAnimal").value = item.tipoAnimal;
  document.getElementById("fechaCita").value = item.fechaCita;
  document.getElementById("horaCita").value = item.horaCita;
  document.getElementById("sintomas").value = item.sintomas;

  let formulario2 = document.getElementById("formulario");
  formulario2.style.top = "10%";
  formulario2.style.display = "block";
  formulario2.style.display = "flex";
  formulario2.style.flexDirection = "column";
    citas = citas.filter((c) => c !== item);
    if (index !== -1) {
      citas[index].estado = estadoActual;
    }
  
    cards(citas);
  
}


