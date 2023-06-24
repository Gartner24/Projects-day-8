/*EJERCICIO 08 - PROYECTO 09
8-Que tome tres números y diga si la multiplicación de los dos primeros es igual al tercero.
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
Descripción: Este programa indica si de tres numero ingresados, el tercero es igual a la multiplicacion de los dos primeros
*/

const prompt = require('prompt-sync')({ sigint: true });

// Función que indica si de tres numero ingresados, el tercero es igual a la multiplicacion de los dos primeros
const productoDosPrimeros = () => {
	let numero1 = prompt('Ingrese el primer numero: ');
	let numero2 = prompt('Ingrese el segundo numero: ');
	let numero3 = prompt('Ingrese el tercer numero: ');

	if (numero1 * numero2 == numero3) {
		console.log(
			`La multiplicacion de los dos primeros es IGUAL al tercero así: ${numero1} * ${numero2} = ${numero3}`
		);
	} else {
		console.log(
			`La multiplicacion de los dos primeros es DIFERENTE al tercero así: ${numero1} * ${numero2} != ${numero3}`
		);
	}
};

productoDosPrimeros();
