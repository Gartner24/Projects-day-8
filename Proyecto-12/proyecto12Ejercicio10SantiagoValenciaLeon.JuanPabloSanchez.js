/*EJERCICIO 10 - PROYECTO 12
10.Se pide hacer un programa de computadora, utilizando ciclos anidados; de tal forma que imprima lo
siguiente en la pantalla.
A          A
-------------
  A      A
-------------
    A  A
-------------
     AA
El efecto es que se vea “moverse” las letras “A”.
Requisitos. Puede usar un máximo de tres(3) funciones de impresión.
-----------------------------------------------------------------
Fecha de publicación: 24-06-2023
Hora: 01:28 a.m
Versión: 2.0
Autores: Ing(c) Santiago Valencia, Ing(c) Juan Pablo Sánchez
Lenguaje: JavaScript
Versión del lenguaje: 6.0
Presentado a: Doctor Ricardo Moreno Laverde
-----------------------------------------------------------------
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
-----------------------------------------------------------------
Descripción: Este programa causa el efecto de movimiento de un par de As
*/ 

// Función que imprime una secuencia de letras "A"
let imprimirA = (Inicio, Final) => {
    let i = Inicio;
    for (let i = Inicio; i <= Final; i++) {
      process.stdout.write("A");
    }
  }
  
  // Función que imprime una secuencia de espacios
  const imprimirEspacios = (Inicio, Final) => {
    for (let i = Inicio; i <= Final; i++) {
      process.stdout.write(" ");
    }
  }
  
  // Función que aplica un desplazamiento visual de las letras "A"
  const aplicarDesplazamiento = () => {
    let contador1 = 0; // Contador inicial
    let contador2 = 16; // Contador final
  
    // Intervalo para actualizar el movimiento de las letras
    while (contador1 < contador2) {
      console.clear(); // Borra la consola para simular el movimiento
  
      // Imprime los espacios y la primera letra "A"
      imprimirEspacios(1, contador1);
      imprimirA(1, 1);
  
      // Imprime los espacios y la segunda letra "A"
      imprimirEspacios(contador1 + 2, contador2 - 2);
      imprimirA(1, 1);
  
      imprimirEspacios(contador2 + 2, 78); // Imprime los espacios finales
      console.log(); // Salto de línea
  
      contador1++; // Incrementa el contador1 en cada iteración
      contador2--; // Decrementa el contador2 en cada iteración
    }
  }
  
  // Llamada a la función principal para aplicar el desplazamiento
  aplicarDesplazamiento();
  