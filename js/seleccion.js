
let viewedProducts = JSON.parse(localStorage.getItem("viewedProducts")) || [];

function cargarViewedProducts() {
    // Selecciona el contenedor de productos vistos
    const contenedorViewedProducts = document.getElementById("viewedProductsContainer");

    // Verifica si el contenedor existe
    if (!contenedorViewedProducts) {
        console.error('No se encontró el contenedor de productos vistos.');
        return;
    }

    // Limpia el contenedor antes de agregar nuevos elementos
    contenedorViewedProducts.innerHTML = "";

    // Recorre cada producto visto y agrégalo al contenedor
    viewedProducts.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("ContenedorProducto");
        div.innerHTML = `
            <div class="lienso">
                <div class="fotos">
                    <div class="grandefoto">
                        <img src="${producto.imagen}" class="imagenxd" alt="${producto.titulo}" style="width: 250px;">
                    </div>
                    <div class="textoproducto">
                        <div class="nombre">
                            <h2> Producto: ${producto.titulo} </h2>
                             <h2> Marca: ${producto.categoria.marca}</h2>
                             <h2> Deporte: ${producto.categoria.deporte}</h2>
                             <h2>Precio: $${producto.precio}</h2>
                            

                        </div>
                        <div class="talla">
                            
                            
                            <button id="guardarVistosEnCarrito" class="boton1" type="submit">Añadir al carrito</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="lienso">
                <div class="Info-Producto">
                    <div class="InfoProducto">
                        <h2>Descripción del Producto</h2>
                        <p>Los Adidas Adipure combinan un diseño clásico con tecnología moderna, ofreciendo comodidad y control superior del balón. Fabricados con cuero premium, estos botines aseguran un ajuste perfecto y un toque excepcional. Su suela flexible proporciona tracción y estabilidad en múltiples superficies. Con un compromiso hacia la sostenibilidad, incorporan materiales reciclados sin comprometer el rendimiento. Disponibles en varias tallas y colores, los Adipure son la elección ideal para jugadores que buscan rendimiento y elegancia en el campo.
                        ¡Compra ahora y mejora tu juego!</p>
                    </div>
                </div>
            </div>
        `;

        contenedorViewedProducts.append(div);

        
    });
}

// Llamar a la función para cargar los productos vistos
cargarViewedProducts();



function cargarViewedProducts2() {
    // Selecciona el contenedor de productos vistos
    const contenedorViewedProducts = document.getElementById("reseñas");

    // Verifica si el contenedor existe
    if (!contenedorViewedProducts) {
        console.error('No se encontró el contenedor de productos vistos.');
        return;
    }

    // Limpia el contenedor antes de agregar nuevos elementos
    contenedorViewedProducts.innerHTML = "";

    // Recorre cada producto visto y agrégalo al contenedor
    viewedProducts.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("ContenedorProducto");
        div.innerHTML = `
           
      <div class="contnedor-reseñas">

        <div class="fotoreseña">
             <img  id="fototo" src="${producto.imagen}" alt="">
            <div class="textoreseña">
               <div class="stars" data-stars="5"></div><span class="rating-count">Excelente</span> <br>
               <p>
               Calificación del producto 
       
               </p>
              
       
               <div class="rating">
                   <div class="rating-row">
                     <span class="rating-num">5 stars</span>
                     <div class="stars" data-stars="5"></div>
                     <span class="rating-count">Excelente</span>
                   </div>
                   <div class="rating-row">
                     <span class="rating-num">4 stars</span>
                     <div class="stars" data-stars="4"></div>
                     <span class="rating-count"> Bien</span>
                   </div>
                   <div class="rating-row">
                     <span class="rating-num">3 stars</span>
                     <div class="stars" data-stars="3"></div>
                     <span class="rating-count">Normal</span>
                   </div>
                   <div class="rating-row">
                     <span class="rating-num">2 stars</span>
                     <div class="stars" data-stars="2"></div>
                     <span class="rating-count">Malo</span>
                   </div>
                   <div class="rating-row">
                     <span class="rating-num">1 star</span>
                     <div class="stars" data-stars="1"></div>
                     <span class="rating-count">Pesimo</span>
                   </div>
                 </div>
           </div>
   
        </div>
   
        <div class="comentarios">
           <div class="usuario">
               <div class="usu">
                   <ion-icon name="person-circle-outline"></ion-icon><p>Fran Bonilla</p>
               </div>
               <div class="calificacion">
                   <span class="rating-num">5 stars</span>
                         <div class="stars" data-stars="5"></div>
                         <span class="rating-count">Excelente</span>
                       </div>
           </div>
         
            <div class="comentario">
                       <p>
                           "¡Increíbles! Los Adidas Predator superaron todas mis expectativas. 
                           El ajuste es perfecto y brindan un soporte excepcional para mis pies. 
                           Los usé para varios partidos de fútbol y realmente mejoraron mi control del balón. 
                           La tracción que ofrecen es excelente en diferentes tipos de terreno, y el diseño
                            es simplemente impresionante. Además, son muy cómodos, incluso después de largas 
                            sesiones de entrenamiento. Definitivamente recomendaría estos zapatos a cualquier 
                            jugador que busque un par de botas de fútbol de alto rendimiento. ¡No me arrepiento 
                            para nada de esta compra!"
                       </p>
            </div>

            <div class="usuario">
                <div class="usu">
                    <ion-icon name="person-circle-outline"></ion-icon><p>Omarcito17</p>
                </div>
                <div class="calificacion">
                    <span class="rating-num">5 stars</span>
                          <div class="stars" data-stars="5"></div>
                          <span class="rating-count">Excelente</span>
                        </div>
            </div>
          
             <div class="comentario">
                        <p>
                            "¡Increíbles! Los Adidas Predator superaron todas mis expectativas. 
                            El ajuste es perfecto y brindan un soporte excepcional para mis pies. 
                            Los usé para varios partidos de fútbol y realmente mejoraron mi control del balón. 
                            La tracción que ofrecen es excelente en diferentes tipos de terreno, y el diseño
                             es simplemente impresionante. Además, son muy cómodos, incluso después de largas 
                             sesiones de entrenamiento. Definitivamente recomendaría estos zapatos a cualquier 
                             jugador que busque un par de botas de fútbol de alto rendimiento. ¡No me arrepiento 
                             para nada de esta compra!"
                        </p>
             </div>

                   
   
   
        </div>
          
   
   
       </div>              
                   
 
        `;

        contenedorViewedProducts.append(div);

        
    });
}

cargarViewedProducts2();



// Obtener productos desde el localStorage

let productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito")) || [];

// Función para agregar productos vistos al carrito
function guardarProductosVistosEnCarrito() {
    viewedProducts.forEach(productoVisto => {
        const productoEnCarrito = productosEnCarrito.find(producto => producto.id === productoVisto.id);
        if (productoEnCarrito) {
            // Si el producto ya está en el carrito, aumentar la cantidad
            productoEnCarrito.cantidad++;
        } else {
            // Si no está en el carrito, agregarlo con cantidad 1
            productoVisto.cantidad = 1;
            productosEnCarrito.push(productoVisto);
        }
    });

    // Guardar el carrito actualizado en localStorage
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

    // Actualizar la visualización de la cantidad en el carrito
    actualizarNumerito();

    console.log('Los productos vistos han sido añadidos al carrito:', productosEnCarrito);
}

// Función para actualizar el contador de productos en el carrito
function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    document.getElementById("numerito").innerText = nuevoNumerito;
}

// Agregar evento de clic al botón
document.getElementById("guardarVistosEnCarrito").addEventListener("click", guardarProductosVistosEnCarrito);
