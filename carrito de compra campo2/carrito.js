let productos = [
  {
    id: 1,
    nombre: "Motosierra",
    precio: 1200000,
    img: "./MOTOSIERRA_HUSQVARNA.webp",
    imga:"./estrella3.png"
  },
  {
    id: 2,
    nombre: "Tractores",
    precio: 200000000,
    img: "./tractor.jpeg",
    imga:"./estrella3.png"
  },
  {
    id: 3,
    nombre: "Guadañas",
    precio: 2000000,
    img: "D_NQ_NP_899405-MCO70543065379_072023-O.webp",
    imga:"./estrella3.png"
  },
  {
    id: 4,
    nombre: "Aradoras",
    precio: 150000000,
    img: "./aradora.jpg",
    imga:"./estrella3.png"
  },
  {
    id: 5,
    nombre: "Pala jardinera cuadrada",
    precio: 100000,
    img: "./palawe_500x.webp",
    imga:"./estrella3.png"
  },
  {
    id: 6,
    nombre: "Machete barrigón",
    precio: 20000,
    img: "./machete_23094e80-e6dc-4679-b583-8eb6d600625b_500x.webp",
    imga:"./estrella3.png"
  },
  {
    id: 7,
    nombre: "Bota Macha ALta Talla 37",
    precio: 50000,
    img: "./bota.webp",
    imga:"./estrella3.png"
  },
  {
    id: 8,
    nombre: "Alambre de púas calibre 16,5",
    precio: 200000,
    img: "./Alambredepuas16.5ymedio400m_600x.webp",
    imga:"./estrella3.png"
  },
  {
    id: 9,
    nombre: "Fumigadora Integra 20 Lt",
    precio: 318100,
    img: "./fumigadora2.jpg",
    imga:"./estrella3.png"
  },
  {
    id: 10,
    nombre: "Polisombra 80%",
    precio: 10700,
    img: "./polisombra_2_2_74832ad0-f76e-460f-b37f-5ae58a9dca19_600x.webp",
    imga:"./estrella3.png"
  },
  {
    id: 11,
    nombre: "Paladraga Herragro",
    precio: 50000,
    img: "./PALADRAGA3-760x1000_600x.webp",
    imga:"./estrella3.png"
  },
  {
    id: 12,
    nombre: "Tanque cónico x 250 Lt",
    precio: 200000,
    img: "./tanque-250lt_6a20438b-a802-4967-8a99-01ad27f99579_600x.webp",
    imga:"./estrella3.png"
  },
];
let cabeza = [
  {
    nombre: "Agrocampo",
    img1: "./logo.jpeg",
    img2: "./icono-carrito-compras-rapido_414847-513.avif",
    span: ""
  },
];
let subtotal;
let cant;
let total = 0;

let productosEnCarrito = [];
document.addEventListener("DOMContentLoaded", () => {
  pintar();
  pintar_tabla();
});

function formatearMoneda(numero) {
  return numero.toLocaleString("es-ES", {
    style: "currency",
    currency: "USD",
  });
}
function pintar() {
  let fragment = document.createDocumentFragment();

  cabeza.forEach((item, index) => {
    let div2 = document.createElement("div");
    div2.classList.add("cabecera2");
    let img2 = document.createElement("img");
    img2.src = item.img1;
    img2.classList.add("img2");
 
    
    let p2 = document.createElement("p");
    p2.textContent = item.nombre;
    let img3 = document.createElement("button");
    img3.addEventListener("click", () => {
          mostrar_tabla()
    });

    img3.src = item.img2;
    let Span = document.createElement("span");
    Span.textContent = item.span;  
      img3.classList.add("img3");
    Span.id = "cantidadCarritoSpan";
    
    div2.appendChild(img2);
    div2.appendChild(p2);
    div2.appendChild(img3);
    div2.appendChild(Span)
    fragment.appendChild(div2);
  
  });
  document.getElementById("cabecera").appendChild(fragment);
  document.getElementById("cantidadCarritoSpan").textContent = productosEnCarrito.length;
  
  productos.forEach((item, index) => {
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.src = item.img;
    let img2 = document.createElement("img");
    img2.src=item.imga
    img2.classList.add("imga");
    img2.style.width="50%"
    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    let button = document.createElement("button");
    h2.textContent = item.nombre;
    button.textContent = "agregar al carrito";
    button.addEventListener("click", () => {
      agregarAlCarrito(item);
      pintar_tabla();
    });
    p.textContent = formatearMoneda(item.precio);
    div.appendChild(img);
    div.appendChild(img2);

    div.appendChild(h2);
    div.appendChild(p);
    div.appendChild(button);
    fragment.appendChild(div);
  });

  document.getElementById("card").appendChild(fragment);
  
}

function agregarAlCarrito(producto) {
  const productoEnCarrito = productosEnCarrito.find(
    (p) => p.producto.id === producto.id
  );

  if (productoEnCarrito) {
    productoEnCarrito.cantidad += 1;
  } else {
    productosEnCarrito.push({ producto, cantidad: 1 });
  }

  console.log("Este es el carrito actual:", productosEnCarrito);
  pintar_tabla();
}



