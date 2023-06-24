/*EJERCICIO 06 - PROYECTO 12
6.Hacer un programa de computador, de tal manera que, lea un número e imprima su factorial, siendo:
N ! = 1 x 2 x 3 x 4 x...N
N ! = 1 si N = 0
Solo está definido el factorial para números enteros positivos.
-----------------------------------------------------------------
Fecha de publicación: 24-06-2023
Hora: 00:57 a.m
Versión: 2.0
Autores: Ing(c) Santiago Valencia, Ing(c) Juan Pablo Sánchez
Lenguaje: JavaScript
Versión del lenguaje: 6.0
Presentado a: Doctor Ricardo Moreno Laverde
-----------------------------------------------------------------
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
-----------------------------------------------------------------
Descripción: Este programa calcula e imprime el factorial de un numero
*/

const prompt = require('prompt-sync')(); //variable prompt global declarada para utilizar prompt node.js 
let n = prompt(`Ingrese un número entero positivo: `);

const Factorial = () =>{
    let i = 1;
    let factorial = 1;
    while (i <= n) {
        factorial *= i;//No se devuelve como es el concepto de factorial sino que lo que hace es multiplicar todos los numeros hasta el n ingresado
        i++;
    }
    return factorial;
}

console.log(`El factorial de ${n} es: ${Factorial()}`);