/*EJERCICIO 09 - PROYECTO 08
9. Escribir un programa que encuentre el valor del ángulo faltante de un triángulo si toma el valor de los otros dos ángulos como datos de entrada.

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
Descripción: Este programa encuentra el valor del ángulo faltante de un triángulo si toma el valor de los otros dos ángulos como datos de entrada.
*/
const prompt = require("prompt-sync")({sigint: true});

// Variables que almacena los dos angulos
let angulo1 = prompt("Ingrese el angulo 1: ");
let angulo2 = prompt("Ingrese el angulo 2: ");
// Variable que almacena el angulo faltante
let angulo3 = 0;

// Función que encuentra el angulo faltante
function encontrarAngulo(angulo1, angulo2) {
    angulo3 = 180 - (angulo1 + angulo2);
    return angulo3; 
}

console.log(encontrarAngulo(angulo1, angulo2));

