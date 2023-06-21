/*EJERCICIO 03 - PROYECTO 10
3. Hacer un programa de computador, de tal manera que pida el número de termino deseados en la
siguiente serie: Serie de Lucas: Es similar a la serie de Fibonacci, pero comienza con los números 2 y 1
en lugar de 0 y 1. Es decir, los dos primeros términos de la serie son 2 y 1, y los siguientes términos se
calculan como la suma de los dos términos anteriores. La fórmula para el enésimo número de Lucas es
L(n) = L(n-1) + L(n-2), donde L(0) = 2 y L(1) = 1.
Los primeros nueve términos de la serie de Lucas son: 2, 1, 3, 4, 7, 11, 18, 29, 47. (Usando solo recursividad)

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
Descripción: Este programa pide el número de termino deseados en la serie de Lucas.
*/
const prompt = require("prompt-sync")({sigint: true});

// Variable que almacena el numero de terminos deseados
let num = prompt("Ingrese el numero de terminos deseados: ");

// Funcion que calcula la serie de lucas
const lucas = (num) => {
    if (num == 0) return 2;
    if (num == 1) return 1;
    return lucas(num - 1) + lucas(num - 2);
}

// Funcion que imprime la serie de lucas las veces que el usuario desee
const imprimirLucas = (num) => {
    if (lucas(num) <= 10000 && num > 0) {
        console.log(lucas(num));
        imprimirLucas(num - 1);
    }
}

imprimirLucas(num);