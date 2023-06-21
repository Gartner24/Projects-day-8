/*EJERCICIO 17 - PROYECTO 10
17.Hacer un programa de computador, de tal manera que, utilizando ciclos anidados se generen las
siguientes parejas de enteros: (con un máximo de cuatro(4) ordenes “IMPRIMIR” en todo el programa
incluyendo las funciones.)
0 1
1 1
2 2
3 2
4 3
5 3
6 4
7 4
8 5
9 5 (Usando solo recursividad)

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
Descripción: Este programa genera las parejas de enteros: (con un máximo de cuatro(4) ordenes “IMPRIMIR” en todo el programa
*/

// Funcion que genera las parejas de enteros
const parejasEnteros = (num) => {
    if (num == 0) return 0;
    if (num % 2 == 0) return parejasEnteros(num - 1);
    return parejasEnteros(num - 1) + 1;
}

// Funcion que imprime las parejas de enteros
const imprimirParejasEnteros = (num) => {
    if (num >= 0) {
        console.log(num, parejasEnteros(num));
        imprimirParejasEnteros(num - 1);
    }
}

imprimirParejasEnteros(9);