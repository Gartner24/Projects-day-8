/*EJERCICIO 05 - PROYECTO 09
5- Que leyendo por teclado la antigüedad en años, que calcule el sueldo mensual que le corresponde al trabajador de una empresa
que cobra 40.000 euros anuales, el programa debe realizar los cálculos en función de los siguientes criterios:
a. Si lleva más de 10 años en la empresa se le aplica un aumento del 10%.
b. Si lleva menos de 10 años pero más que 5 se le aplica un aumento del 7%.
c. Si lleva menos de 5 años pero más que 3 se le aplica un aumento del 5%.
d. Si lleva menos de 3 años se le aplica un aumento del 3%.

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
Descripción: Programa que leyendo por teclado la antigüedad en años, que calcule el sueldo mensual que le corresponde al trabajador de una empresa
*/
const prompt = require("prompt-sync")({sigint: true});

// Variables que almacenan la antiguedad del trabajador y el sueldo
let antiguedad = prompt("Ingrese la antiguedad en años: ");
let sueldo = prompt("Ingrese el sueldo: ");

// Funcion que calcula el sueldo mensual
const sueldoMensual = (tiempo, sueldo) => {
    if (tiempo > 10) sueldo *= 1.1;
    if (tiempo <= 10 && tiempo > 5) sueldo *= 1.07;
    if (tiempo <= 5 && tiempo > 3) sueldo *= 1.05;
    if (tiempo <= 3) sueldo *= 1.03;
    console.log(`El sueldo mensual es de ${sueldo} euros`)
}

sueldoMensual(antiguedad, sueldo);