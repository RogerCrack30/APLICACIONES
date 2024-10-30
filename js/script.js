const toggler = document.querySelector(".btn");
toggler.addEventListener("click",function(){
    document.querySelector("#sidebar").classList.toggle("collapsed");
});






const usuarios = [
    { id: "01", nombre:"Omar" , apellido: "Ruiz", email: "omar@gmail.com", password: "123456", tipo: "admin",estado:"activo" },
    { id: "02", nombre:"jose" , apellido: "Ruiz", email: "naza@gmail.com", password: "123456", tipo: "admin", estado:"activo" },
    { id: "03", nombre:"blanca" , apellido: "Ruiz", email: "fran@gmail.com", password: "123456", tipo: "admin",estado:"activo" }
];

const productos = [
    {
        "id": "zapato01",
        "titulo": "Nike Sparta",
        "imagen": "./imagenes/imagenscategorias/zapato1.png",
        "categoria": {
            "marca": "Nike",
            "deporte": "Futbol",
            "union": "Nike",
            "id": "calzado",
            "uni": "Futbol-nike2"
        },
        "precio": 90,
        "cantidad":10,
        "estado": "Activo"
    },
    {
        "id": "zapato02",
        "titulo": "Nike Clasicos",
        "imagen": "./imagenes/imagenscategorias/zapato2.png",
        "categoria": {
            "marca": "Nike",
            "deporte": "Futbol",
            "union": "Nike",
            "id": "calzado",
            "uni": "Futbol-nike2"
        },
        "precio": 110,
        "cantidad":10,
          "estado": "Activo"
    },
    {
        "id": "zapato03",
        "titulo": "Adidas copa",
        "imagen": "./imagenes/imagenscategorias/zapato5.png",
        "categoria": {
            "marca": "Adidas",
            "deporte": "Futbol",
            "union": "Adidas",
            "id": "calzado",
            "uni": "Futbol-adidas2"
        },
        "precio": 100,
        "cantidad":10,
          "estado": "Activo"
    },
    {
        "id": "zapato04",
        "titulo": "Adidas F50",
        "imagen": "./imagenes/imagenscategorias/futboladidas1.png",
        "categoria": {
            "marca": "Adidas",
            "deporte": "Futbol",
            "union": "Adidas",
            "id": "calzado",
              "uni":"Futbol-adidas2"
        },
        "precio": 100,
         "cantidad":10,
          "estado": "Activo"
    },
   

    {
        "id": "zapato05",
        "titulo": "Puma AIR 99",
        "imagen": "./imagenes/imagenscategorias/futbolpuma1.png",
        "categoria": {
            "marca": "Puma",
            "deporte": "Futbol",
            "union": "Puma",
            "id": "calzado",
              "uni":"Futbol-puma2"
        },
        "precio": 100,
         "cantidad":10,
          "estado": "Activo"
    },
    

    {
        "id": "zapato06",
        "titulo": "Puma Clasicos",
        "imagen": "./imagenes/imagenscategorias/futbolpuma2.png",
        "categoria": {
            "marca": "Puma",
            "deporte": "Futbol",
            "union": "Puma",
            "id": "calzado",
                "uni":"Futbol-puma2"
        },
        "precio": 100,
         "cantidad":10,
          "estado": "Activo"
    },


    
    {
        "id": "zapato07",
        "titulo": "Nike Blazer",
        "imagen": "./imagenes/imagenscategorias/beibolnike3.png",
        "categoria": {
            "marca": "Nike",
            "deporte": "Béisbol",
            "union": "Nike",
            "id": "calzado",
             "uni":"Beisbol-nike2"
        },
        "precio": 100,
         "cantidad":10,
          "estado": "Activo"
    },

    {
        "id": "zapato08",
        "titulo": "Nike Clasicos",
        "imagen": "./imagenes/imagenscategorias/beisbolnike1.png",
        "categoria": {
            "marca": "Nike",
            "deporte": "Béisbol",
            "union": "Nike",
            "id": "calzado",
             "uni":"Beisbol-nike2"
        },
        "precio": 100,
         "cantidad":10,
          "estado": "Activo"
    },
 
    {
        "id": "zapato09",
        "titulo": "Adidas Ultimate",
        "imagen": "./imagenes/imagenscategorias/beiboladidas1.png",
        "categoria": {
            "marca": "Adidas",
            "deporte": "Béisbol",
            "union": "Adidas",
            "id": "calzado",
             "uni":"Beisbol-adidas2"
        },
        "precio": 100,
         "cantidad":10,
          "estado": "Activo"
    }
];

const Proveedores = [
    { id: "01", email: "omar@gmail.com", telefono:"84714076",  nombre:"Omar" , apellido: "Ruiz",Direccion: "Bodega de managua", estado:"activo"},
    { id: "02", email: "naza@gmail.com", telefono:"84714076" ,nombre:"Naza" , apellido: "Cerda",Direccion: "Bodega de leon",estado:"activo" },
    { id: "03", email: "fran@gmail.com", telefono:"84714076" ,nombre:"Fran" , apellido: "Bonilla",Direccion: "Bodega de rivas", estado:"activo"}
];

