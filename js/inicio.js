const form=document.querySelector("#formulario");
form.addEventListener("submit",validarForm);

function validarForm(event){
    event.preventDefault();
    let formulario=event.target;
    let contenedor=document.querySelector(".contactanos");
    let modal=document.createElement("div");
    if(event.target[0].value=="" || event.target[1].value=="" || event.target[3].value==""){
        alert("no completo todos los campos");
    }else{
        modal.innerHTML=`<h2> Gracias ${event.target[0].value} por comunicarte con nosotros</h2>
                        <p>Nos comunicaremos a <b>${event.target[1].value}</b> en seguida!</p>`;
    contenedor.appendChild(modal);
    };
}
