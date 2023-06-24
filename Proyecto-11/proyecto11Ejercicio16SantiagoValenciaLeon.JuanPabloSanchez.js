/*EJERCICIO 16 - PROYECTO 11
16.Hacer un programa de computador, utilizando ciclos anidados; de tal manera que presente lo siguiente
en la pantalla: (con un máximo de cuatro(4) ordenes “IMPRIMIR” .). Las líneas de las cuadriculas son
solo de referencia para mostrar filas y columnas; no se pide que las imprima.
        Z
       ZZZ
      ZZZZZ
     ZZZZZZZ
      ZZZZZ
       ZZZ
        Z
-----------------------------------------------------------------
Fecha de publicación: 23-06-2023
Hora: 22:29 p.m
Versión: 1.0
Autores: Ing(c) Santiago Valencia, Ing(c) Juan Pablo Sánchez
Lenguaje: JavaScript
Versión del lenguaje: 6.0
Presentado a: Doctor Ricardo Moreno Laverde
-----------------------------------------------------------------
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
-----------------------------------------------------------------
Descripción: Este programa imprime lo siguiente: 
        Z
       ZZZ
      ZZZZZ
     ZZZZZZZ
      ZZZZZ
       ZZZ
        Z
*/

const imprimirRombo = (altura) => {
    if (altura % 2 === 0) {
      altura += 1; // Asegura que la altura sea impar para construir correctamente el rombo
    }
  
    let espacio = Math.floor(altura / 2); // Número de espacios en blanco antes de las letras en cada línea
    let letra = 1; // Número de letras "z" en cada línea
  
    for (let i = 0; i < altura; i++) {
      let linea = ""; // Almacena la línea actual a imprimir
  
      for (let j = 0; j < espacio + 6; j++) {
        linea += " "; // Agrega espacios en blanco antes de las letras
      }
  
      for (let j = 0; j < letra; j++) {
        linea += "z"; // Agrega las letras "z" a la línea
      }
  
      console.log(linea); // Imprime la línea actual
  
      if (i < Math.floor(altura / 2)) {
        espacio -= 1; // Reduce los espacios y aumenta las letras en la mitad superior del rombo
        letra += 2;
      } else {
        espacio += 1; // Aumenta los espacios y reduce las letras en la mitad inferior del rombo
        letra -= 2;
      }
    }
  };
  
  imprimirRombo(7); // Genera el rombo con una altura de 7
  
  