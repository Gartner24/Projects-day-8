/*EJERCICIO 15 - PROYECTO 10
15.Hacer un programa de computador, de tal manera que, lea un número e imprima su factorial, siendo:
N ! = 1 x 2 x 3 x 4 x...N
N ! = 1 si N = 0
Solo está definido el factorial para números enteros positivos. (Usando solo recursividad)

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
Descripción: Este programa lee un número e imprime su factorial.
*/
const prompt = require("prompt-sync")({sigint: true});

// Funcion que calcula el factorial de un numero
const factorial = (numero) => {
	if (numero == 0) return 1;
	return numero * factorial(numero - 1);
};

// Funcion que lee un numero
const leerNumero = () => {
	let numero = prompt("Ingrese un numero: ");

    // Validacion del numero
    if (numero < 0) console.log("El numero debe ser positivo");
    else if (numero % 1 != 0) console.log("El numero debe ser entero");
    else return numero;
};

console.log(factorial(leerNumero()));
