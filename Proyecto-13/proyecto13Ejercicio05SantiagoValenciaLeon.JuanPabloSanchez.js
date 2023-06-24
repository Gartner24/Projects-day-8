/*EJERCICIO 05 - PROYECTO 13
Ejercicio 05. Construir un programa de computador, tal que cree una pantalla (60 columnas x 30 filas) en modo
texto y en forma aleatoria 
B.
Ahora, busque como conformar rectángulos, donde la letra "o" sea una esquina de ese rectángulo,
dibújelos e imprima el área del menor de ellos (si los hay, para un
rectángulo de mínimo dos(2) filas y/o dos(2) columnas).
Para este ejemplo el área máspequeña es 6 x 2
Esto es el lado superior tiene seis(6) columnas y la altura sería
de dos(2) filas

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
Descripción: Este programa crea una pantalla de 60 columnas x 30 filas en modo texto y en forma aleatoria, luego conforma rectángulos, donde la letra "o" es una esquina de ese rectángulo, los dibuja e imprime el área del menor de ellos (si los hay, para un rectángulo de mínimo dos(2) filas y/o dos(2) columnas).
*/

const getRandomInt = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

const findSmallestRectangle = (matrix) => {
	let area = 60 * 30;
	let minWidth = 0;
	let minHeight = 0;
	for (let i = 0; i < 60; i++) {
		for (let j = 0; j < 30; j++) {
			if (matrix[i][j] === 15) {
				for (let k = j + 1; k < 30; k++) {
					if (matrix[i][k] === 15) {
						for (let l = i + 1; l < 60; l++) {
							if (matrix[l][j] === 15 && matrix[l][k] === 15) {
								const width = k - j + 1;
								const height = l - i + 1;
								const currentArea = width * height;

								if (currentArea < area) {
									area = currentArea;
									minWidth = width;
									minHeight = height;
								}
							}
						}
					}
				}
			}
		}
	}
	return { width: minWidth, height: minHeight };
};

const createMatrix = () => {
	const matrix = [];

	for (let i = 0; i < 60; i++) {
		matrix[i] = [];
		for (let j = 0; j < 30; j++) {
			matrix[i][j] = getRandomInt(0, 29);
		}
	}

	return matrix;
};

const printMatrix = (matrix) => {
	for (let i = 0; i < 60; i++) {
		for (let j = 0; j < 30; j++) {
			if (matrix[i][j] === 15) {
				process.stdout.write('O');
			} else {
				process.stdout.write('.');
			}
		}
		console.log();
	}
};

const markRectangles = (matrix) => {
	for (let i = 0; i < 60; i++) {
		for (let j = 0; j < 30; j++) {
			if (matrix[i][j] === 15) {
				for (let k = j + 1; k < 30; k++) {
					if (matrix[i][k] === 15) {
						for (let l = i + 1; l < 60; l++) {
							if (matrix[l][j] === 15 && matrix[l][k] === 15) {
								for (let a = i; a <= l; a++) {
									for (let b = j; b <= k; b++) {
										if (matrix[a][b] !== 15) {
											matrix[a][b] = 50;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
};

const printMarkedMatrix = (matrix) => {
	console.log();
	for (let i = 0; i < 60; i++) {
		for (let j = 0; j < 30; j++) {
			if (matrix[i][j] === 50) {
				process.stdout.write('x');
			} else if (matrix[i][j] === 15) {
				process.stdout.write('O');
			} else {
				process.stdout.write('.');
			}
		}
		console.log();
	}
};

const matrix = createMatrix();
printMatrix(matrix);
markRectangles(matrix);
printMarkedMatrix(matrix);

const smallestRectangle = findSmallestRectangle(matrix);
console.log(
	`\nEl área del rectángulo más pequeño es de ${smallestRectangle.width} x ${smallestRectangle.height}`
);
