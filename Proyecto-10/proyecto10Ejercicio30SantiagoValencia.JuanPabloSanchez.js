/*EJERCICIO 30 - PROYECTO 10 
------------------------------------------------------
30.Hacer Series de Taylor para el cos(x)
------------------------------------------------------
Fecha de publicacion: 21-06-2023
Hora: 1:32 a.m.
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
Descripción: Este programa genera la serie de Taylor para el coseno de x
*/

function factorial(number) {
  if (number === 0) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}

function cosx(numero, final, acumula) {
  if (numero < final) {
    acumula += (Math.pow(x, numero) / factorial(numero)) * Math.pow(-1, numero / 2);
    return cosx(numero + 2, final, acumula);
  } else {
    return acumula;
  }
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Este programa genera la suma de la serie de Taylor para cos(x)\nIngrese el valor de x: ", function(x) {
  rl.question("Ingrese el número de términos: ", function(final) {
    const result = cosx(0, parseInt(final), 0);
    console.log("La suma de la serie Taylor para cos(x) es: " + result);
    rl.close();
  });
});




