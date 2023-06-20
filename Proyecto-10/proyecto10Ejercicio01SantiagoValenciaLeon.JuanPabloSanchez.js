// Hacer un programa de computador, de tal manera que presente la serie de Fibonacci hasta llegar sin sobrepasar el número 10,000. con una funcion recursiva no usar loops

const fibonacci = (n) => {
  if (n == 0) return 0;
  if (n == 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

const repeatFunction = (n) => {
  if (n >= 0) {
    repeatFunction(n - 1);
    console.log(fibonacci(n));
  }
};

repeatFunction(19);
