let acum = 0;
let acum2 = 0;
let array = [];
let currentIndex = 0;

function ficho() {
  let fragment = document.createDocumentFragment(); // Declaración de fragment
  acum += 1;
  acum2 = acum + 1;
  let lista = document.getElementsByClassName("ficho3")[0];
  lista.textContent = acum2;

  array.push({ span: "" }); // Añadir nuevo turno al final de la lista

  let item = array[array.length - 1]; // Obtener el último elemento agregado

  let tr = document.createElement("tr");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  let button = document.createElement("button");
  let button2 = document.createElement("button");

  td2.appendChild(button);
  td3.appendChild(button2);
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);

  button.textContent = "aceptar";
  button2.textContent = "cerrar";

   button.style.background= "#7fffd4"
   button2.style.background= "#ff6f61"
   
  td1.textContent = array.length;
  fragment.appendChild(tr);

  button.addEventListener("click", function () {
      tr.style.backgroundColor = "green";
  });
  
  button2.addEventListener("click", function () {
      tr.style.backgroundColor = "red";
  });

  document.getElementById("tabla").appendChild(fragment);
  actualizarFicho();
  
}


function fichoAnterior() {
    if (currentIndex > 0) {
        currentIndex--;
        actualizarFicho();
    }
}

function fichoSiguiente() {
    if (currentIndex < array.length - 1) {
        currentIndex++;
        actualizarFicho();
    }
}

function actualizarFicho() {
    let fichoElement = document.getElementById("ficho2");
    fichoElement.textContent = currentIndex + 1;
}

function reiniciarPagina() {
    location.reload();
}