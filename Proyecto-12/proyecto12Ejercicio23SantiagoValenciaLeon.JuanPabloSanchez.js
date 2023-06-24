/*EJERCICIO 23 - PROYECTO 11
23. Hacer un algoritmo utilizando ciclos anidados; para calcular los resultados de las siguientes funciones usando
las series de Taylor que se dan a continuación.
Para cada ejercicio, pida por teclado: a). El valor de x b). El número de términos de la serie. Realizarlo para f(x) = cosh(x)
-----------------------------------------------------------------
Fecha de publicación: 24-06-2023
Hora: 02:45 p.m
Versión: 3.0
Autores: Ing(c) Santiago Valencia, Ing(c) Juan Pablo Sánchez
Lenguaje: JavaScript
Versión del lenguaje: 6.0
Presentado a: Doctor Ricardo Moreno Laverde
-----------------------------------------------------------------
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
-----------------------------------------------------------------
Descripción: Este programa calcula la serie de Taylor para los n terminos de f(x) = cosh(x)
*/

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  'Este programa genera la suma de la serie de Taylor para cosh(x)\nIngrese el valor de x: ',
  function (x) {
    rl.question('Ingrese el número de términos: ', function (final) {
      let acumula = 0;
      let elevado = 2; // Comenzar en 2 para cosh(x)

      while (elevado <= final) {
        acumula += Math.pow(x, elevado) / factorial(elevado);
        elevado += 2;
      }

      const result = acumula + 1;
      console.log(
        'La suma de la serie Taylor para cosh(x) es: ' + result
      );
      rl.close();
    });
  }
);

// Funcion que calcula el factorial de un numero
const factorial = (number) =>{
  let result = 1;
  let i = 2;
  while (i <= number) {
    result *= i;
    i++;
  }
  return result;
}

