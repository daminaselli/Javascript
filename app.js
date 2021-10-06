class Productos {
    constructor(nombre, precio, stock, disponible) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.disponible = disponible;
    }
    comprar(cantidad) {
        if (this.stock <= 0) {
            console.log ("Stock Agotado")
            this.disponible = false
        } else {
            this.stock = this.stock - cantidad
            console.log (`Compraste ${this.nombre} a ${this.precio * cantidad}`)
        }
    }
}
const producto1 = new Productos("Tarta Frutilla", 1200, 20, true);
const producto2 = new Productos("Cheesecake Frutilla", 1500 , 20 , true);
const producto3 = new Productos("Dripcake", 2000 , 20 , true);
const producto4 = new Productos("Number Cake", 1800 , 20 , true);
const producto5 = new Productos("Lemon Pie", 1200, 20, true);
const producto6 = new Productos("Tarta Oreo", 1300 , 20 , true);
const producto7 = new Productos("Selva Negra", 1200 , 20 , true);

console.log(producto1.comprar);
console.log(producto2.comprar);
console.log(producto3.comprar);
console.log(producto4.comprar);
console.log(producto5.comprar);
console.log(producto6.comprar);
console.log(producto7.comprar);

const listaProductos = [];

listaProductos.push(new Productos("Tarta Frutilla", 1200 , 20 , true))
listaProductos.push(new Productos("Cheesecake Frutilla", 1500 , 20 , true))
listaProductos.push(new Productos("Dripcake", 2000 , 20 , true))
listaProductos.push(new Productos("Number Cake", 1800 , 20 , true))
listaProductos.push(new Productos("Lemon Pie", 1200 , 20 , true))
listaProductos.push(new Productos("Tarta Oreo", 1300 , 20 , true))
listaProductos.push(new Productos("Selva Negra", 1200 , 20 , true))

listaProductos.sort((a,b) => {
    if(a.nombre > b.nombre) {
        return 1
    }
    if (a.nombre < b.nombre){
        return -1
    }
    return 0
})

const search = prompt("¿Qué querés comprar");
const buscadorMultiple = listaProductos.filter(obj => obj.nombre === search)
console.log(buscadorMultiple);




