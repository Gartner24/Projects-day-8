/*EJERCICIO 02 - PROYECTO 10
2.Hacer un programa de computador, de tal manera que imprima el valor de la suma de los elementos de
la serie de Fibonacci entre 0 y 100.
-----------------------------------------------------------------
Fecha de publicación: 20-06-2023
Hora: 16:22 a.m
Versión: 1.0
Autores: Ing(c) Santiago Valencia, Ing(c) Juan Pablo Sánchez
Lenguaje: JavaScript
Versión del lenguaje: 6.0
Presentado a: Doctor Ricardo Moreno Laverde
-----------------------------------------------------------------
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
-----------------------------------------------------------------
Descripción: Este programa suma los elementos de la sucesion de Fibonacci entre 0 y 100
*/

const Fibonacci = (n) =>{
    if(n > 100) return;
    if(n == 0) return 0;
    if(n == 1) return 1;
    return Fibonacci(n - 1) + Fibonacci(n - 2);
}

const repeatFunction = (n, acum) =>{
    if(n >= 0){
        repeatFunction(n - 1, acum + Fibonacci(n));
        console.log(Fibonacci(n));
    }
    if(n == 0){
        console.log(" y su suma es: " + acum);
    }
}
repeatFunction(11, 0);