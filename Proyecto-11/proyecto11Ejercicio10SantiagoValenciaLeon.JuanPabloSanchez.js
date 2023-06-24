/*EJERCICIO 10 - PROYECTO 11
10.Se pide hacer un programa de computadora, utilizando ciclos anidados; de tal forma que imprima lo
siguiente en la pantalla.
A          A
-------------
  A      A
-------------
    A  A
-------------
     AA
El efecto es que se vea “moverse” las letras “A”.
Requisitos. Puede usar un máximo de tres(3) funciones de impresión.
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
Descripción: Este programa causa el efecto de movimiento de un par de As
*/

const imprimirColumnas = (n) => {
    for (let nivel = 0; n > 0; n--, nivel++) {
      imprimirEspacios(nivel);// Imprime los espacios en blanco antes de la primera "A"
      imprimirCaracter("A");//Imprimir la primera A
      imprimirEspacios(2 * (n - 1));//Imprime los espacios en blanco entre las "A"
      if (nivel >= 0) {//Imprimir la segunda A si no es el primer nivel
        imprimirCaracter("A");
      }
  
      cambiarLinea();// Cambia de línea después de imprimir una fila
    }
  };
  
  const imprimirEspacios = (cantidad) => {
    process.stdout.write(" ".repeat(cantidad));// Imprimir espacios en blanco antes de la primera A
  };
  
  const imprimirCaracter = (caracter) => {
    process.stdout.write(caracter);// Imprime el carácter especificado
  };
  
  const cambiarLinea = () => {
    console.log();// Cambia de línea en la salida
  };
  
  // Ejemplo de uso
  imprimirColumnas(20);