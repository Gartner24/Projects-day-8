// const prompt = require("prompt-sync")({sigint: true});

// 3. Escribir un programa que imprima el perímetro de un rectángulo que tome su largo y su ancho como datos de entrada, teniendo en cuenta que el perímetro es la suma de sus 4 lados.

// let largo = prompt("Ingrese el largo: ");
// let ancho = prompt("Ingrese el ancho: ");
let largo = 7;
let ancho = 5;
let perimetro = 0;

function calcularPerimetro(largo, ancho) {
  perimetro = 2 * (largo + ancho);
  return perimetro;
}

console.log(calcularPerimetro(largo, ancho));
