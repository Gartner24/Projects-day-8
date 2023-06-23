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

// modaReview 1.9 es moda?
// count++
// arrayExample = [
// 	[1.9, 11.2, 8.2, 8.2, 8.2, 8.2, 8.2, 8.2],
// 	[1.9, 11.2, 8.2, 8.2, 8.2, 8.2, 8.2, 8.2],
// 	[1.9, 11.2, 8.2, 8.2, 8.2, 8.2, 8.2, 8.2],
// 	[1.9, 11.2, 8.2, 8.2, 8.2, 8.2, 8.2, 8.2],
// 	[1.9, 11.2, 8.2, 8.2, 8.2, 8.2, 8.2, 8.2],
// 	[1.9, 11.2, 8.2, 8.2, 8.2, 8.2, 8.2, 8.2],
// 	[1.9, 11.2, 8.2, 8.2, 8.2, 8.2, 8.2, 8.2],
// 	[1.9, 11.2, 8.2, 8.2, 8.2, 8.2, 8.2, 8.2]
// ]

// Ejemplo 1:
// modasArray = [1.9]; repedido 4 veces
// verificando [8.2] contador de la nueva moda = 2

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
	// Ejemplo:
	// let modasArray = [17, 19, 20]; repedido 3 veces
	// let verificando [18] contador de la nueva moda = 4

	// Ejemplo 2:
	// let modasArray = [17, 19, 20]; repedido 3 veces
	// let verificando [18] contador de la nueva moda = 3

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
	return (cont / 8).toFixed(1);
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
