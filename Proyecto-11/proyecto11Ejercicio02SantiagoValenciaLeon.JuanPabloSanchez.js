/*EJERCICIO 02 - PROYECTO 11
2.Hacer un programa de computador, de tal manera que imprima el valor de la suma de los elementos
de la serie de Fibonacci entre 0 y 100.
-----------------------------------------------------------------
Fecha de publicación: 21-06-2023
Hora: 20:43 p.m
Versión: 2.0
Autores: Ing(c) Santiago Valencia, Ing(c) Juan Pablo Sánchez
Lenguaje: JavaScript
Versión del lenguaje: 6.0
Presentado a: Doctor Ricardo Moreno Laverde
-----------------------------------------------------------------
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
-----------------------------------------------------------------
Descripción: Este programa imprime la suma de los elementos de la serie de Fibonacci entre 0 y 100*/

const fibonacciSequence = () =>{//Funcion que calcula la secuencia de Fibonnaci con terminos entre 0 y 100 e imprime la suma de ellos
  let nextNumber = 0;//0 1 1 variable que guarda la suma que se genera de los dos terminos anteriores
  let previousNumber = 0;//0 1 1 es el numero anterior al que se va a sumar consigo
  let currentNumber = 1;// 0 (1) 1 es el numero en el que se esta actualmente y se va a sumar con su anterior
  let saveAdd = 1;//Variable que guarda cada termino de la sucesión y los va sumando
  process.stdout.write(`${previousNumber}, `);//Imprime 0, que es el primer numero que se va a sumar con su siguiente, que sera la variable actual
  process.stdout.write(`${currentNumber}, `);//Variable atual, que se va a sumar con el previo
  for (let i = 0; currentNumber <= 100; i++) {//Ciclo que se repite hasta que el numero actual sea mayor a 100
    nextNumber = previousNumber + currentNumber;//El siguiente numero de la sucesion es la suma de los dos anteriores
    if (nextNumber <= 100) {//Condición que permite imprimir únicamente los términos que son menores o iguales a 100
      process.stdout.write(`${nextNumber}, `);//Imprime termino
      saveAdd += nextNumber;//Guarda cada termino y lo va sumando
    }
    //Se actualizan las variables
    previousNumber = currentNumber;
    currentNumber = nextNumber;
  }

  process.stdout.write(`y la suma es: ${saveAdd}`);//Imprime la suma de todos los términos
}

fibonacciSequence();//Llamado a la función