const Clientes = [
    { id: "01", email: "omar@gmail.com", nombre:"Omar" , apellido: "Ruiz",  telefono:"84714076",password: "123456", estado:"activo"},
    { id: "02", email: "naza@gmail.com", nombre:"Naza" , apellido: "Cerda",  telefono:"84714076",password: "123456",estado:"activo" },
    { id: "03", email: "fran@gmail.com", nombre:"Fran" , apellido: "Bonilla",  telefono:"84714076",password: "123456", estado:"activo"}
];







function cargarUsuarios(event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
    const contenedor1 = document.getElementById('cosas');
    contenedor1.innerHTML = ''; // Vaciar el contenido actual del div 'cosas'
    const limpiar= document.getElementById('tabla-productos');
    limpiar.innerHTML = '';
    const div = document.createElement("div");
    div.classList.add("car");
    div.innerHTML = `
        <div class="container mt-4">
        <h1 style="font-size: 1rem; font-weight: bold;">Usuarios</h1>
            <div class="d-flex justify-content-between mb-3">
                <button class="btn btn-custom" id="btn-nuevo-usuario"><i class="fa-solid fa-plus"></i> Nuevo</button>
                <div class="input-group" style="width: auto;">
                    <input style="border: solid black;" type="text" id="buscar-usuarios" class="form-control" placeholder="Buscar" aria-label="Buscar" aria-describedby="search-icon">
                    <span style="background-color:#233588;" class="input-group-text" id="search-icon"><i class="fa-solid fa-search"></i></span>
                </div>
            </div>
        </div>
        <div id="tabla-usuarios"></div>
    `;

    contenedor1.append(div);

    const contenedor = document.getElementById('tabla-usuarios');
    generarTablaUsuarios(usuarios, contenedor);

    // Agregar evento de búsqueda en tiempo real
    document.getElementById('buscar-usuarios').addEventListener('input', (e) => {
        const termino = e.target.value.toLowerCase();
        const usuariosFiltrados = usuarios.filter(usuario => usuario.nombre.toLowerCase().includes(termino));
        generarTablaUsuarios(usuariosFiltrados, contenedor);
    });

    // Mostrar el formulario para agregar un nuevo usuario al hacer clic en "Nuevo"
    document.getElementById('btn-nuevo-usuario').addEventListener('click', mostrarFormularioNuevoUsuario);
}

function mostrarFormularioNuevoUsuario() {
    const contenedor1 = document.getElementById('cosas');
    contenedor1.innerHTML = ''; // Vaciar el contenido actual del div 'cosas'

    const div = document.createElement("div");
    div.classList.add("car");
    div.innerHTML = `
        <div class="container mt-4">
            <h2>Agregar Nuevo Usuario</h2>
            <form id="form-nuevo-usuario">
                <div class="mb-3">
                    <label for="id" class="form-label">ID</label>
                    <input type="text" class="form-control" id="id" required>
                </div>
                <div class="mb-3">
                    <label for="nombre" class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="nombre" required>
                </div>
                <div class="mb-3">
                    <label for="apellido" class="form-label">Apellido</label>
                    <input type="text" class="form-control" id="apellido" required>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="email" required>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Contraseña</label>
                    <input type="password" class="form-control" id="password" required>
                </div>
                <div class="mb-3">
                    <label for="tipo" class="form-label">Tipo</label>
                    <select class="form-select" id="tipo" required>
                        <option value="admin">Admin</option>
                        <option value="cliente">Cliente</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="estado" class="form-label">Estado</label>
                    <select class="form-select" id="estado" required>
                        <option value="activo">Activo</option>
                        <option value="inactivo">Inactivo</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-primary">Agregar Usuario</button>
                <button type="button" class="btn btn-secondary" id="btn-cancelar">Cancelar</button>
            </form>
        </div>
    `;

    contenedor1.append(div);

    // Manejar el envío del formulario para agregar un nuevo usuario
    document.getElementById('form-nuevo-usuario').addEventListener('submit', (e) => {
        e.preventDefault();
        const nuevoUsuario = {
            id: document.getElementById('id').value,
            nombre: document.getElementById('nombre').value,
            apellido: document.getElementById('apellido').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            tipo: document.getElementById('tipo').value,
            estado: document.getElementById('estado').value
        };
        usuarios.push(nuevoUsuario);
        cargarUsuarios(e); // Recargar la lista de usuarios para mostrar el nuevo usuario
    });

    // Ocultar el formulario al hacer clic en "Cancelar"
    document.getElementById('btn-cancelar').addEventListener('click', cargarUsuarios);
}

