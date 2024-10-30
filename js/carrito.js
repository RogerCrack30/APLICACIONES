let productosEnCarrito = localStorage.getItem("productos-en-carrito");
        productosEnCarrito = JSON.parse(productosEnCarrito) || [];

        const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
        const contenedorCarritoProductos = document.querySelector("#carrito-productos");
        const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
        const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
        let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
        const botonVaciar = document.querySelector("#carrito-acciones-vaciar");
        const contenedorTotal = document.querySelector("#total");
       
        const comprastotales = document.querySelector("#contenedortotales");

        function cargarProductosCarrito() {
            if (productosEnCarrito && productosEnCarrito.length > 0) {
                contenedorCarritoVacio.classList.add("disabled");
                contenedorCarritoProductos.classList.remove("disabled");
                contenedorCarritoAcciones.classList.remove("disabled");
                contenedorCarritoComprado.classList.add("disabled");
                comprastotales.classList.remove("disabled");

                contenedorCarritoProductos.innerHTML = "";

                productosEnCarrito.forEach(producto => {
                    const div = document.createElement("div");
                    div.classList.add("carrito-producto");
                    div.innerHTML = `
                        <img class="carrito-producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                        <div class="carrito-producto-titulo">
                            <small>Título</small>
                            <h3>${producto.titulo}</h3>
                        </div>
                        <div class="carrito-producto-cantidad">
                            <small>Cantidad</small>
                            <input type="number" style="width: 45px;" value="${producto.cantidad}" min="1" data-id="${producto.id}">
                        </div>
                        <div class="carrito-producto-precio">
                            <small>Precio</small>
                            <p>$${producto.precio}</p>
                        </div>
                        <div class="carrito-producto-subtotal">
                            <small>Subtotal</small>
                            <p>$${producto.precio * producto.cantidad}</p><br>
                        </div>
                        <button class="carrito-producto-eliminar" id="${producto.id}"><ion-icon name="trash-outline"></ion-icon></button>
                    `;

                    contenedorCarritoProductos.append(div);
                });

                actualizarBotonesEliminar();
                actualizarInputsCantidad();
                actualizarTotal();

            } else {
                contenedorCarritoVacio.classList.remove("disabled");
                contenedorCarritoProductos.classList.add("disabled");
                contenedorCarritoAcciones.classList.add("disabled");
                contenedorCarritoComprado.classList.add("disabled");
                comprastotales.classList.add("disabled");
            }
        }

        cargarProductosCarrito();

        function actualizarBotonesEliminar() {
            botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

            botonesEliminar.forEach(boton => {
                boton.addEventListener("click", eliminarDelCarrito);
            });
        }

        function eliminarDelCarrito(e) {
            Toastify({
                text: "Producto eliminado",
                duration: 3000,
                close: true,
                gravity: "top",
                position: "right",
                stopOnFocus: true,
                style: {
                    background: "#fab50f",
                    color: "#233588",
                    borderRadius: "2rem",
                    textTransform: "uppercase",
                    fontSize: ".75rem"
                },
                offset: {
                    x: '1.5rem',
                    y: '1.5rem'
                },
                onClick: function() {}
            }).showToast();

            const idBoton = e.currentTarget.id;
            const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);

            productosEnCarrito.splice(index, 1);
            cargarProductosCarrito();

            localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
        }

        botonVaciar.addEventListener("click", vaciarCarrito);

        function vaciarCarrito() {
            Swal.fire({
                title: '¿Estás seguro?',
                text: "¡No podrás revertir esto!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí, vaciarlo',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    productosEnCarrito.length = 0;
                    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
                    cargarProductosCarrito();
                    Swal.fire(
                        '¡Vaciado!',
                        'Tu carrito ha sido vaciado.',
                        'success'
                    );
                }
            });
        }

        function actualizarTotal() {
            const totalCalculado = productosEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
            const imp = totalCalculado * 0.15;
            const preciofinal = totalCalculado + imp;
            contenedorTotal.innerText = `$${totalCalculado}`;
            document.querySelector("#Impuestos").innerText = `$${imp}`;
            document.querySelector("#final").innerText = `$${preciofinal}`;
        }

        function actualizarInputsCantidad() {
            const inputsCantidad = document.querySelectorAll(".carrito-producto-cantidad input");

            inputsCantidad.forEach(input => {
                input.addEventListener("change", actualizarCantidadProducto);
            });
        }

        function actualizarCantidadProducto(e) {
            const input = e.currentTarget;
            const nuevaCantidad = parseInt(input.value);
            const idProducto = input.getAttribute("data-id");
            const producto = productosEnCarrito.find(producto => producto.id === idProducto);

            if (producto && nuevaCantidad >= 1) {
                producto.cantidad = nuevaCantidad;
                localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
                cargarProductosCarrito();
            }
        }

     

        function comprarCarrito() {
            productosEnCarrito.length = 0;
            localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

            contenedorCarritoVacio.classList.add("disabled");
            contenedorCarritoProductos.classList.add("disabled");
            contenedorCarritoAcciones.classList.add("disabled");
            contenedorCarritoComprado.classList.remove("disabled");
        }