const zapatillasEnStock=[
    {id:1,nombre:"Adidas eq21",img:"../imagenes/adidas-eq21.jpg", precio:10000},
    {id:2,nombre:"Adidas pv18",img:"../imagenes/adidas-pv18.jpg", precio:12000},
    {id:3,nombre:"Adidas samba",img:"../imagenes/adidas-samba.png", precio:13500},
    {id:4,nombre:"Nike air max 97",img:"../imagenes/air-max-97.jpg", precio:15000},
    {id:5,nombre:"Nike air max 1",img:"../imagenes/nike-air-max-1.jpg", precio:9000},
    {id:6,nombre:"Nike force",img:"../imagenes/nike-force.jpg", precio:11000},
    {id:7,nombre:"Puma r78",img:"../imagenes/puma-r78.jpg", precio:10000},
    {id:8,nombre:"Puma rider",img:"../imagenes/puma-rider.jpg", precio:9500},
    {id:9,nombre:"Puma xray",img:"../imagenes/puma-xray.jpg", precio:10500},
    {id:10,nombre:"Fila disruptor",img:"../imagenes/fila-disruptor.jpg", precio:8000},
    {id:11,nombre:"Fila rippler",img:"../imagenes/fila-rippler.jpg", precio:9000},
    {id:12,nombre:"Fila trend",img:"../imagenes/fila-trend.jpg", precio:11000}
];

/* const precioConDescuento=zapatillasEnStock.map((elemento)=>{
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

pagoEnCuotas(precioDeLaCompra); */

const mostrarProductos= ()=>{
    const contenedor=document.createElement("section");
    contenedor.className="container tienda_lista";
    zapatillasEnStock.forEach(producto=>{
        let div=document.createElement("div");
        div.className="card";
        div.innerHTML=`<div class="card_imagen">
        <img src="${producto.img}">
        </div>
        <span class="card_descripcion">${producto.nombre}</span>
        <span class="card_precio">$${producto.precio}</span>
        `;
        contenedor.appendChild(div);
    });
    let main=document.querySelector(".main");
    main.appendChild(contenedor);
};

mostrarProductos();