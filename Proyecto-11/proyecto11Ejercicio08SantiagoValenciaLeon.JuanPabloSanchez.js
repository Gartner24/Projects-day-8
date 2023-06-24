/*EJERCICIO 08 - PROYECTO 11
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
Fecha de publicación: 23-06-2023
Hora: 21:48 p.m
Versión: 1.0
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

const generarParejas = () => {
    let numero = 0;
    let pareja = 1;
  
    for (let i = 0; i < 10; i++) {
        process.stdout.write(`${numero} ${pareja}\n`);// Imprime la pareja de enteros
  
      if (i % 2 !== 0) { // Si el índice es impar
        pareja++; // Incrementa la pareja en 1
      }
  
      numero++;
    }
  };
  
  generarParejas(); // Llama a la función generarParejas para ejecutar el programa

