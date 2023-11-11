let productos = [
  
    {
      id: 1,
      nombre: "Motosierra",
      precio: 1200000,
      img: "./MOTOSIERRA_HUSQVARNA.webp"
    },
    {
      id: 2,
      nombre: "Tractores",
      precio: 200000000,
      img: "./tractor.jpeg"
    },
    {
      id: 3,
      nombre: "Guadañas",
      precio: 2000000,
      img: "D_NQ_NP_899405-MCO70543065379_072023-O.webp"
    },
    {
      id: 4,
      nombre: "Aradoras",
      precio: 150000000,
      img: "./aradora.jpeg"
    },
    {
      id: 5,
      nombre: "Pala jardinera cuadrada",
      precio: 100000,
      img: "./palawe_500x.webp"
    },
    {
      id: 6,
      nombre: "Machete barrigón",
      precio: 20000,
      img: "./machete_23094e80-e6dc-4679-b583-8eb6d600625b_500x.webp"
    },
    {
      id: 7,
      nombre: "Bota Macha ALta Talla 37",
      precio: 50000,
      img: "./bota.webp"
    },
    {
      id: 8,
      nombre: "Alambre de púas calibre 16,5",
      precio: 200000,
      img: "./Alambredepuas16.5ymedio400m_600x.webp"
    },
    {
      id: 9,
      nombre: "Fumigadora Integra 20 Lt",
      precio: 318100,
      img: "./royal_condor-removebg-preview_2542344d-1bba-4b30-90ea-2feb62c6d33c_500x.webp"
    },
    {
      id: 10,
      nombre: "Polisombra 80%",
      precio: 10700,
      img: "./polisombra_2_2_74832ad0-f76e-460f-b37f-5ae58a9dca19_600x.webp"
    },
    {
      id: 11,
      nombre: "Paladraga Herragro",
      precio: 50000,
      img: "./PALADRAGA3-760x1000_600x.webp"
    },
    {
      id: 12,
      nombre: "Tanque cónico x 250 Lt",
      precio: 200000,
      img: "./tanque-250lt_6a20438b-a802-4967-8a99-01ad27f99579_600x.webp"
    }
  ];
  let cabeza=[

      {

         nombre:"Agrocampo",img1:"./logo.jpeg",img2:"./icono-carrito-compras-rapido_414847-513.avif"
      }
  ]
 let productosEnCarrito=[];
  document.addEventListener("DOMContentLoaded",()=>{
    pintar()
})

function formatearMoneda(numero) {
  return numero.toLocaleString("es-ES", {
    style: "currency",
    currency: "USD",
  });
}
function pintar(params) {
  let fragment = document.createDocumentFragment();
  
  cabeza.forEach((item, index) => {
     let div2=document.createElement("div")
     div2.classList.add("cabecera2")
     let img2=document.createElement("img")
     img2.src=item.img1;
     img2.classList.add("img2")
     let p2=document.createElement("p");
     p2.textContent=item.nombre
     let img3=document.createElement("img")
     img3.src=item.img2;
     div2.appendChild(img2);
     div2.appendChild(p2);
     div2.appendChild(img3)
     fragment.appendChild(div2)
    })
     document.getElementById("cabecera").appendChild(fragment)


    productos.forEach((item, index) => {
        
     let div=document.createElement("div");
   
     let img=document.createElement("img");
     img.src=item.img;
     let h2=document.createElement("h2")
     let p=document.createElement("p");
     let button = document.createElement("button")
     h2.textContent=item.nombre
                button.textContent = "agregar al carrito"
                button.addEventListener("click",()=>{
                    agregarAlCarrito(item)
                    pintar_tabla()
                    
                    
                })
                p.textContent =formatearMoneda(item.precio)
                div.appendChild(img)
                div.appendChild(h2)
                div.appendChild(p)
                div.appendChild(button)
                fragment.appendChild(div)

            })

            document.getElementById("card").appendChild(fragment)
        }




        function agregarAlCarrito(producto) {
      
          let productoExistente = productosEnCarrito.find((p) => p.producto.id === producto.id);
      
          if (productoExistente) {
            
              productoExistente.cantidad += 1;
          } else {
     
              productosEnCarrito.push({ producto, cantidad: 1 });
          }
      
          
          console.log("Este es el carrito actual:", productosEnCarrito);
          pintar_tabla()
      }
      

      function pintar_tabla() {
        let tbody = document.querySelector("#tabla");
        let frag = document.createDocumentFragment();
        tbody.innerHTML = "";
       
        productosEnCarrito.forEach((item) => {
          let tr = document.createElement("tr");
          let td1 = document.createElement("td");
          let td2 = document.createElement("td");
          let td3 = document.createElement("td");
          let td4 = document.createElement("td");
         
      
          td1.textContent = item.producto.nombre;
          td2.textContent = formatearMoneda(item.producto.precio);
          td3.textContent = item.cantidad;
          let img = document.createElement("img");
          img.src = item.producto.img;
          img.alt = item.producto.nombre;
          img.style.width = "50px";
         
          td4.appendChild(img);
          
          tr.appendChild(td1);
          tr.appendChild(td2);
          tr.appendChild(td3);
          tr.appendChild(td4);
        
          frag.appendChild(tr);
        });
        tbody.appendChild(frag);
        document.getElementById("tabla").appendChild(frag);
     
      }
