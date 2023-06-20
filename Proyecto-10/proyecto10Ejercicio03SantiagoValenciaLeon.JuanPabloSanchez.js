// 3. Hacer un programa de computador, de tal manera que pida el número de termino deseados en la siguiente serie: Serie de Lucas: Es similar a la serie de Fibonacci, pero comienza con los números 2 y 1 en lugar de 0 y 1. Es decir, los dos primeros términos de la serie son 2 y 1, y los siguientes términos se calculan como la suma de los dos términos anteriores. La fórmula para el enésimo número de Lucas es L(n) = L(n-1) + L(n-2), donde L(0) = 2 y L(1) = 1.
// Los primeros nueve términos de la serie de Lucas son: 2, 1, 3, 4, 7, 11, 18, 29, 47.

function lucas(n) {
    if (n == 0) return 2;
    if (n == 1) return 1;
    return lucas(n - 1) + lucas(n - 2);
}

function repeatFunction(n) {
    if (n >= 0) {
        repeatFunction(n - 1);
        console.log(lucas(n));
    }
}

repeatFunction(19);