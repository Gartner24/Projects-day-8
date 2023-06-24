/*EJERCICIO 21 - PROYECTO 12
21.Hacer un algoritmo utilizando ciclos anidados; para calcular los resultados de las siguientes funciones usando
las series de Taylor que se dan a continuación.
Para cada ejercicio, pida por teclado: a). El valor de x b). El número de términos de la serie
Mostraremos ejemplos con diez (10) términos de cada serie, con estos valores puede probar sus resultados. Para valores conocidos de entrada, valores conocidos a la salida. 

-----------------------------------------------------------------
Fecha de publicación: 20-06-2023
Hora: 01:12 a.m
Versión: 1.0
Autores: Ing(c) Santiago Valencia, Ing(c) Juan Pablo Sánchez
Lenguaje: JavaScript
Versión del lenguaje: 6.0
Presentado a: Doctor Ricardo Moreno Laverde
-----------------------------------------------------------------
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
-----------------------------------------------------------------
Descripción: Este programa calcula la serie de Taylor de la función cos(x)
*/

let prompt = require('prompt-sync')(); //variable prompt global declarada para utilizar prompt node.js

// Función para calcular el factorial de un número
const factorial = (n) => {
	if (n === 0 || n === 1) {
		return 1;
	} else {
		return n * factorial(n - 1);
	}
};

// Función para calcular el coseno de un número utilizando la serie de Taylor
const coseno = (x, n) => {
	let result = 0;
	let i = 0;

	while (i <= n) {
		let term = (Math.pow(-1, i) * Math.pow(x, 2 * i)) / factorial(2 * i);
		result += term;
		i++;
	}

	return result;
};

// Obtener el valor de X y el número de términos del usuario
const x = parseFloat(prompt('Ingrese el valor de X:'));
const terminos = parseInt(prompt('Ingrese el número de términos de la serie:'));

// Calcular el coseno utilizando la serie de Taylor
const cosenoValor = coseno(x, terminos);

// Mostrar el resultado
console.log(`El coseno de ${x} es aproximadamente: ${cosenoValor}`);
