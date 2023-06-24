/*EJERCICIO 09 - PROYECTO 10
9. Hacer un programa de computador, de tal manera que pida el número de Término
deseados en la siguiente serie: Serie de Bell: Esta serie cuenta el número de
particiones no vacías de un conjunto de n elementos. Comienza con los números 1,
1 y los siguientes términos se calculan como la suma de los términos anteriores
multiplicados por los números naturales consecutivos. La fórmula para el enésimo
número de Bell es B(n) = Σ(k=0, n-1) S(n,k), donde S(n,k) es el coeficiente
binomial de (n-1) y k. (n – 1)! Esto es que la combinatoria Ck=
----------------------- k! * ( [ n-1] – k)! Los primeros nueve términos de la
serie de Bell son: 1, 1, 2, 5, 15, 52, 203, 877, 4140. (solo con recursividad) (solo con recursividad)

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

const prompt = require('prompt-sync')();

/**
 * Calcula el coeficiente binomial C(n, k) de manera recursiva.
 * @param {number} n - El valor de n en C(n, k).
 * @param {number} k - El valor de k en C(n, k).
 * @returns {number} El coeficiente binomial C(n, k).
 */
const coeficienteBinomial = (n, k) => {
	if (k === 0 || k === n) {
	  return 1;
	} else {
	  return coeficienteBinomial(n - 1, k - 1) + coeficienteBinomial(n - 1, k);
	}
  };
  
  /**
   * Calcula el término n de la serie de Bell de manera recursiva.
   * @param {number} n - El índice del término a calcular.
   * @returns {number} El valor del término n de la serie de Bell.
   */
  const calcularTerminoBell = (n) => {
	if (n === 0 || n === 1) {
	  return 1;
	} else {
	  const calcularSumaTerminosAnteriores = (k) => {
		if (k < 0) {
		  return 0;
		} else {
		  const coefBinomial = coeficienteBinomial(n - 1, k);
		  const terminoAnterior = calcularTerminoBell(k);
		  return coefBinomial * terminoAnterior + calcularSumaTerminosAnteriores(k - 1);
		}
	  };
  
	  return calcularSumaTerminosAnteriores(n - 1);
	}
  };
  
  // Ejemplo de uso: calcular y mostrar los términos de la serie de Bell
  const numTerminos = prompt('Ingrese el número de términos de la serie de Bell que desea calcular.');
  let terminos = [];
  
  const calcularTerminosRecursivo = (n) => {
	if (n >= numTerminos) {
	  return;
	} else {
	  terminos.push(calcularTerminoBell(n));
	  calcularTerminosRecursivo(n + 1);
	}
  };
  
  calcularTerminosRecursivo(0);
  
  // Mostrar los términos obtenidos
  console.log(`Los primeros nueve términos de la serie de Bell son: ${terminos.join(', ')}.`);
  