function mostrarFormularioEditarUsuario(id) {
    const usuario = usuarios.find(usuario => usuario.id === id);
    if (!usuario) return;

    const contenedor1 = document.getElementById('cosas');
    contenedor1.innerHTML = ''; // Vaciar el contenido actual del div 'cosas'

    const div = document.createElement("div");
    div.classList.add("car");
    div.innerHTML = `
        <div class="container mt-4">
            <h2>Editar Usuario</h2>
            <form id="form-editar-usuario">
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="email" value="${usuario.email}" required>
                </div>
                <button type="submit" class="btn btn-primary">Guardar Cambios</button>
                <button type="button" class="btn btn-secondary" id="btn-cancelar">Cancelar</button>
            </form>
        </div>
    `;

    contenedor1.append(div);

    // Manejar el envío del formulario para editar un usuario
    document.getElementById('form-editar-usuario').addEventListener('submit', (e) => {
        e.preventDefault();
        usuario.email = document.getElementById('email').value;
        cargarUsuarios(e); // Recargar la lista de usuarios para mostrar los cambios
    });

    // Ocultar el formulario al hacer clic en "Cancelar"
    document.getElementById('btn-cancelar').addEventListener('click', cargarUsuarios);
}

function cambiarEstadoUsuario(id) {
    const usuario = usuarios.find(usuario => usuario.id === id);
    if (usuario) {
        usuario.estado = usuario.estado === 'activo' ? 'inactivo' : 'activo';
        cargarUsuarios(new Event('click')); // Recargar la lista de usuarios para reflejar el cambio de estado
    }
}

function generarTablaUsuarios(usuarios, contenedor) {
    contenedor.innerHTML = ''; // Vaciar el contenido del contenedor antes de agregar la nueva tabla
    let tabla = '<table>';
    tabla += '<tr><th>ID</th><th>Nombre</th><th>Email</th><th>Tipo</th><th>Estado</th><th>Acciones</th></tr>';

    usuarios.forEach(usuario => {
        tabla += `<tr>
            <td>${usuario.id}</td>
            <td>${usuario.nombre} ${usuario.apellido}</td>
            <td>${usuario.email}</td>
            <td>${usuario.tipo}</td>
            <td>${usuario.estado}</td>
            <td>
                <button onclick="mostrarFormularioEditarUsuario('${usuario.id}')"><i class="fa-solid fa-pen"></i></button>
                <button onclick="cambiarEstadoUsuario('${usuario.id}')"><i class="fa-solid fa-delete-left"></i></button>
            </td>
        </tr>`;
    });

    tabla += '</table>';
    contenedor.innerHTML = tabla;
}

document.getElementById('nav-usuarios').addEventListener('click', cargarUsuarios);

// Productos


function cargarProductos(event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
    const contenedor1 = document.getElementById('cosas');
    contenedor1.innerHTML = ''; // Vaciar el contenido actual del div 'cosas'
    const limpiar= document.getElementById('tabla-productos');
    limpiar.innerHTML = '';

    const div = document.createElement("div");
    div.classList.add("car");
    div.innerHTML = `
        <div class="container mt-4">
        <h1 style="font-size: 1rem; font-weight: bold;">Productos</h1>
            <div class="d-flex justify-content-between mb-3">
                <button class="btn btn-custom" id="btn-nuevo-producto"><i class="fa-solid fa-plus"></i> Nuevo</button>
                <div class="input-group" style="width: auto;">
                    <input style="border: solid black;" type="text" id="buscar-productos" class="form-control" placeholder="Buscar" aria-label="Buscar" aria-describedby="search-icon">
                    <span style="background-color:#233588;" class="input-group-text" id="search-icon"><i class="fa-solid fa-search"></i></span>
                </div>
            </div>
        </div>
        <div id="tabla-productos"></div>
    `;

    contenedor1.append(div);

    const contenedor = document.getElementById('tabla-productos');
    generarTablaProductos(productos, contenedor);

    // Agregar evento de búsqueda en tiempo real
    document.getElementById('buscar-productos').addEventListener('input', (e) => {
        const termino = e.target.value.toLowerCase();
        const productosFiltrados = productos.filter(producto => producto.titulo.toLowerCase().includes(termino));
        generarTablaProductos(productosFiltrados, contenedor);
    });

    // Mostrar el formulario para agregar un nuevo producto al hacer clic en "Nuevo"
    document.getElementById('btn-nuevo-producto').addEventListener('click', mostrarFormularioNuevoProducto);
}

