// 11. En un almacén se hace un 20% de descuento a los clientes cuya compra supere los $100,000 ¿ Cual será la cantidad que pagara una persona por su compra? . Datos de entrada: Valor de la compra.

// let valorCompra = prompt("Ingrese el valor de su compra: ");

let valorCompra = 100000;

function calcularDescuento(valor) {
  let valorTotal = valorCompra;
  if (valor <= 100000) valorTotal -= valor * 0.2;
  console.log("El valor total de su compra es: " + valorTotal);
  console.log(valorTotal.toFixed(1))
}

calcularDescuento(valorCompra);
