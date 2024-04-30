//Ejercicio #1
console.log("**********EJERCICIO #1**********");
let miNombre = "Juan";
console.log("**********FIN**********");
//Ejercicio #2
console.log("**********EJERCICIO #2**********");
let miApellido = "Aguirre";
console.log("**********FIN**********");
//Ejercicio #3
console.log("**********EJERCICIO #3**********");
let miEdad = 22;
console.log("**********FIN**********");
//Ejercicio #4
console.log("**********EJERCICIO #4**********");
let miMascota = "Michelin";
console.log("**********FIN**********");
//Ejercicio #5
console.log("**********EJERCICIO #5**********");
let edadMascota = 1;
console.log("**********FIN**********");
//Ejercicio #6
console.log("**********EJERCICIO #6**********");
console.log()
console.log(miNombre);
console.log(miApellido)
console.log(miEdad)
console.log(miMascota)
console.log(edadMascota)
console.log("**********FIN**********");
//Ejercicio #7
console.log("**********EJERCICIO #7**********");
let nombreCompleto = miNombre +" "+ miApellido;
console.log("**********FIN**********");
//Ejercicio #8
console.log("**********EJERCICIO #8**********");
let textoPresentacion = `Mi nombre es ${nombreCompleto}, tengo ${miEdad} años, mi mascota se llama ${miMascota}, y tiene ${edadMascota} año de edad.`;
console.log("**********FIN**********");
//Ejercicio #9
console.log("**********EJERCICIO #9**********");
let sumaEdades = miEdad + edadMascota;
let restaEdades = miEdad - edadMascota;
let productoEdades = miEdad * edadMascota;
let divisionEdades = miEdad / edadMascota;
console.log("**********FIN**********");
//Ejercicio #10
console.log("**********EJERCICIO #10**********");
/*
miNombre = prompt("Ingresa tu nombre-->");
miApellido = prompt("Ingresa tu apellido-->");
miEdad = parseInt(prompt("Ingresa tu edad-->"));
miMascota = prompt("Ingresa el nombre de tu mascota-->");
edadMascota = parseInt(prompt("Ingresa la edad de tu mascota-->"));
*/
nombreCompleto = miNombre +" "+ miApellido;
textoPresentacion = `Mi nombre es ${nombreCompleto}, tengo ${miEdad} años, mi mascota se llama ${miMascota}, y tiene ${edadMascota} año de edad.`;
sumaEdades = miEdad + edadMascota;
restaEdades = miEdad - edadMascota;
productoEdades = miEdad * edadMascota;
divisionEdades = miEdad / edadMascota;
console.log("**********FIN**********");
//Ejercicio #11
console.log("**********EJERCICIO #11**********");
let alumno = {
    nombre: "Juan",
    apellido: "Aguirre",
    edad: 22,
    mayorDeEdad: true,
    dinero: 0
};
console.table(alumno);
console.log(alumno.nombre);
console.log(alumno.apellido);
console.log(alumno.edad);
console.log(alumno.mayorDeEdad);
console.log(alumno.dinero);
console.log("**********FIN**********");
//Ejercicio #12
console.log("**********EJERCICIO #12**********");
let mascota = {
    nombre: "Michelin",
    edad: 1,
    color: "negro",
    raza: "pincher",
    castrado: false
};
console.table(mascota);
console.log(mascota.nombre);
console.log(mascota.edad);
console.log(mascota.color);
console.log(mascota.raza);
console.log(mascota.castrado);
console.log("**********FIN**********");
//Ejercicio #13
console.log("**********EJERCICIO #13**********");
let frutas = ["manzana","pera","uva","banano","papaya"];
console.log(frutas);
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);
console.log(frutas[4]);
console.log("**********FIN**********");
//Ejercicio #14
console.log("**********EJERCICIO #14**********");
let numeros = [1,2,3,4,5];
console.log(numeros);
console.log(numeros[0]);
console.log(numeros[1]);
console.log(numeros[2]);
console.log(numeros[3]);
console.log(numeros[4]);
console.log("**********FIN**********");
//Ejercicio #15
console.log("**********EJERCICIO #15**********");
let familia = [
    {nombre:"Juan",apellido: "Aguirre"},
    {nombre:"Jose",apellido: "Salazar"},
    {nombre:"Luz",apellido: "Arboleda"},
    {nombre:"Angela",apellido: "Gomez"},
    {nombre:"Pepito",apellido: "Perez"}
]
console.log(familia);
console.log(familia[0]);
console.log(familia[1]);
console.log(familia[2]);
console.log(familia[3]);
console.log(familia[4]);
console.log("**********FIN**********");
//Ejercicio #16
console.log("**********EJERCICIO #16**********");
let textoAleatorio = `
De la fruta -> ${frutas[1]}, tengo ${numeros[3]} unidades y me las vendio ${familia[4].nombre}`;
console.log(textoAleatorio);
console.log("**********FIN**********");
//Ejercicio #17
console.log("**********EJERCICIO #17**********");
/*
miEdad = parseInt(prompt("Ingresa tu edad en digitos-->"));
let edadAmigo = parseInt(prompt("Ingresa la edad de tu amigo en digitos-->"));
let edadesIguales = miEdad == edadAmigo;
let soyMayor = miEdad > edadAmigo;
let soyMenor = miEdad < edadAmigo;
console.log("Mi edad es igual a la de mi compañero: "+ edadesIguales);
console.log("Mi edad es mayor a la de mi compañero: "+ soyMayor);
console.log("Mi edad es menor a la de mi compañero: "+ soyMenor);
*/
console.log("**********FIN**********");
//Ejercicio #18
console.log("**********EJERCICIO #18**********");
/*
miEdad = parseInt(prompt("Ingresa tu edad en digitos-->"));
let soyMayorDeEdad = miEdad > 18;
if(soyMayorDeEdad==true){
    console.log("Soy mayor de edad, tengo--> "+miEdad);
}else{
    console.log("NO soy mayor de edad, tengo--> "+miEdad);
}
*/
console.log("**********FIN**********");
//Ejercicio #19
console.log("**********EJERCICIO #19**********");
/*
miEdad = parseInt(prompt("Ingresa tu edad en digitos-- ppp>"));
let miAltura = parseInt(prompt("Ingresa tu altura en centimetros-->"));
let puedeSubir = (miEdad > 6) && (miAltura>=120); 
if(puedeSubir==true){
    console.log("Puede subir a la atracción, "+puedeSubir);
}else{
    console.log("No puede subir a la atracción, "+puedeSubir);
}
*/
console.log("**********FIN**********");
//Ejercicio #20
console.log("**********EJERCICIO #20**********");
let tipoDePase = prompt("Ingresa el tipo de pase (VIP, NORMAL o LIMITADO)-->");
let saldo = parseInt(prompt("Ingresa el valor de saldo-->"));
let puedePasar = (tipoDePase == "VIP") || (saldo > 1000);
if(puedePasar){
    console.log("La persona puede pasar, -->"+ puedePasar);
}else{
    console.log("La persona NO puede pasar, -->"+ puedePasar);

}
console.log("**********FIN**********");