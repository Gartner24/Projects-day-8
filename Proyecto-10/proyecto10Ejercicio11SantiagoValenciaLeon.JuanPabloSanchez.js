/*EJERCICIO 11 - PROYECTO 10
11. Hacer un programa de computador, de tal manera que pida el número de termino deseados en la
siguiente serie: Serie de Triangular: Esta serie cuenta el número de puntos en una retícula triangular de
lado n. Comienza con el número 1 y los siguientes términos se calculan como la suma de los términos
anteriores y el número de puntos en la diagonal de la retícula de lado n-1. La fórmula para el enésimo
número de la serie triangular es T(n) = T(n-1) + (n-1)T(n-2), donde T(0) = 1.
Los primeros nueve términos de la serie triangular son: 1, 3, 6, 10, 15, 21, 28, 36, 45.

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
Descripción: Este programa pide el número de termino deseados en la serie triangular.
*/

const prompt = require("prompt-sync")({sigint: true});

// Variable que almacena el numero de terminos deseados
let num = prompt("Ingrese el numero de terminos deseados: ");

// Funcion que calcula la serie triangular
const triangular = (num) => {
    if (num == 0) return 1;
    return triangular(num - 1) + (num - 1) * triangular(num - 2);
}

// Funcion que imprime la serie triangular
const imprimirTriangular = (num) => {
    if (triangular(num) <= 10000 && num > 0) {
        console.log(triangular(num));
        imprimirTriangular(num - 1);
    }
}

imprimirTriangular(num);
