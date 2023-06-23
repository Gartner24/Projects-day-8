/*EJERCICIO 25 - PROYECTO 11
25.Hacer un programa de calcule la serie de Taylor para el seno de x

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
Descripción: Este programa genera la serie de Taylor para el sen(x)
*/

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

// Funcion que imprime las tablas de multiplicar del 1 al 10
rl.question(
	'Este programa genera la suma de la serie de Taylor para sen(x)\nIngrese el valor de x: ',
	function (x) {
		rl.question('Ingrese el número de términos: ', function (final) {
			let acumula = 0;
			for (let numero = 1; numero <= final; numero++) {
				acumula +=
					(Math.pow(x, 3 + 2 * (numero - 1)) /
						factorial(3 + 2 * (numero - 1))) *
					Math.pow(-1, numero + 2);
			}
			const result = x + acumula;
			console.log('La suma de la serie Taylor para sen(x) es: ' + result);
			rl.close();
		});
	}
);

// Funcion que calcula el factorial de un numero
function factorial(number) {
	let result = 1;
	for (let i = 2; i <= number; i++) {
		result *= i;
	}
	return result;
}
