/*EJERCICIO 25 - PROYECTO 12
25. Hacer un algoritmo utilizando ciclos anidados; para calcular los resultados de las siguientes funciones usando
las series de Taylor que se dan a continuación.
Para cada ejercicio, pida por teclado: a). El valor de x b). El número de términos de la serie. Realizarlo para f(x) = sen(x)
-----------------------------------------------------------------
Fecha de publicación: 24-06-2023
Hora: 02:25 p.m
Versión: 3.0
Autores: Ing(c) Santiago Valencia, Ing(c) Juan Pablo Sánchez
Lenguaje: JavaScript
Versión del lenguaje: 6.0
Presentado a: Doctor Ricardo Moreno Laverde
-----------------------------------------------------------------
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
-----------------------------------------------------------------
Descripción: Este programa calcula la serie de Taylor para los n terminos de f(x) = sen(x)
*/

const prompt = require('prompt-sync')();

// Función para calcular el factorial de un número
const factorial = (n) => {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Función principal
const main = () => {
  let x = 0; // Valor de entrada para x
  let total = 1; // Variable auxiliar para el cálculo del resultado parcial
  let resultado = 1; // Almacena el resultado parcial de cada término
  let potencia = 3; // Potencia a la que se eleva x
  let final = x; // Almacena la suma total de los términos
  let contador = 1; // Contador de términos
  let veces = 0; // Número de términos a calcular

  // Obtener los valores de entrada desde el usuario
  x = parseFloat(prompt("Ingrese un valor para x: "));
  veces = parseInt(prompt("Por favor ingrese el número de términos para la serie: "));

  // Calcular los términos y la suma total
  while (contador <= veces) {
    resultado = (Math.pow(x, potencia) / factorial(potencia)) * Math.pow(-1, contador - 1);
    final += resultado;
    potencia += 2;

    if (contador === veces) {
      final = 1 - final; // Corregir el cálculo de la suma final
      process.stdout.write(`Total suma = ${final.toFixed(9)}`);
    }

    contador++;
  }
}

// Llamar a la función principal
main();



