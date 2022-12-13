console.log("Hello World");

class Frutas {
    constructor(nombre, cantidad, precio) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
    }
}

const fruta1 = new Frutas("mango", 4, 2000);
const fruta2 = new Frutas("pera", 2, 3000);
const fruta3 = new Frutas("pinia", 6, 5000);
const fruta4 = new Frutas("manzana", 5, 1500);

const inventarioFrutas = [fruta1, fruta2, fruta3, fruta4];

function menu() {
    alert("Bienvenido a el inventario de Todo En frutas");
    let opcion = prompt(
        "Ingrese la opcion que desee realizar: \n 1.) Ingresar producto \n 2.) Eliminar un producto \n 3.) Mostrar todo el inventario \n 4.) Modificar inventario"
    );
    return opcion;
}

function ingresoProducto() {
    let nombre = prompt("Ingrese el nombre de el producto");
    let cantidad = prompt("Ingrese la cantidad del producto");
    let precio = prompt("Ingrese el precio del producto");
    let frutas = new Frutas(nombre, cantidad, precio);
    inventarioFrutas.push(frutas);
    console.log(inventarioFrutas);
}

function eliminarProducto() {
    let nombreEliminar = prompt("Ingrese el nombre del producto");
    let producto = inventarioFrutas.find(
        (frutas) => frutas.nombre === nombreEliminar
    );
    let indice = inventarioFrutas.indexOf(producto);
    inventarioFrutas.splice(indice, 1);
    console.log(inventarioFrutas);
}

function moodificarInventario() {
    let nombreModificar = prompt("Ingrese el nombre de la fruta a modificar");
    let producto = inventarioFrutas.find(
        (frutas) => frutas.nombre === nombreModificar
    );
    let indice = inventarioFrutas.indexOf(producto);
    let nombre = prompt("Digite el nombre de la fruta");
    let cantidad = prompt("Digite la cantidad");
    let precio = prompt("Digite el precio de la fruta");
    let frutaModificada = new Frutas(nombre, cantidad, precio);
    inventarioFrutas.splice(indice, 1, frutaModificada);
    console.log(inventarioFrutas);
}

function inventario() {
    console.log(inventarioFrutas);
}

let opcion = menu();
switch (opcion) {
    case "1":
        ingresoProducto();
        break;
    case "2":
        eliminarProducto();
        break;

    case "3":
        inventario();
        break;

    case "4":
        moodificarInventario();
        break;

    default:
        alert("Opcion incorrecta");
        break;
}
