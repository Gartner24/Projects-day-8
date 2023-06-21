/*EJERCICIO 07 - PROYECTO 10
7. Hacer un programa de computador, de tal manera que pida el número de termino deseados en la
siguiente serie: Serie de Narayana: Esta serie comienza con los números 1, 1 y 1. Los siguientes términos
se calculan como la suma del término anterior y el número de parejas de términos consecutivos anteriores
que son diferentes. La fórmula para el enésimo número de Narayana es N(n) = N(n-1) + N(n-3), donde
N(0) = 1, N(1) = 1 y N(2) = 1.
Los primeros nueve términos de la serie de Narayana son:
Serie de Narayana (continuación): 1, 1, 1, 2, 3, 4, 6, 9, 13.

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
Descripción: Este programa pide el número de termino deseados en la serie de Narayana.
*/

const prompt = require("prompt-sync")({sigint: true});

// Variable que almacena el numero de terminos deseados
let num = prompt("Ingrese el numero de terminos deseados: ");

// Funcion que calcula la serie de Narayana
const narayana = (num) => {
    if (num == 0) return 1;
    if (num == 1) return 1;
    if (num == 2) return 1;
    return narayana(num - 1) + narayana(num - 3);
}

// Funcion que imprime la serie de Narayana
const imprimirNarayana = (num) => {
    if (narayana(num) <= 10000 && num > 0) {
        console.log(narayana(num));
        imprimirNarayana(num - 1);
    }
}

imprimirNarayana(num);