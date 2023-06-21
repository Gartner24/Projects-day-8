/*EJERCICIO 22 - PROYECTO 10 
------------------------------------------------------
22.Hacer un programa de computador, de tal manera que presente lo siguiente en la pantalla: (con un
máximo de cuatro(4) ordenes “IMPRIMIR” )
Columna
40

..... ..... P P P P P P P P P P P P P ..... ..... 1 <- Fila
              P P P P P P P P P P P               2
                P P P P P P P P P                 3
                  P P P P P P P                   4
                    P P P P P                     5
                      P P P                       6
                        P                         7

Columna (Centrado****)
-------------------------------------------------------
Fecha de publicacion: 21-06-2023
Hora: 1:19 a.m.
Version: 1.0
Autores: Ing(c) Santiago Valencia - Ing(c) Juan Pablo Sánchez
------------------------------------------------------
Lenguaje: JavaScript
Version del lenguaje: 6.0
------------------------------------------------------
Presentado a: Doctor Ricardo Moreno Laverde
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computacion
------------------------------------------------------
Descripción: Este programa genera una impresion por pantalla de un triangulo de Ps
*/

const print = (message) =>{
    process.stdout.write(message);
  }
  
  function ImprimirP(Inicio, Final) {
    if (Inicio <= Final) {
      print("P");
      ImprimirP(Inicio + 1, Final);
    } else {
      return;
    }
  }
  
  function ImprimirEsp(Inicio, Final) {
    if (Inicio <= Final) {
      print(" ");
      ImprimirEsp(Inicio, Final - 1);
    } else {
      return;
    }
  }
  
  function Imprimir(Fila, Contador, Final, FinalP) {
    if (Fila <= 7) {
      ImprimirEsp(Contador, Final);
      ImprimirP(Contador, FinalP);
      print("\n");
      Imprimir(Fila + 1, Contador, Final + 1, FinalP - 2);
    } else {
      return;
    }
  }
  
  Imprimir(1, 1, 34, 13);




