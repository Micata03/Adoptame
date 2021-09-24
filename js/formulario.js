

const validar = (e) =>{
    e.preventDefault();
    const nombreUsuario = document.querySelector('#nombre');
    const emailUsuario = document.querySelector('#email');
    const resultado = document.querySelector('#resultado');
    

 

 if(nombreUsuario.value === ""){
     resultado.innerHTML = "<span>Debe completar el nombre</span>";

     nombreUsuario.focus()
     return false;


 }

 

 if(emailUsuario.value === ""){
    resultado.innerHTML = "<span> Debe completar el mail </span>";

    emailUsuario.focus()
    return false;


 }
 
 if (!emailValido(emailUsuario.value)){
     resultado.innerHTML ="<span> Debe introducir un mail valido </span>"
    emailUsuario.focus()
    return false;
 
    }
    //Alert main enviado
    /*swal({
        icon: "success",
      });*/
    $('.slide').hide();  
    
    
    swal("Genial!", "Pronto te contactaremos!", "success");
    $('#ok').show();
   
   

};

const emailValido = (email) =>{
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

$("#boton").click(validar);



