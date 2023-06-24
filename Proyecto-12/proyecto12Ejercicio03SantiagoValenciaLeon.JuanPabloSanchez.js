/*EJERCICIO 03 - PROYECTO 12
3.Hacer un programa de computador, de tal manera que lea desde el teclado un numero entero y lo
imprima al revés.
-----------------------------------------------------------------
Fecha de publicación: 24-06-2023
Hora: 00:44 a.m
Versión: 1.0
Autores: Ing(c) Santiago Valencia, Ing(c) Juan Pablo Sánchez
Lenguaje: JavaScript
Versión del lenguaje: 6.0
Presentado a: Doctor Ricardo Moreno Laverde
-----------------------------------------------------------------
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
-----------------------------------------------------------------
Descripción: Este programa lee un numero y lo imprime al revés*/

const prompt = require('prompt-sync')(); //variable prompt global declarada para utilizar prompt node.js 

const invertirNumero = () =>{//funcion para invertir un numero
    let numero = parseInt(prompt("Ingrese un numero: "));//Se le pide un numero al usuario para imprimirlo al reves y este se convierte a un entero
    let residuo = 0;
    let invertido = 0;
  
    while (numero > 0) {//ciclo para invertir el numero
      residuo = numero % 10;//Descompone el numero para una mejor manipulación
      numero = Math.floor(numero / 10);
      invertido = invertido * 10 + residuo;
    }
  
    console.log(`El número invertido es: ${invertido}`);//se imprime en pantalla el numero invertido
  }
  
  invertirNumero(); 