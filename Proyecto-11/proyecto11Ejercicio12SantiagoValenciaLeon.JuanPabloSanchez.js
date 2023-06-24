/*EJERCICIO 12 - PROYECTO 11
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
Hora: 21:52 p.m
Versión: 1.0
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

const generarSecuencia = (totalFilas) => {
    let secuencia = [];
  
    for (let filaActual = 1; filaActual <= totalFilas; filaActual++) {
      let numEspacios = filaActual - 1;//en la primera fila no hay espacios en blanco, en la segunda fila hay un espacio en blanco antes de la letra, en la tercera fila hay dos espacios en blanco antes de la letra, y así sucesivamente. La cantidad de espacios en blanco aumenta en 1 para cada fila adicional.
      let numLetras = (totalFilas * 2) - (numEspacios * 2) - 1;//Aquí, (totalFilas * 2) representa la cantidad total de caracteres (letras y espacios) en cada fila si no hubiera espacios en blanco. Restamos (numEspacios * 2) para tener en cuenta los espacios en blanco generados en cada fila. Luego, restamos 1 para tener en cuenta la letra central de cada fila, ya que entre las letras hay un espacio adicional. Así, numLetras representa la cantidad de letras que se generarán en cada fila de la secuencia.
  
      // Genera los espacios en blanco antes de las letras
      const generarEspacios = () => {
        for (let i = 0; i < numEspacios; i++) {
          secuencia.push(" ");
        }
      };
  
      // Genera la letra correspondiente a la fila actual
      const generarLetra = () => {
        if (filaActual === 1) {
          secuencia.push("P");
        } else if (filaActual === 2) {
          secuencia.push("N");
        } else if (filaActual === 3) {
          secuencia.push("L");
        } else if (filaActual === 4) {
          secuencia.push("J");
        } else if (filaActual === 5) {
          secuencia.push("H");
        } else if (filaActual === 6) {
          secuencia.push("F");
        } else if (filaActual === 7) {
          secuencia.push("D");
        }
      };
  
      // Genera las letras para la fila actual
      const generarLetras = () => {
        for (let i = 0; i < numLetras; i++) {
          generarLetra();
        }
      };
  
      generarEspacios();
      generarLetras();
  
      console.log(secuencia.join(""));
      secuencia = [];
    }
  };
  
  generarSecuencia(7);