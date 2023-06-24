/*EJERCICIO 20 - PROYECTO 11
20. Hacer un algoritmo utilizando ciclos anidados; para calcular los resultados de las siguientes funciones usando
las series de Taylor que se dan a continuación.
Para cada ejercicio, pida por teclado: a). El valor de x b). El número de términos de la serie. Realizarlo para f(x) = e^x
-----------------------------------------------------------------
Fecha de publicación: 23-06-2023
Hora: 23:01 p.m
Versión: 1.0
Autores: Ing(c) Santiago Valencia, Ing(c) Juan Pablo Sánchez
Lenguaje: JavaScript
Versión del lenguaje: 6.0
Presentado a: Doctor Ricardo Moreno Laverde
-----------------------------------------------------------------
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
-----------------------------------------------------------------
Descripción: Este programa calcula la serie de Taylor para los n terminos de f(x) = e^x
*/

const prompt = require('prompt-sync')();

// Función que calcula el factorial de un número
const Factorial = (number) => {
  if (number === 0) {
    return 1;
  } else {
    return number * Factorial(number - 1);
  }
};

// Función que calcula la suma de la serie de Taylor para e^x
const ex = (numero, final, acumula) => {
  if (numero < final) {
    let sum = acumula; // Almacena la suma acumulada
    for (let i = numero; i < final; i++) {
      sum += Math.pow(x, i + 1) / Factorial(i + 1); // Calcula y agrega el siguiente término a la suma
    }
    return sum; // Devuelve la suma de la serie de Taylor
  } else {
    return acumula + 1; // Devuelve la suma finalizada añadiendo 1 al acumulador
  }
};

console.log("Este programa genera la suma de la serie de Taylor para (e^x)");
console.log("Ingrese el valor de x:");
const x = Number(prompt()); // Solicita al usuario ingresar el valor de x
console.log("Ingrese el número de términos:");
const final = Number(prompt()); // Solicita al usuario ingresar el número de términos
console.log("La suma de la serie Taylor para (e^x) es:");

let resultado = ex(0, final, 1); // Calcula la suma de la serie de Taylor
console.log(resultado); // Imprime el resultado

