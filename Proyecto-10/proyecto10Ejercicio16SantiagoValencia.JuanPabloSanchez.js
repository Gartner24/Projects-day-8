/*EJERCICIO 16 - PROYECTO 10 
------------------------------------------------------
16.Hacer un programa de computador, de tal manera que, lea un número entero N, no negativo(validar
esto) y mostrar la suma de los factoriales de todos los números desde 0 hasta N.
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
Descripción: Este programa suma los factoriales de los numeros desde 0 hasta n*/

const prompt = require("prompt-sync")({sigint: true});
const Numero = parseInt(prompt("Ingrese el numero: ")); //Se lee el número ingresado por el usuario
const print = (message) =>{//Funcion para mostrar un mensaje sin generar un salto de linea automático
  process.stdout.write(message);
}

const Suma = (inicio, final, acumulado) => {
  if (inicio < final) {
    print(inicio + "! + ");
    return Suma(inicio + 1, final, acumulado + Factorial(inicio));
  } else {
    print(inicio + "! --> el resultado de la suma es: " + (acumulado + Factorial(inicio)));
  }
}

function Factorial(number) {//Funcion para calcular el factorial de n
  if (number === 0) {
    return 1;
  } else {
    return number * Factorial(number - 1);//el factorial de un numero es el numero por el factorial del numero anterior a el
  }
}

Suma(0, Numero, 0);//Llamado a la funcion