function mostrarFormularioNuevoProducto() {
    const contenedor1 = document.getElementById('cosas');
    contenedor1.innerHTML = ''; // Vaciar el contenido actual del div 'cosas'

    const div = document.createElement("div");
    div.classList.add("car");
    div.innerHTML = `
        <div class="container mt-4">
            <h2>Agregar Nuevo Producto</h2>
            <form id="form-nuevo-producto">
                <div class="mb-3">
                    <label for="id" class="form-label">ID</label>
                    <input type="text" class="form-control" id="id" required>
                </div>
                <div class="mb-3">
                    <label for="titulo" class="form-label">Título</label>
                    <input type="text" class="form-control" id="titulo" required>
                </div>
                <div class="mb-3">
                    <label for="imagen" class="form-label">Imagen</label>
                    <input type="file" class="form-control" id="imagen" accept="image/*" required>
                </div>
                <div class="mb-3">
                    <label for="marca" class="form-label">Marca</label>
                    <input type="text" class="form-control" id="marca" required>
                </div>
                <div class="mb-3">
                    <label for="deporte" class="form-label">Deporte</label>
                    <input type="text" class="form-control" id="deporte" required>
                </div>
                <div class="mb-3">
                    <label for="precio" class="form-label">Precio</label>
                    <input type="number" class="form-control" id="precio"  min="1" max="100" required>
                </div>
                <div class="mb-3">
                    <label for="cantidad" class="form-label">Cantidad</label>
                    <input type="number" class="form-control" id="cantidad"  min="1" max="100" required>
                </div>
                <div class="mb-3">
                    <label for="estado" class="form-label">Estado</label>
                    <select class="form-select" id="estado" required>
                        <option value="Activo">Activo</option>
                        <option value="Inactivo">Inactivo</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-primary">Agregar Producto</button>
                <button type="button" class="btn btn-secondary" id="btn-cancelar">Cancelar</button>
            </form>
        </div>
    `;

    contenedor1.append(div);

    // Manejar el envío del formulario para agregar un nuevo producto
    document.getElementById('form-nuevo-producto').addEventListener('submit', (e) => {
        e.preventDefault();

        const reader = new FileReader();
        const file = document.getElementById('imagen').files[0];
        reader.readAsDataURL(file);

        reader.onload = function () {
            const nuevoProducto = {
                id: document.getElementById('id').value,
                titulo: document.getElementById('titulo').value,
                imagen: reader.result,
                categoria: {
                    marca: document.getElementById('marca').value,
                    deporte: document.getElementById('deporte').value
                },
                precio: document.getElementById('precio').value,
                cantidad: document.getElementById('cantidad').value,
                estado: document.getElementById('estado').value
            };
            productos.push(nuevoProducto);
            cargarProductos(e); // Recargar la lista de productos para mostrar el nuevo producto
        };
    });

    // Ocultar el formulario al hacer clic en "Cancelar"
    document.getElementById('btn-cancelar').addEventListener('click', cargarProductos);
}

function mostrarFormularioEditarProducto(id) {
    const producto = productos.find(producto => producto.id === id);
    if (!producto) return;

    const contenedor1 = document.getElementById('cosas');
    contenedor1.innerHTML = ''; // Vaciar el contenido actual del div 'cosas'

    const div = document.createElement("div");
    div.classList.add("car");
    div.innerHTML = `
<div class="container mt-4">
    <h2>Editar Producto</h2>
    <form id="form-editar-producto">
        <div class="mb-3">
            <label for="imagen" class="form-label">Imagen</label>
            <input type="file" class="form-control" id="imagen" accept="image/*">
            <img id="imagen-preview" src="${producto.imagen}" alt="${producto.titulo}" width="50">
        </div>
        <div class="mb-3">
            <label for="precio" class="form-label">Precio</label>
            <input type="number" class="form-control" id="precio" value="${producto.precio}" min="1" required>
        </div>
        <div class="mb-3">
            <label for="cantidad" class="form-label">Cantidad</label>
            <input type="number" class="form-control" id="cantidad" value="${producto.cantidad}" min="1" max="100" required>
        </div>
        <button type="submit" class="btn btn-primary">Guardar Cambios</button>
        <button type="button" class="btn btn-secondary" id="btn-cancelar">Cancelar</button>
    </form>
</div>


    `;

    contenedor1.append(div);

    // Manejar el envío del formulario para editar un producto
    document.getElementById('form-editar-producto').addEventListener('submit', (e) => {
        e.preventDefault();

        const file = document.getElementById('imagen').files[0];

        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);

            reader.onload = function () {
                producto.imagen = reader.result;
                producto.precio = document.getElementById('precio').value;
                producto.cantidad = document.getElementById('cantidad').value;
                cargarProductos(e); // Recargar la lista de productos para mostrar los cambios
            };
        } else {
            producto.precio = document.getElementById('precio').value;
            producto.cantidad = document.getElementById('cantidad').value;
            cargarProductos(e); // Recargar la lista de productos para mostrar los cambios
        }
    });

    // Ocultar el formulario al hacer clic en "Cancelar"
    document.getElementById('btn-cancelar').addEventListener('click', cargarProductos);
}

function cambiarEstadoProducto(id) {
    const producto = productos.find(producto => producto.id === id);
    if (producto) {
        producto.estado = producto.estado === 'Activo' ? 'Inactivo' : 'Activo';
        cargarProductos(new Event('click')); // Recargar la lista de productos para reflejar el cambio de estado
    }
}

function generarTablaProductos(productos, contenedor) {
    contenedor.innerHTML = ''; // Vaciar el contenido del contenedor antes de agregar la nueva tabla
    let tabla = '<table>';
    tabla += '<tr><th>ID</th><th>Título</th><th>Imagen</th><th>Marca</th><th>Deporte</th><th>Precio</th><th>Cantidad</th><th>Estado</th><th>Acciones</th></tr>';

    productos.forEach(producto => {
        tabla += `<tr>
            <td>${producto.id}</td>
            <td>${producto.titulo}</td>
            <td><img src="${producto.imagen}" alt="${producto.titulo}" width="50"></td>
            <td>${producto.categoria.marca}</td>
            <td>${producto.categoria.deporte}</td>
            <td>${producto.precio}</td>
            <td>${producto.cantidad}</td>
            <td>${producto.estado}</td>
            <td>
                <button onclick="mostrarFormularioEditarProducto('${producto.id}')"><i class="fa-solid fa-pen"></i></button>
                <button onclick="cambiarEstadoProducto('${producto.id}')"><i class="fa-solid fa-delete-left"></i></button>
            </td>
        </tr>`;
    });

    tabla += '</table>';
    contenedor.innerHTML = tabla;
}

