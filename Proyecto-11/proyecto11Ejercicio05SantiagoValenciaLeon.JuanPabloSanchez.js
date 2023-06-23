/*EJERCICIO 05 - PROYECTO 11
5.Hacer un programa de computador, utilizando ciclos anidados; de tal manera que presente todas las
tablas de multiplicar del 1 al 10; (con un máximo de cuatro(4) ordenes “IMPRIMIR” en todo el programa incluyendo
las funciones.);

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
Descripción: Este programa presenta todas las tablas de multiplicar del 1 al 10.
*/

// Funcion que imprime las tablas de multiplicar del 1 al 10
const imprimirTablas = () => {
	for (let i = 1; i <= 10; i++) {
		console.log(`Tabla del ${i}`);
		for (let j = 1; j <= 10; j++) {
			console.log(`${i} x ${j} = ${i * j}`);
		}
		console.log('');
	}
};

imprimirTablas();
