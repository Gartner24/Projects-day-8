/*EJERCICIO 05 - PROYECTO 08
11. Escribir un programa que pida horas, minutos y segundos como datos de entrada y muestre en pantalla el número de milisegundos.

-----------------------------------------------------------------
Fecha de publicación: 20-06-2023
Hora: 10:22 a.m
Versión: 1.0
Autores: Ing(c) Santiago Valencia, Ing(c) Juan Pablo Sánchez
Lenguaje: JavaScript
Versión del lenguaje: 6.0
Presentado a: Doctor Ricardo Moreno Laverde
-----------------------------------------------------------------
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
-----------------------------------------------------------------
Descripción: Este programa pide horas, minutos y segundos como datos de entrada y muestre en pantalla el número de milisegundos.
*/
const prompt = require("prompt-sync")({sigint: true});

// Variables que almacena las horas, los minutos y los segundos
let horas = prompt("Ingrese horas: ");
let minutos = prompt("Ingrese minutos: ");
let segundos = prompt("Ingrese segundos: ");

// Función que convierte las horas en minutos
function horasAMinuto(horas) {
    let minuto = horas * 60;
    return minuto;
}

// Función que convierte los minutos en segundos
function minutosASegundos(minutos) {
    let segundo = minutos * 60;
    return segundo;
}

// Función que convierte los segundos en milisegundos
function segundosAMilisegundos(segundos) {
    let milisegundo = segundos * 1000;
    return milisegundo;
}

// Función que convierte las horas, los minutos y los segundos en milisegundos
function milisegundosTotales(horas, minutos, segundos) {
    let milisegundos = segundosAMilisegundos(minutosASegundos(horasAMinuto(horas))) + segundosAMilisegundos(minutosASegundos(minutos)) + segundosAMilisegundos(segundos);
    return milisegundos;
}

console.log(milisegundosTotales(horas, minutos, segundos));