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

// Funcion que calcula la serie de fibonacci
const fibonacci = (num) => {
    if (num == 0) return 0;
    if (num == 1) return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

// Funcion que imprime la serie de fibonacci
const imprimirFibonacci = (num, acum) => {
    if (fibonacci(num) <= 100) {
        imprimirFibonacci(num + 1);
        acum += fibonacci(num);
        console.log(fibonacci(num));
    } else {
        console.log(`La suma de los elementos de la sucesion de Fibonacci entre 0 y 100 es: ${acum}`);
    }
}

imprimirFibonacci(0, 0);