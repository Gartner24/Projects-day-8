/*EJERCICIO 02 - PROYECTO 09
2. Pedir un numero e imprimir si es par o impar
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
Descripción: Este programa lee un numero e imprime si es par o impar
*/

const prompt = require('prompt-sync')({ sigint: true });

// Función que lee un numero e imprime si es par o impar
const decidirParImpar = () => {
	let numero = prompt('Ingrese un numero: ');

	if (numero % 2 == 0) {
		console.log(`El numero ${numero} es par.`);
	} else {
		console.log(`El numero ${numero} es impar.`);
	}
}

decidirParImpar();
