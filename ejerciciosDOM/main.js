
let btnCalcularImc = document.getElementById("calcularImc");

btnCalcularImc.addEventListener("click",calcularIMC);

function calcularIMC () {
    let altura = document.getElementById("altura").value;
    let peso = document.getElementById("peso").value;
    if(isNaN(altura) || isNaN(peso)){
        alert("Ingrese bien los datos");
    } else if(altura == 0 || peso == 0){
        alert("Faltan datos");
    }else{
        let inputImc = document.getElementById("imc");
        altura = altura/100;
        let resultado = peso/(altura^2);
        inputImc.value = resultado.toFixed(2);
    }
}

let inputCop = document.getElementById("cop");
let inputUsd = document.getElementById("usd");

inputCop.addEventListener("input", convertirCop);
inputUsd.addEventListener("input", convertirUsd);
function convertirCop() {
    let resultado = inputCop.value/3892
    inputUsd.value = resultado.toFixed(2);
}
function convertirUsd() {
    let resultado = inputUsd.value*3892
    inputCop.value = resultado.toFixed(2);
}
