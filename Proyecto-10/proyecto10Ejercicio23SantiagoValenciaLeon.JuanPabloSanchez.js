/*EJERCICIO 23 - PROYECTO 10
23.Hacer un programa de computador, de tal manera que presente lo siguiente en la pantalla: (con un
máximo de cuatro(4) ordenes “IMPRIMIR”)

_ 1234567891123
1 PPPPPPPPPPPPP
2  PPPPPPPPPPP
3   PPPPPPPPP
4    PPPPPPP
5     PPPPP
6      PPP
7       P

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
Descripción: Este programa imprime las letras P moviéndose hacia el centro de la pantalla.
*/

// Función que imprime en pantalla
function print(message) {
	process.stdout.write(message);
}

// Función que imprime P cantidad de veces
function ImprimirP(Inicio, Final) {
	if (Inicio <= Final) {
		print('P');
		ImprimirP(Inicio + 1, Final);
	}
}

// Función que imprime espacios
function ImprimirEsp(Inicio, Final) {
	if (Inicio <= Final) {
		print(' ');
		ImprimirEsp(Inicio, Final - 1);
	}
}

// Función que imprime la matriz
function Imprimir(Fila, Contador, Final, FinalP) {
	if (Fila <= 7) {
		ImprimirEsp(Contador, Final);
		ImprimirP(Contador, FinalP);
		print('\n');
		Imprimir(Fila + 1, Contador, Final + 1, FinalP - 2);
	}
}

Imprimir(1, 1, 0, 13);
