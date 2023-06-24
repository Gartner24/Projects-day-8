/*EJERCICIO 05 - PROYECTO 12
5.Hacer un programa de computador, utilizando ciclos anidados; de tal manera que presente todas las
tablas de multiplicar del 1 al 10; (con un máximo de cuatro(4) ordenes “IMPRIMIR” en todo el programa incluyendo
las funciones.); así:
1 x 1 = 1
1 x 2 = 2
....
1 x 10 =10
2 x 1 =2
.....
....
10 x 1 =10
10 x 2 = 20
....
10 x 10 =100
-----------------------------------------------------------------
Fecha de publicación: 24-06-2023
Hora: 00:47 p.m
Versión: 2.0
Autores: Ing(c) Santiago Valencia, Ing(c) Juan Pablo Sánchez
Lenguaje: JavaScript
Versión del lenguaje: 6.0
Presentado a: Doctor Ricardo Moreno Laverde
-----------------------------------------------------------------
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
-----------------------------------------------------------------
Descripción: Este programa imprime las tablas de multiplicar del 1 al 1o
*/

const tablaMultiplicar = () =>{
    let x = 1; // Variable para el primer factor
    let y = 1; // Variable para el segundo factor
    let multiplicar = 0; // Variable para el resultado de la multiplicación
  
    while (x <= 10) { // Ciclo externo para iterar sobre el primer factor
      while (y <= 10) { // Ciclo interno para iterar sobre el segundo factor
        multiplicar = x * y; // Realizar la multiplicación
        console.log(`${x} x ${y} = ${multiplicar}`); // Mostrar la operación y el resultado en la consola
        y = y + 1; // Incrementar el segundo factor
      }
      console.log("\n"); // Agregar una línea en blanco para separar las tablas de multiplicar
      y = 1; // Reiniciar el segundo factor para la siguiente iteración del primer factor
      x = x + 1; // Incrementar el primer factor
    }
  }
  
  // Llamar a la función para generar la tabla de multiplicar del 1 al 10
  tablaMultiplicar();