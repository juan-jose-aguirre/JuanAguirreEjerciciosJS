/*

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
let tbodyTable1 = document.getElementById("tbodyTable1");
let tbodyTable2 = document.getElementById("tbodyTable2");
let tbodyTable3 = document.getElementById("tbodyTable3");
let tbodyTable4 = document.getElementById("tbodyTable4");
let tbodyTable5 = document.getElementById("tbodyTable5");
fetch("https://dummyjson.com/products")
.then(res => res.json())
.then(data =>{
    // console.log(data);
    let productos = [...data.products];
    pintarTabla(mejoresPorCategorias(productos),["title","category","description","rating"],tbodyTable1);
    pintarTabla(totalStockCategoria(productos),["category","stockTotal"],tbodyTable2);
    pintarTabla(totalWeightCategoria(productos),["category","weightTotal"],tbodyTable3);
    pintarTabla(mayorDescuento(productos),["title","category","price","discountPercentage"],tbodyTable4);
    pintarTabla(tabla5(productos),["category","profit","space"],tbodyTable5);
})
.catch();

function pintarTabla(listaProductos, listaColumnas,dondePintar) {
    console.log(listaProductos);
    dondePintar.innerHTML = "";
    for(let producto of listaProductos){
        let texto = "";
        for(let i = 0; i < listaColumnas.length; i++){
            texto += `<td>${producto[listaColumnas[i]]}</td>`;
            }
        dondePintar.innerHTML += `<tr>${texto}</tr>`;
    }

}

function mejoresPorCategorias(ListaProductos){
    let listaCategorias = Array.from(new Set(ListaProductos.map(producto => producto.category)));
    let arregloProductos = [];
    for(let categoria of listaCategorias){
        let productosCategoria = ListaProductos.filter(producto => producto.category == categoria);
        productosCategoria.sort((a,b) => a.rating - b.rating);
        arregloProductos.push(productosCategoria[productosCategoria.length-1])
    }
    return arregloProductos;
}

function totalStockCategoria(listaProductos){
    let categorias = Array.from(new Set(listaProductos.map(producto => producto.category)));
    let arregloProductos = [];
    for(let categoria of categorias){
        let suma = 0;
        let productosCategoria = listaProductos.filter(producto => producto.category == categoria); 
        productosCategoria.forEach(producto => {
            suma += producto.stock;
        });
        arregloProductos.push({category:categoria,stockTotal:suma})
    }
    arregloProductos.sort((a,b) => b.stockTotal - a.stockTotal);
    return arregloProductos;
}
function totalWeightCategoria(listaProductos){
    let categorias = Array.from(new Set(listaProductos.map(producto => producto.category)));
    let arregloProductos = [];
    for(let categoria of categorias){
        let suma = 0;
        let productosCategoria = listaProductos.filter(producto => producto.category == categoria); 
        productosCategoria.forEach(producto => {
            suma += producto.weight;
        });
        arregloProductos.push({category:categoria,weightTotal:suma})
    }
    arregloProductos.sort((a,b) => b.weightTotal - a.weightTotal);
    return arregloProductos;
}
function mayorDescuento(listaProductos) {
    let arregloParaOrdenar = [...listaProductos];
    arregloParaOrdenar.sort((a,b) => b.discountPercentage - a.discountPercentage);
    let arregloProductos = [];
    for(let i = 0; i < 5; i++){
        arregloProductos.push(arregloParaOrdenar[i]);
    }
    return arregloProductos;
}
function tabla5(listaProductos){
    let categorias = Array.from(new Set(listaProductos.map(producto => producto.category)));
    let arregloCategorias = [];
    for(let categoria of categorias){
        let profit = 0;
        let space = 0;
        let productorPorCategoria = listaProductos.filter(producto => producto.category == categoria );
        productorPorCategoria.forEach(producto =>{
            profit += producto.price * producto.stock;
            space += producto.dimensions.width * producto.stock;
        });
        arregloCategorias.push({category:categoria,profit:profit.toFixed(2),space:space.toFixed(2)});
    }
    return arregloCategorias;
}