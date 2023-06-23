/*EJERCICIO 01 - PROYECTO 13
Ejercicio 01. Construir una función en lenguaje “ECMASCRIPT 6.0” ( javascript 6.0 ), tal que:
- Usted debe crear la función tipo flecha llamada rush , tomando dos(2) valores enteros positivos como argumentos,
denominados respectivamente x e y.
- Su función rush debe mostrar (en pantalla del ordenador) un rectángulo de x caracteres para el ancho, y de y
caracteres para la longitud.
- El usuario podrá modificar los valores de los argumentos, para comprobar si ha manejado todo como se supone que
debe.

-----------------------------------------------------------------
Fecha de publicación: 20-06-2023
Hora: 06:00 p.m
Versión: 1.0
Autores: Ing(c) Santiago Valencia, Ing(c) Juan Pablo Sánchez
Lenguaje: JavaScript
Versión del lenguaje: 6.0
Presentado a: Doctor Ricardo Moreno Laverde
-----------------------------------------------------------------
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
-----------------------------------------------------------------
Descripción: Este programa imprime un rectángulo de x caracteres para el ancho, y de y caracteres para la longitud.
*/

let prompt = require('prompt-sync')();

// Función que imprime una línea horizontal
const imprimirHorizontal = (ancho, stop, charExtremoIzquierdo, charMedio, charExtremoDerecha) => {
    // Casos base
    if (ancho === 1 && stop !== 1) {
      process.stdout.write(charExtremoDerecha);
    } else if (ancho === stop) {
      process.stdout.write(charExtremoIzquierdo);
      imprimirHorizontal(ancho - 1, stop, charExtremoIzquierdo, charMedio, charExtremoDerecha);
    } else if (ancho > 0) {
      process.stdout.write(charMedio);
      imprimirHorizontal(ancho - 1, stop, charExtremoIzquierdo, charMedio, charExtremoDerecha);
    }
};

// Función que imprime una línea vertical
const imprimirVertical = (ancho, alto, stop) => {
    if (alto === stop) {
      imprimirHorizontal(ancho, ancho, '/', '*', '\\');
      process.stdout.write('\n');
      imprimirVertical(ancho, alto - 1, stop);
    } else if (alto === 1) {
      imprimirHorizontal(ancho, ancho, '\\', '*', '/');
      process.stdout.write('\n');
    } else if (alto > 0) {
      imprimirHorizontal(ancho, ancho, '*', ' ', '*');
      process.stdout.write('\n');
      imprimirVertical(ancho, alto - 1, stop);
    }
};
  
// Función principal
const rush = (ancho, alto) => {
    if (ancho > 0 && alto > 0) {
      imprimirVertical(ancho, alto, alto);
    }
};
  
ancho = prompt("Ingrese el ancho: ");
alto = prompt("Ingrese el alto: ")
rush(ancho, alto);