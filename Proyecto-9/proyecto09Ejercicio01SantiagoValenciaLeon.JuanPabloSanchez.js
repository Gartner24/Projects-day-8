/*EJERCICIO 01 - PROYECTO 09
1. Que pida un número del 1 al 5 e imprima si es primo o no.

-----------------------------------------------------------------
Fecha de publicación: 20-06-2023
Hora: 10:22 a.m
Versión: 1.0
Autores: Ing(c) Santiago Valencia, Ing(c) Juan Pablo Sánchez
Lenguaje: JavaScript
Versión del lenguaje: 6.0
Presentado a: Doctor Ricardo Moreno Laverde
-----------------------------------------------------------------
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
-----------------------------------------------------------------
Descripción: Este programa pide un número del 1 al 5 e imprime si es primo o no.
*/
const prompt = require("prompt-sync")({sigint: true});

// Variable que almacena el numero ingresado por el usuario
let numero = prompt("Ingrese un numero del 1 al 5: ");

// Funcion que determina si el numero es primo o no
const esPrimo = (numero) => {
  if (numero == 1) console.log("El numero no es primo")
  if (numero == 2) console.log("El numero es primo");
  if (numero == 3) console.log("El numero es primo");
  if (numero == 4) console.log("El numero no es primo")
  if (numero == 5) console.log("El numero es primo");
}

esPrimo(numero);