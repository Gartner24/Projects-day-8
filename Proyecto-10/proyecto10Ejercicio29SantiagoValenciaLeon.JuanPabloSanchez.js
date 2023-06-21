/*EJERCICIO 29 - PROYECTO 10
29. Hacer un programa para calcular los resultados de las siguientes funciones usando las series de Taylor
que se dan a continuación.
Para cada ejercicio, pida por teclado: a). El valor de x b). El número de términos de la serie
Mostraremos ejemplos con 10 terminos de cada serie, con estos valores puede probar sus resultados.
Para valores conocidos de entrada, valores conocidos a la salida.

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
Descripción: El siguiente programa genera la suma de la serie de Taylor para (e^x)
*/
const prompt = require('prompt-sync')({ sigint: true });

// Función que imprime en consola
function print(message) {
	process.stdout.write(message);
}

// Función que calcula el factorial de un número
function Factorial(number) {
	if (number === 0) {
		return 1;
	} else {
		return number * Factorial(number - 1);
	}
}

// Función que calcula la serie de Taylor para (e^x)
function ex(numero, final, acumula) {
	if (numero < final) {
		const term = Math.pow(x, numero + 1) / Factorial(numero + 1);
		return ex(numero + 1, final, acumula + term);
	} else {
		print((acumula + 1).toString());
	}
}

// Se pide el valor de x y el número de términos
print('Este programa genera la suma de la serie de Taylor para (e^x)\n');
const x = parseFloat(prompt('Ingrese el valor de x: '));
const final = parseInt(prompt('Ingrese el número de términos: '));
print('La suma de la serie Taylor para (e^x) es: ');
ex(0, final, 0);
