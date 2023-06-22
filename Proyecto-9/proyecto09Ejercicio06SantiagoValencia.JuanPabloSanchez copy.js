/*EJERCICIO 06 - PROYECTO 09
6. Pedir un numero e  indicar si es mayor de 100
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
Descripción: Este programa decide si un numero es mayor de 100
*/

const prompt = require('prompt-sync')({ sigint: true });

// Funcion que decide si un numero es mayor de 100
const decidirMayor100 = () => {
	let numero = prompt('Ingrese un numero: ');

	if (numero > 100) console.log(`${numero} es mayor de 100`);
};

decidirMayor100();
