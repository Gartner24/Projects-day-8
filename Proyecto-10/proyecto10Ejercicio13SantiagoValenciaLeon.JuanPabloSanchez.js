/*EJERCICIO 13 - PROYECTO 10
13. Hacer un programa de computador, de tal manera que lea desde el teclado un
grupo de 75 números, diferentes a cero(validar este requisito) y al final de
leídos, imprima:
* Cantidad de números Mayores a 150
* Número mayor y número menor encontrado en el grupo
* Cantidad de Números negativos encontrados
* Promedio de los Positivos Encontrados.(Usando solo recursividad)

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
Descripción: Este programa lee un grupo de 75 números, diferentes a cero, y al
final de leídos, imprime:
* Cantidad de números Mayores a 150
* Número mayor y número menor encontrado en el grupo
* Cantidad de Números negativos encontrados
* Promedio de los Positivos Encontrados.
*/

// Variable que almacena la cantidad de numeros mayores a 150
let cantidadMayores150 = 0;

// Variable que almacena el numero mayor
let numeroMayor = 0;

// Variable que almacena el numero menor
let numeroMenor = 0;

// Variable que almacena la cantidad de numeros negativos
let cantidadNegativos = 0;

// Variable que almacena la cantidad de numeros positivos
let cantidadPositivos = 0;

// Variable que almacena la suma de los numeros positivos
let sumaPositivos = 0;

// Variable que almacena el promedio de los numeros positivos
let promedioPositivos = 0;

// Funcion que lee los numeros generarlos aleatoriamente

const leerNumeros = (cantidad) => {
	if (cantidad > 0) {
		let numero = Math.floor(Math.random() * (300 - -300)) + -300;
		if (numero != 0) {
			if (numero > 150) cantidadMayores150++;
			if (numero > numeroMayor) numeroMayor = numero;
			if (numero < numeroMenor) numeroMenor = numero;
			if (numero < 0) cantidadNegativos++;
			if (numero > 0) {
				cantidadPositivos++;
				sumaPositivos += numero;
			}
		}
		leerNumeros(cantidad - 1);
	}
};

// Funcion que calcula el promedio de los numeros positivos
const calcularPromedio = () => {
	promedioPositivos = sumaPositivos / cantidadPositivos;
};

// Funcion que imprime los resultados
const imprimirResultados = () => {
	console.log(`Cantidad de números Mayores a 150: ${cantidadMayores150}`);
	console.log(`Número mayor: ${numeroMayor}`);
	console.log(`Número menor: ${numeroMenor}`);
	console.log(`Cantidad de Números negativos: ${cantidadNegativos}`);
	console.log(`Promedio de los Positivos: ${promedioPositivos}`);
};

leerNumeros(75);
calcularPromedio();
imprimirResultados();
