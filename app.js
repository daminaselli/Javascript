class Productos {
    constructor(nombreP, precioP, stockP, disponibleP) {
        this.nombre  = nombreP;
        this.precio  = precioP;
        this.stock = stockP;
        this.disponible = disponibleP;
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

/*
let listaProductos[]

listaProductos.push(new Productos("Tarta Frutilla", "$1200" , 20 , true))
listaProductos.push(new Productos("Cheesecake Frutilla", "$1500" , 20 , true))
listaProductos.push(new Productos("Dripcake", "$2000" , 20 , true))
listaProductos.push(new Productos("Number Cake", "$1800" , 20 , true))
listaProductos.push(new Productos("Lemon Pie", "$1200" , 20 , true))
listaProductos.push(new Productos("Tarta Oreo", "$1300" , 20 , true))
listaProductos.push(new Productos("Tarta Frutilla", "$1200" , 20 , true))

let search = prompt("¿Qué querés comprar");
let buscadorMultiple = listaProductos.filter(obj => obj.nombre === search)
alert(buscadorMultiple);
*/



