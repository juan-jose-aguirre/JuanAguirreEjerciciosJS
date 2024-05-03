/*console.log("PUNTO 1°");
let numeroTabla;
while(isNaN(numeroTabla)){
    numeroTabla = parseInt(prompt("Digite un numero, escriba bien").trim());
}
console.log("INICIO DE LA TABLA");
for (let i = 1; i <= 10; i++) {
    console.log(`-> ${numeroTabla}X${i} = ${numeroTabla * i}`);
}
console.log("FIN DE LA TABLA");

//*******************************************************************
/*
console.log("PUNTO 2°");
let sumaPunto2 = 0;
let numeroPunto2;
do {
    numeroPunto2 = parseInt(prompt("Ingrese cualquier numero, solo 0 cuando desee terminar la suma").trim());
    if(isNaN(numeroPunto2)){
        console.log("Error escriba un numero");
    }else{
        sumaPunto2 += numeroPunto2;
    }
} while (numeroPunto2 != 0);
console.log(`La suma de los valores ingresados es = ${sumaPunto2}`);

//*******************************************************************
/*
console.log("PUNTO 3°");
let numeroSecretoPunto3 = 50;
let adivino = 0;
let cont = 0;
do {
    let numero = parseInt(prompt("Ingresa un numero entre 1 y 100").trim());
    if (isNaN(numero)) {
        console.log("Dije numero entre 1 y 100");
    } else if (numero < 1 || numero > 100) {
        console.log("TE DIJE ENTRE 1 Y 100");
    } else {
        if (numero == numeroSecretoPunto3) {
            adivino += 1
        } else if(numero < numeroSecretoPunto3) {
            console.log("El numero digitado es menor al numero secreto");
        } else {
            console.log("El numero digitado es mayor al numero secreto");
        }
    }
    cont++
} while (adivino != 1);
console.log(`FELICIDADES, adivinaste en ${cont} intentos`);

//*******************************************************************
/*
console.log("PUNTO 4°");
let numeroPunto4 = parseInt(prompt("Ingrese un numero").trim());
let cont = 0;
for (let i = numeroPunto4/2; i >= 1; i--) {
    if(numeroPunto4%i == 0){
        cont++
    }
}
if(cont != 1){
    console.log(`El numero ${numeroPunto4} NO ES PRIMO`);
} else {
    console.log(`El numero ${numeroPunto4} ES PRIMO`);
}
//*******************************************************************

console.log("PUNTO 5°");
let numeroPunto5;
let arregloDivisoresPunto5 = [];
do {
    numeroPunto5 = parseInt(prompt("Ingresa un numero").trim());
    if(isNaN(numeroPunto5)){
        console.log("Debe ser un numero");
    }else{
        for (let i = numeroPunto5/2; i >= 1; i-=0.5) {
            if(numeroPunto5%i == 0){
                arregloDivisoresPunto5.push(i);
            }
        }
        arregloDivisoresPunto5.unshift(numeroPunto5);
    }
} while (isNaN(numeroPunto5));
console.log(`Los posibles divisores de ${numeroPunto5} son:`);
for (let num of arregloDivisoresPunto5) {
    console.log(`-> ${num}`);
}

//*******************************************************************

console.log("PUNTO 6°");
let arregloDePrueba = [1,2,3,4,5,6,7,8,9,10];
let preguntaPunto6 = confirm("Quieres crear un arreglo de 10 numero o no (en caso que digas que no, usaremos uno de prueba)");
if(preguntaPunto6 == false){
    for (let i = 0; i < arregloDePrueba.length ; i++){
        console.log(`${i+1}°-> ${arregloDePrueba[i]}`);
    }
} else {
    for (let i = 0; i < 10; i++) {
        arregloDePrueba[i] = parseInt(prompt(`Ingresa el numero de la posicion ${i+1}`).trim());
    }
    for (let i = 0; i < 10; i++) {
        console.log(`${i+1}°-> ${arregloDePrueba[i]}`);
    }
}

//*******************************************************************
console.log("PUNTO 7°");
let arregloDePruebaPunto7 = [1,2,3,4,5,6,7,8,9,10];
let preguntaPunto7 = confirm("Quieres crear un arreglo de 10 numero o no (en caso que digas que no, usaremos uno de prueba)");
if(preguntaPunto7 == false){
    for (let i = 0; i < arregloDePruebaPunto7.length ; i++){
        console.log(`${i+1}°-> ${(arregloDePruebaPunto7[i])*2}`);
    }
} else {
    for (let i = 0; i < 10; i++) {
        arregloDePruebaPunto7[i] = parseInt(prompt(`Ingresa el numero de la posicion ${i+1}`).trim());
    }
    for (let i = 0; i < 10; i++) {
        console.log(`${i+1}°-> ${(arregloDePruebaPunto7[i])*2}`);
    }
}
//*******************************************************************
console.log("PUNTO 8°");
let arregloPunto8 = [
    {
        nombre:"Juan",
        edad:22,
        tienesHijos:false,
        profesion:"estudiante"
    },
    {
        nombre:"Diego",
        edad:32,
        tienesHijos:true,
        profesion:"ingeniero"
    },
    {
        nombre:"Santiago",
        edad:27,
        tienesHijos:false,
        profesion:"arquitecto"
    },
    {
        nombre:"Jorge",
        edad:58,
        tienesHijos:true,
        profesion:"medico"
    },
    {
        nombre:"Marta",
        edad:62,
        tienesHijos:true,
        profesion:"administradora"
    }
];
for (let persona of arregloPunto8){
    console.log(`Hola, mi nombre es ${persona.nombre}, tengo ${persona.edad}, ${persona.tienesHijos ? "tengo hijos":"no tengo hijos"}, mi profesion es ${persona.profesion}`);
}
//*******************************************************************
console.log("PUNTO 9°");
let arregloDePruebaPunto9 = [1,2,3,4,5,6,7,8,9,10];
let imparesPunto9 = [];
let preguntaPunto9 = confirm("Quieres crear un arreglo de 10 numero o no (en caso que digas que no, usaremos uno de prueba)");
if(preguntaPunto9 == false){
    for (let i = 0; i < arregloDePruebaPunto9.length ; i++){
        if(arregloDePruebaPunto9[i]%2 != 0){
            imparesPunto9.push(arregloDePruebaPunto9[i]);
        }
    }
    for(let i = 0; i < imparesPunto9.length; i++){
        console.log(`-> ${imparesPunto9[i]} es impar`);
    }
} else {
    for (let i = 0; i < 10; i++) {
        arregloDePruebaPunto9[i] = parseInt(prompt(`Ingresa el numero de la posicion ${i+1}`).trim());
    }
    let validarSiHubo = 0;
    for (let i = 0; i < 10; i++) {
        if(arregloDePruebaPunto9[i]%2 != 0){
            console.log(`-> ${(arregloDePruebaPunto9[i])} es impar`);
            validarSiHubo++;
        }
    }
    if(validarSiHubo == 0){
        console.log("No hubieron numeros impares");
    }
}
//*******************************************************************

console.log("PUNTO 10°");
let sumaImparPunto10 = 0; 
let sumaParesPunto10 = 0;
let numeroPunto10;
do {
    numeroPunto10 = parseInt(prompt("Ingresa cualquier numero, usa el 0(cero) cuando quieras terminar").trim());
    if(isNaN(numeroPunto10)){
        console.log("Error, tiene que ser un numero");
    } else if(numeroPunto10%2 == 0){
        sumaParesPunto10 += numeroPunto10;
    }else{
        sumaImparPunto10 += numeroPunto10;
    }
} while (numeroPunto10 != 0);
console.log(`La suma de los pares es = ${sumaParesPunto10} y la de los impares es = ${sumaImparPunto10}`);

//*******************************************************************
console.log("PUNTO 11°");
let arregloPunto11 = [1,2,3,4,5,6,7,8,9,10];
let mayorPunto11 = 0;
let preguntaPunto11 = confirm("Quieres crear un arreglo de 10 numero o no (en caso que digas que no, usaremos uno de prueba)");
if(preguntaPunto11 == false){
    for (let i = 0; i < arregloPunto11.length; i++) {
        if(arregloPunto11[i] > mayorPunto11){
            mayorPunto11 = arregloPunto11[i];
        }
    }
} else {
    for (let i = 0; i < arregloPunto11.length; i++) {
        let num;
        do{
            num = parseInt(prompt(`Ingresa el numero de la ${i+1}° posición`).trim());
            if(isNaN(num)){
                console.log("DIGITA UN NUMERO");
            }
        }while(isNaN(num))
        arregloPunto11[i] = num;
    }
    for (let i = 0; i < arregloPunto11.length; i++) {
        if(arregloPunto11[i] > mayorPunto11){
            mayorPunto11 = arregloPunto11[i];
        }
    }
}
console.log(`El numero mas grande del arreglo es ${mayorPunto11}`);
//*******************************************************************
console.log("PUNTO 12°");
let arregloPunto12 = [1,2,3,4,5,6,7,8,9,10];
let menorPunto12 = 0;
let preguntaPunto12 = confirm("Quieres crear un arreglo de 10 numero o no (en caso que digas que no, usaremos uno de prueba)");
if(preguntaPunto12 == false){
    for (let i = 0; i < arregloPunto12.length; i++) {
        if(i == 0){
            menorPunto12 = arregloPunto12[0];
        }
        if(arregloPunto12[i] < menorPunto12){
            menorPunto12 = arregloPunto12[i];
        }
    }
} else {
    for (let i = 0; i < arregloPunto12.length; i++) {
        let num;
        do{
            num = parseInt(prompt(`Ingresa el numero de la ${i+1}° posición`).trim());
            if(isNaN(num)){
                console.log("DIGITA UN NUMERO");
            }
        }while(isNaN(num))
        arregloPunto12[i] = num;
    }
    for (let i = 0; i < arregloPunto12.length; i++) {
        if(i == 0){
            menorPunto12 = arregloPunto12[0]
        }
        if(arregloPunto12[i] < menorPunto12){
            menorPunto12 = arregloPunto12[i];
        }
    }
}
console.log(`El numero mas pequeño del arreglo es ${menorPunto12}`);
//*******************************************************************
console.log("PUNTO 13°");
let jugador1 = prompt("Ingrese el nombre del jugador1").trim();
let jugador2 = prompt("Ingrese el nombre del jugador2").trim();
let res1,res2,quienGano;
do {
do {
    res1 = parseInt(prompt("Jugador1 ingrese 1 si elige PIEDRA, 2 para PAPEL y 3 para TIJERA").trim());
    if(isNaN(res1)){
        console.log("QUE SEA NUMERO");
    }
} while (isNaN(res1));
do {
    res2 = parseInt(prompt("Jugador2 ingrese 1 si elige PIEDRA, 2 para PAPEL y 3 para TIJERA").trim());
    if(isNaN(res2)){
        console.log("QUE SEA NUMERO");
    }
} while (isNaN(res2));
    if(res1 == res2){
        console.log("EMPATE, CONTINUEN");
    }else if(((res1 == 1) && (res2 == 3)) || ((res1 == 2) && (res2 == 1)) || ((res1 == 3) && (res2 == 2))){
        quienGano = jugador1;
    }else if(((res2 == 1)&&(res1 == 3))||((res2 == 2)&&(res1 == 1))||((res2 == 3)&&(res1 == 2))){
        quienGano = jugador2;
    }else{
        if(res1 != 1 && res1 != 2 && res1 != 3){
            console.log("El jugador1 no eligio bien, es entre 1,2 y 3");
        }else if(res2 != 1 && res2 != 2 && res2 != 3){
            console.log("El jugador2 no eligio bien, es entre 1,2 y 3");
        }
    }
} while (res1 == res2);
if (quienGano == jugador1) {
    console.log(`Felicidades, ganaste ${jugador1}`);
}else if(quienGano == jugador2){
    console.log(`Felicidades, ganaste ${jugador2}`);
}else{
    console.log("Nadie gano");
}
//*******************************************************************
console.log("PUNTO 14°");
let asterisco = "*";
for (let i = 1; i < 6; i++) {
    console.log(asterisco.repeat(i));
}
//*******************************************************************
console.log("PUNTO 15°");
let asteriscoPunto15 = "*";
for (let i = 5; i >=1; i--) {
    console.log(asteriscoPunto15.repeat(i));
}
*/

console.log("PUNTO 16°");
let arregloDesordenado = [9,10,2,5,9,78,4,5,3,1];
let arr = [];
for (let j = 0; j < 10; j++) {
    for (let i = arregloDesordenado.length -1; i > 0; i--) {
        if(arregloDesordenado[i] < arregloDesordenado[i-1]){
            let temp = arregloDesordenado[i-1];
            arregloDesordenado[i-1] = arregloDesordenado[i];
            arregloDesordenado[i] = temp;
        }
    }
}
console.log("Arreglo ordenado -> "+arregloDesordenado);