document.getElementById('nav-productos').addEventListener('click', cargarProductos);

// Clientes


function cargarClientes(event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
    const contenedor1 = document.getElementById('cosas');
    contenedor1.innerHTML = ''; // Vaciar el contenido actual del div 'cosas'
    const limpiar= document.getElementById('tabla-productos');
    limpiar.innerHTML = '';
    const div = document.createElement("div");
    div.classList.add("car");
    div.innerHTML = `
        <div class="container mt-4">
        <h1 style="font-size: 1rem; font-weight: bold;">Clientes</h1>
            <div class="d-flex justify-content-between mb-3">
                <button class="btn btn-custom" id="btn-nuevo-cliente"><i class="fa-solid fa-plus"></i> Nuevo</button>
                <div class="input-group" style="width: auto;">
                    <input style="border: solid black;" type="text" id="buscar-clientes" class="form-control" placeholder="Buscar" aria-label="Buscar" aria-describedby="search-icon">
                    <span style="background-color:#233588;" class="input-group-text" id="search-icon"><i class="fa-solid fa-search"></i></span>
                </div>
            </div>
        </div>
        <div id="tabla-clientes"></div>
    `;

    contenedor1.append(div);

    const contenedor = document.getElementById('tabla-clientes');
    generarTablaClientes(Clientes, contenedor);

    // Agregar evento de búsqueda en tiempo real
    document.getElementById('buscar-clientes').addEventListener('input', (e) => {
        const termino = e.target.value.toLowerCase();
        const clientesFiltrados = Clientes.filter(cliente => cliente.nombre.toLowerCase().includes(termino));
        generarTablaClientes(clientesFiltrados, contenedor);
    });

    // Mostrar el formulario para agregar un nuevo cliente al hacer clic en "Nuevo"
    document.getElementById('btn-nuevo-cliente').addEventListener('click', mostrarFormularioNuevoCliente);
}

function mostrarFormularioNuevoCliente() {
    const contenedor1 = document.getElementById('cosas');
    contenedor1.innerHTML = ''; // Vaciar el contenido actual del div 'cosas'

    const div = document.createElement("div");
    div.classList.add("car");
    div.innerHTML = `
        <div class="container mt-4">
            <h2>Agregar Nuevo Cliente</h2>
            <form id="form-nuevo-cliente">
                <div class="mb-3">
                    <label for="id" class="form-label">ID</label>
                    <input type="text" class="form-control" id="id" required>
                </div>
                <div class="mb-3">
                    <label for="nombre" class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="nombre" required>
                </div>
                <div class="mb-3">
                    <label for="apellido" class="form-label">Apellido</label>
                    <input type="text" class="form-control" id="apellido" required>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="email" required>
                </div>
                <div class="mb-3">
                    <label for="telefono" class="form-label">Teléfono</label>
                    <input type="text" class="form-control" id="telefono" required>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Contraseña</label>
                    <input type="password" class="form-control" id="password" required>
                </div>
                <div class="mb-3">
                    <label for="estado" class="form-label">Estado</label>
                    <select class="form-select" id="estado" required>
                        <option value="activo">Activo</option>
                        <option value="inactivo">Inactivo</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-primary">Agregar Cliente</button>
                <button type="button" class="btn btn-secondary" id="btn-cancelar">Cancelar</button>
            </form>
        </div>
    `;

    contenedor1.append(div);

    // Manejar el envío del formulario para agregar un nuevo cliente
    document.getElementById('form-nuevo-cliente').addEventListener('submit', (e) => {
        e.preventDefault();
        const nuevoCliente = {
            id: document.getElementById('id').value,
            nombre: document.getElementById('nombre').value,
            apellido: document.getElementById('apellido').value,
            email: document.getElementById('email').value,
            telefono: document.getElementById('telefono').value,
            password: document.getElementById('password').value,
            estado: document.getElementById('estado').value
        };
        Clientes.push(nuevoCliente);
        cargarClientes(e); // Recargar la lista de clientes para mostrar el nuevo cliente
    });

    // Ocultar el formulario al hacer clic en "Cancelar"
    document.getElementById('btn-cancelar').addEventListener('click', cargarClientes);
}

