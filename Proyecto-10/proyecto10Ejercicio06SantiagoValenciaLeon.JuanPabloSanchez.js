/*EJERCICIO 06 - PROYECTO 10
6. Hacer un programa de computador, de tal manera que pida el número de termino deseados en la
siguiente serie: Serie de Padovan: Esta serie comienza con los números 1, 0 y 0. Los siguientes términos
se calculan como la suma de los dos términos anteriores y el tercer término anterior. La fórmula para el
enésimo número de Padovan es P(n) = P(n-2) + P(n-3), donde P(0) = 1, P(1) = 0 y P(2) = 0.
Los primeros nueve términos de la serie de Padovan son: 1, 0, 0, 1, 0, 1, 1, 1, 2.

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
Descripción: Este programa pide el número de termino deseados en la serie de Padovan.
*/

const prompt = require("prompt-sync")({sigint: true});

// Variable que almacena el numero de terminos deseados
let num = prompt("Ingrese el numero de terminos deseados: ");

// Funcion que calcula la serie de padovan
const padovan = (num) => {
    if (num == 0) return 1;
    if (num == 1) return 0;
    if (num == 2) return 0;
    return padovan(num - 2) + padovan(num - 3);
}

// Funcion que imprime la serie de padovan
const imprimirPadovan = (num) => {
    if (padovan(num) <= 10000 && num > 0) {
        console.log(padovan(num));
        imprimirPadovan(num - 1);
    }
}

imprimirPadovan(num);