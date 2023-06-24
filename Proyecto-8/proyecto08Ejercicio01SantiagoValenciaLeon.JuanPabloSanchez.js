/*EJERCICIO 01 - PROYECTO 08
1. Escribir un programa que convierta de grados centígrados a grados fahrenheit, utilizando la siguiente fórmula:
F = (9/5) * C + 32

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
Descripción: Este programa convierte de grados centígrados a grados fahrenheit.
*/

const prompt = require('prompt-sync')({ sigint: true });

// variable que almacena los grados centigrados
let grados = prompt('Ingrese grados: ');

// función que convierte de grados centigrados a grados fahrenheit
const centigradosAFarenheit = (centigrados) => {
	let farenheit = (9 / 5) * centigrados + 32.0;
	return farenheit;
};

console.log(centigradosAFarenheit(grados));
