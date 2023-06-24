/*EJERCICIO 12 - PROYECTO 10 
------------------------------------------------------
12.Hacer un programa de computador, de tal manera que lea desde el teclado un numero entero y lo
imprima al revés.
-------------------------------------------------------
Fecha de publicacion: 20-06-2023
Hora: 11:49 p.m.
Version: 1.0
Autores: Ing(c) Santiago Valencia - Ing(c) Juan Pablo Sánchez
------------------------------------------------------
Lenguaje: JavaScript
Version del lenguaje: 6.0
------------------------------------------------------
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computacion
------------------------------------------------------
Descripción: Este programa lee un numero y lo imprime al reves*/

const prompt = require("prompt-sync")({sigint: true});//Activa el prompt para poder pedir por consola un dato
let number = prompt("Ingrese el numero que desea invertir: ");//Pide por teclado la variable de terminos de la serie

const investNumber = (number) =>{
    if(number > 0){
        process.stdout.write(number % 10 + " ");//Se imprimen los numeros dados por la funcion sin salto de linea
        investNumber(Math.floor(number / 10));//Llamado recursivo
    }
}

investNumber(number);//Llamado a la funcion

