/*EJERCICIO 08 - PROYECTO 12
8.Hacer un programa de computador, de tal manera que, utilizando ciclos anidados se generen las
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
9 5
-----------------------------------------------------------------
Fecha de publicación: 24-06-2023
Hora: 01:08 a.m
Versión: 2.0
Autores: Ing(c) Santiago Valencia, Ing(c) Juan Pablo Sánchez
Lenguaje: JavaScript
Versión del lenguaje: 6.0
Presentado a: Doctor Ricardo Moreno Laverde
-----------------------------------------------------------------
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
-----------------------------------------------------------------
Descripción: Este programa imprime las siguientes parejas de enteros: 
0 1
1 1
2 2
3 2
4 3
5 3
6 4
7 4
8 5
9 5
*/ 

let numberLeft = 0;
let numberRight = 1;
let index = 0;

while (index <= 9) {
  numberLeft = (numberRight + 1) / 2;  
  console.log(index, Math.floor(numberLeft)); 
  numberRight++;  
  index++;
}