/*EJERCICIO 14 - PROYECTO 09
14- Que imprima de un articulo, clave, precio original y su precio con descuento. El descuento lo hace en base a la clave, si la clave es uno
(1) el descuento es del 10% y si la clave es 2 el descuento en del 20% (solo existen dos claves).
Datos de entrada: Clave, PrecioOriginal
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
Descripción: Este programa calcula el descuento de un articulo con base a su clave
*/

//const prompt=require("prompt-sync")({sigint:true});
//let clave = prompt("Ingrese su clave: ");
//let precioOriginal = prompt("Ingrese el precio original del articulo: ")
let clave = 2;
let precioOriginal = 30000;
let precioDescuento = precioOriginal;

function descuentoArticuloConClave(clave, precioOriginal){
    let precioDescuento = precioOriginal;
    if(clave == 1){
        precioDescuento = precioOriginal - (precioOriginal * 0.1);
        console.log("Clave: " + clave + "\nPrecio Original: $" + precioOriginal + "\nPrecio con descuento: $" + precioDescuento);
    }else if(clave == 2){
        precioDescuento = precioOriginal - (precioOriginal * 0.2);
        console.log("Clave: " + clave + "\nPrecio Original: $" + precioOriginal + "\nPrecio con descuento: $" + precioDescuento);
    }else{
        console.log("Clave no existente.");
    }
}

descuentoArticuloConClave(clave, precioOriginal);