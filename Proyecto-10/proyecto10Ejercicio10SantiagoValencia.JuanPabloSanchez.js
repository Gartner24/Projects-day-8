/*EJERCICIO 10 - PROYECTO 10 
------------------------------------------------------
10. Hacer un programa de computador, de tal manera que pida el número de termino deseados en la
siguiente serie: Serie de Motzkin: Esta serie cuenta el número de caminos no cruzados de longitud n en
una retícula tridimensional. Comienza con los números 1, 1 y los siguientes términos se calculan como la
suma de los términos anteriores y la suma de los términos anteriores menos el tercer término anterior. La
fórmula para el enésimo número de Motzkin es M(n) = M(n-1) + Σ(k=0, n-2) M(k)M(n-2-k), donde M(0) =
1 y M(1) = 1.
Los primeros nueve términos de la serie de Motzkin son: 1, 1, 2, 4, 9, 21, 51, 127, 323.
-------------------------------------------------------
Fecha de publicacion: 20-06-2023
Hora: 11:19 p.m.
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
Descripción: Este programa muestra los n terminos de la serie de Motzkin*/

const prompt = require("prompt-sync")({sigint: true});//Activa el prompt para poder pedir por consola un dato
let terms = prompt("Ingrese la cantidad de terminos que desea visualizar: ");//Pide por teclado la variable de terminos de la serie

const motzkin = (firstNumber, secondNumber, n, count) => {//Funcion que recibe como parametros los dos primeros terminos de la serie, el termino desde el que empieza a realizar la operacion y un contador para saber hasta donde se realiza la iteracion
	process.stdout.write(firstNumber + " ");//Se muestra el termino actual de la serie sin salto de linea
    
    if(n <= count){
       motzkin(secondNumber, (((3 * (n - 1) * firstNumber) + (((2 * n) + 1) * secondNumber)) / (n + 2)), (n + 1), count);
    }
}

motzkin(1, 1, 2, terms);//Llamado a la funcion con parametro de count usando como argumento la cantidad de terminos que se desean visualizar

