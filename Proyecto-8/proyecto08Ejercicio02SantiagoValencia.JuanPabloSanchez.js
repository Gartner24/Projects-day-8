/*EJERCICIO 02 - PROYECTO 08
2. Escribir un programa que calcule el volumen de una esfera, teniendo en cuenta la siguiente formula: 4/3PIr^3. Tome un valor de PI=3.1415926
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
Descripción: Este programa calcula el volumen de una esfera
tomando el radio.
*/

//const prompt=require("prompt-sync")({sigint:true});
const PI = 3.1415926;

const volumenEsfera = () => {
	//let radio = prompt("Por favor digite el radio de la esfera:");
	let radio = 4;
	let resultado = (4 / 3) * PI * radio ** 3; //Variable que guarda el resultado final luego de pedir el radio
	console.log(
		'El volumen de una esfera de radio ' + radio + ' es de ' + resultado
	);
};

volumenEsfera();
