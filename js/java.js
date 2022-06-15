/* CALCULADORA DE COSTOS DE PRODUCTOS SELECCIONADOS POR EL USUARIO */

function costos(){
    let precio=0;
    let precioTotal=0;
    let entrada=true;
    while(entrada){
        let producto=prompt("ingrese que galletita desea: melba/oreo/pepitos").toLowerCase();
        switch(producto){
            case "oreo":
                precio=100;
                break;
            case "pepitos":
                precio=150;
                break;
            case "melba":
                precio=50;
                break;
            default:
                alert("el producto no se encuentra en stock");
        }
        precioTotal+=precio;
        entrada=confirm("desea continuar comprando?")
    }
    alert(`el monto total de la compra es de ${precioTotal}`);
}

/* CALCULADORA DE CUOTAS PARA  PRODUCTOS DE UN LOCAL DE ELECTRODOMESTICOS Y DE DESCUENTO 25% +IVA */

const precioComputadora=5000;
const precioHeladera=10000;
const precioHorno= 9000;
const precioCelular=4000;

function pagoEnCuotas(precioProducto){
    let cuotas=parseInt(prompt("ingrese en cuantas cuotas desea pagar: 3/6/12"));
    let precioFinal=0;
    if(cuotas===3){
        precioFinal= precioProducto/3;
    }else if(cuotas===6){
        precioFinal= precioProducto/6;
    }else if(cuotas===12){
        precioFinal= precioProducto/12;
    }else{
        alert("no disponemos de dicha/s cuota/s");
    }
    alert(`el precio de cada cuota es de ${precioFinal} en un total de ${cuotas} cuotas`);
}

function descuento(precioProducto){
    let descuento= precioProducto*0.25;
    let iva= precioProducto*0.21;
    let precioFinal=precioProducto-descuento+iva;
    alert(`el precio final con IVA y descuento del 25% del producto seleccionado es de ${precioFinal}`);
}

/* CALCULADORA DE TIEMPO DE ESPERA AL SACAR UN TURNO */

function tiempoEspera(){
    let entrada=true;
    let contador=0;
    let demora=0;
    while(entrada){
        let turno=prompt("ingrese su nombre para reservar un turno: ")
        if(contador===10){ //no da mas de 10 turnos
            alert("perdon, nos quedamos sin turnos");
            break;
        }
        contador++;
        alert(`hola ${turno} tu turno fue reservado exitosamente! Tenes una espera de ${demora} minutos`);
        demora+=15;
        entrada=confirm("desea un turno?");
    }
}

/* CALCULADORA EDAD PROMEDIO DE PERSONAS REGISTRADAS */

function edadPromedio(){
    let edadTotal=0;
    let contador=0;
    let entrada=true;
    while(entrada){
        let edad=parseInt(prompt("ingrese su edad: "));
        if(!isNaN(edad)){
            edadTotal+=edad;
            contador++;
        }else{
            alert("no ha ingresado un numero, intente nuevamente");
        }
        entrada=confirm("desea ingresar otra edad?")
    }
    let promedio=edadTotal/contador;
    alert(`la edad promedio es ${promedio}`);
}

/* LLAMADO A TODAS LAS FUNCIONES */

costos();

pagoEnCuotas(precioCelular);
pagoEnCuotas(precioComputadora);
pagoEnCuotas(precioHeladera);
pagoEnCuotas(precioHorno);

descuento(precioCelular);
descuento(precioComputadora);
descuento(precioHeladera);
descuento(precioHorno);

tiempoEspera();

edadPromedio();