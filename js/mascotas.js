//Muestra las mascotas en adopcion
document.addEventListener('DOMContentLoaded', () => {
    cargarMascotas();
})

const cargarMascotas = () =>{
    fetch('../datos.json')
        .then((res) => res.json())
        .then(mascotas =>{
            mascotas.forEach(mascota =>{
                renderCard(mascota);
                
            })
        })
        .catch((err) => console.log(err))
}





function renderCard(mascota){
  
    let content = `
    <div class="card text-center border-success mb-3 mt-3" style="width: 18rem;" id="tarjetas">
                <img src="${mascota.foto}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${mascota.nombre}</h5>
                <p class="card-text">${mascota.nombre} es un ${mascota.tipoMascota} de tamaño ${mascota.tamañoMascota} y ${mascota.edadMascota}. Rescatado por ${mascota.nombreRefugio}</p>
                <a href="formulario.html" class="btn btn-primary boton" >Adoptar!</a>
            </div>
            </div> 
    
    
    `
  $('.mascotas').append(content);

 
    
  
};


