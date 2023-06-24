/*EJERCICIO 22 - PROYECTO 11
22. Hacer un algoritmo utilizando ciclos anidados; para calcular los resultados de las siguientes funciones usando
las series de Taylor que se dan a continuación.
Para cada ejercicio, pida por teclado: a). El valor de x b). El número de términos de la serie. Realizarlo para f(x) = senh(x)
-----------------------------------------------------------------
Fecha de publicación: 23-06-2023
Hora: 23:08 p.m
Versión: 1.0
Autores: Ing(c) Santiago Valencia, Ing(c) Juan Pablo Sánchez
Lenguaje: JavaScript
Versión del lenguaje: 6.0
Presentado a: Doctor Ricardo Moreno Laverde
-----------------------------------------------------------------
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
-----------------------------------------------------------------
Descripción: Este programa calcula la serie de Taylor para los n terminos de f(x) = senh(x)
*/

const prompt = require('prompt-sync')(); // Importa la librería prompt-sync para recibir entrada del usuario

// Función para calcular el factorial de un número
const factorial = (number) => (number === 0 ? 1 : number * factorial(number - 1));

// Función para calcular la suma de la serie de Taylor para senh(x)
const senhX = (elevado, final, acumula, x) => {
  // Verificar si se alcanzó el número de términos final
  if (elevado >= final) {
    return acumula; // Devolver el valor acumulado
  }

  const term = Math.pow(x, elevado + 2) / factorial(elevado + 2); // Calcular el término actual de la serie
  return senhX(elevado + 2, final, acumula + term, x); // Llamada recursiva para sumar el siguiente término
};

console.log("Este programa genera la suma de la serie de Taylor para senh(x)");

// Solicitar al usuario el valor de x
const x = parseFloat(prompt("Ingrese el valor de x: "));

// Solicitar al usuario el número de términos
const final = parseInt(prompt("Ingrese el número de términos: "));

console.log("La suma de la serie Taylor para senh(x) es:");

// Llamar a la función senhX para calcular la suma de la serie y mostrar el resultado
console.log(senhX(1, final, x, x));
