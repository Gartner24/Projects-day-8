/*EJERCICIO 09 - PROYECTO 09
9- Un hombre desea saber cuanto dinero se genera por concepto de intereses sobre la cantidad que tiene en inversión en el banco. El decidirá
reinvertir los intereses siempre y cuando estos excedan a $7,000, y en ese caso desea saber cuanto dinero tendrá finalmente en su cuenta.
Datos de entrada: Interes, capital inicial

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
Descripción: Este programa calcula el dinero que se genera por concepto de intereses sobre la cantidad que tiene en inversión en el banco.
*/
const prompt = require('prompt-sync')({ sigint: true });

// Variables que almacena el interes y el capital inicial
let interes = prompt('Ingrese el interes: ');
let capitalInicial = prompt('Ingrese el capital inicial: ');

// Función que calcula el dinero que se genera por concepto de intereses sobre la cantidad que tiene en inversión en el banco.
const decidirInversion = (interes, capital) => {
	let intereses = interes * capital;
	if (intereses > 7000)
		console.log('Invierta su saldo sera: ' + (intereses + capital));
	else console.log('No invierta');
};

decidirInversion(interes, capitalInicial);
