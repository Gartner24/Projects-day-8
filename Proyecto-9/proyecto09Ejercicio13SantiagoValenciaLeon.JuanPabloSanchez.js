/*EJERCICIO1 13 - PROYECTO 09
13-Una persona enferma, que pesa 70 kg, se encuentra en reposo y desea saber cuantas calorías consume su cuerpo durante todo el tiempo
que realice una misma actividad. Las actividades que tiene permitido realizar son únicamente dormir o estar sentado en reposo. Los datos
que tiene son que estando dormido consume 1.08 calorías por minuto y estando sentado en reposo consume 1.66 calorías por minuto. Datos
de entrada: actividad(string), tiempo de la actividad.

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
Descripción: Este programa calcula cuantas calorías consume una persona durante todo el tiempo que realice una misma actividad.
*/
const prompt = require('prompt-sync')({ sigint: true });

// Variables que almacena la actividad y el tiempo de la actividad
let actividad = prompt('Ingrese la actividad a realizar: ');
let tiempo = prompt('Ingrese el tiempo de la actividad: ');

// Función que calcula cuantas calorías consume una persona durante todo el tiempo que realice una misma actividad.
const calcularCalorias = (actividad, tiempo) => {
	let calorias;
	actividad = actividad.toLowerCase();
	if (actividad == 'dormir') calorias = tiempo * 1.08;
	if (actividad == 'reposo') calorias = tiempo * 1.66;
	console.log(calorias);
};

calcularCalorias(actividad, tiempo);
