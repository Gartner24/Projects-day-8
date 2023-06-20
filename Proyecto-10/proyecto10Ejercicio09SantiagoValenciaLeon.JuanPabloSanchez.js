// 9. Hacer un programa de computador, de tal manera que pida el número de Término deseados en la siguiente serie: Serie de Bell: Esta serie cuenta el número de particiones no vacías de un conjunto de n elementos. Comienza con los números 1, 1 y los siguientes términos se calculan como la suma de los términos anteriores multiplicados por los números naturales consecutivos. La fórmula para el enésimo número de Bell es B(n) = Σ(k=0, n-1) S(n,k), donde S(n,k) es el coeficiente binomial de (n-1) y k. n-1

// Esto es que la combinatoria Ck
//           (n – 1)!
// =  -----------------------
//      k! * ( [ n-1] – k)!

// Los primeros nueve términos de la serie de Bell son: 1, 1, 2, 5, 15, 52, 203, 877, 4140.

function factorial(n) {
    if (n == 0) return 1;
    return n * factorial(n - 1);
}

function combinatoria(n, k) {
    return factorial(n) / (factorial(k) * factorial(n - k));
}

function bell(n) {
    if (n == 0 || n == 1) return 1;
    let sumatoria = 0;
    for (let k = 0; k <= n - 1; k++) {
        sumatoria += combinatoria(n - 1, k) * bell(k);
    }
    return sumatoria;
}

function repeatFunction(n) {
    if (n >= 0) {
        repeatFunction(n - 1);
        console.log(bell(n));
    }
}

repeatFunction(10);

// Clear console: