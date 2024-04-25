/*
console.log("***PUNTO 1***");
num1 = parseInt(prompt("Ingresa un primer numero ->"));
num2 = parseInt(prompt("Ingresa el segundo numero ->"));
if (num1>num2) {
    console.log("El primer numero es mayor que el otro");
}else{
    console.log("El segundo numero es mayor que el otro");
}
console.log("***PUNTO 2***");

num1 = parseInt(prompt("Ingresa un primer numero ->"));
num2 = parseInt(prompt("Ingresa el segundo numero ->"));

if (num1==num2) {
    console.log("Los numeros son iguales");
}else{
    console.log("los numeros son diferentes");
}
console.log("***PUNTO 3***");
num1 = parseInt(prompt("Ingresa un primer numero ->"));
num2 = parseInt(prompt("Ingresa el segundo numero ->"));
if (num1 == num2) {
    console.log("Los numeros son iguales");
} else if(num1 > num2) {
    console.log("El numero mayor es el primero");
}else{
    console.log("El numero mayor es el segundo");
}
console.log("***PUNTO 4***");
num1 = parseInt(prompt("Ingresa el primer numero ->"));
num2 = parseInt(prompt("Ingresa el segundo numero ->"));
num3 = parseInt(prompt("Ingresa el tercer numero ->"));
if (num1 < num2 && num1 < num3) {
    console.log("El primer numero es el mas pequeño");
} else if(num2 < num1 && num2 < num3){
    console.log("El segundo numero es el mas pequeño");
}else{
    console.log("El tercer numero es el mas pequeño");
}
console.log("***PUNTO 5***");
let persona1 = {
    nombre: "Juan Jose",
    edad: 22,
    altura: 175
}
let persona2 = {
    nombre: "Luz Angela",
    edad: 23,
    altura: 158
}
if (persona1.altura > persona2.altura) {
    console.log("La persona mas alta es: "+persona1.nombre+" con "+persona1.altura+"cms");
} else {
    console.log("La persona mas alta es: "+persona2.nombre+" con "+persona2.altura+"cms");
}
if (persona1.edad > persona2.edad) {
    console.log("La persona con mas edad es: "+persona1.nombre+" con "+persona1.edad+" años");
} else {
    console.log("La persona con mas edad es: "+persona2.nombre+" con "+persona2.edad+" años");
}

console.log("***PUNTO 6***");
nombre = prompt("Ingresa tu nombre");
edad = parseInt(prompt("Ingresa tu edad en numeros"));
altura = parseInt(prompt("Ingresa tu altura en centimetros"));
vision = parseInt(prompt("Ingresa un valor entre 1 y 10, donde 1 es 'No veo nada' y 10 'Veo muy bien'"));
if (edad >= 18 && altura > 150 && (vision >= 8 && vision < 11)) {
    console.log(nombre + " Si estas capacitado para conducir");
} else {
    console.log(nombre + " NO estas capacitado para conducir");
}
console.log("***PUNTO 7***");
nombre = prompt("Ingresa tu nombre");
tipoPase = parseInt(prompt("Si tu pase es VIP ingresa 1, si es NORMAL ingresa 2"));
tieneEntrada = confirm("¿Tienes entrada?");
if (nombre == "juan" || tipoPase == 1) {
    console.log("BIENVENIDO, SIGA ADELANTE");
} else if (tieneEntrada == true){
    laQuieresUsar = confirm("Deseas usar su entrada");
    if (laQuieresUsar == true) {
        console.log("BIENVENIDO, SIGA ADELANTE");
    } else {
        
    }
}else{
    quieresComprar = confirm("¿Deseas comprar una entrada?");
    if (quieresComprar == true) {
        dinero = parseInt(prompt("¿Ingresa el dinero que tienes disponible?"));
        if (dinero >= 1000) {
            console.log("COMPRADO, BIENVENIDO, SIGA ADELANTE");
            
        }else{
            console.log("VENTA RECHAZADA, INTENTA NUEVAMENTE");
        }
    } else {
        console.log("HASTA LUEGO");
    }
}
console.log("***PUNTO 8***");
numeroIncognita = 4;
numeroIngresado = parseInt(prompt("Ingresa un numero entre 1 y 10"));
if (numeroIngresado == numeroIncognita) {
    console.log("ADIVINASTE, FELICITACIONES");
} else if(numeroIngresado > numeroIncognita) {
    numeroIngresado = parseInt(prompt("El numero ingresado es mayor, vuelve a intentarlo, ingresa otro ->"));
    if (numeroIngresado == numeroIncognita) {
        console.log("ADIVINASTE, FELICITACIONES");
    } else if(numeroIngresado > numeroIncognita){
        numeroIngresado = parseInt(prompt("El numero ingresado es mayor, vuelve a intentarlo, ingresa otro ->"));
        if (numeroIngresado == numeroIncognita) {
            console.log("ADIVINASTE, FELICITACIONES");
        }else if (numeroIngresado > numeroIncognita){
            console.log("El numero ingresado es mayor, PERDISTE");
        }else{
            console.log("El numero ingresado es menor, PERDISTE");
        }
    }else{
        numeroIngresado = parseInt(prompt("El numero ingresado es menor, vuelve a intentarlo, ingresa otro ->"));
        if (numeroIngresado == numeroIncognita) {
            console.log("ADIVINASTE, FELICITACIONES");
        }else if (numeroIngresado > numeroIncognita){
            console.log("El numero ingresado es mayor, PERDISTE");
        }else{
            console.log("El numero ingresado es menor, PERDISTE");
        }
    }     
} else {
    numeroIngresado = parseInt(prompt("El numero ingresado es menor, vuelve a intentarlo, ingresa otro ->"));
    if (numeroIngresado == numeroIncognita) {
        console.log("ADIVINASTE, FELICITACIONES");
    }else if (numeroIngresado > numeroIncognita){
        numeroIngresado = parseInt(prompt("El numero ingresado es mayor, vuelve a intentarlo, ingresa otro ->"));
        if (numeroIngresado == numeroIncognita) {
            console.log("ADIVINASTE, FELICITACIONES");
        }else if (numeroIngresado > numeroIncognita){
            console.log("El numero ingresado es mayor, PERDISTE");
        }else{
            console.log("El numero ingresado es menor, PERDISTE");
        }
    }else{
        numeroIngresado = parseInt(prompt("El numero ingresado es menor, vuelve a intentarlo, ingresa otro ->"));
        if (numeroIngresado == numeroIncognita) {
            console.log("ADIVINASTE, FELICITACIONES");
        }else if (numeroIngresado > numeroIncognita){
            console.log("El numero ingresado es mayor, PERDISTE");
        }else{
            console.log("El numero ingresado es menor, PERDISTE");
        }
    }
}
console.log("***PUNTO 9***");
edad = parseInt(prompt("Ingresa tu edad en numeros"));
if (edad > 100) {
    esVerdad = confirm("¿En realidad esa es tu edad?");
    if (esVerdad == true) {
        console.log("Llego tu hora amigo, despidete");
    } else {
        console.log("Me siento como cuando tu EX te mintio");
    }
} else if(edad > 45) {
    console.log("Eres un anciano");
} else if(edad >= 19 && edad <= 45){
    console.log("Eres un mayor joven");
}else if(edad >= 13 && edad <= 18){
    console.log("Eres un adolecente");
}else if(edad > 0 && edad <= 12){
    console.log("Eres un infante");
}else {
    
    console.log("Pajudo");
}
console.log("***PUNTO 10***");
jugador1 = prompt("Jugador1 ingresa PIEDRA, PAPEL O TIJERA");
respuesta1 = jugador1.trim().toUpperCase();
jugador2 = prompt("Jugador2 ingresa PIEDRA, PAPEL O TIJERA");
respuesta2 = jugador2.trim().toUpperCase();
if (respuesta1 == respuesta2) {
    console.log("Empate muchachos");
} else if (respuesta1 == "PIEDRA"){
    if( respuesta2 == "PAPEL"){
        console.log("Jugador 2 GANO");
    }else{
        console.log("Jugador 1 GANO");
    }
} else if (respuesta1 == "PAPEL"){
    if(respuesta2 == "TIJERA"){
        console.log("Jugador 2 GANO");
    } else {
        console.log("Jugador 1 GANO");
    }
} else if (respuesta1 == "TIJERA"){
    if(respuesta2 == "PIEDRA"){
        console.log("Jugador 2 GANO");
    } else {
        console.log("Jugador 1 GANO");
    }
} else if (respuesta2 == "PIEDRA"){
    if( respuesta1 == "PAPEL"){
        console.log("Jugador 1 GANO");
    }else{
        console.log("Jugador 2 GANO");
    }
} else if (respuesta2 == "PAPEL"){
    if(respuesta1 == "TIJERA"){
        console.log("Jugador 1 GANO");
    } else {
        console.log("Jugador 2 GANO");
    }
} else if (respuesta2 == "TIJERA"){
    if(respuesta1 == "PIEDRA"){
        console.log("Jugador 1 GANO");
    } else {
        console.log("Jugador 2 GANO");
    }
}else {
    console.log("Escriba bien su respuesta");
}
console.log("***PUNTO 11***");
let color = prompt("Ingresa el nombre de un color").trim().toLowerCase();
normalize = color.slice(1);
firstLetter = color[0].toUpperCase();
colorFinal = firstLetter+normalize;
console.log(colorFinal);
switch (colorFinal) {
    case "Blanco":
        console.log("Falta color");
        break;
        case "Negro":
            console.log("Falta color");
        break;
        case "Verde":
            console.log("El color de la naturaleza");
            break;
    case "Azul":
        console.log("El color del agua");
        break;
    case "Amarillo":
        console.log("El color del sol");
        break;
        case "Rojo":
        console.log("El color del fuego");
        break;
    case "Marrón" || "Marron":
        console.log("El color de la tierra");
        break;
        case "Marron":
            console.log("El color de la tierra");
            break;
            default:
                console.log("Excelente elección, no lo teníamos pensado.");
                break;
            }
            
            console.log("***PUNTO 12***");
            valor1 = parseInt(prompt("Ingresa el primer valor"));
            valor2 = parseInt(prompt("Ingresa el segundo valor"));
operacion = parseInt(prompt("Si quieres sumarlos ingresa 1, si quieres restarlos ingresa 2, si quieres multiplicarlos ingresa 3 y por ultimo ingresa 4 para dividirlos"));
switch (operacion) {
    case 1:
        console.log("El valor de la suma es = "+(valor1+valor2));
        break;
        case 2:
            console.log("El valor de la resta es = "+(valor1-valor2));
        break;
    case 3:
        console.log("El valor de la multiplicacion es = "+(valor1*valor2));
        break;
    case 4:
        if(valor2 == 0){
            console.log("Error, no se puede dividir por 0 cambie el segundo valor que ingresaste")
        }else{
            console.log("El valor de la division es = "+(valor1/valor2));
        }
        break;

        default:
            console.log("Ingrese una opcion valida de operador, entre 1 y 4");
        break;
    }

    console.log("***PUNTO 13***");
    let id = parseInt(prompt("Ingresa el numero de tu cedula").trim());
    apellidos = prompt("Escribe solo tus apellidos");
nombres = prompt("Escribe solo tus nombres");
let nacimiento = prompt("Ingresa tu fecha de nacimiento en este formato DD/MM/AAAA").trim();
municipioNacimiento = prompt("Ingresa el municipio de nacimiento");
departamentoNacimiento = prompt("Ingresa el departamento de nacimiento");
let estatura = parseInt(prompt("Ingresa tu estura en centimetros").trim());
sangre = prompt("Ingresa tu tipo de sangre, ejemplo O+ AB");
genero = prompt("Ingresa tu genero, hombre o mujer");
let fechaExpedicion = prompt("Ingresa la fecha de expedicion del documento en formato DD/MM/AAAA").trim();
lugarExpedicion = prompt("Ingresa el lugar de expedicion del documento");

function ordenar (texto){
    let sinEspacios = texto.trim().toLowerCase().slice(1);
    let primera = texto.trim()[0].toUpperCase();
    return primera+sinEspacios;
}


apellidos = ordenar(apellidos);
nombres = ordenar(nombres);
municipioNacimiento = ordenar(municipioNacimiento);
departamentoNacimiento = ordenar(departamentoNacimiento);
genero = ordenar(genero);
lugarExpedicion = ordenar(lugarExpedicion);
sangre = sangre.trim().toUpperCase();

respuesta = confirm(`Tu numero de cedula es: ${id}, tu(s) apellidos son : ${apellidos}, tu(s) nombres son: ${nombres}, naciste el ${nacimiento} en ${municipioNacimiento} en el departamento ${departamentoNacimiento}, tu altura es: ${estatura} cms, tipo de sangre: ${sangre}, tu genero es: ${genero}, la fecha de expedicion de tu documento es ${fechaExpedicion} en el municipio ${lugarExpedicion}, ESTAN CORRECTO LOS DATOS?`);
if(respuesta){
    let dni = {
        numero: id,
        apellidos: apellidos,
        nombres: nombres,
        fechaNacimiento: nacimiento,
        municipioNacimiento: municipioNacimiento,
        departamentoNacimiento: departamentoNacimiento,
        altura: estatura,
        tipoSangre: sangre,
        genero: genero,
        fechaDeExpedicion: fechaExpedicion,
        lugarDeExpedicion: lugarExpedicion
    };
    console.table(dni);
    console.log("El registro fue exitoso");
}else{
    console.log("Vuelva a intentarlo en 1 mes");
}
    */