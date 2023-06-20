/*EJERCICIO 04 - PROYECTO 09
4. Pedir un numero del 1 al 12 e imprimir su numero correspondiente
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
Descripción: Este programa imprime un mes dependiendo del numero del 1 al 12 ingresado
*/

//const prompt=require("prompt-sync")({sigint:true});
function encontrarMes(){
    //let numero = prompt("Ingrese un numero: ");
    let numero = 12;//Ingresado por consola
    if(numero == 1) console.log("Enero.");
    if(numero == 2) console.log("Febrero");
    if(numero == 3) console.log("Marzo");
    if(numero == 4) console.log("Abril");
    if(numero == 5) console.log("Mayo");
    if(numero == 6) console.log("Junio");
    if(numero == 7) console.log("Julio");
    if(numero == 8) console.log("Agosto");
    if(numero == 9) console.log("Septiembre");
    if(numero == 10) console.log("Octubre");
    if(numero == 11) console.log("Noviembre");
    if(numero == 12) console.log("Diciembre");
}

encontrarMes();