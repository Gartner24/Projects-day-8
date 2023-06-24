/*EJERCICIO 06 - PROYECTO 11
6.Hacer un programa de computador, de tal manera que, lea un número e imprima su factorial, siendo:
N ! = 1 x 2 x 3 x 4 x...N
N ! = 1 si N = 0
Solo está definido el factorial para números enteros positivos.
-----------------------------------------------------------------
Fecha de publicación: 23-06-2023
Hora: 21:13 p.m
Versión: 1.0
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

const ps = require('prompt-sync')();

const calcularFactorial = (n) => {
  let factorial = 1;

  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }

  return factorial;
};

const numero = parseInt(ps("Ingrese el número para calcular su factorial: ")); // Solicita al usuario que ingrese un número
const factorial = calcularFactorial(numero); // Llama a la función 'calcularFactorial' con el número ingresado y almacena el resultado en 'factorial'
console.log(`El factorial de ${numero} es: ${factorial}`); // Muestra en la consola el número ingresado y su factorial