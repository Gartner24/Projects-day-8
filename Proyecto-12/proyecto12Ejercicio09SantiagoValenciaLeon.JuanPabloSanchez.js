/*EJERCICIO 09 - PROYECTO 12
9.Hacer un programa de computador, de tal manera que, utilizando ciclos anidados se generen las
siguientes ternas de enteros: (con un máximo de cuatro(4) ordenes “IMPRIMIR” .)
1 1 1
2 1 2
3 1 3
4 2 1
5 2 2
6 2 3
7 3 1
8 3 2
9 3 3
-----------------------------------------------------------------
Fecha de publicación: 24-06-2023
Hora: 01:15 a.m
Versión: 2.0
Autores: Ing(c) Santiago Valencia, Ing(c) Juan Pablo Sánchez
Lenguaje: JavaScript
Versión del lenguaje: 6.0
Presentado a: Doctor Ricardo Moreno Laverde
-----------------------------------------------------------------
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
-----------------------------------------------------------------
Descripción: Este programa imprime las siguientes ternas:
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

const contador = (number1, number2, number3) =>{
    while (number1 <= 9) {//Se realiza un ciclo while que va hasta 9 ya que los numeros de la primera columna se muestran de uno en uno hasta nueve
        if (number1 % 3 === 0) {//Se realiza el modulo entre 3 porque la segunda columna se incrementa cada tres veces
            console.log(`${number1} ${number2} ${number3}`);
            number2 ++;//El numero de la columna 2 se incrementa
            number3 = 1;//Cada tres numeros se reinicia la columna 3
        } else {
            console.log(`${number1} ${number2} ${number3}`);
            number3 ++;
        }
        number1 ++;//Siempre se incrementa en uno para poder llegar a nueve quien es el punto de partida
    }
}

let number1 = 1;
let number2 = 1;
let number3 = 1;
contador(number1, number2, number3);//Llamado a la función