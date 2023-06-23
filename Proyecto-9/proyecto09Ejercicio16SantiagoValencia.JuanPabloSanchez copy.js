/*EJERCICIO 16 - PROYECTO 09
16- Una empresa quiere hacer una compra de varias piezas de la misma clase a una fabrica de refacciones. La empresa, dependiendo del
monto total de la compra, decidirá que hacer para pagar al fabricante.
Si el monto total de la compra excede de $500000 la empresa tendrá la capacidad de invertir de su propio dinero un 55% del monto de
la compra, pedir prestado al banco un 30% y el resto lo pagara solicitando un crédito al fabricante.
Si el monto total de la compra no excede de $500000 la empresa tendrá capacidad de invertir de su propio dinero un 70% y el restante
30% lo pagara solicitando crédito al fabricante. El fabricante cobra por concepto de intereses un 20% sobre la cantidad que se le pague
a crédito. Datos de entrada: CostoPieza, NumeroDePiezas.
Datos de salida: CantidadInvertida, ValorPrestamoBanco, ValorCreditoFabricante, InteresCobradoPorFabricante.
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
Descripción: Este programa permite conocer a una empresa el costo total de la compra y tomar decisiones sobre el pago
*/

const prompt = require('prompt-sync')({ sigint: true });
let costoPieza = prompt('Ingrese el costo unitario de la pieza: ');
let numeroDePiezas = prompt('Ingrese el numero de piezas compradas: ');

// Función que calcula la economía de la empresa
let montoTotal = costoPieza * numeroDePiezas;

// Variables que almacenan los valores de la economía de la empresa
let cantidadInvertida = 0;
let valorPrestamoBanco = 0;
let valorCreditoFabricante = 0;
let interesCobradoPorFabricante = 0;

// Función que calcula la economía de la empresa
const economiaEmpresa = (montoTotal) => {
	if (montoTotal > 500000) {
		cantidadInvertida = montoTotal * 0.55;
		valorPrestamoBanco = montoTotal * 0.3;
		valorCreditoFabricante =
			montoTotal - cantidadInvertida - valorPrestamoBanco;
		interesCobradoPorFabricante = valorCreditoFabricante * 0.2;

		console.log(`Cantidad invertida: ${cantidadInvertida}`);
		console.log(`Valor Prestamo Banco: ${valorPrestamoBanco}`);
		console.log(`Valor Credito Fabricante: ${valorCreditoFabricante}`);
		console.log(
			`Interes cobrado por fabricante: ${interesCobradoPorFabricante}`
		);
	} else {
		cantidadInvertida = montoTotal * 0.7;
		valorCreditoFabricante = montoTotal - cantidadInvertida;
		interesCobradoPorFabricante = valorCreditoFabricante * 0.2;

		console.log(`Cantidad invertida: ${cantidadInvertida}`);
		console.log(`Valor Prestamo Banco: ${valorPrestamoBanco}`);
		console.log(`Valor Credito Fabricante: ${valorCreditoFabricante}`);
		console.log(
			`Interes cobrado por fabricante: ${interesCobradoPorFabricante}`
		);
	}
};

economiaEmpresa(montoTotal);
