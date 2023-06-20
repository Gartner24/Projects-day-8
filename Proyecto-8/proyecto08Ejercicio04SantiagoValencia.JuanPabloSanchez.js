/*EJERCICIO 04 - PROYECTO 08
4. Escribir un programa que convierta de Km/h a mph (millas por hora), teniendo en cuenta que 1Km =
0.621371 millas
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
Descripción: Este programa convierte de Km/h a mph
*/

//const prompt=require("prompt-sync")({sigint:true});
function convertirKmhAMph(){
    //let kilometrosHora = prompt("Por favor digite cuantos km/h quiere convertir a mph: 20");
    let kilometrosHora = 15;
    let resultado = kilometrosHora * 0.621371;//Variable que guarda el resultado final luego de pedir los kilometros/hora a convertir
    console.log(kilometrosHora + " km/h equivalen a " + resultado + " mph.");
}

convertirKmhAMph();