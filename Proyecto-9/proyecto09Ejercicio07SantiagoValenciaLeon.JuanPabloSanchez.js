/*EJERCICIO 07 - PROYECTO 09
7-Que tome dos números y diga si ambos son pares o ambos son impares.

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
Descripción: Este programa toma dos números y dice si ambos son pares o ambos son impares.
*/
const prompt = require('prompt-sync')({ sigint: true });

// Variables que almacena los dos numeros
let num1 = prompt('Ingrese el primer numero: ');
let num2 = prompt('Ingrese el segundo numero: ');

// Función que determina si ambos numeros son pares o impares
const parImpar = (num1, num2) => {
	if (num1 % 2 == 0 && num2 % 2 == 0) console.log('Ambos numeros son pares');
	if (num1 % 2 != 0 && num2 % 2 != 0)
		console.log('Ambos numeros son impares');
};

parImpar(num1, num2);