function mostrarFormularioEditarCliente(id) {
    const cliente = Clientes.find(cliente => cliente.id === id);
    if (!cliente) return;

    const contenedor1 = document.getElementById('cosas');
    contenedor1.innerHTML = ''; // Vaciar el contenido actual del div 'cosas'

    const div = document.createElement("div");
    div.classList.add("car");
    div.innerHTML = `
        <div class="container mt-4">
            <h2>Editar Cliente</h2>
            <form id="form-editar-cliente">
                <div class="mb-3">
                    <label for="nombre" class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="nombre" value="${cliente.nombre}" required>
                </div>
                <div class="mb-3">
                    <label for="apellido" class="form-label">Apellido</label>
                    <input type="text" class="form-control" id="apellido" value="${cliente.apellido}" required>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="email" value="${cliente.email}" required>
                </div>
                <div class="mb-3">
                    <label for="telefono" class="form-label">Teléfono</label>
                    <input type="text" class="form-control" id="telefono" value="${cliente.telefono}" required>
                </div>
                <button type="submit" class="btn btn-primary">Guardar Cambios</button>
                <button type="button" class="btn btn-secondary" id="btn-cancelar">Cancelar</button>
            </form>
        </div>
    `;

    contenedor1.append(div);

    // Manejar el envío del formulario para editar un cliente
    document.getElementById('form-editar-cliente').addEventListener('submit', (e) => {
        e.preventDefault();
        cliente.nombre = document.getElementById('nombre').value;
        cliente.apellido = document.getElementById('apellido').value;
        cliente.email = document.getElementById('email').value;
        cliente.telefono = document.getElementById('telefono').value;
        cargarClientes(e); // Recargar la lista de clientes para mostrar los cambios
    });

    // Ocultar el formulario al hacer clic en "Cancelar"
    document.getElementById('btn-cancelar').addEventListener('click', cargarClientes);
}

function cambiarEstadoCliente(id) {
    const cliente = Clientes.find(cliente => cliente.id === id);
    if (cliente) {
        cliente.estado = cliente.estado === 'activo' ? 'inactivo' : 'activo';
        cargarClientes(new Event('click')); // Recargar la lista de clientes para reflejar el cambio de estado
    }
}

function generarTablaClientes(Clientes, contenedor) {
    contenedor.innerHTML = ''; // Vaciar el contenido del contenedor antes de agregar la nueva tabla
    let tabla = '<table>';
    tabla += '<tr><th>ID</th><th>Nombre</th><th>Email</th><th>Telefono</th><th>Estado</th><th>Acciones</th></tr>';

    Clientes.forEach(cliente => {
        tabla += `<tr>
            <td>${cliente.id}</td>
            <td>${cliente.nombre} ${cliente.apellido}</td>
            <td>${cliente.email}</td>
            <td>${cliente.telefono}</td>
            <td>${cliente.estado}</td>
            <td>
                <button onclick="mostrarFormularioEditarCliente('${cliente.id}')"><i class="fa-solid fa-pen"></i></button>
                <button onclick="cambiarEstadoCliente('${cliente.id}')"><i class="fa-solid fa-delete-left"></i></button>
            </td>
        </tr>`;
    });

    tabla += '</table>';
    contenedor.innerHTML = tabla;
}

document.getElementById('nav-clientes').addEventListener('click', cargarClientes);

// Proveedores
function cargarProveedores(event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
    const contenedor1 = document.getElementById('cosas');
    

   

    const div = document.createElement("div");
    div.classList.add("car");
    div.innerHTML = `
        <div class="container mt-4">
        <h1 style="font-size: 1rem;  font-weight: bold;">Proveedores</h1>
            <div class="d-flex justify-content-between mb-3">
                <button class="btn btn-custom"><i class="fa-solid fa-plus"></i> Nuevo</button>
              
                <div class="input-group" style="width: auto;">
                    <input style="border: solid black; type="text" id="buscar-proveedores" class="form-control" placeholder="Buscar" aria-label="Buscar" aria-describedby="search-icon">
                    <span style="background-color:#233588 ; "  class="input-group-text" id="search-icon"><i class="fa-solid fa-search"></i></span>
                </div>
            </div>
        </div>
        <div id="tabla-proveedores"></div>
    `;

    contenedor1.append(div);

    const contenedor = document.getElementById('tabla-proveedores');
    generarTablaProveedores(Proveedores, contenedor);

    // Agregar evento de búsqueda en tiempo real
    document.getElementById('buscar-proveedores').addEventListener('input', (e) => {
        const termino = e.target.value.toLowerCase();
        const proveedoresFiltrados = Proveedores.filter(proveedor => proveedor.nombre.toLowerCase().includes(termino));
        generarTablaProveedores(proveedoresFiltrados, contenedor);
    });
}

function generarTablaProveedores(Proveedores, contenedor) {
    contenedor.innerHTML = ''; // Vaciar el contenido del contenedor antes de agregar la nueva tabla
    let tabla = '<div class="table-container"><table>';
    tabla += '<tr><th>ID</th><th>Nombre</th><th>Email</th><th>Telefono</th><th>Dirección</th><th>Estado</th><th>Acciones</th></tr>';

    Proveedores.forEach(proveedor => {
        tabla += `<tr>
            <td>${proveedor.id}</td>
            <td>${proveedor.nombre} ${proveedor.apellido}</td>
            <td>${proveedor.email}</td>
            <td>${proveedor.telefono}</td>
            <td>${proveedor.Direccion}</td>
            <td>${proveedor.estado}</td>
            <td>
                <button onclick="editarProveedor('${proveedor.id}')"><i class="fa-solid fa-pen"></i></button>
                <button onclick="darDeBajaProveedor('${proveedor.id}')"><i class="fa-solid fa-delete-left"></i></button>
            </td>
        </tr>`;
    });

    tabla += '</table></div>';
    contenedor.innerHTML = tabla;
}

