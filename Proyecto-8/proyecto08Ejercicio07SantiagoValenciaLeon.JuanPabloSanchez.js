/*EJERCICIO 07 - PROYECTO 08
7. Escribir un programa que pida como datos de entrada el nombre, apellido y año de nacimiento y luego los imprima juntos.

-----------------------------------------------------------------
Fecha de publicación: 20-06-2023
Hora: 10:22 a.m
Versión: 2.0
Autores: Ing(c) Santiago Valencia, Ing(c) Juan Pablo Sánchez
Lenguaje: JavaScript
Versión del lenguaje: 6.0
Presentado a: Doctor Ricardo Moreno Laverde
-----------------------------------------------------------------
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
-----------------------------------------------------------------
Descripción: Este programa pide como datos de entrada el nombre, apellido y año de nacimiento y luego los imprime juntos.
*/

const prompt = require('prompt-sync')({ sigint: true });

// Variables que almacena el nombre, el apellido y el año de nacimiento
let nombre = prompt('Ingrese su nombre');
let apellido = prompt('Ingrese su apellido');
let añoNacimiento = prompt('Ingrese su año de nacimiento');

// Función que imprime el nombre, el apellido y el año de nacimiento
console.log(`${nombre} ${apellido} ${añoNacimiento}`);
