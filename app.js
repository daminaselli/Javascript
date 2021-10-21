class Productos {
    constructor ({
        nombre,
        email,
        telefono,
        producto,
    }){
    this.nombre = nombre;
    this.email = email;
    this.telefono = telefono;
    this. producto = producto;
    }
}
let listaProductos = [];

const agregarProductos = () => {
    const producto = new Productos ({
        nombre : document.getElementById ("nombre").value,
        email : document.getElementById ("email").value,
        telefono : document.getElementById ("telefono").value,
        producto : document.getElementById ("producto").value,
    })
    return producto
}

const agregarListaProductos = (lista) => {
    lista.push(agregarProductos())
    return lista
}

const guardarBaseDatos = () => {
    listaProductos = verificarLista()
    localStorage.setItem("listaProductos", JSON.stringify(listaProductos))
}

const verificarLista = () => {
    let dato;
    if(localStorage.setItem("listaProductos") != null) {
        dato = agregarListaProdcutos(JSON.parse(localStorage.setItem("listaProductos")))
        return dato
    } else{
        agregarListaProductos(listaProductos)
        dato = listaProductos
        return dato
    }
}

const verDatos = () => {
    verificarLista().forEach(obj => {
        document.getElementById("tabla").innerHTML += `
        <tr>
            <td>${obj.nombre}</td>
            <td>${obj.email}</td>
            <td>${obj.telefono}</td>
            <td>${obj.producto}</td>
        </tr>
        `
    });
}

document.getElementById("btn").addEventListener("click", (e) => {
    e.preventDefault
    guardarBaseDatos()
})
if(localStorage.getItem("listaProductos") !=null ) {
    verDatos()
}