document.getElementById('nav-proveedor').addEventListener('click', cargarProveedores);

function cargarProveedores(event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
    const contenedor1 = document.getElementById('cosas');
    contenedor1.innerHTML = ''; // Vaciar el contenido actual del div 'cosas'

    const div = document.createElement("div");
    div.classList.add("car");
    div.innerHTML = `
        <div class="container mt-4">
        <h1 style="font-size: 1rem; font-weight: bold;">Proveedores</h1>
            <div class="d-flex justify-content-between mb-3">
                <button class="btn btn-custom" id="btn-nuevo-proveedor"><i class="fa-solid fa-plus"></i> Nuevo</button>
                <div class="input-group" style="width: auto;">
                    <input style="border: solid black;" type="text" id="buscar-proveedores" class="form-control" placeholder="Buscar" aria-label="Buscar" aria-describedby="search-icon">
                    <span style="background-color:#233588;" class="input-group-text" id="search-icon"><i class="fa-solid fa-search"></i></span>
                </div>
            </div>
        </div>
        <div id="tabla-proveedores"></div>
    `;

    contenedor1.append(div);

    const contenedor = document.getElementById('tabla-proveedores');
    generarTablaProveedores(Proveedores, contenedor);

    // Agregar evento de búsqueda en tiempo real
    document.getElementById('buscar-proveedores').addEventListener('input', (e) => {
        const termino = e.target.value.toLowerCase();
        const proveedoresFiltrados = Proveedores.filter(proveedor => proveedor.nombre.toLowerCase().includes(termino));
        generarTablaProveedores(proveedoresFiltrados, contenedor);
    });

    // Mostrar el formulario para agregar un nuevo proveedor al hacer clic en "Nuevo"
    document.getElementById('btn-nuevo-proveedor').addEventListener('click', mostrarFormularioNuevoProveedor);
}


function mostrarFormularioNuevoProveedor() {
    const contenedor1 = document.getElementById('cosas');
    contenedor1.innerHTML = ''; // Vaciar el contenido actual del div 'cosas'

    const div = document.createElement("div");
    div.classList.add("car");
    div.innerHTML = `
        <div class="container mt-4">
            <h2>Agregar Nuevo Proveedor</h2>
            <form id="form-nuevo-proveedor">
                <div class="mb-3">
                    <label for="id" class="form-label">ID</label>
                    <input type="text" class="form-control" id="id" required>
                </div>
                <div class="mb-3">
                    <label for="nombre" class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="nombre" required>
                </div>
                <div class="mb-3">
                    <label for="apellido" class="form-label">Apellido</label>
                    <input type="text" class="form-control" id="apellido" required>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="email" required>
                </div>
                <div class="mb-3">
                    <label for="telefono" class="form-label">Teléfono</label>
                    <input type="text" class="form-control" id="telefono" required>
                </div>
                <div class="mb-3">
                    <label for="direccion" class="form-label">Dirección</label>
                    <input type="text" class="form-control" id="direccion" required>
                </div>
                <div class="mb-3">
                    <label for="estado" class="form-label">Estado</label>
                    <select class="form-select" id="estado" required>
                        <option value="activo">Activo</option>
                        <option value="inactivo">Inactivo</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-primary">Agregar Proveedor</button>
                <button type="button" class="btn btn-secondary" id="btn-cancelar">Cancelar</button>
            </form>
        </div>
    `;

    contenedor1.append(div);

    // Manejar el envío del formulario para agregar un nuevo proveedor
    document.getElementById('form-nuevo-proveedor').addEventListener('submit', (e) => {
        e.preventDefault();
        const nuevoProveedor = {
            id: document.getElementById('id').value,
            nombre: document.getElementById('nombre').value,
            apellido: document.getElementById('apellido').value,
            email: document.getElementById('email').value,
            telefono: document.getElementById('telefono').value,
            Direccion: document.getElementById('direccion').value,
            estado: document.getElementById('estado').value
        };
        Proveedores.push(nuevoProveedor);
        cargarProveedores(e); // Recargar la lista de proveedores para mostrar el nuevo proveedor
    });

    // Ocultar el formulario al hacer clic en "Cancelar"
    document.getElementById('btn-cancelar').addEventListener('click', cargarProveedores);
}

