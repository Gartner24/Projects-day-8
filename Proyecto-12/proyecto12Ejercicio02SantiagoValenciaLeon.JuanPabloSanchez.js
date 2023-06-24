/*EJERCICIO 02 - PROYECTO 12
2.Hacer un programa de computador, de tal manera que imprima el valor de la suma de los elementos
de la serie de Fibonacci entre 0 y 100.
-----------------------------------------------------------------
Fecha de publicación: 23-06-2023
Hora: 00:31 p.m
Versión: 2.0
Autores: Ing(c) Santiago Valencia, Ing(c) Juan Pablo Sánchez
Lenguaje: JavaScript
Versión del lenguaje: 6.0
Presentado a: Doctor Ricardo Moreno Laverde
-----------------------------------------------------------------
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
-----------------------------------------------------------------
Descripción: Este programa imprimir la suma de los elementos de la serie de Fibonacci entre 0 y 100*/

const fibonacciSum = () =>{
    let currentNumber = 0;
    let nextNumber = 1;
    let saveAdd = 0;
  
    console.log("Este programa presenta la suma de los elementos de la serie de Fibonacci entre 0 y 100.");
  
    while (currentNumber <= 100) {
      process.stdout.write(`${currentNumber}, `); // Imprime el término actual
      saveAdd += currentNumber; // Suma el término actual a la variable saveAdd
  
      // Calcula el siguiente número de Fibonacci
      let temp = currentNumber;
      currentNumber = nextNumber;
      nextNumber = temp + nextNumber;
    }
  
    process.stdout.write(` y su suma es: ${saveAdd}`);
  }
  
  fibonacciSum();
  