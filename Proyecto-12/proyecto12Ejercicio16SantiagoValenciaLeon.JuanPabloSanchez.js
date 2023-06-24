/*EJERCICIO 16 - PROYECTO 12
16.Hacer un programa de computador, utilizando ciclos anidados; de tal manera que presente lo siguiente
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
Descripción: Este programa imprime un rombo de Z.
*/

// Función para imprimir los renglones
const renglones = (limite) => {
	let renglon = 1;

	while (renglon <= limite) {
		if (renglon === 1 || renglon === 7) {
			espacios(9);
			letras(1);
		}
		if (renglon === 2 || renglon === 6) {
			espacios(8);
			letras(3);
		}
		if (renglon === 3 || renglon === 5) {
			espacios(7);
			letras(5);
		}
		if (renglon === 4) {
			espacios(6);
			letras(7);
		}
		console.log(); // Salto de línea
		renglon++;
	}
};

// Funciones para imprimir espacios
const espacios = (espacio) => {
	let contador = 1;

	while (contador <= espacio) {
		process.stdout.write(' ');
		contador++;
	}
};

// Funciones para imprimir letras
const letras = (cantidad) => {
	let contador = 1;

	while (contador <= cantidad) {
		process.stdout.write('Z');
		contador++;
	}
};

renglones(7);
