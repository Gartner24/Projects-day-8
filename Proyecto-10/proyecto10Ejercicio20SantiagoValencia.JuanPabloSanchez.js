/*EJERCICIO 20 - PROYECTO 10 
------------------------------------------------------
20.Hacer un programa de computador, de tal manera que presente lo siguiente en la pantalla: (con un
máximo de cuatro(4) ordenes “IMPRIMIR” ).
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

Columna (Justificado a la derecha****)
-------------------------------------------------------
Fecha de publicacion: 21-06-2023
Hora: 1:18 a.m.
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
Descripción: Este programa genera una impresion por pantalla de un triangulo de As
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

const Imprimir = (Fila, Contador, FinalE, FinalA) => {
	if (Fila <= 25) {
		ImprimirEsp(Contador, FinalE);
		ImprimirA(Contador, FinalA);
		print('\n');
		Imprimir(Fila + 1, Contador, FinalE - 1, FinalA + 1);
	} else {
		return;
	}
};

Imprimir(1, 1, 79, 1);
