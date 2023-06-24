/*EJERCICIO 19 - PROYECTO 12
19.Hacer un programa de computador, utilizando ciclos anidados; de tal manera que presente lo siguiente
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
Descripción: Este programa imprime una piramide de A que apunta a la izquierda
*/


// Función para imprimir los renglones
const renglones = (limite) => {
	let contador = 0;
	let cantidadletras = 1;
	let cantidadespacios = 39;
	let renglon = 0;

	while (renglon < limite) {
		espacios(contador, cantidadespacios);
		letras(contador, cantidadletras);

		console.log();

		if (renglon < 5) {
			cantidadletras++;
			cantidadespacios--;
		} else {
			cantidadletras--;
			cantidadespacios++;
		}

		renglon++;
	}
};

// Funciones para imprimir espacios
const espacios = (contador, cantidadespacios) => {
	for (; contador < cantidadespacios; contador++) {
		process.stdout.write(' ');
	}
};

// Funciones para imprimir letras
const letras = (contador, cantidadletras) => {
	for (; contador < cantidadletras; contador++) {
		process.stdout.write('A');
	}
};

renglones(11);
