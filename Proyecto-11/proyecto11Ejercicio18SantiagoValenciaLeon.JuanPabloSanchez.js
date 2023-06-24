/*EJERCICIO 18 - PROYECTO 11
18.Hacer un programa de computador, utilizando ciclos anidados; de tal manera que presente lo siguiente
en la pantalla: (con un máximo de cuatro(4) ordenes “IMPRIMIR” .). Las líneas de las cuadriculas son
solo de referencia para mostrar filas y columnas; no se pide que las imprima.
                Z
               Z Z
              Z   Z
             Z     Z
            Z       Z
           Z         Z
          Z           Z
         Z             Z
        Z               Z
       Z                 Z
-----------------------------------------------------------------
Fecha de publicación: 21-06-2023
Hora: 22:51 p.m
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
                Z
               Z Z
              Z   Z
             Z     Z
            Z       Z
           Z         Z
          Z           Z
         Z             Z
        Z               Z
       Z                 Z
*/

const ImprimirZ = (Inicio, Final) => {
    for (let i = Inicio; i <= Final; i++) {
      process.stdout.write("Z"); // Imprime la letra "Z" un número determinado de veces
    }
  };
  
  const ImprimirEsp = (Inicio, Final) => {
    for (let i = Inicio; i <= Final; i++) {
      process.stdout.write(" "); // Imprime un espacio en blanco un número determinado de veces
    }
  };
  
  const Imprimir = (Fila, Contador, Final, ContadorZ, FinalZ) => {
    if (Fila <= 10) {
      ImprimirEsp(Contador, Final); // Imprime los espacios en blanco antes de la primera "Z"
      ImprimirZ(1, 1); // Imprime la primera "Z"
      ImprimirEsp(ContadorZ, FinalZ); // Imprime los espacios en blanco entre las "Z"
      if (Fila !== 1) {
        ImprimirZ(1, 1); // Imprime la segunda "Z" si no es la primera fila
      }
      console.log(); // Cambia de línea
      Imprimir(Fila + 1, Contador, Final - 1, ContadorZ, FinalZ + 2); // Llama recursivamente a la función para imprimir la siguiente fila
    }
  };
  
  Imprimir(1, 1, 9, 2, 0); // Inicia la impresión del patrón de "Z" con valores iniciales y finales para los espacios y "Z"
  
  
