let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito) || [];

const contenedorTotal = document.querySelector("#total");
const contenedorImpuestos = document.querySelector("#Impuestos");
const contenedorFinal = document.querySelector("#final");
const listaProductos = document.querySelector("#Listaproductos");

function cargarTotalesCarrito() {
    const totalCalculado = productosEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    const impuestos = totalCalculado * 0.15;
    const precioFinal = totalCalculado + impuestos;

    contenedorTotal.innerText = `$${totalCalculado.toFixed(2)}`;
    contenedorImpuestos.innerText = `$${impuestos.toFixed(2)}`;
    contenedorFinal.innerText = `$${precioFinal.toFixed(2)}`;
}

cargarTotalesCarrito();
const botonComprar = document.querySelector("#carrito-acciones-comprar");

function comprarCarrito(event) {
    // Previene el comportamiento predeterminado del botón (como enviar un formulario)
    event.preventDefault(); 

    // Obtener el campo de nombre y su valor
    const nombre = document.querySelector("#nombre").value;
    const apellido = document.querySelector("#apellido").value;
    const telefono = document.querySelector("#telefono").value;
    const email = document.querySelector("#email").value;
    const departamento = document.querySelector("#departamento").value;
    const municipio = document.querySelector("#municipio").value;
    const direccion = document.querySelector("#direccion").value;
    const numeroTarjeta = document.querySelector("#numeroTarjeta").value;
    const fechaExpiracion = document.querySelector("#fechaExpiracion").value;
    const cvv = document.querySelector("#cvv").value;

    // Comprobar si los campos están vacíos
    if (nombre.trim() === "" || apellido.trim() === "" || telefono.trim() === "" || email.trim() === "" ||
    departamento.trim() === "" || municipio.trim() === "" || direccion.trim() === "" || numeroTarjeta.trim() === "" || fechaExpiracion.trim() === "" || cvv.trim() === "" ) {
        // Mostrar un mensaje de error si algún campo está vacío
        document.getElementById("resultado").innerText = "Por favor, complete todos los campos.";
        return; // Detener la ejecución de la función si algún campo está vacío
    } else {
        // Mostrar un mensaje de éxito usando SweetAlert
        Swal.fire(
            '¡Gracias por tu compra!',
            'Esperamos verte pronto de nuevo.',
            'success'
        ).then((result) => {
            if (result.isConfirmed || result.isDismissed) {
                // Redirigir a otra página
                window.location.href = 'categoria.html'; // Reemplaza 'categoria.html' con la URL a la que deseas redirigir
            }
        });

        // Guardar los detalles de la compra en el localStorage
        let ventas = localStorage.getItem("ventas");
        ventas = JSON.parse(ventas) || [];
        
        const venta = {
            nombre,
            apellido,
            email,
            telefono,
            total: contenedorTotal.innerText,
            impuestos: contenedorImpuestos.innerText,
            final: contenedorFinal.innerText,
            
        };
        
        ventas.push(venta);
        localStorage.setItem("ventas", JSON.stringify(ventas));

        // Log para verificar que los datos se guardaron
        console.log("Venta guardada en localStorage:", venta);
        console.log("Todas las ventas en localStorage:", ventas);

        // Vaciar el carrito de compras y actualizar el localStorage
        productosEnCarrito.length = 0;
        localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
        cargarProductosCarrito(); // Actualizar la visualización del carrito
        cargarTotalesCarrito(); // Actualizar los totales
    }
}

botonComprar.addEventListener("click", comprarCarrito);

function cargarProductosCarrito() {
    listaProductos.innerHTML = ""; // Vaciar la lista de productos antes de cargar los nuevos
    if (productosEnCarrito && productosEnCarrito.length > 0) {
        productosEnCarrito.forEach(producto => {
            const div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML = `
                <div class="carrito-producto-titulo">
                    <h3>${producto.titulo} x ${producto.cantidad}</h3>
                    <h3>$${(producto.precio * producto.cantidad).toFixed(2)}</h3>
                </div>
            `;
            listaProductos.append(div);
        });
    } else {
        document.getElementById("resultado").innerText = "El carrito está vacío.";
    }
}

cargarProductosCarrito();
