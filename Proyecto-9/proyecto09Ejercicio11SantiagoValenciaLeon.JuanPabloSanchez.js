/*EJERCICIO 11 - PROYECTO 09
11-En un almacén se hace un 20% de descuento a los clientes cuya compra supere los $100,000 ¿ Cual será la cantidad que pagara una
persona por su compra? . Datos de entrada: Valor de la compra.

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
Descripción: Este programa calcula el valor de la compra de una persona con un descuento del 20% si la compra supera los $100,000.
*/
const prompt = require("prompt-sync")({sigint: true});

// Variable que almacena el valor de la compra
let valorCompra = prompt("Ingrese el valor de su compra: ");

// Función que calcula el valor de la compra con el descuento
function calcularDescuento(valor) {
  let valorTotal = valorCompra;
  if (valor <= 100000) valorTotal -= valor * 0.2;
  console.log("El valor total de su compra es: " + valorTotal);
  console.log(valorTotal.toFixed(1))
}

calcularDescuento(valorCompra);
