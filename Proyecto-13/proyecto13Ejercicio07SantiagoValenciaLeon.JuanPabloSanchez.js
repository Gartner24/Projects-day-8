/*EJERCICIO 07 - PROYECTO 13
Ejercicio 07. Resonancia magnética
La resonancia magnética es una técnica de diagnóstico por imagen en la que se obtiene información de las
características de diferentes puntos del cuerpo a partir de su respuesta a un campo magnético variable. Supongamos
que tenemos una matriz tridimensional de puntos que representa una imagen adquirida por este método, en el que
cada punto tiene un valor entre 0 y 255, correspondiente a un distinto nivel de gris.
La imagen será́ como la de un cuaderno de 100 hojas, donde cada hoja tendrá una cuadricula de 100 x 100 puntos,
esto es que genera un arreglo de 100 planos (fotografías) en Z(0,1,2,3,4...99)
Se quiere escribir un programa que permita detectar aspectos en la imagen que pueden ser indicadores de una
enfermedad. Como no tenemos los datos que generaría la máquina de “Resonancia magnética”, genere usted el
arreglo con datos aleatorios entre [0 y 255] para probar sus funciones. Para ello se pide:

1. Escribir una función que, para un determinado punto en la imagen (identificado por sus coordenadas x, y ,z) ,
detecte si es sospechoso. Se consideran sospechosos aquellos puntos para los que TODOS los puntos adyacentes
tengan un valor entre 20 y 40 (esto incluye los puntos pertenecientes al mismo plano, al plano inferior y al plano
superior).
Nota: A la hora de analizar la imagen, no se analizarán los puntos de ninguno de los planos exteriores del cubo.
Debe imprimirse las siguientes imágenes para este punto;
En este caso, para este ejemplo. Este punto NO ES SOSPECHOSO

2. Se pide escribir una función que, para un determinado plano de la imagen, busque líneas sospechosas. Se
considera una línea sospechosa toda línea HORIZONTAL (paralelas al eje X) en la que haya al menos tres(3) puntos
sospechosos consecutivos, para esto se pide que imprima el plano(fotografía, en modo gráfico); ejemplo:
Ejemplo: Fotografía en el plano Z=37

3. Escribir un programa que emplee las funciones anteriormente descritas para identificar en una imagen si hay alguna línea sospechosa y genere el siguiente informe

Plano en Z(Fotografía) Líneas sospechosas x plano(foto) Puntos sospechosos por plano(foto)
1 0 7
2 3 25
3 0 16
........ .... .....
97 0 4
98 1 5
Los valores de todos los elementos de la matriz se supondrán ya cargados en memoria (no es necesario leerlos). En
caso de que existan líneas sospechosas en la imagen, el programa mostrará en qué plano hay más líneas sospechosas
(servirá para saber en qué lugar es mejor hacer una biopsia).

-----------------------------------------------------------------
Fecha de publicación: 20-06-2023
Hora: 06:00 p.m
Versión: 1.0
Autores: Ing(c) Santiago Valencia, Ing(c) Juan Pablo Sánchez
Lenguaje: JavaScript
Versión del lenguaje: 6.0
Presentado a: Doctor Ricardo Moreno Laverde
-----------------------------------------------------------------
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación
-----------------------------------------------------------------
Descripción: Este programa permite detectar aspectos en la imagen que pueden ser indicadores de una enfermedad.
*/