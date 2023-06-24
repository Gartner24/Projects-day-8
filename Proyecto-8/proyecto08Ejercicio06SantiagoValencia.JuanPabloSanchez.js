/*EJERCICIO 06 - PROYECTO 08
6. Escribir un programa que reciba el número de minutos como datos de entrada e imprima en pantalla
el total de horas y minutos.
-----------------------------------------------------------------
Fecha de publicación: 20-06-2023
Hora: 10:22 a.m
Versión: 2.0
Autores: Ing(c) Santiago Valencia, Ing(c) Juan Pablo Sánchez
Lenguaje: JavaScript
Versión del lenguaje: 6.0
Presentado a: Doctor Ricardo Moreno Laverde
-----------------------------------------------------------------
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
-----------------------------------------------------------------
Descripción: Este programa recibe el numero de minutos e imprime el total de horas y minutos
*/

const prompt = require('prompt-sync')({ sigint: true });

// Función que convierte minutos a horas y minutos
const convertirMinutosAHorasMinutos = () => {
	let cantidadMinutos = prompt('Por favor digite la cantidad de minutos: '); //Variable que recibe la cantidad de minutos a convertir

	let cantidadHoras = Math.floor(cantidadMinutos / 60); //Toma la parte entera como las horas
	let cantidadFinalMinutos = cantidadMinutos % 60; //Toma el resto de la división como la cantidad final de minutos
	console.log(
		`${cantidadMinutos} minutos equivalen a ${cantidadHoras} horas y ${cantidadFinalMinutos} minutos.`
	);
};

convertirMinutosAHorasMinutos();
