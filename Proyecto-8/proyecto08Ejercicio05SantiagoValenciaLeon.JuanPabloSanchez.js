/*EJERCICIO 05 - PROYECTO 08
5. Escribir un programa que pida horas y minutos como datos de entrada e imprima el total en minutos.

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
Descripción: Este programa pide horas y minutos como datos de entrada e imprime el total en minutos.
*/

const prompt = require("prompt-sync")({sigint: true});

// Variables que almacena las horas y los minutos
let horas = prompt("Ingrese las horas: ");
let minutos = prompt("Ingrese los minutos: ");

// Función que convierte las horas en minutos
function horasAMinutos(horas) {
  let totalMinutos = (horas * 60);
  return totalMinutos;
}

console.log(horasAMinutos(horas) + minutos);
