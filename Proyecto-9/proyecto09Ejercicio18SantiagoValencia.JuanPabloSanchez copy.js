/*EJERCICIO 18 - PROYECTO 09
18-En un estacionamiento cobran $1.800 por hora o fracción. Diseñe un algoritmo que determine cuanto debe pagar un cliente por el
estacionamiento de su vehículo, conociendo el tiempo de estacionamiento en horas y minutos.
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
Descripción: Este programa permite saber cuanto debe pagar una persona por tiempo de parqueo
*/

const prompt = require('prompt-sync')({ sigint: true });

// Variables que almacenan la cantidad de horas y minutos
let cantidadHoras = prompt('Ingrese la cantidad de horas: ');
let cantidadMinutos = prompt('Ingrese la cantidad de minutos: ');

// Función que calcula el pago por el tiempo de parqueo
const estacionamiento = (cantidadHoras, cantidadMinutos) => {
	let tiempoTotal = cantidadHoras + cantidadMinutos / 60;
	let pago = tiempoTotal * 1800;

	console.log(
		`Usted debe pagar $${pago} por un tiempo en parqueo de: ${cantidadHoras} horas y ${cantidadMinutos} minutos.`
	);
};

estacionamiento(cantidadHoras, cantidadMinutos);
