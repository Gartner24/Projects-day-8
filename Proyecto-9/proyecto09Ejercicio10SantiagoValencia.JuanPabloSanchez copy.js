/*EJERCICIO 10 - PROYECTO 09
10-Determinar si un alumno aprueba a reprueba un curso, sabiendo que aprobara si su promedio de tres calificaciones es mayor o igual a
3,0; reprueba en caso contrario. Datos de entrada: Tres(3) notas.
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
Descripción: Indica si un alumno aprueba o reprueba segun su promedio de tres notas
*/

const prompt = require('prompt-sync')({ sigint: true });

// Función que calcula el promedio de tres notas y muestra si el alumno aprueba o reprueba
const promedioAprobacion = () => {
	let nota1 = prompt('Ingrese la primer nota: ');
	let nota2 = prompt('Ingrese la segunda nota: ');
	let nota3 = prompt('Ingrese la tercera nota: ');

	// Variable que almacena el promedio de las tres notas
	let promedio = (nota1 + nota2 + nota3) / 3;

	if (promedio >= 3) {
		console.log(
			`Usted ha aprobado este curso con un promedio final de: ${promedio}`
		);
	} else {
		console.log(
			`Usted ha reprobado este curso con un promedio final de: ${promedio}`
		);
	}
};

promedioAprobacion();
