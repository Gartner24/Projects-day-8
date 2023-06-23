/*EJERCICIO 02 - PROYECTO 11
2.Hacer un programa de computador, de tal manera que imprima el valor de la suma de los elementos
de la serie de Fibonacci entre 0 y 100.
-----------------------------------------------------------------
Fecha de publicación: 21-06-2023
Hora: 10:05 p.m
Versión: 1.0
Autores: Ing(c) Santiago Valencia, Ing(c) Juan Pablo Sánchez
Lenguaje: JavaScript
Versión del lenguaje: 6.0
Presentado a: Doctor Ricardo Moreno Laverde
-----------------------------------------------------------------
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
-----------------------------------------------------------------
Descripción: Este programa imprimir la suma de los elementos de la serie de Fibonacci entre 0 y 100*/

function Fibonacci(n){
    let resultado = 0;
    let pre = 0;
    let pos = 1;
    let acum = 1;
    console.log(resultado);
    console.log(pos);
    for(let i = 2; i <= n; i++){
        resultado = pre + pos;
        pre = pos;
        pos = resultado;
        acum += resultado;
        console.log(resultado);
    }

    console.log(" La suma es: " + acum);
}

Fibonacci(11);