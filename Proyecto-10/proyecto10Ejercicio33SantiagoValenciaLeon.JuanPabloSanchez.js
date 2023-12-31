/*EJERCICIO 33 - PROYECTO 10
33. Hacer un programa para calcular los resultados de las siguientes funciones usando las series de Taylor
que se dan a continuación.
Para cada ejercicio, pida por teclado: a). El valor de x b). El número de términos de la serie
Mostraremos ejemplos con 10 terminos de cada serie, con estos valores puede probar sus resultados.
Para valores conocidos de entrada, valores conocidos a la salida.

-----------------------------------------------------------------
Fecha de publicación: 22-06-2023
Hora: 09:07 a.m
Versión: 2.0
Autores: Ing(c) Santiago Valencia, Ing(c) Juan Pablo Sánchez
Lenguaje: JavaScript
Versión del lenguaje: 6.0
Presentado a: Doctor Ricardo Moreno Laverde
-----------------------------------------------------------------
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
-----------------------------------------------------------------
Descripción: El siguiente programa genera la suma de la serie de Taylor para In(x)
*/
const prompt = require('prompt-sync')({ sigint: true });

// Función que imprime en consola
const print = (message) => {
	process.stdout.write(message);
};

// Función que calcula la serie de Taylor para In(x)
const Inx = async (numero, final, acumula) => {
	if (numero <= final) {
		const term =
			(Math.pow(-1, numero + 2) * Math.pow(x - 1, numero + 1)) /
			(numero + 1);
		return Inx(numero + 1, final, acumula + term);
	} else {
		print((x - 1 + acumula).toString());
	}
};

// Se pide el valor de x y el número de términos
print('Este programa genera la suma de la serie de Taylor para In(x)\n');
const x = parseFloat(prompt('Ingrese el valor de x: '));
const final = parseInt(prompt('Ingrese el número de términos: '));
print('La suma de la serie Taylor para In(x) es: ');
Inx(1, final, 0);
