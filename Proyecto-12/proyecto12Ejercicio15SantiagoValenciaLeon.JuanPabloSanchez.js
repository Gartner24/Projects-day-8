/*EJERCICIO 15 - PROYECTO 12
15.Hacer un programa de computador, utilizando ciclos anidados; de tal manera que presente lo siguiente
en la pantalla: (con un máximo de cuatro(4) ordenes “IMPRIMIR” .). Las líneas de las cuadriculas son
solo de referencia para mostrar filas y columnas; no se pide que las imprima.

-----------------------------------------------------------------
Fecha de publicación: 20-06-2023
Hora: 01:12 a.m
Versión: 1.0
Autores: Ing(c) Santiago Valencia, Ing(c) Juan Pablo Sánchez
Lenguaje: JavaScript
Versión del lenguaje: 6.0
Presentado a: Doctor Ricardo Moreno Laverde
-----------------------------------------------------------------
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
-----------------------------------------------------------------
Descripción: Este programa imprime dos primides de A que se apuntan entre si.
*/


// Variable para contar los renglones de la pirámide
let renglon = 1;

// Bucle externo para los renglones
while (renglon <= 7) {
    // Condicional para determinar la configuración de letras 'A' en cada renglón
    if (renglon === 1 || renglon === 7)
        console.log("A     A");

    if (renglon === 2 || renglon === 6)
        console.log("AA   AA");

    if (renglon === 3 || renglon === 5)
        console.log("AAA AAA");

    if (renglon === 4)
        console.log("AAAAAAA");

    renglon++;
}