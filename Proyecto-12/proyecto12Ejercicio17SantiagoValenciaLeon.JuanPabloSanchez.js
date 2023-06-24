/*EJERCICIO 17 - PROYECTO 12
17.Hacer un programa de computador, utilizando ciclos anidados; de tal manera que presente lo siguiente
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
Descripción: Este programa imprime una piramide de Z vacia invertida.
*/

// Función para imprimir los renglones
const renglones = (limite) => {
	let contador = -1;
	let cantidadEI = 0;
	let cantidadEC = 16;

	for (let renglon = 0; renglon < limite; renglon++) {
		espaciosI(contador, cantidadEI);
		process.stdout.write('Z');
		espaciosC(contador, cantidadEC);

		if (renglon < 9) {
			console.log('Z');
		}

		cantidadEI++;
		cantidadEC -= 2;
	}
};

// Funciones para imprimir espacios
const espaciosI = (contador, cantidadEI) => {
	for (; contador < cantidadEI; contador++) {
		process.stdout.write(' ');
	}
};

// Funciones para imprimir espacios
const espaciosC = (contador, cantidadEC) => {
	for (; contador < cantidadEC; contador++) {
		process.stdout.write(' ');
	}
};

renglones(10);
