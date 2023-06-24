/*EJERCICIO 09 - PROYECTO 10
9. Hacer un programa de computador, de tal manera que pida el número de Término
deseados en la siguiente serie: Serie de Bell: Esta serie cuenta el número de
particiones no vacías de un conjunto de n elementos. Comienza con los números 1,
1 y los siguientes términos se calculan como la suma de los términos anteriores
multiplicados por los números naturales consecutivos. La fórmula para el enésimo
número de Bell es B(n) = Σ(k=0, n-1) S(n,k), donde S(n,k) es el coeficiente
binomial de (n-1) y k. (n – 1)! Esto es que la combinatoria Ck=
----------------------- k! * ( [ n-1] – k)! Los primeros nueve términos de la
serie de Bell son: 1, 1, 2, 5, 15, 52, 203, 877, 4140. (solo con recursividad)

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
Descripción: Este programa pide el número de termino deseados en la serie de
Bell.
*/

var prompt = require('prompt-sync')(); // Importa la libreria prompt-sync
/**
 * Calcula el coeficiente binomial C(n, k) de manera recursiva.
 * @param {number} n - El valor de n en C(n, k).
 * @param {number} k - El valor de k en C(n, k).
 * @returns {number} El coeficiente binomial C(n, k).
 */

function coeficienteBinomial(n, k) {
	// Función para calcular el coeficiente binomial
	if (k === 0 || k === n) {
		// Si k es cero o igual a n
		return 1; // Retornar 1
	} else {
		// Si no
		return (
			coeficienteBinomial(n - 1, k - 1) + coeficienteBinomial(n - 1, k)
		);
	}
}

/**
 * Calcula el término n de la serie de Bell de manera recursiva.
 * @param {number} n - El índice del término a calcular.
 * @returns {number} El valor del término n de la serie de Bell.
 */
function calcularTerminoBell(n) {
	// Función para calcular el término n de la serie de Bell
	if (n === 0 || n === 1) {
		// Si n es cero o uno
		return 1; // Retornar 1
	} else {
		let bellSum = 0; // Inicializar la suma de los términos anteriores en cero

		/**
		 * Calcula la suma de los términos anteriores de manera recursiva.
		 * @param {number} k - El índice del término anterior actual.
		 * @returns {number} La suma de los términos anteriores.
		 */
		function calcularSumaTerminosAnteriores(k) {
			// Función para calcular la suma de los términos anteriores
			if (k < 0) {
				// Si k es menor que cero
				return 0;
			} else {
				const coefBinomial = coeficienteBinomial(n - 1, k); // Calcular el coeficiente binomial
				const terminoAnterior = calcularTerminoBell(k); // Calcular el término anterior
				return (
					coefBinomial * terminoAnterior +
					calcularSumaTerminosAnteriores(k - 1)
				); // Retornar la suma de los términos anteriores
			}
		}

		return calcularSumaTerminosAnteriores(n - 1); // Retornar la suma de los términos anteriores
	}
}

// Ejemplo de uso: calcular y mostrar los términos de la serie de Bell
const numTerminos = 9;
let terminos = [];

/**
 * Calcula los términos de la serie de Bell de manera recursiva.
 * @param {number} n - El índice del término actual.
 */
function calcularTerminosRecursivo(n) {
	if (n >= numTerminos) {
		return;
	} else {
		terminos.push(calcularTerminoBell(n));
		calcularTerminosRecursivo(n + 1);
	}
}

calcularTerminosRecursivo(0);

// Mostrar los términos obtenidos
console.log(
	`Los primeros nueve términos de la serie de Bell son: ${terminos.join(
		', '
	)}.`
);
