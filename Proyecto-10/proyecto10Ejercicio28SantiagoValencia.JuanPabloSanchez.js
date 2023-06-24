/*EJERCICIO 28 - PROYECTO 10 
------------------------------------------------------
28.Hacer un programa de computador, de tal manera que presente lo siguiente en la pantalla: (con un
máximo de cuatro(4) ordenes “IMPRIMIR” )
------------------------------------------------------
Fecha de publicacion: 21-06-2023
Hora: 1:29 a.m.
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
Descripción: Este programa genera una impresion por pantalla de un triangulo de As apuntando hacia la izquierda
*/

const print = (message) => {
	process.stdout.write(message);
};

const ImprimirA = (Inicio, Final) => {
	if (Inicio <= Final) {
		print('A');
		ImprimirA(Inicio + 1, Final);
	} else {
		return;
	}
};

const ImprimirEsp = (Inicio, Final) => {
	if (Inicio <= Final) {
		print(' ');
		ImprimirEsp(Inicio + 1, Final);
	} else {
		return;
	}
};

const Imprimir = (Fila, Contador, Final, FinalA) => {
	if (Fila < 6) {
		ImprimirEsp(Contador, Final);
		ImprimirA(Contador, FinalA);
		print('\n');
		Imprimir(Fila + 1, Contador, Final - 1, FinalA + 1);
	} else {
		if (Fila <= 11) {
			ImprimirEsp(Contador, Final);
			ImprimirA(Contador, FinalA);
			print('\n');
			Imprimir(Fila + 1, Contador, Final + 1, FinalA - 1);
		} else {
			return;
		}
	}
};

Imprimir(1, 0, 39, 0);
