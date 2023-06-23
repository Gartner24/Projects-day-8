/*EJERCICIO 19 - PROYECTO 09
19-Un supermercado ha puesto en oferta la venta al por mayor de cierto producto, ofreciendo un descuento del 15% por la compra de más
de 3 docenas y 10% en caso contrario. Además por la compra de más de 3 docenas se obsequia una unidad del producto por cada docena en
exceso sobre 3. Diseñe un algoritmo que determine el monto de la compra, el monto del descuento, el monto a pagar y el número de unidades
de obsequio por la compra de cierta cantidad de docenas del producto.

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
Descripción: Este programa calcula el monto de la compra, el monto del descuento, el monto a pagar y el número de unidades de obsequio
*/
const prompt = require('prompt-sync')({ sigint: true });

// Variables que almacenan la cantidad de docenas y el precio
let cantidad = prompt('Ingrese la cantidad de docenas a comprar: ');
let precio = prompt('Ingrese el precio del producto: ');

// Funcion que calcula el precio total, el descuento y el obsequio
const calcularCompra = (cantidad, precio) => {
	let precioTotal = cantidad * precio;
	let descuento = 0;
	let obsequio = 0;
	if (cantidad > 3) {
		descuento = precioTotal * 0.15;
		obsequio = (cantidad - 3) * 12;
	} else descuento = precioTotal * 0.1;
	precioTotal -= descuento;
	console.log('El precio total es: ' + precioTotal);
	console.log('El descuento es: ' + descuento);
	console.log('El obsequio es: ' + obsequio);
};

calcularCompra(cantidad, precio);
