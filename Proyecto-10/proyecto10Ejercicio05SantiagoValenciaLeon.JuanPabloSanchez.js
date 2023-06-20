// 5. Hacer un programa de computador, de tal manera que pida el número de termino deseados en la siguiente serie: Serie de Perrin: Esta serie comienza con los números 3, 0 y 2. Los siguientes términos se calculan como la suma del término anterior y el tercer término anterior. La fórmula para el enésimo número de Perrin es P(n) = P(n-2) + P(n-3), donde P(0) = 3, P(1) = 0 y P(2) = 2. Los primeros nueve términos de la serie de Perrin son: 3, 0, 2, 3, 2, 5, 5, 7, 10.

function perrin(n) {
    if (n == 0) return 3;
    if (n == 1) return 0;
    if (n == 2) return 2;
    return perrin(n - 2) + perrin(n - 3);
}

function repeatFunction(n) {
    if (n >= 0) {
        repeatFunction(n - 1);
        console.log(perrin(n));
    }
}

repeatFunction(19);
