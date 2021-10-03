/*
let nombre = prompt("Ingresar Nombre");
let apellido = prompt("Ingresar Apellido");
let edad = prompt("Ingresar Edad");
let contraseña = "TrazoDulce"
let pass = prompt("Ingresar contraseña")
let intentos = 5
console.log(nombre);
console.log(apellido);
while (pass != contraseña && intentos > 0){
    alert(`Contraseña incorrecta. Te quedan ${intentos} intentos`);
    intentos --
    pass = prompt("Ingresar contraseña")

    let validar = confirm("¿Desea cambiar la contraseña?")

    if (validar) {
        let passOld = prompt("Ingresar contraseña vieja")
        if (passOld == contraseña){
            contraseña = prompt("Ingresar nueva contraseña")
        }
    }
}
const suma = (a,b) => a + b;
const resta = (a,b) => a - b;
const iva = x => x * 0.21;
let precioProducto = Number(prompt (`Ingresar Precio`)); 
let precioDescuento = Number(prompt (`Ingresar Descuento`));  
let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), precioDescuento); 
alert (nuevoPrecio);
*/

class Productos {
    constructor(nombreP, precioP, stockP) {
        this.nombre  = nombreP;
        this.precio  = precioP;
        this.stock = stockP;
        this.disponible = true;
    }
    comprar(cantidad) {
        if (this.stock <= 0) {
            console.log("Stock Agotado")
            this.disponible = false
        } else {
            this.stock = this.stock - cantidad
            console.log (`Compraste ${this.nombre} a ${this.precio * cantidad}`)
        }
    }
}
const producto1 = new Productos("Tarta Frutilla", "$1200" , 20 , true);
const producto2 = new Productos("Cheesecake", "1500", 20, true);

