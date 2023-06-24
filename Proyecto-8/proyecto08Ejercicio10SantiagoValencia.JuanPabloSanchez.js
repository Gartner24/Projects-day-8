/*EJERCICIO 10 - PROYECTO 08
Escribir un programa que convierta de mph (millas por hora) a m/s, teniendo en cuenta que una
milla tiene 1609.344 m y una hora tiene 3600 segundos.
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
Descripción: Este programa convierte mph a m/s
*/

//const prompt=require("prompt-sync")({sigint:true});
function convertirMphAMs() {
	//let millasPorHora = prompt("Por favor digite la cantidad de mph que desea covnertir a m/s:");
	let millasPorHora = 30;
	let resultado = (millasPorHora * 1609.344) / 3600;
	console.log(`${millasPorHora} mph equivalen a ${resultado} m/s`);
}

convertirMphAMs();
