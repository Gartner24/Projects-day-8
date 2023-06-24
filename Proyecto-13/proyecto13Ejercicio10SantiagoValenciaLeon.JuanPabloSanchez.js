/*EJERCICIO 01 - PROYECTO 13
Ejercicio 10:- En un arreglo bidimensional de 8 x 8:
Diagonal principal, elementos: 0,0 1,1 2,2 3,3 4,4 5,5 6,6 7,7
Construya un programa, utilizando funciones para cada caso, tal que:
1.- Genere un arreglo de tipo float bidimensional de 8 x 8 - con números aleatorios entre 0.0 y 15.0 con un decimal
e imprimirlo en pantalla de forma ordenada; por ejemplo:
Elementos aleatorios(generados)
7.4 8.2 9.1 10.9 0.0 3.3 5.1 6.1
2.0 10.0 1.6 15.0 10.1 1.4 1.8 3.4
3.0 2.9 1.9 12.9 9.1 4.5 2.3 2.7
5.4 3.1 2.0 13.3 8.2 2.6 3.5 3.6
4.3 8.3 1.7 1.6 4.6 8.5 4.7 8.2
6.1 6.0 2.5 2.8 12.9 11.9 3.8 1.5
7.0 3.5 1.9 1.9 11.0 12.0 14.0 1.7
8.2 2.9 13.0 14.7 5.7 1.8 12.6 1.9

Los colores son solo de referencia

Construya solo funciones tipo flecha.
2.- Moda: El valor que mas se repite en el arreglo e indique cuantas veces esta.
Ejemplo: Para esta secuencia de números aleatorios hay dos(2) modas
Imprimiría: Moda 8.2 esta 4 veces. Moda 1.9 esta 4 veces.
3.- El promedio(a un decimal) de cada fila y de cada columna
4.- La (suma de la diagonal superior menos (-) la suma de la inferior) / promedio(a un decimal) del arreglo.
e.- Calcule e imprima en forma ordenada, un arreglo que contenga los factoriales de la parte entera de todos los
valores generados en el enciso a.
5.- Indique cuantas veces se encuentra el promedio.
6.- El promedio de los valores más altos de cada fila y cada columna
-----------------------------------------------------------------
Fecha de publicación: 20-06-2023
Hora: 06:00 p.m
Versión: 1.0
Autores: Ing(c) Santiago Valencia, Ing(c) Juan Pablo Sánchez
Lenguaje: JavaScript
Versión del lenguaje: 6.0
Presentado a: Doctor Ricardo Moreno Laverde
-----------------------------------------------------------------
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
-----------------------------------------------------------------
Descripción: Este programa imprime un rectángulo de x caracteres para el ancho, y de y caracteres para la longitud. Y se encuentran sus modas, promedios, etc.
*/

// 1.- Genere un arreglo de tipo float bidimensional de 8 x 8 - con números aleatorios entre 0.0 y 15.0 con un decimal
// e imprimirlo en pantalla de forma ordenada; por ejemplo:

// Crear un arreglo bidimensional de 8x8
const createArray = () => {
	// Crear un arreglo bidimensional de 8x8
	let array = new Array(8); // [ , , , , , , ,]
	for (let i = 0; i < array.length; i++) {
		array[i] = new Array(8); // [[i], [i], [i], [i], [i], [i], [i], [i]]
	}

	// Rellenar el arreglo con números aleatorios del 1 al 15
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array[i].length; j++) {
			array[i][j] = (Math.random() * 15).toFixed(1); // [[i][j]]
			process.stdout.write(`${array[i][j]} \t`);
		}
		console.log(' \n');
	}
	return array;
};

// 2.- Moda: El valor que mas se repite en el arreglo e indique cuantas veces esta.
// Ejemplo: Para esta secuencia de números aleatorios hay dos(2) modas
// Imprimiría: Moda 8.2 esta 4 veces. Moda 1.9 esta 4 veces.

