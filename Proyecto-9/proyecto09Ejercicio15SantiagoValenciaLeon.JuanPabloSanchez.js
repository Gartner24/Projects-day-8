/*EJERCICIO 15 - PROYECTO 09
15- Hacer un algoritmo que calcule el total a pagar por la compra de camisas. Si se compran tres camisas o mas se aplica un descuento del
20% sobre el total de la compra y si son menos de tres camisas un descuento del 10%. Datos de entrada: NumeroDeCamisas, Precio.

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
Descripción: Este programa calcula el total a pagar por la compra de camisas. Si se compran tres camisas o mas se aplica un descuento del
*/
const prompt = require('prompt-sync')({ sigint: true });

// variables que almacenan el total de camisas y el precio
let camisas = prompt('Ingrese el total de las camisas a comprar: ');
let precio = prompt('Ingrese el precio total: ');

// Función que calcula el total a pagar por la compra de camisas
const calcularDescuento = (camisas, precio) => {
	let precioTotal = precio;
	if (camisas >= 3) precioTotal -= precio * 0.2;
	else precioTotal -= precio * 0.1;
  console.log(`El precio total es: ${precioTotal}`)
};

calcularDescuento(camisas, precio);
