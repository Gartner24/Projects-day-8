// const prompt = require("prompt-sync")({sigint: true});

// 5. Escribir un programa que pida horas y minutos como datos de entrada e imprima el total en minutos.

// let horas = prompt("Ingrese las horas: ");
// let minutos = prompt("Ingrese los minutos: ");
let horas = 5;
let minutos = 37;

function horasAMinutos(horas) {
  let totalMinutos = (horas * 60);
  return totalMinutos;
}

console.log(horasAMinutos(horas) + minutos);
