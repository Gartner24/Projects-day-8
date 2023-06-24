/*EJERCICIO 07 - PROYECTO 12
7.Hacer un programa de computador, de tal manera que, lea un número entero N, no negativo(validar
esto) y mostrar la suma de los factoriales de todos los números desde 0 hasta N. Así:
= 0! + 1! + 2! + 3! + 4! + 5!
= 1 + 1 + 2 + 6 + 24 + 120 =154
-----------------------------------------------------------------
Fecha de publicación: 24-06-2023
Hora: 01:05 a.m
Versión: 2.0
Autores: Ing(c) Santiago Valencia, Ing(c) Juan Pablo Sánchez
Lenguaje: JavaScript
Versión del lenguaje: 6.0
Presentado a: Doctor Ricardo Moreno Laverde
-----------------------------------------------------------------
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
-----------------------------------------------------------------
Descripción: Este programa calcula los factoriales de 0 a n y los suma
*/

const prompt = require('prompt-sync')(); //variable prompt global declarada para utilizar prompt node.js 

// Función que calcula el factorial de un número
const factorial = (number) =>{
    if (number === 0) {
      return 1;
    } else {
      let result = 1;
      while (number > 0) {
        result *= number;
        number--;
      }
      return result;
    }
  }

  // Función que realiza la suma de factoriales
const sumaFactoriales = () =>{
    // Solicitar al usuario un número entero no negativo
    const numero = parseInt(prompt("Ingrese por favor el número: "));
  
    // Validar que el número sea no negativo
    if (numero < 0) {
      console.log("Error: El número debe ser positivo");
      return;
    }
  
    let acumulado = 0;
    let inicio = 0;
  
    // Calcular la suma de los factoriales utilizando un ciclo while
    while (inicio <= numero) {
      const factorialActual = factorial(inicio);
      acumulado += factorialActual;
  
      // Imprimir el factorial actual
      process.stdout.write(`${factorialActual}`);
  
      // Imprimir el símbolo '+' después de cada factorial, excepto en el último
      if (inicio !== numero) {
        process.stdout.write(" + ");
      }
  
      inicio++;
    }
  
    // Imprimir el resultado de la suma
    console.log(` = ${acumulado}`);
  }
  
  // Llamar a la función para realizar la suma de factoriales
  sumaFactoriales();
