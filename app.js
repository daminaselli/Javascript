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
        nombre : $("#nombre").value,
        email : $("#email").value,
        telefono : $("#telefono").value,
        producto : $("#producto").value,
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
        $("#tabla").innerHTML += `
        <tr>
            <td>${obj.nombre}</td>
            <td>${obj.email}</td>
            <td>${obj.telefono}</td>
            <td>${obj.producto}</td>
        </tr>
        `
    });
}

$("#btn").on("click", (e) => {
    e.preventDefault
    guardarBaseDatos()
})
if(localStorage.getItem("listaProductos") !=null ) {
    verDatos()
}

window.addEventListener("load", () => {
    console.log('Imagen lista');
});
