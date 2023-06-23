/*EJERCICIO 18 - PROYECTO 10 
------------------------------------------------------
18.Hacer un programa de computador, de tal manera que, utilizando ciclos anidados se generen las
siguientes ternas de enteros: (con un máximo de cuatro(4) ordenes “IMPRIMIR” )
1 1 1
2 1 2
3 1 3
4 2 1
5 2 2
6 2 3
7 3 1
8 3 2
9 3 3
-------------------------------------------------------
Fecha de publicacion: 21-06-2023
Hora: 12:24 a.m.
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
Descripción: Este programa genera ternas de enteros 
1 1 1
2 1 2
3 1 3
4 2 1
5 2 2
6 2 3
7 3 1
8 3 2
9 3 3
*/

const print = (message) =>{
  process.stdout.write(message);
}

const ternas = (number1, number2, number3) =>{
  if(number1 == 10){
    ;
  }else if(number1 % 3 == 0){
    print(number1 + " " + number2 + " " + number3 + "\n");//Primer uso del print
    ternas(number1 + 1, number2 + 1, 1);
  }else{
    print(number1 + " " + number2 + " " + number3 + "\n");//Segundo uso del print
    ternas(number1 + 1, number2, number3 + 1);
  }
}

ternas(1, 1, 1);//Llamado a la funcion


