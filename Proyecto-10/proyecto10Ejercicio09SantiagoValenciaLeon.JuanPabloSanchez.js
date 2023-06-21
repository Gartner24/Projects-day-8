/*EJERCICIO 09 - PROYECTO 10
9. Hacer un programa de computador, de tal manera que pida el número de Término
deseados en la siguiente serie: Serie de Bell: Esta serie cuenta el número de
particiones no vacías de un conjunto de n elementos. Comienza con los números 1,
1 y los siguientes términos se calculan como la suma de los términos anteriores
multiplicados por los números naturales consecutivos. La fórmula para el enésimo
número de Bell es B(n) = Σ(k=0, n-1) S(n,k), donde S(n,k) es el coeficiente
binomial de (n-1) y k. (n – 1)! Esto es que la combinatoria Ck=
----------------------- k! * ( [ n-1] – k)! Los primeros nueve términos de la
serie de Bell son: 1, 1, 2, 5, 15, 52, 203, 877, 4140.

-----------------------------------------------------------------
Fecha de publicación: 20-06-2023
Hora: 10:22 a.m
Versión: 1.0
Autores: Ing(c) Santiago Valencia, Ing(c) Juan Pablo Sánchez
Lenguaje: JavaScript
Versión del lenguaje: 6.0
Presentado a: Doctor Ricardo Moreno Laverde
-----------------------------------------------------------------
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
-----------------------------------------------------------------
Descripción: Este programa pide el número de termino deseados en la serie de
Bell.
*/

const prompt = require('prompt-sync')({sigint: true});

// Variable que almacena el numero de terminos deseados
let num = prompt('Ingrese el numero de terminos deseados: ');

// Funcion que calcula un factorial
const factorial = (n) => {
  if (n == 0) return 1;
  return n * factorial(n - 1);
};

// Funcion que calcula la combinatoria
const combinatoria = (n, k) => {
  return factorial(n) / (factorial(k) * factorial(n - k));
};

// Funcion que calcula la serie de Bell
const bell = (n) => {
  if (n == 0 || n == 1) return 1;
  let sumatoria = 0;
  for (let k = 0; k <= n - 1; k++) {
    sumatoria += combinatoria(n - 1, k) * bell(k);
  }
  return sumatoria;
};

// Funcion que imprime la serie de Bell
const imprimirBell =
    (num) => {
      if (bell(num) <= 10000 && num > 0) {
        console.log(bell(num));
        imprimirBell(num - 1);
      }
    }

imprimirBell(num);