function pintar_tabla() {
  let tbody = document.querySelector("#tabla");
  let frag = document.createDocumentFragment();

  tbody.innerHTML = "";

 
  document.getElementById("cantidadCarritoSpan").textContent = productosEnCarrito.length;

  productosEnCarrito.forEach((item, i) => {
    let cant = item.cantidad;
    let precio = item.producto.precio;
    let subtotal = precio * cant;
    
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let td6 = document.createElement("td");

    td1.textContent = item.producto.nombre;
    td2.textContent = formatearMoneda(item.producto.precio);
    td3.textContent = item.cantidad;
    td4.textContent = subtotal;
    let img = document.createElement("img");
    img.src = item.producto.img;
    img.alt = item.producto.nombre;
    img.style.width = "50px";

    td5.appendChild(img);
     
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
   
    let eliminar = document.createElement("button");

    eliminar.textContent = "❌";
    eliminar.addEventListener("click", () => {
      borrar(i, item);
    });
    td6.appendChild(eliminar);
    frag.appendChild(tr);
  });

  tbody.appendChild(frag);

  if (productosEnCarrito.length > 0) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let td6 = document.createElement("td");

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);

    td1.textContent = "Total";
    td1.classList.add("total");
    td2.textContent = formatearMoneda(calcularTotal());
    let eliminar2 = document.createElement("button");
    eliminar2.addEventListener("click", () => {
      vaciar();
    });
    eliminar2.textContent = "vaciar";
    td6.appendChild(eliminar2);

    td2.classList.add("total2");
    frag.appendChild(tr);
  }

  document.getElementById("tabla").appendChild(frag);
}


function borrar(i) {
  const index = i;
  const productoEnCarrito = productosEnCarrito[index];

  productoEnCarrito.cantidad -= 1;


  if (productoEnCarrito.cantidad <= 0) {
    productosEnCarrito.splice(index, 1);
  }

  document.getElementById("tabla").innerHTML = "";
  pintar_tabla();
}


function calcularTotal() {
  let total = 0;
  productosEnCarrito.forEach((item) => {
    total += item.producto.precio * item.cantidad;
  });
  return total;
}

function mostrar_tabla() {
  
     let tabla2=document.getElementById("oculto");
     let  caja=document.getElementById("caja2")
     let  contenido=document.getElementById("card")
     let contenido2=document.getElementById("contenido")
     let  footer=document.getElementById("footer")
 
     let h1=document.getElementById("h1")
     let atencion=document.getElementById("atencion")
     let contenedor = document.getElementById("contenedor");
     let cerrar= document.getElementById("cerrar");
     let imagen=document.getElementsByClassName("img3")
     
    
     if (productosEnCarrito.length>0) {
      
               tabla2.style.display="block"
               caja.style.display="none"
           
               contenido.style.display="none"
               contenido2.style.display="block"
               footer.style.position = "relative";
               footer.style.bottom = "0";
              //  footer.style.display = "hidden";
               tabla2.style.position="relative"
                // caja2.style.height="100px"
                h1.style.display="none"
             
                contenedor.style.gridTemplateRows = "300px 60% 360px";
                 cerrar.style.display="block"
                 if (window.innerWidth < 1200) {
                  contenedor.style.display="grid";
                  contenedor.style.gridTemplateRows= "350px 70% 760px";
                }
     }else if(productosEnCarrito.length==0 ){
         
      Swal.fire({
        title: "Error",
        text: "No hay productos anadidos",
      });
      cerrar()
      tabla2.style.display="none"
     }
}
function cerrar() {
   
            
  let contenedor = document.getElementById("contenedor");
  let tabla2=document.getElementById("oculto");
  let  caja=document.getElementById("caja2")
  let h1=document.getElementById("h1")
  let contenido2=document.getElementById("contenido")
  let  contenido=document.getElementById("card")
  let  input=document.getElementById("input")
  let cerrar= document.getElementById("cerrar");
  
  

  tabla2.style.display="none"
  caja.style.display="block"
    
  contenedor.style.display="grid";
  contenedor.style.gridTemplateRows= " 10% 20% 80%   15%";
  h1.style.display="block"
  contenido2.style.display="block"
  contenido.style.display="block"
  contenido.style.display="grid"

  cerrar.style.display="none"
   h1.style.display= "flex";
   h1.style.justifyContent= "center";
   h1.style.alignItems= "center";
   input.style.height= "30%";
   input.style.position="relative";
   input.style.top="30%"
   input.style.alignItems= "center";
  
   
   if (window.innerWidth < 1200) {
    contenedor.style.display="grid";
    contenedor.style.gridTemplateRows= "5% 10% 130%  20%"  ;
  }  if (window.innerWidth < 1000){
    contenedor.style.display="grid";
    contenedor.style.gridTemplateRows= " 10% 10% 120%  15%"  ;
    footer.style.margintop="22px"
  
  }
  if (window.innerWidth < 700){
    contenedor.style.display="grid";
    contenedor.style.gridTemplateRows= " 10% 10% 162%  18%"  ;
    contenedor.style.width="100%";
    contenido2.style.height="60%"
     input.style.height="20%"
     contenido2.style.display="flex";
     contenido2.style.flexDirection="column";
     contenido2.style.justifyContent="center";
     contenido2.style.alignItems="center";
     footer.style.margintop="32px"
          
     document.getElementById("card").style.position="relative"
     document.getElementById("card").style.Right="10vh"
    //  document.getElementById("card").style.width="100%"
    //  contenido2.style.alignItems="center"
    //  contenido2.style.justifyContent="center"
   
     
    
  }
}

function vaciar() {
  
  productosEnCarrito.splice(0,productosEnCarrito.length)
  pintar_tabla();

}
