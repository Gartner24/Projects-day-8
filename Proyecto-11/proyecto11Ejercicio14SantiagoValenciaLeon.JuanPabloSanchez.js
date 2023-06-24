/*EJERCICIO 14 - PROYECTO 11
14.Hacer un programa de computador, utilizando ciclos anidados; de tal manera que presente lo siguiente
en la pantalla: (con un máximo de cuatro(4) ordenes “IMPRIMIR” .). Las líneas de las cuadriculas son
solo de referencia para mostrar filas y columnas; no se pide que las imprima.
        P P P P P P P P P P P P P
          P P P P P P P P P P P
            P P P P P P P P P
              P P P P P P P
                P P P P P
                  P P P
                    P
-----------------------------------------------------------------
Fecha de publicación: 23-06-2023
Hora: 22:10 p.m
Versión: 1.0
Autores: Ing(c) Santiago Valencia, Ing(c) Juan Pablo Sánchez
Lenguaje: JavaScript
Versión del lenguaje: 6.0
Presentado a: Doctor Ricardo Moreno Laverde
-----------------------------------------------------------------
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
-----------------------------------------------------------------
Descripción: Este programa imprime por pantalla lo siguiente:
        P P P P P P P P P P P P P
          P P P P P P P P P P P
            P P P P P P P P P
              P P P P P P P
                P P P P P
                  P P P
                    P
*/


const imprimirP = (inicio, final) => {
    let secuencia = "";
  
    for (let i = inicio; i <= final; i++) {
      secuencia += "P";
    }
  
    process.stdout.write(secuencia); // Imprime la secuencia de letras "P" en la salida
  };
  
  const imprimirEspacios = (inicio, final) => {
    let secuencia = "";
  
    for (let i = inicio; i <= final; i++) {
      secuencia += " ";
    }
  
    process.stdout.write(secuencia); // Imprime la secuencia de espacios en blanco en la salida
  };
  
  const imprimir = (fila, contador, final, finalP) => {
    for (; fila <= 7; fila++) {
      imprimirEspacios(contador, final); // Imprime los espacios en blanco correspondientes a la fila actual
      imprimirP(contador, finalP); // Imprime las letras "P" correspondientes a la fila actual
      console.log(); // Cambia de línea
      imprimir(fila + 1, contador, final + 1, finalP - 2); // Llama recursivamente a la función para imprimir la siguiente fila
      return; // Termina la función actual
    }
  };
  
  imprimir(1, 1, 0, 13); // Inicia la impresión de la secuencia a partir de la fila 1, con un contador inicial, valores finales y una reducción en la cantidad de "P" en cada fila
  