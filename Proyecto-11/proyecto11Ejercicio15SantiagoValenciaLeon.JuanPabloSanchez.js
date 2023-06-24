/*EJERCICIO 15 - PROYECTO 11
15.Hacer un programa de computador, utilizando ciclos anidados; de tal manera que presente lo siguiente
en la pantalla: (con un máximo de cuatro(4) ordenes “IMPRIMIR” .). Las líneas de las cuadriculas son
solo de referencia para mostrar filas y columnas; no se pide que las imprima.

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
Descripción: Este programa imprime una figura en la consola
*/

const print = (message) => {
	process.stdout.write(message);
};

// Funcion que imprime las ternas de enteros
function imprimir() {
	let final = 1;
	let finalA = 5;
	for (let fila = 1; fila <= 7; fila++) {
		if (fila <= 3 || fila >= 5) {
			for (let espacio = 1; espacio <= 27; espacio++) {
				print(' ');
			}
			for (let letra = 1; letra <= final; letra++) {
				print('A');
			}
			for (let espacio = 1; espacio <= finalA; espacio++) {
				print(' ');
			}
			for (let letra = 1; letra <= final; letra++) {
				print('A');
			}
			print('\n');
			if (fila <= 3) {
				final++;
				finalA -= 2;
			} else {
				final--;
				finalA += 2;
			}
		} else {
			for (let espacio = 1; espacio <= 27; espacio++) {
				print(' ');
			}
			print('AAAAAAA');
			print('\n');
		}
	}
}

imprimir();
