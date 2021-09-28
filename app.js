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
*/
const suma = (a,b) => a + b;
const resta = (a,b) => a - b;
const iva = x => x * 0.21;
let precioProducto = Number(prompt (`Ingresar Precio`)); 
let precioDescuento = Number(prompt (`Ingresar Descuento`));  
let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), precioDescuento); 
alert (nuevoPrecio);