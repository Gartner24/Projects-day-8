// 6. Hacer un programa de computador, de tal manera que pida el número de termino deseados en la siguiente serie: Serie de Padovan: Esta serie comienza con los números 1, 0 y 0. Los siguientes términos se calculan como la suma de los dos términos anteriores y el tercer término anterior. La fórmula para el enésimo número de Padovan es P(n) = P(n-2) + P(n-3), donde P(0) = 1, P(1) = 0 y P(2) = 0.
// Los primeros nueve términos de la serie de Padovan son: 1, 0, 0, 1, 0, 1, 1, 1, 2.

const padovan = (n) => {
  if (n == 0) return 1;
  if (n == 1 || n == 2) return 0;
  return padovan(n - 2) + padovan(n - 3);
};

const repeatFunction = (n) => {
  if (n >= 0) {
    repeatFunction(n - 1);
    console.log(padovan(n));
  }
};

repeatFunction(19);
