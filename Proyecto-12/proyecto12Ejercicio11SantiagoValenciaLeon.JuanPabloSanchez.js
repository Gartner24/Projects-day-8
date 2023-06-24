/*EJERCICIO 11 - PROYECTO 12
11.Hacer un programa de computador, utilizando ciclos anidados; de tal manera que presente lo siguiente
en la pantalla: (con un máximo de cuatro(4) ordenes “IMPRIMIR” . Las líneas de las cuadriculas son solo
de referencia para mostrar filas y columnas; no se pide que las imprima.

                A 1 Fila
              A A 2
            A A A 3
          A A A A 4
        A A A A A 5
      A A A A A A 6
           .... ....
           .... ....
          ..... ....
A A A A A A A A A 25
56 57 58 59 . . . . 80

-----------------------------------------------------------------
Fecha de publicación: 24-06-2023
Hora: 01:34 a.m
Versión: 2.0
Autores: Ing(c) Santiago Valencia, Ing(c) Juan Pablo Sánchez
Lenguaje: JavaScript
Versión del lenguaje: 6.0
Presentado a: Doctor Ricardo Moreno Laverde
-----------------------------------------------------------------
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
-----------------------------------------------------------------
Descripción: Este programa imprime triagulo de As
*/ 

const main = () =>{
    let renglon = 1;

    while (renglon <= 25) {
        let letra = 1;
        let espacios = 1;

        while (espacios <= 79 - renglon + 1) {
            process.stdout.write(" ");//imprime los espacios en blanco
            espacios++;
        }

        while (letra <= renglon) {
            process.stdout.write("A");//imprime "A"
            letra++;
        }

        process.stdout.write("\n");//hace los saltos de linea
        renglon++;
    }
}

main();//Llamado a la funcion principal

