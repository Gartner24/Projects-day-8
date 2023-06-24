/*EJERCICIO 04 - PROYECTO 10 
------------------------------------------------------
4. Hacer un programa de computador, de tal manera que pida el número de termino deseados en la
siguiente serie: Serie de Pell: Esta serie comienza con los números 0 y 1, y los siguientes términos se
calculan como 2 veces el término anterior más el término anterior al anterior. La fórmula para el enésimo número de Pell es P(n) = 2P(n-1) + P(n-2), donde P(0) = 0 y P(1) = 1.
-------------------------------------------------------
Fecha de publicacion: 20-06-2023
Hora: 10:23 p.m.
Version: 1.0
Autores: Ing(c) Santiago Valencia - Ing(c) Juan Pablo Sánchez
------------------------------------------------------
Lenguaje: JavaScript
Version del lenguaje: 6.0
------------------------------------------------------
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computacion
------------------------------------------------------
Descripción: Este programa muestra los n terminos de la serie de Pell*/

const prompt = require('prompt-sync')({ sigint: true }); //Activa el prompt para poder pedir por consola un dato
let cantidadTerminos = prompt(
	'Ingrese la cantidad de terminos que desea visualizar: '
); //Pide por teclado la variable de terminos de la serie

const Pell = (n) => {
	if (n == 0) return 0; //Si es cero, devuelve cero
	if (n == 1) return 1; //Si es uno, devuelve uno
	return 2 * Pell(n - 1) + Pell(n - 2); //Si es mayor a uno, devuelve la formula de la serie de Pell
};

// Funcion que imprime la serie de Pell cantidadTerminos veces
const repeatFunction = (n) => {
	if (n >= 0) {
		repeatFunction(n - 1); //Se devuelve desde el enésimo término hasta ser menor o igual a cero
		console.log(Pell(n)); //Cada proceso de devolverse lo va mostrando con la funcion de la serie de Pell
	}
};

repeatFunction(cantidadTerminos - 1);
