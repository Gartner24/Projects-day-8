/*EJERCICIO 07 - PROYECTO 11
7.Hacer un programa de computador, de tal manera que, lea un número entero N, no negativo(validar
esto) y mostrar la suma de los factoriales de todos los números desde 0 hasta N. ; así:

Si n = 5
= 0! + 1! + 2! + 3! + 4! + 5!
= 1 + 1 + 2 + 6 + 24 + 120 =154

(solo con bucles for)

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
Descripción: Este programa lee un número entero N, no negativo(validar esto) y muestra la suma de los factoriales de todos los números desde 0 hasta N.
*/
const prompt = require("prompt-sync")({sigint: true});

// Funcion que calcula el factorial de un numero
const factorial = (numero) => {
  let resultado = 1;
  for (let i = 1; i <= numero; i++) {
    resultado *= i;
  }
  return resultado;
}

// Funcion que calcula la suma de los factoriales de todos los numeros desde 0 hasta N
const sumaFactoriales = (numero) => {
  let suma = 0;
  for (let i = 0; i <= numero; i++) {
    suma += factorial(i);
  }
  return suma;
}

// Funcion que lee un numero entero N, no negativo
const leerNumero = () => {
  let numero;
  do {
    numero = parseInt(prompt("Ingrese un numero entero N, no negativo: "));
  } while (numero < 0);
  return numero;
}

// Funcion que imprime la suma de los factoriales de todos los numeros desde 0 hasta N
const imprimirSumaFactoriales = () => {
  let numero = leerNumero();
  console.log(`La suma de los factoriales de todos los numeros desde 0 hasta ${numero} es: ${sumaFactoriales(numero)}`);
}

imprimirSumaFactoriales();