function mostrarFormularioEditarProveedor(id) {
    const proveedor = Proveedores.find(proveedor => proveedor.id === id);
    if (!proveedor) return;

    const contenedor1 = document.getElementById('cosas');
    contenedor1.innerHTML = ''; // Vaciar el contenido actual del div 'cosas'

    const div = document.createElement("div");
    div.classList.add("car");
    div.innerHTML = `
        <div class="container mt-4">
            <h2>Editar Proveedor</h2>
            <form id="form-editar-proveedor">
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="email" value="${proveedor.email}" required>
                </div>
                <div class="mb-3">
                    <label for="telefono" class="form-label">Teléfono</label>
                    <input type="text" class="form-control" id="telefono" value="${proveedor.telefono}" required>
                </div>
                <div class="mb-3">
                    <label for="direccion" class="form-label">Dirección</label>
                    <input type="text" class="form-control" id="direccion" value="${proveedor.Direccion}" required>
                </div>
                <button type="submit" class="btn btn-primary">Guardar Cambios</button>
                <button type="button" class="btn btn-secondary" id="btn-cancelar">Cancelar</button>
            </form>
        </div>
    `;

    contenedor1.append(div);

    // Manejar el envío del formulario para editar un proveedor
    document.getElementById('form-editar-proveedor').addEventListener('submit', (e) => {
        e.preventDefault();
        proveedor.email = document.getElementById('email').value;
        proveedor.telefono = document.getElementById('telefono').value;
        proveedor.Direccion = document.getElementById('direccion').value;
        cargarProveedores(e); // Recargar la lista de proveedores para mostrar los cambios
    });

    // Ocultar el formulario al hacer clic en "Cancelar"
    document.getElementById('btn-cancelar').addEventListener('click', cargarProveedores);
}

function cambiarEstadoProveedor(id) {
    const proveedor = Proveedores.find(proveedor => proveedor.id === id);
    if (proveedor) {
        proveedor.estado = proveedor.estado === 'activo' ? 'inactivo' : 'activo';
        cargarProveedores(new Event('click')); // Recargar la lista de proveedores para reflejar el cambio de estado
    }
}

function generarTablaProveedores(Proveedores, contenedor) {
    contenedor.innerHTML = ''; // Vaciar el contenido del contenedor antes de agregar la nueva tabla
    let tabla = '<table>';
    tabla += '<tr><th>ID</th><th>Nombre</th><th>Email</th><th>Telefono</th><th>Dirección</th><th>Estado</th><th>Acciones</th></tr>';

    Proveedores.forEach(proveedor => {
        tabla += `<tr>
            <td>${proveedor.id}</td>
            <td>${proveedor.nombre} ${proveedor.apellido}</td>
            <td>${proveedor.email}</td>
            <td>${proveedor.telefono}</td>
            <td>${proveedor.Direccion}</td>
            <td>${proveedor.estado}</td>
            <td>
                <button onclick="mostrarFormularioEditarProveedor('${proveedor.id}')"><i class="fa-solid fa-pen"></i></button>
                <button onclick="cambiarEstadoProveedor('${proveedor.id}')"><i class="fa-solid fa-delete-left"></i></button>
            </td>
        </tr>`;
    });

    tabla += '</table>';
    contenedor.innerHTML = tabla;
}

document.getElementById('nav-proveedor').addEventListener('click', cargarProveedores);



//ventas 

  // Función para cargar las ventas y mostrarlas en una tabla
  function cargarVentas(event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
    cargarEncabezado();
    
    const contenedorVentas = document.getElementById('tabla-productos');
    contenedorVentas.innerHTML = ''; // Vaciar el contenido actual del div 'cosas'

    let ventas = localStorage.getItem("ventas");
    ventas = JSON.parse(ventas) || [];

    if (ventas.length === 0) {
        contenedorVentas.innerHTML = '<p>No hay ventas registradas.</p>';
        return;
    }

    const tabla = document.createElement("table");
    tabla.classList.add("tabla-ventas");

    // Crear la cabecera de la tabla
    const cabecera = document.createElement("tr");
    cabecera.innerHTML = `
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Email</th>
        <th>Teléfono</th>
        <th>Total</th>
        <th>Impuestos</th>
        <th>Precio Final</th>
       
    `;
    tabla.appendChild(cabecera);

    // Crear las filas de la tabla con los datos de las ventas
    ventas.forEach(venta => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${venta.nombre}</td>
            <td>${venta.apellido}</td>
            <td>${venta.email}</td>
            <td>${venta.telefono}</td>
            <td>${venta.total}</td>
            <td>${venta.impuestos}</td>
            <td>${venta.final}</td>
            
        `;
        tabla.appendChild(fila);
    });

    contenedorVentas.appendChild(tabla);
}


// Función para crear el encabezado
function crearEncabezado() {
    const encabezado = document.createElement("h1");
    encabezado.style.cssText = "font-size: 2rem; color: #233588; text-align: center;";
    encabezado.innerText = "Ventas Realizadas";
    return encabezado;
}

// Función para cargar el encabezado en el div 'cosas'
function cargarEncabezado() {
    const contenedor = document.getElementById('cosas');
    contenedor.innerHTML = ''; // Limpiar el contenido anterior
    const encabezado = crearEncabezado();
    contenedor.appendChild(encabezado);
}

// Agregar evento al enlace de "Ventas"
document.getElementById("nav-ventas").addEventListener("click", cargarVentas);

