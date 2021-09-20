let nombre = prompt("Ingresar Nombre");
let apellido = prompt("Ingresar Apellido");
let edad = prompt("Ingresar Edad");
let contraseña = "TrazoDulce"
let pass = prompt("Ingresar contraseña")
console.log(nombre);
console.log(apellido);
console.log(edad)
if(edad >= 18 && pass == contraseña){
    alert("Bienvenido/a");
} else if (edad <= 18 && pass != contraseña){
    alert("No se han podido validar los datos")
} else if (edad < 18){
    alert("Sos menor de edad, no puede ingresar")
} else if (pass != contraseña){
    alert("Error al ingresar la contraseña")
} 