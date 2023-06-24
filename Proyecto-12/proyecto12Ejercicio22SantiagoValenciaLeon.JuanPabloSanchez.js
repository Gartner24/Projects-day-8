/*EJERCICIO 22 - PROYECTO 12
22. Hacer un algoritmo utilizando ciclos anidados; para calcular los resultados de las siguientes funciones usando
las series de Taylor que se dan a continuación.
Para cada ejercicio, pida por teclado: a). El valor de x b). El número de términos de la serie. Realizarlo para f(x) = senh(x)
-----------------------------------------------------------------
Fecha de publicación: 23-06-2023
Hora: 02:00 p.m
Versión: 2.0
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

const factorial = (n) => {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};

const main = () => {
  let x = 0;
  let resultado = 0;
  let final = 1; // Inicializar final con 1
  let potencia = 3;
  let contador = 1;
  let veces = 0;

  x = parseFloat(prompt("Ingrese un valor para x: "));
  veces = parseInt(prompt("Por favor ingrese el número de términos para la serie: "));

  while (contador <= veces) {
    resultado = (Math.pow(x, potencia)) / factorial(potencia);//Esta es la formula para un solo termino de la serie
    final += resultado;
    potencia += 2;

    if (contador === veces) {
      console.log("Total suma = " + final.toFixed(8));
    }

    contador++;
  }
};

main();


