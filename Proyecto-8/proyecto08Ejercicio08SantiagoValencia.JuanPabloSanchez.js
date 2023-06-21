/*EJERCICIO 08 - PROYECTO 08
8. Escribir un programa que pida como datos de entrada 2 números y realice las operaciones de suma,
resta, multiplicación y división y muestre los resultados de forma ordenada en pantalla.
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
Descripción: Pide 2 numeros y realiza las cuatro operaciones básicas
*/

//const prompt=require("prompt-sync")({sigint:true});
function operacionesBasicas(){
    //let numero1 = prompt("Por favor digite el primer numero: ");
    //let numero2 = prompt("Por favor digite el segundo numero: ");
    let numero1 = 10;//Variable de entrada para el primer numero
    let numero2 = 5;//Variable de entrada para el segundo numero
    let suma = numero1 + numero2;//Variable que guarda la suma de dos numeros
    let resta = numero1 - numero2;//Variable que guarda la resta de dos numeros
    let producto = numero1 * numero2;//Variable que guarda la multiplicacion de dos numeros
    let division = numero1 / numero2;
    console.log("Suma: " + suma + "\nResta: " + resta + "\nMultiplicacion: " + producto + "\nDivision: " + division);
}

operacionesBasicas();