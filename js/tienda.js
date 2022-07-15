const zapatillasEnStock=[
    {id:1,nombre:"Adidas eq21",img:"../imagenes/adidas-eq21.jpg", precio:10000, cantidad:1},
    {id:2,nombre:"Adidas pv18",img:"../imagenes/adidas-pv18.jpg", precio:12000, cantidad:1},
    {id:3,nombre:"Adidas samba",img:"../imagenes/adidas-samba.png", precio:13500, cantidad:1},
    {id:4,nombre:"Nike air max 97",img:"../imagenes/air-max-97.jpg", precio:15000, cantidad:1},
    {id:5,nombre:"Nike air max 1",img:"../imagenes/nike-air-max-1.jpg", precio:9000, cantidad:1},
    {id:6,nombre:"Nike force",img:"../imagenes/nike-force.jpg", precio:11000, cantidad:1},
    {id:7,nombre:"Puma r78",img:"../imagenes/puma-r78.jpg", precio:10000, cantidad:1},
    {id:8,nombre:"Puma rider",img:"../imagenes/puma-rider.jpg", precio:9500, cantidad:1},
    {id:9,nombre:"Puma xray",img:"../imagenes/puma-xray.jpg", precio:10500, cantidad:1},
    {id:10,nombre:"Fila disruptor",img:"../imagenes/fila-disruptor.jpg", precio:8000, cantidad:1},
    {id:11,nombre:"Fila rippler",img:"../imagenes/fila-rippler.jpg", precio:9000, cantidad:1},    
    {id:12,nombre:"Fila trend",img:"../imagenes/fila-trend.jpg", precio:11000, cantidad:1}
];

const carrito= JSON.parse(localStorage.getItem("carrito")) || []; 

const mostrarProductos= ()=>{                                   
    let contenedor=document.createElement("section");
    contenedor.className="container tienda_lista";
    let productosEnTienda=document.querySelector("#tienda");
    zapatillasEnStock.forEach(producto=>{
        let div=document.createElement("div");
        div.innerHTML=`<div class="card" style="width: 18rem;">
        <img src="${producto.img}" class="card-img-top" alt="${producto.nombre}">
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <p class="card-text">$${producto.precio}</p>
          <button class="btn boton_carrito" onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</a>
        </div>
      </div>`;
        contenedor.appendChild(div);
    });
    productosEnTienda.appendChild(contenedor);
};

mostrarProductos();

function agregarAlCarrito(id){                                  
    let producto=zapatillasEnStock.find((elemento)=>elemento.id===id); 
    let productoEnCarrito=carrito.find((elemento)=>elemento.id===id); 
    productoEnCarrito ? productoEnCarrito.cantidad++ : carrito.push(producto);
    Toastify({
        text: 'Producto agregado al carrito!',
        duration:2000,
        style:{
            color:'white',
            background:"black"
        }
    }).showToast();
    mostrarCarrito();
};

function mostrarCarrito(){                           
    let productosEnCarrito= document.querySelector('#carrito');
    let productoSeleccionado = '';                              
    carrito.forEach((producto)=>{                                 
        productoSeleccionado+=`<div class="card" style="width: 18rem;">  
        <img src="${producto.img}" class="card-img-top" alt="${producto.nombre}">
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <p class="card-text">$${producto.precio}</p>
          <p class="card-text">Cantidad: ${producto.cantidad}</p>
          <button class="btn btn-danger" onclick="eliminarDelCarrito(${producto.id})">Eliminar del carrito</a>
        </div>
      </div>`;                                                 
    });
    productosEnCarrito.innerHTML=productoSeleccionado;         
    guardarLocal(carrito);
    mostrarTotal();
};

function eliminarDelCarrito(id){
    Swal.fire({
        title:'Desea eliminar el producto?',
        icon:'warning',
        showCancelButton:true,
        position:'top',
        confirmButtonText:'Si, quiero',
        cancelButtonText:'No!'
    }).then((result)=>{
        if(result.isConfirmed){
            let productoEnCarrito=carrito.find((elemento)=>elemento.id===id); 
            productoEnCarrito.cantidad>1 ? productoEnCarrito.cantidad-- : carrito.splice(carrito.indexOf(productoEnCarrito),1);
            Swal.fire({
                title:'Producto eliminado!',
                icon:'success',
                position:'top',
                timer:1500,
                showConfirmButton:false
            });
        
        mostrarCarrito();
        }
        })                     
};

function mostrarTotal(){
    let total= calcularTotal();
    const totalDeLaCompra=total.reduce((acumulador,elemento)=>acumulador+elemento.precio,0) *1.21 ;
    let contenedor=document.querySelector(".carrito_titulo");
    contenedor.innerHTML=`<h2 class="carrito_titulo">CARRITO DE COMPRAS</h2>
    <h3 class="carrito_total_precio">El precio total de la compra es de: <span class="precio_final">$${totalDeLaCompra}</span></h3>
    <span class="iva"><b> *El precio total incluye IVA*</b></span>`;
};

function calcularTotal(){
    let total=carrito.map((elemento)=>{
        return{
            precio:elemento.precio *elemento.cantidad
        }
    });
    return total;   
};

function guardarCarrito(clave,valor){
    localStorage.setItem(clave,valor);
};

function guardarLocal(array){
    if(array.length===0){
        localStorage.clear();
    }else{
        for(const elemento of array){
            guardarCarrito("carrito",JSON.stringify(array));
        };
    }
}; 

document.addEventListener("DOMContentLoaded",mostrarCarrito());


const botonVaciarCarrito=document.querySelector("#vaciar_carrito");
botonVaciarCarrito.addEventListener('click',()=>{
    Swal.fire({
        title:'Desea vaciar el carrito de compras?',
        icon:'warning',
        showCancelButton:true,
        position:'top',
        confirmButtonText:'Si, quiero',
        cancelButtonText:'No!'
    }).then((result)=>{
        if(result.isConfirmed){
            carrito.splice(0,carrito.length);
            mostrarCarrito();
            Swal.fire({
                title:'Carrito vaciado correctamente',
                icon:'success',
                position:'top',
                timer:2000,
                showConfirmButton:false
            });
        };
    });
});

const botonPagar=document.querySelector("#pagar_carrito");
botonPagar.addEventListener('click',()=>{
    const total=calcularTotal();
    const precioFinal=total.reduce((acumulador,elemento)=>acumulador+elemento.precio,0) *1.21 ;
    Swal.fire({
        title:'Desea finalizar la compra?',
        text:'El precio final es de $'+precioFinal,
        icon:'question',
        showCancelButton:true,
        position:'top',
        confirmButtonText:'Si, quiero',
        cancelButtonText:'No!'
    }).then((result)=>{
        if(result.isConfirmed){
            Swal.fire({
                title:'Su compra ha sido realizada con exito!',
                icon:'success',
                timer:3000,
                showConfirmButton:false
            });
            carrito.splice(0,carrito.length);
            mostrarCarrito();
        };
    });
})
