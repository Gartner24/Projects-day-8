/*EJERCICIO 20 - PROYECTO 12
20.Hacer un algoritmo utilizando ciclos anidados; para calcular los resultados de las siguientes funciones usando
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
Descripción: Este programa calcula la serie de Taylor de la función e^(x)
*/

let prompt = require('prompt-sync')(); //variable prompt global declarada para utilizar prompt node.js

// Función para calcular el factorial de un número
const main = () => {
	let potencia = 1;
	let factorial = 1;
	let x, veces;
	let resultado = 1;

	// Obtener el valor de X y el número de términos del usuario
	x = parseInt(prompt('Ingrese un valor para x: '));
	veces = parseInt(
		prompt('Por favor ingrese el número de términos para la serie: ')
	);

	while (potencia <= veces) {
		factorial *= potencia;
		resultado += Math.pow(x, potencia) / factorial;
		potencia++;
	}

	console.log(`El resultado de e^${x} es: ${resultado}`);
};

main();
