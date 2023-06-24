/*EJERCICIO 18 - PROYECTO 12
18.Hacer un programa de computador, utilizando ciclos anidados; de tal manera que presente lo siguiente
en la pantalla: (con un máximo de cuatro(4) ordenes “IMPRIMIR” .). Las líneas de las cuadriculas son
solo de referencia para mostrar filas y columnas; no se pide que las imprima.

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
Descripción: Este programa imprime una piramide de Z vacia.
*/

// Función para imprimir los renglones
const renglones = (limite) => {
	let contador = 0;
	let cantidadEI = 9;
	let cantidadEC = 0;
	let renglon = 0;

	while (renglon < limite) {
		if (renglon === 0) {
			espaciosI(0, 9);
		} else if (renglon < 9) {
			espaciosI(contador, cantidadEI);
		}

		if (renglon > 0) {
			process.stdout.write('Z');
		}

		espaciosC(contador, cantidadEC);

		console.log('Z');

		if (renglon > 0) {
			cantidadEI--;
			cantidadEC += 2;
		} else {
			cantidadEI--;
			cantidadEC = 1;
		}

		renglon++;
	}
};

// Funciones para imprimir espacios
const espaciosI = (contador, cantidadEI) => {
	while (contador < cantidadEI) {
		process.stdout.write(' ');
		contador++;
	}
};

// Funciones para imprimir espacios
const espaciosC = (contador, cantidadEC) => {
	while (contador < cantidadEC) {
		process.stdout.write(' ');
		contador++;
	}
};

renglones(10);
