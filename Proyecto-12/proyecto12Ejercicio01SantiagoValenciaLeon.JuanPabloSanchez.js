/*EJERCICIO 01 - PROYECTO 12
1. Se define la serie de Fibonacci como la serie que comienza con los dígitos 1 y 0 y va sumando
progresivamente los dos últimos elementos de la serie, así: 0 1 1 2 3 5 8 13 21 34.......
Hacer un programa de computador, de tal manera que presente la serie de Fibonacci hasta llegar sin
sobrepasar el número 10,000.
-----------------------------------------------------------------
Fecha de publicación: 23-06-2023
Hora: 17:27 p.m
Versión: 2.0
Autores: Ing(c) Santiago Valencia, Ing(c) Juan Pablo Sánchez
Lenguaje: JavaScript
Versión del lenguaje: 6.0
Presentado a: Doctor Ricardo Moreno Laverde
-----------------------------------------------------------------
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
-----------------------------------------------------------------
Descripción: Este programa presenta la serie de Fibonacci hasta llegar sin sobrepasar el número 10000*/

var prompt = require('prompt-sync')(); //variable prompt global declarada para utilizar prompt node.js 

function fibonacciSerie() {//funcion principal de la serie de fibonacci
    let x = 1;//valores iniciales de la serie 
    let y = 0;//valores iniciales de la serie
    let z = 1;//variable auxiliar
  
    console.log("Este programa presenta la serie de Fibonacci como la serie que comienza con los dígitos 1 y 0 y va");
    console.log("sumando progresivamente los dos últimos elementos de la serie, así: 0 1 1 2 3 5 8 13 21 34.......");
    console.log("Para este programa, se presentará la serie de Fibonacci hasta llegar sin sobrepasar el número 10,000:\n0  1");
    
    while (z <= 10000) {//ciclo while para la serie de fibonacci sin pasar el numero 10000
      console.log(z + " ");
      z = x + y;
      x = y;
      y = z;
    }
  }
  
  fibonacciSerie();