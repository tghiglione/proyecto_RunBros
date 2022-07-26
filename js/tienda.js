const carrito= JSON.parse(localStorage.getItem("carrito")) || []; 

const mostrarProductos= async ()=>{                                   
    let contenedor=document.createElement("section");
    contenedor.className="container tienda_lista";
    let productosEnTienda=document.querySelector("#tienda");
    const resp=await fetch("../stock.json");
    const stock=await resp.json();
    stock.forEach(producto=>{
        let div=document.createElement("div");
        div.innerHTML=`<div class="card card_tienda" style="width: 18rem;">
        <img src="${producto.img}" class="card-img-top" alt="${producto.nombre}">
        <div class="card_tienda_body">
          <h5 class="card_tienda_body_titulo">${producto.nombre}</h5>
          <p class="card_tienda_body_precio">$${producto.precio}</p>
          <button class="btn" onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</a>
        </div>
      </div>`;
        contenedor.appendChild(div);
    });
    productosEnTienda.appendChild(contenedor);
};

mostrarProductos();

async function agregarAlCarrito(id){    
    const resp=await fetch("../stock.json");
    const stock=await resp.json();                              
    let producto=stock.find((elemento)=>elemento.id===id); 
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
        productoSeleccionado+=`<div class="card card_carrito" style="width: 18rem;">  
        <div class="card_carrito_body">
          <h5 class="card_carrito_body_titulo">${producto.nombre}</h5>
          <p class="card_carrito_body_precio">$${producto.precio}</p>
          <p class="card_carrito_body_cantidad">Cantidad: ${producto.cantidad}</p>
        </div>
        <span><button class="btn btn-danger" onclick="eliminarDelCarrito(${producto.id})"><i class="fa-solid fa-trash-can"></i></a></span>
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

function calcularTotal(){
    let total=carrito.map((elemento)=>{
        return{
            precio:elemento.precio *elemento.cantidad
        }
    });
    return total;   
};

function mostrarTotal(){
    let total= calcularTotal();
    const totalDeLaCompra=total.reduce((acumulador,elemento)=>acumulador+elemento.precio,0) *1.21 ;
    let contenedor=document.querySelector(".carrito_titulo");
    contenedor.innerHTML=`<h2 class="carrito_titulo">CARRITO DE COMPRAS</h2>
    <h3 class="carrito_total_precio">El precio total de la compra es de: <span class="precio_final">$${totalDeLaCompra}</span></h3>
    <span class="iva"><b> *El precio total incluye IVA*</b></span>`;
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

document.addEventListener("DOMContentLoaded", mostrarCarrito())


const botonVaciarCarrito=document.querySelector("#vaciar_carrito");
botonVaciarCarrito.addEventListener('click',()=>{
    if(carrito.length!==0){
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
    }else{
        Swal.fire({
            title:'El carrito no posee productos',
            icon:'error',
            showConfirmButton:false,
            timer:3000
        });
    }
});

const botonPagar=document.querySelector("#pagar_carrito");
botonPagar.addEventListener('click',()=>{
    const total=calcularTotal();
    const precioFinal=total.reduce((acumulador,elemento)=>acumulador+elemento.precio,0) *1.21 ;
    if(carrito.length!==0){
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
    }else{
        Swal.fire({
            title:'El carrito se encuentra vacio',
            icon:'error',
            showConfirmButton:false,
            timer:2000
            
        });
    }
    
});
