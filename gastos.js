let gastos = [];
let presupuestoInicial = 0;
let gastos_totales = 0;
let porcentaje;

function alerta() {
  let alertaDiv = document.getElementById("alerta");
  presupuestoInicial = parseInt(document.getElementById("alertainput").value);

  if (!isNaN(presupuestoInicial) && presupuestoInicial > 0) {
    alertaDiv.style.visibility = "hidden";
    alertaDiv.style.height = "0";
    document.getElementById("btn").disabled = false;
    gastos_totales = presupuestoInicial; // Inicializamos gastos_totales con el presupuesto inicial
    console.log("Presupuesto añadido");
  } else {
    console.log("Presupuesto no válido");
    Swal.fire({
      title: "Error",
      text: "Ingrese un presupuesto válido",
    });
    document.getElementById("btn").disabled = true;
    document.getElementById("alertainput").value = "";
  }

  document.getElementById("presupuesto").textContent = `Presupuesto: ${formatearMoneda(presupuestoInicial)}`;
}

function opciones() {
  let cantidad = parseInt(document.getElementById("cantidad").value);
  let nombre = document.getElementById("nombre").value;

  gastos.push({ nombre, cantidad });
  console.log(gastos);

  if (nombre === "" || isNaN(cantidad) || cantidad <= 0) {
    Swal.fire({
      title: "Error",
      text: "Ingrese un nombre y una cantidad válida",
    });
    document.getElementById("btn").disabled = true;
  } else {
    gastos_totales -= cantidad;
    console.log(gastos_totales);

    pintar();
   

    document.getElementById("restante").textContent = `Restante: ${formatearMoneda(gastos_totales)}`;

    if (gastos_totales <= porcentaje) {
      document.getElementById("restante").style.backgroundColor = "rgb(218, 23, 23)";
      console.log("Este es el porcentaje" + porcentaje);
    } else {
      document.getElementById("restante").style.backgroundColor = "#5a88de";
      document.getElementById("btn").disabled = false;
      
    }
  }
}

function pintar() {
  let nuevoTotalGastos = gastos.reduce((total, gasto) => total + gasto.cantidad, 0);
  porcentaje = presupuestoInicial * 0.2;
  let retroceso = presupuestoInicial - nuevoTotalGastos;

  document.getElementById("restante").textContent = formatearMoneda(retroceso);

  let frag = document.createDocumentFragment();
  let tabla = document.getElementById("tabla");
  tabla.innerHTML = "";

  gastos.forEach((item, index) => {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let eliminar = document.createElement("button");

    eliminar.textContent = "❌";
    eliminar.addEventListener("click", () => {
      borrar(index, item);
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
  });

  tabla.appendChild(frag);
  document.getElementById("nombre").value="";
  parseInt(  document.getElementById("cantidad").value="");

}

function borrar(index, item) {
  let gastoEliminado = gastos[index].cantidad;
  gastos.splice(index, 1);
  pintar();
  gastos_totales = presupuestoInicial - gastos.reduce((total, gasto) => total + gasto.cantidad, 0);
  document.getElementById("restante").textContent = `Restante: ${formatearMoneda(gastos_totales)}`;

  if (gastos_totales <= porcentaje) {
    document.getElementById("restante").style.backgroundColor = "rgb(218, 23, 23)";
    console.log("Este es el porcentaje" + porcentaje);
  } else {
    document.getElementById("restante").style.backgroundColor = "#5a88de";
  }
}

function formatearMoneda(numero) {
  return numero.toLocaleString("es-ES", {
    style: "currency",
    currency: "USD",
  });
}
