/* pedir un numero, sumarle otro en cada repeticion realizando una salida por resultado */

alert("EJERCICIO 1");

let numeroDeSuma=parseInt(prompt("cuantas sumas realizara?"));
let numero1= parseInt(prompt("Ingrese un numero:"));

for(let i=0;i<numeroDeSuma;i++){
    let numero2=parseInt(prompt("ingrese otro numero para sumarlo: "));
    let resultado= numero1 + numero2;
    alert(`la suma entre ${numero1} y ${numero2}  es: ${resultado}`);
    numero1=resultado;
}

/* pedir un texto, concatenar un valor en cada repeticion realizando una salida por resultado hasta que se ingrese esc */

alert("EJERCICIO 2");

let frase=prompt("ingrese una palabra/frase:");

while(frase!="ESC"){
    alert("la frase concatenada es: "+frase);
    frase=prompt("ESC para salir o una frase para concatenar: ");
}

/* pedir un numero y poner HOLA la cantidad de veces que diga el numero pedido */

alert("EJERCICIO 3");

let repeticiones=parseInt(prompt("ingresa un numero de repeticiones: "));

for(let i=0;i<repeticiones;i++){
    alert("HOLA!");
}
/* compras */
alert("ejercicio carrito de compras");

let cantidad= 0;
let precio=0;
let precioTotal=0;

alert(`lista de precios:
    shampoo=500
    acondicionador=650
    ambos=1000`);

let entrada=prompt("ingrese un producto: shampoo, acondicionador o ambos: ").toLowerCase();

do{
    switch(entrada){
        case "shampoo":
            precio=500;
            cantidad++;
            break;
        case "acondicionador":
            precio=650;
            cantidad++
            break;
        case "ambos":
            precio=1000;
            cantidad=cantidad+2;
            break;
        default:
            alert("no ingreso un articulo valido");
    }
    precioTotal+=precio;
    alert(`articulos totales= ${cantidad}, precio total= ${precioTotal}`);
    entrada=prompt("esc para salir o seleccione nuevamente un articulo: shampoo, acondicionador o ambos");
}while(entrada!="esc");
