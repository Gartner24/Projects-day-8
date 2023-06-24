/*EJERCICIO 14 - PROYECTO 12
14.Hacer un programa de computador, utilizando ciclos anidados; de tal manera que presente lo siguiente
en la pantalla: (con un máximo de cuatro(4) ordenes “IMPRIMIR” .). Las líneas de las cuadriculas son
solo de referencia para mostrar filas y columnas; no se pide que las imprima.

-----------------------------------------------------------------
Fecha de publicación: 20-06-2023
Hora: 01:12 a.m
Versión: 1.0
Autores: Ing(c) Santiago Valencia, Ing(c) Juan Pablo Sánchez
Lenguaje: JavaScript
Versión del lenguaje: 6.0
Presentado a: Doctor Ricardo Moreno Laverde
-----------------------------------------------------------------
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
-----------------------------------------------------------------
Descripción: Este programa imprime una piramide de P invertida.
*/

let renglon = 1;

while (renglon <= 7) {
  let espacios = "";
  let letras = "";
  let numero = 0;

  while (numero <= renglon - 1) {
    espacios += " ";
    numero++;
  }

  numero = 1;
  while (numero <= 13 - (renglon * 2) + 2) {
    letras += "P";
    numero++;
  }

  console.log(espacios + letras);
  renglon++;
}