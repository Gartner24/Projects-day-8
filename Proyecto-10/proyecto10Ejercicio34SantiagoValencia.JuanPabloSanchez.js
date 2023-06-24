/*EJERCICIO 34 - PROYECTO 10 
------------------------------------------------------
34.Hacer un programa de calcule la serie de Taylor para el seno hiperbólico de x
------------------------------------------------------
Fecha de publicacion: 21-06-2023
Hora: 1:36 a.m.
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
Descripción: Este programa genera la serie de Taylor para el sen(x)
*/

const factorial = (number) => {
	if (number === 0) {
		return 1;
	} else {
		return number * factorial(number - 1);
	}
};

const senx = (numero, final, acumula) => {
	if (numero < final) {
		acumula +=
			(Math.pow(x, 3 + 2 * (numero - 1)) /
				factorial(3 + 2 * (numero - 1))) *
			Math.pow(-1, numero + 2);
		return senx(numero + 1, final, acumula);
	} else {
		return x + acumula;
	}
};

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.question(
	'Este programa genera la suma de la serie de Taylor para sen(x)\nIngrese el valor de x: ',
	function (x) {
		rl.question('Ingrese el número de términos: ', function (final) {
			const result = senx(1, parseInt(final), 0);
			console.log('La suma de la serie Taylor para sen(x) es: ' + result);
			rl.close();
		});
	}
);
