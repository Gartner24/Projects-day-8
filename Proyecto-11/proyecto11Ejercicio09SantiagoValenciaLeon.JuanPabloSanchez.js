/*EJERCICIO 09 - PROYECTO 11
9.Hacer un programa de computador, de tal manera que, utilizando ciclos anidados se generen las
siguientes ternas de enteros: (con un máximo de cuatro(4) ordenes “IMPRIMIR” .)
1 1 1
2 1 2
3 1 3
4 2 1
5 2 2
6 2 3
7 3 1
8 3 2
9 3 3

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
Descripción: Este programa genera las siguientes ternas de enteros: (con un máximo de cuatro(4) ordenes “IMPRIMIR” .)
*/

const prompt = require('prompt-sync')({ sigint: true });

// Funcion que imprime las ternas de enteros
const imprimirTernas = () => {
	let numero = 1;
	for (let i = 1; i <= 3; i++) {
		for (let j = 1; j <= 3; j++) {
			console.log(`${numero} ${i} ${j}`);
			numero++;
		}
	}
};

imprimirTernas();
