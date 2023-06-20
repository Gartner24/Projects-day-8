/*EJERCICIO 12 - PROYECTO 09
12-Un obrero necesita calcular su salario semanal, el cual se obtiene de la siguiente manera:
- Si trabaja 40 horas o menos se le paga $16 por hora
- Si trabaja mas de 40 horas se le paga $16 por cada una de las primeras 40 horas y $20 por cada hora extra. Datos de entrada: Nro de horas
trabajadas.
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
Descripción: Este programa calcula el salario semanal de un obrero segun sus horas trabajadas
*/

//const prompt=require("prompt-sync")({sigint:true});
//let horasTrabajadas = prompt("Ingrese las horas trabajdas: ");
let horasTrabajadas = 35;

function salarioSemanalObrero(horasTrabajadas
    ){
    if(horasTrabajadas <= 40){
        console.log("Su salario es: $" + (horasTrabajadas * 16));
    }else{
        let resultadoExtra = (40 * 16) + ((horasTrabajadas - 40) * 20);
        console.log("Su salario es: $" + resultadoExtra);
    }
}

salarioSemanalObrero(horasTrabajadas);