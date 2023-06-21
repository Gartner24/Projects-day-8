/*EJERCICIO 03 - PROYECTO 09
3. Que pida un número del 1 al 7 e imprima el día de la semana correspondiente.

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
Descripción: Programa que pida un número del 1 al 7 e imprima el día de la semana correspondiente.
*/
const prompt = require("prompt-sync")({sigint: true});

// Variable que almacena el numero del dia de la semana
let numero = prompt("Ingrese numero: ");

// Funcion que determina el dia de la semana
function diaSemana (numero) {
    if (numero == 1) console.log("El dia es lunes");
    if (numero == 2) console.log("El dia es martes");
    if (numero == 3) console.log("El dia es miercoles");
    if (numero == 4) console.log("El dia es jueves");
    if (numero == 5) console.log("El dia es viernes");
    if (numero == 6) console.log("El dia es sabado");
    if (numero == 7) console.log("El dia es domingo");
}

diaSemana(numero);
