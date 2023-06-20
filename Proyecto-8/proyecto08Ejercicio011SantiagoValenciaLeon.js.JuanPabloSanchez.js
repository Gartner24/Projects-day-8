// 11. Escribir un programa que pida horas, minutos y segundos como datos de entrada y muestre en pantalla el número de milisegundos.

// let hora = prompt("Ingrese horas: ");
// let minutos = prompt("Ingrese minutos: ");
// let segundos = prompt("Ingrese segundos: ");

let horas = 2;
let minutos = 35;
let segundos = 20;
let milisegundos = 0;

function horasAMinuto(horas) {
    let minuto = horas * 60;
    return minuto;
}

function minutosASegundos(minutos) {
    let segundo = minutos * 60;
    return segundo;
}

function segundosAMilisegundos(segundos) {
    let milisegundo = segundos * 1000;
    return milisegundo;
}

function milisegundosTotales(horas, minutos, segundos) {
    let milisegundos = segundosAMilisegundos(minutosASegundos(horasAMinuto(horas))) + segundosAMilisegundos(minutosASegundos(minutos)) + segundosAMilisegundos(segundos);
    return milisegundos;
}

console.log(milisegundosTotales(horas, minutos, segundos));