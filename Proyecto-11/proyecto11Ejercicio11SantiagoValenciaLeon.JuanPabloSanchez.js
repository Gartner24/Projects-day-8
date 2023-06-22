/*EJERCICIO 11 - PROYECTO 11
11.Hacer un programa de computador, utilizando ciclos anidados; de tal manera que presente lo siguiente
en la pantalla: (con un máximo de cuatro(4) ordenes “IMPRIMIR” . Las líneas de las cuadriculas son solo
de referencia para mostrar filas y columnas; no se pide que las imprima.

                A 1 Fila
              A A 2
            A A A 3
          A A A A 4
        A A A A A 5
      A A A A A A 6
      .... ....
      .... ....
      ..... ....
A A A A A A A A A 25
56 57 58 59 . . . . 80

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
Descripción: Este programa presenta en la pantalla: (con un máximo de cuatro(4) ordenes “IMPRIMIR” . Las líneas de las cuadriculas son solo
*/

// Funcion que imprime las ternas de enteros
const print = (message) => {
  process.stdout.write(message);
}

// Funcion que imprime las ternas de enteros
function imprimir() {
  for (let fila = 1; fila <= 25; fila++) {
    for (let espacio = 1; espacio <= 25 - fila; espacio++) {
      print(" ");
    }
    for (let letra = 1; letra <= fila; letra++) {
      print("A");
    }
    print("\n");
  }
}

imprimir();