const form=document.querySelector("#formulario");
form.addEventListener("submit",validarForm);


function validarForm(event){
    event.preventDefault();
    const textoValido=document.querySelector(".texto_valido");
    const textoInvalido=document.querySelector(".texto_invalido");
    if(event.target[0].value=="" || event.target[1].value=="" || event.target[3].value==""){
        textoValido.className="texto_hide";
        setTimeout(()=>{textoValido.className="texto_valido";},5000);
            
    }else{
        textoInvalido.className="texto_hide";
        textoValido.innerText=`Hola ${event.target[0].value} en breve nos comunicaremos a ${event.target[1].value}. Muchas gracias por contactarnos!!`
        setTimeout(()=>{
            textoInvalido.className="texto_invalido";},5000);
    };
    form.reset();
}

