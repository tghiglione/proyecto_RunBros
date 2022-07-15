const form=document.querySelector("#formulario");
form.addEventListener("submit",validarForm);

function validarForm(event){
    event.preventDefault();
    const nombre=event.target[0].value;
    const email=event.target[1].value;
    const mensaje=event.target[2].value;
    if((nombre=="" && email=="") || email=="" || mensaje=="" || nombre=="" ||(nombre=="" && mensaje=="")||(mensaje=="" && email=="")){
        Swal.fire({
            title:'Atencion!',
            text:'No completo todos los campos, llene el formulario nuevamente',
            icon:'warning',
            timer:2500,
            showConfirmButton:false,
            position:'top',
        });
    }else{
        Swal.fire({
            title:'Gracias por comunicarte con nosotros '+nombre,
            text:'En breve nos pondremos en contacto a '+email,
            icon:'success',
            timer:5000,
            showConfirmButton:true,
            confirmButtonText: 'OK!',
            position:'top',
        });
    }
    
    form.reset();
}

