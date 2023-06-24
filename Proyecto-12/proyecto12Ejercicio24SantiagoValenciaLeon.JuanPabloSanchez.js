/*EJERCICIO 24 - PROYECTO 11
24. Hacer un algoritmo utilizando ciclos anidados; para calcular los resultados de las siguientes funciones usando
las series de Taylor que se dan a continuación.
Para cada ejercicio, pida por teclado: a). El valor de x b). El número de términos de la serie. Realizarlo para f(x) = ln(x)
-----------------------------------------------------------------
Fecha de publicación: 24-06-2023
Hora: 02:02 p.m
Versión: 2.0
Autores: Ing(c) Santiago Valencia, Ing(c) Juan Pablo Sánchez
Lenguaje: JavaScript
Versión del lenguaje: 6.0
Presentado a: Doctor Ricardo Moreno Laverde
-----------------------------------------------------------------
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
-----------------------------------------------------------------
Descripción: Este programa calcula la serie de Taylor para los n terminos de f(x) = ln(x)
*/

const prompt = require('prompt-sync')(); //variable prompt global declarada para utilizar prompt node.js 

const main = () =>{
  let x = 0;
  let resultado = 0;
  let potencia = 2;
  let final = 0.5; // Inicializar final con 0.5
  let contador = 1;
  let veces = 0;

  x = parseFloat(prompt("Ingrese un valor para x: "));
  veces = parseInt(prompt("Por favor ingrese el número de términos para la serie: "));

  while (contador <= veces) {
    resultado = Math.pow(x - 1, potencia) / potencia; // El resultado se calcula dividiendo por potencia
    if (contador % 2 === 0) {
      final = final - resultado; // Resta el resultado si el contador es par
    } else {
      final = final + resultado; // Suma el resultado si el contador es impar
    }

    if (contador === veces) {
      console.log("Total suma = " + (final.toFixed(9) * -1));
    }

    contador++;
    potencia++;
  }
}

main();




