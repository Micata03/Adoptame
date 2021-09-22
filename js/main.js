/*--------------Menu------------*/

((d)=>{
    const $btnMenu = d.querySelector('.menu-btn'),
    $menu = d.querySelector('.menu');

    $btnMenu.addEventListener('click', (e)=>{
        $btnMenu.firstElementChild.classList.toggle("none");
        $btnMenu.lastElementChild.classList.toggle("none");
        $menu.classList.toggle("is-active");


    });
    d.addEventListener('click', e=>{
        if(!e.target.matches(".menu a")) return false;

        $btnMenu.firstElementChild.classList.remove("none");
        $btnMenu.lastElementChild.classList.add("none");
        $menu.classList.remove("is-active");

    })

})(document);


/*-----Cards Mascotas, Muestra las mascotas al cargar la pagina, tomando los datos del Json -----*/



document.addEventListener('DOMContentLoaded', () => {
    consultarJson();
})


function consultarJson(){
    fetch('../datos.json')
        .then(response => response.json())
        .then(datos => mostrarCard(datos))
}

function mostrarCard(datos){
    datos.forEach(dato =>{
        $('#prueba').append(`
        
        <div id="prueba">
                    <div class="card h-100 text-center border-success mb-3" style="width:18rem;" >

                        <img src="${dato.foto}" class="card-img-top" alt="...">
                          
                        <div class="card-body">
                        <h5 class="card-title">${dato.nombre}</h5>
                        <p class="card-text">${dato.nombre} es un ${dato.tipoMascota} de tamaño ${dato.tamañoMascota} y ${dato.edadMascota}. Rescatado por ${dato.nombreRefugio}</p>
                        <a href="formulario.html" class="btn btn-primary boton" >Adoptar!</a>
                    </div>
                    </div>  
                    </div>
                    
                     `)} 

    )};


/****Busqueda de coincidencias********* */
const busqueda = document.querySelector('#btn_buscar');
const divResultado = document.querySelector('#resultado');
const verFormulario = document.querySelector('#btn-enviar');
const id = localStorage;


busqueda.addEventListener('click', (e) =>{
    e.preventDefault();
    obtenerDatosApi()
});

/*verFormulario.addEventListener('click', (e)=>{
    e.preventDefault();
    mostrarFormulario()
});
*/


function obtenerDatosApi(){
    
    fetch('../datos.json')
        .then(respuesta => respuesta.json())
        .then(adoptables => filtrarDatos(adoptables))
}
/*-----Mostrar Coincidencias--------*/
function filtrarDatos(adoptables){
    adoptables.forEach(adoptable =>{               
               
                
        if (adoptable.tipoMascota === document.querySelector('#tipoMascota').value && 
        adoptable.edadMascota === document.querySelector('#edad').value &&
        adoptable.tamañoMascota === document.querySelector('#tipoTamanio').value){
           
         
        $('#resultado').prepend(`
            
            <div class="card text-center border-success mb-3 mt-3" style="width: 18rem;" id="tarjetas">
                <img src="${adoptable.foto}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${adoptable.nombre}</h5>
                <p class="card-text">${adoptable.nombre} es un ${adoptable.tipoMascota} de tamaño ${adoptable.tamañoMascota} y ${adoptable.edadMascota}. Rescatado por ${adoptable.nombreRefugio}</p>
                <a href="formulario.html" class="btn btn-primary boton" >Adoptar!</a>
            </div>
            </div>   `)} 
})
};

/*------------------------------------*/