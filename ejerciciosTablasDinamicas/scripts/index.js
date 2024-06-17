/*
Taller Lógica 

data Api: https://dummyjson.com/products

1. Crear una tabla con las siguientes columnas
name | category | description | image | price | stock | weight | rating 

en esta tabla se organizaran todos los elementos encontrados en la data y tendremos dos filtros, tendrá una input de tipo select en el que le permitirá escoger una de las columnas y dos checkbox con los valores de ascendente y descendente, dependiendo de estas opciones escogidas la tabla se renderizara respetando ese orden
**************************
2. Crear tablas de estadísticas y completarlas según lo solicitado

Tabla 1
category | rating | name | description
En esta tabla mostrar el elemento con el mejor rating de cada categoría, esta tabla tendrá tantas filas como categoría tenga la data

Tabla 2
category | stock Total
En esta tabla mostrar organizadas las categoría dependiendo de su suma total del stock 

Tabla 3
category | weight Total
En esta tabla mostrar organizadas las categoría dependiendo de su suma total del peso

Tabla 4
name | category | Price | discountPercentage
Traer los 5 elementos con el mayor porcentaje de descuento 

Tabla 5
category | profit | occupied space
Traer todas la categoría y llenar las columnas solicitadas, profit = precio*stock de todos los elementos de la categoría, occupied space = stock*dimensiones-width de todos los elementos de la categoria
 
 */
let tbodyTableProducts = document.getElementById("tbodyTableProducts");
let divRadios = document.getElementById("divRadios");
let filtroColumna = document.getElementById("filtroColumna");

fetch("https://dummyjson.com/products")
.then(res => res.json())
.then(data => {

    let productos = [...data.products]
    pintarTabla(productos,tbodyTableProducts);
    console.log(productos);
    divRadios.addEventListener("change", ()=>{
        filtrar(productos,tbodyTableProducts)
    });
    filtroColumna.addEventListener("change", ()=> {
        filtrar(productos,tbodyTableProducts);
    });

})
.catch();

function ordenarArreglo(listaProductos,propiedad,sentido){
    let listaOrdenada = [];
    if(propiedad == "title" || propiedad == "category" || propiedad == "description"){
        if(sentido == "ascendente"){
            listaOrdenada = [...listaProductos].sort((a,b) => b[propiedad].localeCompare(a[propiedad]))
        }else{
            listaOrdenada = [...listaProductos].sort((a,b) => a[propiedad].localeCompare(b[propiedad]))
        }
    }else{
        if(sentido == "ascendente"){
            listaOrdenada = [...listaProductos].sort((a,b) => a[propiedad] - b[propiedad])
        }else{
            listaOrdenada = [...listaProductos].sort((a,b) => b[propiedad] - a[propiedad])
        }
    }
    return listaOrdenada;
}

function pintarTabla(listaProductos, dondePintar){
    dondePintar.innerHTML = "";
    let i = 1;
    for(let producto of listaProductos){
        dondePintar.innerHTML += `
        <tr>
            <td>
                ${i}
            </td>
            <td>
                ${producto.title}
            </td>
            <td>
                ${producto.category}
            </td>
            <td>
                ${producto.description}
            </td>
            <td class="w-25">
                <img src="${producto.images[0]}" class="w-50" alt="${producto.title}">
            </td>
            <td>
                💲${producto.price}
            </td>
            <td>
                ${producto.stock}
            </td>
            <td>
                ${producto.weight}
            </td>
            <td>
                ${producto.rating}⭐
            </td>
        </tr>
        `;
        i++
    }
}

function filtrar(listaProductos,dondePintar){
    let filtroRadio = document.querySelector("input[type=radio]:checked");
    if(filtroColumna.value != "none"){
        let nuevoArreglo = ordenarArreglo(listaProductos,filtroColumna.value,filtroRadio.value);
        pintarTabla(nuevoArreglo, dondePintar)
    }else{
        pintarTabla(listaProductos, dondePintar)

    }
}