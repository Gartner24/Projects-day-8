/*EJERCICIO 04 - PROYECTO 12
4.Hacer un programa de computador, de tal manera que lea desde el teclado un grupo de 75 números,
diferentes a cero(validar este requisito) y al final de leídos, imprima:
* Cantidad de números Mayores a 150
* Número mayor y número menor encontrado en el grupo
* Cantidad de Números negativos encontrados
* Promedio de los Positivos Encontrados.
-----------------------------------------------------------------
Fecha de publicación: 24-06-2023
Hora: 00:47 p.m
Versión: 2.0
Autores: Ing(c) Santiago Valencia, Ing(c) Juan Pablo Sánchez
Lenguaje: JavaScript
Versión del lenguaje: 6.0
Presentado a: Doctor Ricardo Moreno Laverde
-----------------------------------------------------------------
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
-----------------------------------------------------------------
Descripción: Este programa calcula numeros mayores a 50, numero mayor y menor, numeros negativos y promedio de positivos de 75 numeros totales
Salvedad: Solo admite numeros diferentes de cero (0)
*/



const prompt = require('prompt-sync')(); //variable prompt global declarada para utilizar prompt node.js 

let numeroi = 0;
let numeros = 1;
let mayoresde150 = 0;
let mayor = 0;
let menor = 0;
let negativos = 0;
let suma = 0;
let positivos = 0;

const main = () =>{
    while (numeros <= 75) {
        
        numeroi = parseFloat(prompt(`Ingrese el numero #${numeros}: `));
    
        //Bloque de condiciones respectivas
    
        if (numeroi === 0) {
            console.log('El numero recien ingresado no es diferente de 0');
            numeros--;
        }
    
        if (numeroi > 150) {
            mayoresde150++;
        }
    
        if (numeroi > mayor) {
            mayor = numeroi;
        }
    
        if (numeros === 1) {
            menor = numeroi;
        }
    
        if (menor > numeroi && numeroi !== 0) {
            menor = numeroi;
        }
    
        if (numeroi < 0) {
            negativos++;
        }
    
        if (numeroi > 0) {
            positivos++;
            suma += numeroi;
            promedio = suma / positivos; // Actualizar el promedio en cada iteración
        }
    
        if (numeros === 75) {//Al leer los 75 numeros lo que hace la función es mostrar los datos
            console.log(`Cantidad de numeros mayores a 150: ${mayoresde150}`);
            console.log(`El numero mayor es: ${mayor}`);
            console.log(`El numero menor es: ${menor}`);
            console.log(`Cantidad de numeros negativos: ${negativos}`);
            console.log("El promedio de los numeros positivos es: " + promedio);
        }
        
        numeros++;
        }
}

main();