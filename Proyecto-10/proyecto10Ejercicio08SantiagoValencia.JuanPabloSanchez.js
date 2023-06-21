/*EJERCICIO 08 - PROYECTO 10 
------------------------------------------------------
8. Hacer un programa de computador, de tal manera que pida el número de termino deseados en la
siguiente serie: Serie de Catalán: Esta serie es una secuencia de números que aparece en diversos
problemas de conteo en matemáticas. Comienza con los números 1, 1, y los siguientes términos se
calculan como la suma de los productos de los términos anteriores. La fórmula para el enésimo número
de Catalán es C(n) = (2n)! / (n!(n+1)!), donde C(0) = 1.
Los primeros nueve términos de la serie de Catalán son: 1, 1, 2, 5, 14, 42, 132, 429, 1430.
-------------------------------------------------------
Fecha de publicacion: 20-06-2023
Hora: 10:54 p.m.
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
Descripción: Este programa muestra los n terminos de la serie de Catalán*/

const prompt = require("prompt-sync")({sigint: true});//Activa el prompt para poder pedir por consola un dato
let terminos = prompt("Ingrese la cantidad de terminos que desea visualizar: ");//Pide por teclado la variable de terminos de la serie
function print(message){
    process.stdout.write(message);
}

const factorial = (terminos) =>{//Calcula el factorial de un numero n
    if(terminos == 0) return 1;
    else return terminos * factorial(terminos - 1);
}


const Catalan = (terminos) =>{//Calcula los n-terminos de la serie de Catalan
    if(terminos == 0) return 1;
    return ((factorial(2 * terminos)) / (factorial(terminos) * factorial(terminos + 1)));//Realiza la operacion para calcular el enesimo numero de la serie de Catalan
}

const repeatFunction = (terminos) =>{
    if(terminos >= 0){
        repeatFunction(terminos - 1);//Se devuelve desde el enésimo término hasta ser menor o igual a cero
        print(Catalan(terminos) + " ");//Cada proceso de devolverse lo va mostrando con la funcion de la serie de Catalan
    }
}

repeatFunction(terminos - 1)//Llamado a la funcion de repetición

