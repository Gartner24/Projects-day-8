/*EJERCICIO 04 - PROYECTO 11
4.Hacer un programa de computador, de tal manera que lea desde el teclado un grupo de 75 números,
diferentes a cero(validar este requisito) y al final de leídos, imprima:
* Cantidad de números Mayores a 150
* Número mayor y número menor encontrado en el grupo
* Cantidad de Números negativos encontrados
* Promedio de los Positivos Encontrados.-----------------------------------------------------------------
Fecha de publicación: 22-06-2023
Hora: 12:40 p.m
Versión: 1.0
Autores: Ing(c) Santiago Valencia, Ing(c) Juan Pablo Sánchez
Lenguaje: JavaScript
Versión del lenguaje: 6.0
Presentado a: Doctor Ricardo Moreno Laverde
-----------------------------------------------------------------
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
-----------------------------------------------------------------
Descripción: Este programa calcula numeros mayores a 50, numero mayor y menor, numeros negativos y promedio de positivos de 75 numeros totales
*/

const prompt = require("prompt-sync")({sigint: true});

function evaluar75Numeros(number){
    for(let i = 1; i <= number; i++){
        let readNumber = prompt("Ingrese el numero: ");
    }
}
evaluar75Numeros(75);