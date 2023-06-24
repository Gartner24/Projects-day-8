/*EJERCICIO 04 - PROYECTO 11
4.Hacer un programa de computador, de tal manera que lea desde el teclado un grupo de 75 números,
diferentes a cero(validar este requisito) y al final de leídos, imprima:
* Cantidad de números Mayores a 150
* Número mayor y número menor encontrado en el grupo
* Cantidad de Números negativos encontrados
* Promedio de los Positivos Encontrados.-----------------------------------------------------------------
Fecha de publicación: 23-06-2023
Hora: 20:52 p.m
Versión: 1.0
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

const prompt = require('prompt-sync')(); // Importa la biblioteca 'prompt-sync' para ingresar datos en la consola

// Variables para almacenar los resultados
let cantidadMayores150 = 0;
let numeroMayor = Number.MIN_SAFE_INTEGER;
let numeroMenor = Number.MAX_SAFE_INTEGER;
let cantidadNegativos = 0;
let sumaPositivos = 0;
let cantidadPositivos = 0;

const esDiferenteDeCero = (numero) => numero !== 0; // Función para verificar si un número es diferente de cero

const calcularPromedioPositivos = () => {
  if (cantidadPositivos === 0) {
    return 0;
  } else {
    return sumaPositivos / cantidadPositivos;//Realiza la operación simple de promedio
  }
};

const leerNumeros = (indice) => {
  for(indice = 1; indice <= 75; indice++){//Ciclo que permite ingresar numero por numero y realizar las comparaciones 
    const numeroStr = prompt(`Ingrese el número ${indice}: `); // Solicita al usuario que ingrese un número
    const numero = parseFloat(numeroStr); // Convierte el número ingresado a punto flotante

    if (esDiferenteDeCero(numero)) {
        if (numero > 150) {
            cantidadMayores150++;//Evalua de la entrada si es mayor a 150, si lo es, aumenta el contador en 1
        }

    if (numero > numeroMayor) {
            numeroMayor = numero;//Se le da el valor de numero mayor a la variable numero si cumple la condición
        }

    if (numero < numeroMenor) {//Se le da el valor de numero menor a la variable numero si cumple la condición
            numeroMenor = numero;
        }

    if (numero < 0) {
            cantidadNegativos++;//Evalua si el numero es menor a 0 para incrementar el contador de negativos en 1
        }

    if (numero > 0) {
            sumaPositivos += numero;
            cantidadPositivos++;
        }
    }else {
        console.log('El número debe ser diferente de cero. Inténtelo nuevamente.');
        leerNumeros(indice); // Vuelve a pedir el mismo número si es igual a cero
    }
  }
  // Todos los números han sido leídos
  console.log('Cantidad de números Mayores a 150:', cantidadMayores150);
  console.log('Número mayor encontrado:', numeroMayor);
  console.log('Número menor encontrado:', numeroMenor);
  console.log('Cantidad de Números negativos encontrados:', cantidadNegativos);
  console.log('Promedio de los Positivos Encontrados:', calcularPromedioPositivos());
};

leerNumeros(0); // Llama a la función 'leerNumeros' para iniciar la lectura de números desde el índice 0


