const zapatillasEnStock=[
    {marca:"adidas", precio:10000},
    {marca:"nike", precio:12000},
    {marca:"puma", precio:10000},
];

const precioConDescuento=zapatillasEnStock.map((elemento)=>{
    return{
            marca:elemento.marca,
            modelo:elemento.modelo,
            precio:elemento.precio-elemento.precio*0.25
    };
});

function carrito(array){
    let precioTotal=0;
    let cantidad=0;
    let entrada=true;
    let zapatillasCompradas=[];
    while(entrada){
        let producto=prompt("ingrese que zapatilla desea: adidas/nike/puma: ").toLowerCase();
        let validacion=array.some((elemento)=>elemento.marca===producto);
        if(validacion==true){
            zapatillasCompradas.push(array.find((elemento)=>elemento.marca===producto));
            cantidad++;
        }else{
            alert("la zapatilla no se encuentra en stock, lo sentimos");
        }
        entrada=confirm("desea continuar comprando?");
    }
    let marcaTotal=zapatillasCompradas.map((elemento)=>elemento.marca);
    precioTotal=zapatillasCompradas.reduce((acumulador,elemento)=>acumulador+elemento.precio,0)*1.21; //INCLUYE IVA
    alert(`el monto total de la compra con IVA incluido es de ${precioTotal}
            cantidad de pares de zapatillas= ${cantidad}
            pares comprados= ${marcaTotal}`);
    return precioTotal;
};

let precioDeLaCompra=carrito(precioConDescuento); //SE PUEDE CAMBIAR Y PONER ZAPATILLASENSTOCK Y NO SE APLICA DESCUENTO

function pagoEnCuotas(precio){
    let cuotas=parseInt(prompt("ingrese en cuantas cuotas desea pagar: 1/3/6/12"));
    let precioFinal=0;
    while(cuotas!=1 && cuotas!=3 && cuotas!=6 && cuotas!=12){
            alert("no disponemos de dicha/s cuota/s, reintente nuevamente");
            cuotas=parseInt(prompt("ingrese en cuantas cuotas desea pagar: 1/3/6/12"));
    }
    if(cuotas===1){
            precioFinal= precio;
    }else if(cuotas===3){
            precioFinal= precio/3;
    }else if(cuotas===6){
            precioFinal= precio/6;
    }else if(cuotas===12){
            precioFinal= precio/12;
    }
    alert(`el precio de cada cuota es de ${precioFinal} en un total de ${cuotas} cuotas`);
};

pagoEnCuotas(precioDeLaCompra);