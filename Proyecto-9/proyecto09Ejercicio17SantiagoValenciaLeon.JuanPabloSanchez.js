/*EJERCICIO 17 - PROYECTO 09
17- Construir un programa que calcule el índice de masa corporal de una persona, donde: (IMC = peso [kg] /altura2 [m]) e indique el estado
en el que se encuentra esa persona en función del valor de IMC:

< 16 - Criterio de ingreso en hospital
16 - 17 - Infrapeso
17 - 18 - Bajo peso
18 - 25 - Peso normal (saludable)
25 - 30 - Sobrepeso (obesidad de grado I)
30 - 35 - Sobrepeso crónico (obesidad de grado II)
35 - 40 - Obesidad premórbida (obesidad de grado III)
> 40 - Obesidad mórbida (obesidad de grado IV)

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
Descripción: Este programa calcula el índice de masa corporal de una persona, donde: (IMC = peso [kg] /altura2 [m]) e indica el estado
*/
const prompt = require('prompt-sync')({ sigint: true });

// Variables que almacenan el peso y la altura
let peso = prompt('Ingrese su peso en kg: ');
let altura = prompt('Ingrese su altura en m: ');

// Función que calcula el IMC y muestra el estado de la persona
const calcularIMC = (peso, altura) => {
	let imc = peso / (altura * altura);

	// Condiciones para mostrar el estado de la persona
	if (imc < 16) console.log('Criterio de ingreso en hospital');
	else if (imc >= 16 && imc < 17) console.log('Infrapeso');
	else if (imc >= 17 && imc < 18) console.log('Bajo peso');
	else if (imc >= 18 && imc < 25) console.log('Peso normal (saludable)');
	else if (imc >= 25 && imc < 30)
		console.log('Sobrepeso (obesidad de grado I)');
	else if (imc >= 30 && imc < 35)
		console.log('Sobrepeso crónico (obesidad de grado II)');
	else if (imc >= 35 && imc < 40)
		console.log('Obesidad premórbida (obesidad de grado III)');
	else if (imc >= 40) console.log('Obesidad mórbida (obesidad de grado IV)');
};

calcularIMC(peso, altura);
