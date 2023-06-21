/*EJERCICIO 01 - PROYECTO 10
1.Se define la serie de Fibonacci como la serie que comienza con los dígitos 1 y 0 y va sumando
progresivamente los dos últimos elementos de la serie, así: 0 1 1 2 3 5 8 13 21 34.......
Hacer un programa de computador, de tal manera que presente la serie de Fibonacci hasta llegar sin
sobrepasar el número 10,000. (Usando solo recursividad)

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
Descripción: Este programa presenta la serie de Fibonacci hasta llegar sin sobrepasar el número 10,000.
*/

// Funcion que calcula la serie de fibonacci
const fibonacci = (num) => {
    if (num == 0) return 0;
    if (num == 1) return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

// Funcion que imprime la serie de fibonacci
const imprimirFibonacci = (num) => {
    if (fibonacci(num) <= 10000) {
        console.log(fibonacci(num));
        imprimirFibonacci(num + 1);
    }
}

imprimirFibonacci(0);
