// const prompt = require("prompt-sync")({sigint: true});
// 1. Escribir un programa que convierta de grados centígrados a grados fahrenheit.


// let grados = prompt("Ingrese grados: ");
let grados = 90;

function centigradosAFarenheit(centigrados) {
  let farenheit = (9 / 5) * centigrados + 32.0;
  return farenheit;
}

console.log(centigradosAFarenheit(grados));
