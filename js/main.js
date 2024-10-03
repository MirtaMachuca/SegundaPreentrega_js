class Productos {
    constructor(nombre, cantidad, color, talle) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.color = color;
        this.talle = talle;
    }
}

let remeras = [
    new Productos('Principito', 3, 'Blanco', 's'),
    new Productos('Hello', 3, 'Blanco', 'l'),
    new Productos('Kala', 2, 'Negro', 's'),
    new Productos('Karla', 2, 'Negro', 's'),
    new Productos('Kika', 1, 'Fucsia', 'm'),
    new Productos('Hello', 3, 'Bordo', 'l'),
];
let carrito = [];

alert('Bienvenido a la Tienda Online de Dhaka Clothing');

while (true) {
    let respuesta = validar_num('Elige la operación que deseas realizar: \n 1: Agregar Productos al carrito (1) \n 2: Listar Productos agregados (2) \n 3: Eliminar Producto (3)', 1, 3);

    if (respuesta == 1) {
        agregarProducto();
    } else if (respuesta == 2) {
        mostrarProductos();
    } else {
        eliminarProducto();
    }

    if (!confirm('¿Desea continuar operando en el sistema?')) {
        break;
    }
}

function validar_num(texto, min, max) {
    let num = Number(prompt(texto));
    while (isNaN(num) || num < min || num > max) { 
        alert('Ingrese el dato que corresponde');
        num = Number(prompt(texto));
    }
    return num;
}

function agregarProducto() {
    let mensaje = 'Productos disponibles:\n';
    remeras.forEach((prod, index) => {
        mensaje += `${index}. ${prod.nombre} - ${prod.cantidad} disponibles\n`;
    });
    let agregar = prompt(mensaje + '¿Ingrese el nombre del producto que desea agregar?');
    let verificar = remeras.find((producto) => producto.nombre.toLowerCase() === agregar.toLowerCase());
    
    if (verificar) {
        carrito.push(verificar); // Agregamos el objeto completo
        alert('Producto agregado correctamente');
        console.log(carrito);
    } else {
        alert('Ingrese un producto existente');
    }
}

function mostrarProductos() {
    if (carrito.length === 0) {
        alert('No hay productos en el carrito.');
    } else {
        let mensaje = 'Productos en el carrito:\n';
        carrito.forEach((prod, index) => {
            mensaje += `${index + 1}. ${prod.nombre} - ${prod.cantidad} unidades\n`;
        });
        alert(mensaje);
    }
}

function eliminarProducto() {
    if (carrito.length === 0) {
        alert('No hay productos en el carrito para eliminar.');
        return;
    }
    
    let mensaje = 'Productos en el carrito:\n';
    carrito.forEach((prod, index) => {
        mensaje += `${index + 1}. ${prod.nombre}\n`;
    });
    
    let eliminar = prompt(mensaje + '¿Ingrese el nombre del producto que desea eliminar?');
    let verificar = carrito.find((producto) => producto.nombre.toLowerCase() === eliminar.toLowerCase());

    if (verificar) {
        carrito = carrito.filter(producto => producto.nombre.toLowerCase() !== eliminar.toLowerCase());
        alert('El producto se eliminó correctamente');
    } else {
        alert('Ingrese un producto existente');
    }
}
