let gastos = [];
let presupuestoInicial = 0;
let presupuestoRestante = 0;


function alerta() {
  let alertaDiv = document.getElementById("alerta");
  let presupuestoInicial = parseInt(document.getElementById("alertainput").value);

  if (!isNaN(presupuestoInicial) && presupuestoInicial> 0) {
    alertaDiv.style.visibility = "hidden";
    alertaDiv.style.height = "0";
    presupuestoRestante = presupuestoInicial;
    console.log("Presupuesto añadido");
  } else {
    console.log("Presupuesto no válido");
    Swal.fire({
      title: "Error",
      text: "Ingrese el presupuesto",
    });
    document.getElementById("alertainput").value = "";
  }
  document.getElementById(
    "presupuesto"
  ).textContent = `Presupuesto: ${formatearMoneda(presupuestoInicial)}`;
}

function formatearMoneda(numero) {
  return numero.toLocaleString("es-ES", {
    style: "currency",
    currency: "USD",
  });
}
function opciones() {
  let cantidad = parseInt(document.getElementById("cantidad").value);
  let cantidad2 = document.getElementById("cantidad").value;

  let alertaDiv = document.getElementById("alerta");
  let presupuestoInput = parseInt(document.getElementById("alertainput").value);
  let resta = presupuestoInput - cantidad;
  let porcentaje = presupuestoInput * 0.2;

  document.getElementById("restante").textContent = `restante ${formatearMoneda(
    resta
  )}`;
  console.log(resta);

  let nombre = document.getElementById("nombre").value;

  gastos.push({ nombre, cantidad });
  console.log(gastos);
  if (nombre === "" && cantidad2 === "") {
    Swal.fire({
      title: "Error",
      text: "Ingrese el texto y la cantidad",
    });
  } else if (nombre === "") {
    Swal.fire({
      title: "Error",
      text: "Ingrese el texto",
    });
  } else if (cantidad === "") {
    Swal.fire({
      title: "Error",
      text: "Ingrese la cantidad",
    });
  } else {
    
pintar()
  
    if (resta <= 0) {
      let correcto = document.getElementById("correcto");
      correcto.textContent = "correcto";
      correcto.style.display = "block";
      let agotado = document.getElementById("agotado");
      agotado.textContent = "Presupuesto agotado";
      agotado.style.display = "block";
      document.getElementById("btn").disabled = true;
    } else {
      document.getElementById("agotado").textContent = "";
    }

    if (resta <= porcentaje) {
      document.getElementById("restante").style.backgroundColor =
        "rgb(218, 23, 23)";
    } else {
      document.getElementById("restante").style.backgroundColor = "";
    }
  }
 
}



function pintar(params) {
  
  let frag = document.createDocumentFragment();
  document.getElementById("tabla").innerHTML = "";
  gastos.forEach((item, index) => {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let eliminar = document.createElement("button");
    eliminar.textContent = "❌";
    eliminar.addEventListener("click", () => {
      borrar(index);
    });
    td1.classList.add("nombres");
    td2.classList.add("saldo");
    td3.classList.add("enviar");

    td1.textContent = item.nombre;
    td2.textContent = item.cantidad;
    td3.appendChild(eliminar);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    frag.appendChild(tr);
    document.getElementById("tabla").innerHTML = "";
  });
  document.getElementById("tabla").appendChild(frag);

  parseInt((document.getElementById("cantidad").value = ""));
  document.getElementById("nombre").value = "";
  
}



function borrar(index) {
  index = index;
  gastos.splice(index, 1);
  document.getElementById("tabla").innerHTML = "";
   pintar()
   

 
}


