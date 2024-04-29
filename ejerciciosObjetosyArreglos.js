/*
//EJERCICIOS DE PRACTICA DIA 29/ABRIL/2024
let carro = {
    marca:"BMW",
    color:"Verde"
}

console.log(carro);
//agregar 6 propiedades nuevas
carro.cilindraje = 2000;
carro.modelo = 2024;
carro.esCoupe = true;
carro.placa = "EKF99E"
carro.nuevo = true;
carro.tipoDeCaja = "automatico";
// console.table(carro);

//agregar 4 (cantidadLlantas, cantidadSillas, 4x4, ventaLatinoamerica)
carro.cantidadLlantas = 4;
carro.cantidadSillas = 2;
carro.es4x4 = false;
carro.ventaLatinoamerica = true;

//cambiar marca
carro.marca = "PORSHE";
//cambiar color
carro.color = "Blanco";

//eliminar 2 propiedades que cree yo
delete carro.placa;
delete carro.nuevo;
//eliminen 4x4
delete carro.es4x4;
//arreglo de todas las propiedades
let resultado = Object.keys(carro);
console.log(resultado);
//un arreglo de los valores

let resultadito = Object.values(carro);
//al arreglo de propiedas, ver si exitse altura 

console.log(resultado.includes("altura"));
//al arreglo de propiedas, ver si exitse marca
console.log(resultado.includes("marca"));
//al arreglo de valores, ver si exitse verde
console.log(resultadito);
console.log(resultadito.includes("verde"));
//al arreglo de valores, ver si exitse 2024
console.log(resultadito.includes(2024));
*/