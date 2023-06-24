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

const prompt=require("prompt-sync")({sigint:true});

// Funcion que imprime el mes dependiendo del numero ingresado
const encontrarMes = () => {
    let numero = prompt("Ingrese un numero: ");

    // Condicional que imprime el mes dependiendo del numero ingresado
    if(numero == 1) console.log("Enero.");
    else if(numero == 2) console.log("Febrero");
    else if(numero == 3) console.log("Marzo");
    else if(numero == 4) console.log("Abril");
    else if(numero == 5) console.log("Mayo");
    else if(numero == 6) console.log("Junio");
    else if(numero == 7) console.log("Julio");
    else if(numero == 8) console.log("Agosto");
    else if(numero == 9) console.log("Septiembre");
    else if(numero == 10) console.log("Octubre");
    else if(numero == 11) console.log("Noviembre");
    else if(numero == 12) console.log("Diciembre");
    else console.log("El numero ingresado no es valido");
}

encontrarMes();