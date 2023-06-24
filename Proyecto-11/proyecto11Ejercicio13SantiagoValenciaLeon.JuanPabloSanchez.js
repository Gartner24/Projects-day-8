/*EJERCICIO 13 - PROYECTO 11
13.Hacer un programa de computador, utilizando ciclos anidados; de tal manera que presente lo siguiente
en la pantalla: (con un máximo de cuatro(4) ordenes “IMPRIMIR” .)
Columna

34 35 36 37 38 39 40 41 42 43 44 45 46
P P P P P P P P P P P P P 1 <- Fila
  P P P P P P P P P P P 2
    P P P P P P P P P 3
      P P P P P P P 4
        P P P P P 5
          P P P 6
            P 7

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
Descripción: Este programa imprime una figura en la consola
*/

const print = (message) => {
	process.stdout.write(message);
};

// Funcion que imprime las ternas de enteros
function imprimir() {
	let final = 34;
	let finalP = 13;
	for (let fila = 1; fila <= 7; fila++) {
		for (let espacio = 1; espacio <= final; espacio++) {
			print(' ');
		}
		for (let letra = 1; letra <= finalP; letra++) {
			print('P');
		}
		print('\n');
		final++;
		finalP -= 2;
	}
}

imprimir();
