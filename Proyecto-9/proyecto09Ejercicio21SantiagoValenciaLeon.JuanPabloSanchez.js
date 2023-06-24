/*EJERCICIO 21 - PROYECTO 09
21-Diseñe un algoritmo y operacionalícelo, tal que lea un número entero positivo, de tres cifras (N <= 999 Y N>=100) y determine si el
número es capicúo (es igual al revés del número original). Ejemplo: N=323, 101.

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
Descripción: Este programa lee un número entero positivo, de tres cifras (N <= 999 Y N>=100) y determina si el número es capicúo (es igual al revés del número original).
*/
const prompt = require('prompt-sync')({ sigint: true });

// Variable que almacena el numero ingresado por el usuario
let numero = prompt('Ingrese un número de tres cifras: ');

// Funcion que determina si el numero es capicua o no
const esCapicua = (numero) => {
	let numeroInvertido = numero.split('').reverse().join('');
	if (numero == numeroInvertido) console.log('El numero es capicua');
	else console.log('El numero no es capicua');
};

esCapicua(numero);
