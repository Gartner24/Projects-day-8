/*EJERCICIO 03 - PROYECTO 11
3.Hacer un programa de computador, de tal manera que lea desde el teclado un numero entero y lo
imprima al revés.

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
Descripción:  Este programa lee desde el teclado un numero entero y lo imprime al revés.
*/
const prompt = require('prompt-sync')({ sigint: true });

// Variable que almacena el numero de terminos deseados
let num = prompt('Ingrese el numero de terminos deseados: ');

// Funcion que imprime el numero al reves
const imprimirAlReves = (num) => {
	let numero = num.toString();
	let numeroAlReves = '';
	for (let i = numero.length - 1; i >= 0; i--) {
		numeroAlReves += numero[i];
	}
	console.log(numeroAlReves);
};

imprimirAlReves(num);