// Constante que guarda el arreglo bidimensional
const array = createArray();
// Guardar el(los) moda(s) en un arreglo
let modasArray = [];
// Guardar cuantas veces se repite(n) la(s) moda(s)
let modasRepeatTimes = 0;
// Contador de repeticiones de el valor que se está revisando
let repeatModalCounter = 0;

const modaExecute = (array) => {
	array.forEach((row) => {
		row.forEach((number) => {
			// Variable que guarda el valor que se está revisando
			let modaReview = number;
			// Guardar los numeros que ya se revisaron
			let valuesReviewed = [];

			// Si el valor no existe en el arreglo de modas, se cuenta cuantas veces se repite
			if (!modaExists(modaReview, modasArray)) {
				if (!modaExists(modaReview, valuesReviewed)) {
					// Se reinicia el contador de repeticiones
					repeatModalCounter = 0;

					// Se cuentan las repeticiones
					countRepeatingOfModal(modaReview);
					compareModas(modaReview, repeatModalCounter);
					valuesReviewed.push(modaReview);
				}
			}
		});
	});

	// Imprimir las modas
	modasArray.forEach((moda) => {
		console.log(`Moda ${moda} esta ${modasRepeatTimes} veces.`);
	});
};

// Funciones auxiliares

// Cuenta cuantas veces se repite el valor que se está revisando
const countRepeatingOfModal = (modaReview) => {
	array.forEach((row) => {
		row.forEach((value) => {
			// Si el valor que se está revisando es igual al valor que se está revisando, se aumenta el contador
			if (modaReview == value) {
				repeatModalCounter++;
			}
		});
	});
};

// Compara las repeticiones del valor que se está revisando con las repeticiones de la(s) moda(s)
const compareModas = (modaReview, repeatModalCounter) => {

	if (repeatModalCounter > modasRepeatTimes) {
		// Si el valor que se está revisando se repite más veces que la(s) moda(s), se reinicia el arreglo de modas, se guarda el valor que se está revisando y se guarda cuantas veces se repite.
		restartModa(); // modasArray = []
		modasRepeatTimes = repeatModalCounter;
		addModa(modaReview); // modasArray = [18]
	} else if (repeatModalCounter == modasRepeatTimes) {
		// Si el valor que se está revisando se repite la misma cantidad de veces que la(s) moda(s), se guarda el valor que se está revisando
		addModa(modaReview); // modasArray = [17, 18]
	}
};

// Verifica si el valor que se está revisando ya existe en el arreglo de modas
const modaExists = (number, array) => {
	return array.includes(number);
};

// Agrega el valor que se está revisando al arreglo de modas
const addModa = (modaReview) => {
	modasArray.push(modaReview);
};

// Reinicia el arreglo de modas
const restartModa = () => {
	modasArray.splice(0, modasArray.length);
};

modaExecute(array);

// 3.- El promedio(a un decimal) de cada fila y de cada columna

// Funcion que calcula el promedio de cada fila
const promedioFilas = () => {
	let cont = 0;
	array.forEach((row, i) => {
		row.forEach((number) => {
			cont += parseFloat(number);
		});
		console.log(`Fila ${i + 1} : ${(cont / 8).toFixed(1)}`);
		cont = 0; // reinicia contador
	});
};

// Funcion que calcula el promedio de cada columna
const promedioColumnas = () => {
	let cont = 0;
	array.forEach((row, j) => {
		row.forEach((number) => {
			cont += parseFloat(number);
		});
		console.log(`Columna ${j + 1} : ${(cont / 8).toFixed(1)}`);
		cont = 0; // reinicia contador
	});
};

// 4.- La (suma de la diagonal superior menos (-) la suma de la inferior) / promedio(a un decimal) del arreglo.
// Funcion que calcula el promedio del arreglo
const promedioArreglo = () => {
	let cont = 0;

	array.forEach((row) => {
		row.forEach((number) => {
			cont += parseFloat(number);
		});
	});
	return (cont / 64).toFixed(1);
};

