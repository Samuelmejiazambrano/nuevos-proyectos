function formulario() {
  let formulario2 = document.getElementById("formulario");

  formulario2.style.top = "10%";
  formulario2.style.display = "block";
  formulario2.style.display = "flex";
  formulario2.style.flexDirection = " column";
}

function cerrar() {
  let formulario2 = document.getElementById("formulario");

  formulario2.style.top = "-200%";
}
let citas = [];

// 

function agregarCita() {
  let nombreMascota = document.getElementById("nombreMascota").value;
  let nombrePropietario = document.getElementById("nombrePropietario").value;
  let telefono = document.getElementById("telefono").value;
  let tipoAnimal = document.getElementById("tipoAnimal").value;
  let fechaCita = document.getElementById("fechaCita").value;
  let horaCita = document.getElementById("horaCita").value;
  let sintomas = document.getElementById("sintomas").value;

  let nuevaCita = {
    nombreMascota: nombreMascota,
    nombrePropietario: nombrePropietario,
    telefono: telefono,
    tipoAnimal: tipoAnimal,
    fechaCita: fechaCita,
    horaCita: horaCita,
    sintomas: sintomas,
  };

  citas.push(nuevaCita);

  limpiarFormulario();

  console.log(citas);
  cards(citas);
}

function limpiarFormulario() {
  document.getElementById("formulario").reset();
}



let citasFiltradas = [];
function filtrarCitas() {
  let estadoSeleccionado = document.querySelector('input[name="estado"]:checked');

  if (estadoSeleccionado) {
    let estado = estadoSeleccionado.value;
    let citasFiltradas = [];

    if (estado === "abierta") {
      citasFiltradas = citas.filter((cita) => !cita.terminada && !cita.anulada);
    } else if (estado === "terminada") {
      citasFiltradas = citas.filter((cita) => cita.terminada);
    } else if (estado === "anulada") {
      citasFiltradas = citas.filter((cita) => cita.anulada);
    }

    console.log(citasFiltradas);
    cards(citasFiltradas);
  }
}


function cards(filtrar) {
  let tipoAnimal = document.getElementById("tipoAnimal").value;

  let fragment = document.createDocumentFragment();

  document.getElementById("card").innerHTML = "";
 
    filtrar.forEach((item) => {
      let div = document.createElement("div");
      let buttonsContainer = document.createElement("div"); 
   
    
      let img = document.createElement("img");
      let p1 = document.createElement("p");
      let p2 = document.createElement("p");
      let p3 = document.createElement("p");
      let p4 = document.createElement("p");
      let p5 = document.createElement("p");
      let p6 = document.createElement("p");
      let p7 = document.createElement("p");
      
      let button= document.createElement("button");
      let button2= document.createElement("button");
  
      
      let nombreMascota = item.nombreMascota;
      let nombrePropietario = item.nombrePropietario;
      let telefono = item.telefono;
      let tipoAnimal = item.tipoAnimal;
      let fechaCita = item.fechaCita;
      let horaCita = item.horaCita;
      let sintomas = item.sintomas;
      p1.textContent = nombreMascota;
      p2.textContent ="propietario:"+nombrePropietario;
      p3.textContent="telefono:"+ telefono;
      p4.textContent="tipoAnimal:"+tipoAnimal;
      p5.textContent="Cita:"+fechaCita;
      p6.textContent="hora Cita:" + horaCita;
      p7.textContent="sintomas:"+sintomas
      button.textContent="editar"
      button2.textContent="terminada"
      img.src = "perro.jpg";

      if (tipoAnimal === "perro") {
        img.src = "perro.jpg";
      } else if (tipoAnimal === "gato") {
        img.src = "gato.jpeg";
      }  else if (tipoAnimal === "conejo") {
        img.src = "conejo.jpg";
      } else if (tipoAnimal === "serpiente") {
        img.src = "serpiente.jpg";
      } else if (tipoAnimal === "araña") {
        img.src = "arana.jpg";
      } else if (tipoAnimal === "pez") {
        img.src = "pez.jpg";
      }else {
        
      }
  



      div.appendChild(img);
      div.appendChild(p1);
      div.appendChild(p2);
      div.appendChild(p3);
      div.appendChild(p4);
      div.appendChild(p5);
      div.appendChild(p6);
      div.appendChild(p7);
 div.appendChild(buttonsContainer)

      fragment.appendChild(div);
      buttonsContainer.appendChild(button);
      buttonsContainer.appendChild(button2);
      buttonsContainer.classList.add("botones-container");
    });
    document.getElementById("card").appendChild(fragment);
    console.log(citas);

}

