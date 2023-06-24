/*EJERCICIO 24 - PROYECTO 11
24. Hacer un algoritmo utilizando ciclos anidados; para calcular los resultados de las siguientes funciones usando
las series de Taylor que se dan a continuación.
Para cada ejercicio, pida por teclado: a). El valor de x b). El número de términos de la serie. Realizarlo para f(x) = ln(x)
-----------------------------------------------------------------
Fecha de publicación: 23-06-2023
Hora: 23:35 p.m
Versión: 2.0
Autores: Ing(c) Santiago Valencia, Ing(c) Juan Pablo Sánchez
Lenguaje: JavaScript
Versión del lenguaje: 6.0
Presentado a: Doctor Ricardo Moreno Laverde
-----------------------------------------------------------------
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
-----------------------------------------------------------------
Descripción: Este programa calcula la serie de Taylor para los n terminos de f(x) = ln(x)
*/

const prompt = require('prompt-sync')(); // Importa la librería prompt-sync para recibir entrada del usuario

console.log("Este programa calcula la serie de Taylor para ln(x) alrededor de x=1.");
const x = Number(prompt("Ingrese el valor que le desea dar a x: ")); // Solicita al usuario que ingrese el valor de x
const numTerminos = Number(prompt("Ingrese el número de términos deseados de la serie:")); // Solicita al usuario que ingrese el número de términos

const lnTaylor = () =>{
    let resultado = 0; // Inicializa la variable resultado como 0
    for (let i = 1; i <= numTerminos; i++) {
        if(i % 2 !== 0){//Ya que la serie de Taylor para el ln(x) alterna los signos, se evalua si el indice es par o impar para saber que signo debe tener
            resultado += Math.pow(x - 1, i) / i;
        }else{
            resultado -= Math.pow(x - 1, i) / i;
        }
    }
    return resultado;
}


console.log(`El resultado de la serie de Taylor para ln(${x}) es: ${lnTaylor()}`);