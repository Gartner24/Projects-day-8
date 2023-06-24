/*EJERCICIO 12 - PROYECTO 12
12.Hacer un programa de computador, utilizando ciclos anidados; de tal manera que presente lo siguiente
en la pantalla: (con un máximo de cuatro(4) ordenes “IMPRIMIR” ). Las líneas de las cuadriculas son
solo de referencia para mostrar filas y columnas; no se pide que las imprima.
        P P P P P P P P P P P P P
          N N N N N N N N N N N
            L L L L L L L L L
              J J J J J J J
                H H H H H
                  F F F
                    D
-----------------------------------------------------------------
Fecha de publicación: 23-06-2023
Hora: 01:38 a.m
Versión: 2.0
Autores: Ing(c) Santiago Valencia, Ing(c) Juan Pablo Sánchez
Lenguaje: JavaScript
Versión del lenguaje: 6.0
Presentado a: Doctor Ricardo Moreno Laverde
-----------------------------------------------------------------
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
-----------------------------------------------------------------
Descripción: Este programa imprime lo siguiente:
        P P P P P P P P P P P P P
          N N N N N N N N N N N
            L L L L L L L L L
              J J J J J J J
                H H H H H
                  F F F
                    D
*/

// Función principal que genera el patrón de letras en la consola
const main = () => {
    let renglon = 1; // Variable que representa el número de renglón actual
    let numero; // Variable para el contador de números
    let letra = 80; // Valor ASCII de la letra inicial
  
    while (renglon <= 7) {
      numero = 0; // Reinicia el contador de números en cada renglón
  
      // Ciclo para imprimir los espacios antes de la letra
      while (numero <= renglon - 1) {
        process.stdout.write(' ');
        numero++;
      }
  
      numero = 1; // Reinicia el contador de números en cada renglón
  
      // Ciclo para imprimir las letras en orden descendente
      while (numero <= 13 - (renglon * 2) + 2) {
        process.stdout.write(String.fromCharCode(letra)); // Convierte el valor ASCII a letra
        numero++;
      }
  
      console.log(); // Salto de línea
  
      letra -= 2; // Decrementa el valor ASCII para la siguiente letra
      renglon++; // Incrementa el número de renglón para avanzar al siguiente
    }
  }
  
  // Llamada a la función principal para generar el patrón de letras
  main();
  

