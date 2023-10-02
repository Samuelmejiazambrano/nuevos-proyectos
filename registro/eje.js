let datos=[]

function registro(params) {
    
    let nombre=document.getElementById("nombre").value;
    let apellido=document.getElementById("apellido").value;
    let documento=document.getElementById("documento").value;
    let telefono=document.getElementById("telefono").value;
    let email=document.getElementById("email").value;
    let fecha=document.getElementById("fecha").value;
    let tipo_documento=document.getElementById("tipo").value;
    let genero = document.querySelector('input[name="genero"]:checked').id;

    
    
    datos.push({nombre,apellido,documento,telefono,email,fecha,tipo_documento,genero});
    console.log(datos);
    
   
}