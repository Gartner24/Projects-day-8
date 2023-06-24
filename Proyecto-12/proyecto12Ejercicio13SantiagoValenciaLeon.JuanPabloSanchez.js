/*EJERCICIO 13 - PROYECTO 12
13.Hacer un programa de computador, utilizando ciclos anidados; de tal manera que presente lo siguiente
en la pantalla: (con un máximo de cuatro(4) ordenes “IMPRIMIR” ). Las líneas de las cuadriculas son
solo de referencia para mostrar filas y columnas; no se pide que las imprima.
        P P P P P P P P P P P P P
          P P P P P P P P P P P
            P P P P P P P P P
              P P P P P P P
                P P P P P
                  P P P
                    P
-----------------------------------------------------------------
Fecha de publicación: 24-06-2023
Hora: 01:44 a.m
Versión: 2.0
Autores: Ing(c) Santiago Valencia, Ing(c) Juan Pablo Sánchez
Lenguaje: JavaScript
Versión del lenguaje: 6.0
Presentado a: Doctor Ricardo Moreno Laverde
-----------------------------------------------------------------
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
-----------------------------------------------------------------
Descripción: Este programa imprime lo siguiente:
        P P P P P P P P P P P P P
          P P P P P P P P P P P
            P P P P P P P P P
              P P P P P P P
                P P P P P
                  P P P
                    P
*/

const main = () =>{
    // Variable para contar los renglones de la pirámide
    let renglon = 1;

    // Bucle externo para los renglones
    while (renglon <= 7) {
        let numero = -34; // Variable para contar los espacios en blanco

        // Bucle interno para imprimir los espacios en blanco
        while (numero <= renglon - 1) {
            process.stdout.write(" ");
            numero++;
        }

        numero = 1; // Reiniciar el contador para las letras 'P'

        // Bucle interno para imprimir las letras 'P'
        while (numero <= 13 - (renglon * 2) + 2) {
            process.stdout.write("P");
            numero++;
        }

        process.stdout.write("\n"); // Salto de línea para pasar al siguiente renglón
        renglon++;
    }
}

main();//Llamado a la funcion

