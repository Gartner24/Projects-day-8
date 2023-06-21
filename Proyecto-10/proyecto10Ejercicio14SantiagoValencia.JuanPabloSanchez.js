/*EJERCICIO 14 - PROYECTO 10 
------------------------------------------------------
14. Hacer un programa de computador, de tal manera que presente todas las tablas de multiplicar del 1
al 10; (con un máximo de cuatro(4) ordenes “IMPRIMIR” en todo el programa incluyendo las funciones.);
así:
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
-------------------------------------------------------
Fecha de publicacion: 21-06-2023
Hora: 12:15 p.m.
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
Descripción: Este programa imprime las tablas de multiplicar del 1 al 10*/

function Tabla(inicial, final) {
    if (inicial <= final) {
      Multiplicar(1, 10, inicial);
      Tabla(inicial + 1, final);
    }
  }
  
  function Multiplicar(inicial, final, numero) {
    if (inicial <= final) {
      console.log(numero + " x " + inicial + " = " + (numero * inicial));
      Multiplicar(inicial + 1, final, numero);
    } else {
      console.log("\n");
    }
  }
  
  Tabla(1, 10);

