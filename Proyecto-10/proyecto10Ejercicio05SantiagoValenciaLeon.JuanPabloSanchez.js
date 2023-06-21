/*EJERCICIO 05 - PROYECTO 10
5. Hacer un programa de computador, de tal manera que pida el número de termino deseados en la
siguiente serie: Serie de Perrin: Esta serie comienza con los números 3, 0 y 2. Los siguientes términos
se calculan como la suma del término anterior y el tercer término anterior. La fórmula para el enésimo
número de Perrin es P(n) = P(n-2) + P(n-3), donde P(0) = 3, P(1) = 0 y P(2) = 2.
Los primeros nueve términos de la serie de Perrin son: 3, 0, 2, 3, 2, 5, 5, 7, 10. (Usando solo recursividad)

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
Descripción: Este programa pide el número de termino deseados en la serie de Perrin.
*/
const prompt = require("prompt-sync")({sigint: true});


// Variable que almacena el numero de terminos deseados
let num = prompt("Ingrese el numero de terminos deseados: ");

// Funcion que calcula la serie de perrin
const perrin = (num) => {
    if (num == 0) return 3;
    if (num == 1) return 0;
    if (num == 2) return 2;
    return perrin(num - 2) + perrin(num - 3);
}

// Funcion que imprime la serie de perrin
const imprimirPerrin = (num) => {
    if (perrin(num) <= 10000 && num > 0) {
        console.log(perrin(num));
        imprimirPerrin(num - 1);
    }
}

imprimirPerrin(num);