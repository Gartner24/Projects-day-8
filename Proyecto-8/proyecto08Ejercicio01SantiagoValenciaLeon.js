// 1. Escribir un programa que convierta de grados centígrados a grados fahrenheit.
const prompt=require("prompt-sync")({sigint:true});

let grados = prompt("Ingrese grados: ");

function centigradosAFarenheit(centigrados) {
    let farenheit = (9/5 * centigrados) + 32.0;
    return farenheit;
}

console.log(centigradosAFarenheit(grados));
