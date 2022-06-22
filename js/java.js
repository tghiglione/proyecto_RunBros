class Producto{
    constructor(modelo,precio){
        this.modelo=modelo;
        this.precio=precio;
    }
    sumarIva(){
        this.precio=this.precio*1.21;
    }
    descuento(){
        this.precio=this.precio-this.precio*0.25;
    }
}

const zapatillasEnStock=[];

function agregarStock(array){
    let entrada=confirm("Desea agregar stock?");
    while(entrada){
        let elemento=prompt("ingrese modelo de zapatilla: ").toLowerCase();
        let precio=parseInt(prompt("ingrese precio del modelo: "))
        array.push(new Producto(elemento,precio));
        entrada=confirm("Desea continuar agregando stock?");
    }
    return array;
}

function agregarIva(){
    for(producto of zapatillasEnStock){
        producto.sumarIva();
    }
    return zapatillasEnStock;
}
function agregarDescuento(){
    for(producto of zapatillasEnStock){
        producto.descuento();
    }
    return zapatillasEnStock;
}

agregarStock(zapatillasEnStock);
agregarIva();
agregarDescuento();
console.log(zapatillasEnStock); 
