// 6. Hacer un programa de computador, de tal manera que pida el número de termino deseados en la siguiente serie: Serie de Padovan: Esta serie comienza con los números 1, 0 y 0. Los siguientes términos se calculan como la suma de los dos términos anteriores y el tercer término anterior. La fórmula para el enésimo número de Padovan es P(n) = P(n-2) + P(n-3), donde P(0) = 1, P(1) = 0 y P(2) = 0.
// Los primeros nueve términos de la serie de Padovan son: 1, 0, 0, 1, 0, 1, 1, 1, 2.

function padovan(n) {
    if (n == 0) return 1;
    if (n == 1 || n == 2) return 0;
    return padovan(n - 2) + padovan(n - 3);
}

function repeatFunction(n) {
    if (n >= 0) {
        repeatFunction(n - 1);
        console.log(padovan(n));
    }
}

// 7. Hacer un programa de computador, de tal manera que pida el número de termino deseados en la siguiente serie: Serie de Narayana: Esta serie comienza con los números 1, 1 y 1. Los siguientes términos se calculan como la suma del término anterior y el número de parejas de términos consecutivos anteriores que son diferentes. La fórmula para el enésimo número de Narayana es N(n) = N(n-1) + N(n-3), donde
// N(0) = 1, N(1) = 1 y N(2) = 1.
// Los primeros nueve términos de la serie de Narayana son:
// Serie de Narayana (continuación): 1, 1, 1, 2, 3, 4, 6, 9, 13.

function narayana(n) {
    if (n == 0 || n == 1 || n == 2) return 1;
    return narayana(n - 1) + narayana(n - 3);
}

function repeatFunction(n) {
    if (n >= 0) {
        repeatFunction(n - 1);
        console.log(narayana(n));
    }
}

repeatFunction(19);