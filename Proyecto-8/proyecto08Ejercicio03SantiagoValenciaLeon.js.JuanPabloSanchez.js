/*EJERCICIO 03 - PROYECTO 08
3. Escribir un programa que imprima el perímetro de un rectángulo que tome su largo y su ancho como
datos de entrada, teniendo en cuenta que el perímetro es la suma de sus 4 lados.

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
Descripción: Este programa imprime el perímetro de un rectángulo.
*/

const prompt = require('prompt-sync')({ sigint: true });

// Variables que almacena el largo y el ancho del rectángulo
let largo = prompt('Ingrese el largo: ');
let ancho = prompt('Ingrese el ancho: ');
// Variables que almacenara el perímetro del rectángulo
let perimetro = 0;

// Función que calcula el perímetro del rectángulo
const calcularPerimetro = (largo, ancho) => {
	perimetro = 2 * (largo + ancho);
	return perimetro;
}

console.log(calcularPerimetro(largo, ancho));
