
let btnCalcularImc = document.getElementById("calcularImc");

btnCalcularImc.addEventListener("click",calcularIMC);

function calcularIMC () {
    let altura = document.getElementById("altura");
    let peso = document.getElementById("peso");
    if(isNaN(altura.value) || isNaN(peso.value)){
        alert("Ingrese bien los datos");
    } else if(altura.value == 0 || peso.value == 0){
        alert("Faltan datos");
    }else{
        let inputImc = document.getElementById("imc");
        altura.value = altura.value/100;
        let resultado = (peso.value/(altura.value^2));
        inputImc.value = resultado.toFixed(2);
        if(inputImc.value >= 40){
            inputImc.className ="w-50 bg-danger fw-bold text-white";
        }else if (inputImc.value >= 25 && inputImc.value < 40) {
            inputImc.className ="w-50 bg-warning fw-bold";
        }else if (inputImc.value >= 18.5 && inputImc.value < 25) {
            inputImc.className ="w-50 bg-success fw-bold text-white";
        }else{
            inputImc.className ="w-50 bg-info fw-bold";
        }
        altura.value = "";
        peso.value = "";
    }
}

let inputCop = document.getElementById("cop");
let inputUsd = document.getElementById("usd");

inputCop.addEventListener("input", convertirCop);
inputUsd.addEventListener("input", convertirUsd);
function convertirCop() {
    if(inputCop.value != ""){
        let resultado = inputCop.value/3892;
        inputUsd.value = resultado.toFixed(2);
    }else{
        inputUsd.value = "";
    }
}
function convertirUsd() {
    if (inputUsd.value != "") {
        let resultado = inputUsd.value*3892;
        inputCop.value = resultado.toFixed(2);
    }else{
        inputCop.value = "";
    }
}
