/*EJERCICIO 32 - PROYECTO 10 
------------------------------------------------------
32.Hacer un programa de calcule la serie de Taylor para el coseno hiperbólico de x
------------------------------------------------------
Fecha de publicacion: 21-06-2023
Hora: 1:34 a.m.
Version: 1.0
Autores: Ing(c) Santiago Valencia - Ing(c) Juan Pablo Sánchez
------------------------------------------------------
Lenguaje: JavaScript
Version del lenguaje: 6.0
------------------------------------------------------
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computacion
------------------------------------------------------
Descripción: Este programa genera la serie de Taylor para el cosh(x)
*/

const factorial = (number) => {
	if (number === 0) {
		return 1;
	} else {
		return number * factorial(number - 1);
	}
};

const coshx = (elevado, final, acumula) => {
	if (elevado < final) {
		acumula += Math.pow(x, elevado) / factorial(elevado);
		return coshx(elevado + 2, final, acumula);
	} else {
		return acumula + 1;
	}
};

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.question(
	'Este programa genera la suma de la serie de Taylor para cosh(x)\nIngrese el valor de x: ',
	function (x) {
		rl.question('Ingrese el número de términos: ', function (final) {
			const result = coshx(0, parseInt(final), 0);
			console.log(
				'La suma de la serie Taylor para cosh(x) es: ' + result
			);
			rl.close();
		});
	}
);