// Funcion que calcula la suma de la diagonal superior
const sumaDiagonalSuperior = () => {
	let cont = 0;
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length; j++) {
			if (i <= j) {
				cont += parseFloat(array[i][j]);
			}
		}
		return cont.toFixed(1);
	}
};

// Funcion que calcula la suma de la diagonal inferior
const sumaDiagonalInferior = () => {
	let cont = 0;
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length; j++) {
			if (i >= j) {
				cont += parseFloat(array[i][j]);
			}
		}
		return cont.toFixed(1);
	}
};

// Funcion que calcula la resta de la diagonal superior menos la diagonal inferior sobre el promedio del arreglo
const resultadoDiagonalesSobrePromedio = () => {
	return (
		(sumaDiagonalSuperior() - sumaDiagonalInferior()) /
		promedioArreglo()
	).toFixed(1);
};

//Hallar promedios de fila y columna individualmente
console.log('\nPromedios:');
promedioFilas();
promedioColumnas();

console.log(`\nDiagonal superior - Diagonal inferior / prom del arreglo\n
${sumaDiagonalSuperior()} - ${sumaDiagonalInferior()} / ${promedioArreglo()} = ${resultadoDiagonalesSobrePromedio()}`);

// e.- Calcule e imprima en forma ordenada, un arreglo que contenga los factoriales de la parte entera de todos los
// valores generados en el enciso a.

const factorial = (term) => {
	if (term === 0 || term === 1) return 1;
	return term * factorial(term - 1);
};

console.log('\n');

let factorialArray = new Array(8);
for (let i = 0; i < factorialArray.length; i++) {
	factorialArray[i] = new Array(8);
}

const calculateFactorialForEachArrayValue = () => {
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array[i].length; j++) {
			let factorialNumber = factorial(
				Math.floor(parseFloat(array[i][j]))
			);
			factorialArray[i][j] = factorialNumber;
			process.stdout.write(`${factorialArray[i][j]}\t`);
		}
		console.log('\n');
	}
};

calculateFactorialForEachArrayValue();

// 5.- Indique cuantas veces se encuentra el promedio.
//encontrar cuantas veces esta el promedio de todo el arreglo en el arreglo original
const contarPromedio = () => {
	let cont = 0;
	let Arreglo = promedioArreglo();
	array.forEach((row, i) => {
		array[i].forEach((numer, j) => {
			if (Arreglo == array[i][j]) {
				cont++;
			}
		});
	});
	console.log(`El promedio esta ${cont} veces en el arreglo`);
};

contarPromedio();

// 6.- El promedio de los valores más altos de cada fila y cada columna
//promedio de numeros mayores en cada fila
let mayores = []; //arreglo que sirve para verificar los numeros mayores por fila

const promedioMayoresFila = () => {
	let cont = 0; // contador para sumar los numeros mayores por fila
	array.forEach((row, i) => {
		let mayor = parseFloat(array[i][0]);
		array[i].forEach((numer, j) => {
			if (parseFloat(array[i][j]) > mayor) {
				mayor = parseFloat(array[i][j]); //asigna el mayor
			}
		});
		mayores[i] = mayor;
		cont += mayor;
	});
	console.log(`${mayores}`);
	console.log(`Promedio de filas: ${(cont / 8).toFixed(1)}`);
};

promedioMayoresFila();

//promedio de numeros mayores en cada columna
let mayoresC = []; //arreglo que sirve para verificar los numeros mayores por columna

const promedioMayoresColumna = () => {
	let cont = 0; // contador para sumar los numeros mayores por columna
	array.forEach((row, i) => {
		let mayor = parseFloat(array[0][i]);
		array[i].forEach((numer, j) => {
			if (parseFloat(array[j][i]) > mayor) {
				mayor = parseFloat(array[j][i]); //asigna el mayor
			}
		});
		mayoresC[i] = mayor;
		cont += mayor;
	});
	console.log(`${mayoresC}`);
	console.log(`Promedio de Columnas: ${(cont / 8).toFixed(1)}`);
};

promedioMayoresColumna();
