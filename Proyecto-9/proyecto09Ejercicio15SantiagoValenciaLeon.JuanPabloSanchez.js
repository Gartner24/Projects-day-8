// 15. Hacer un algoritmo que calcule el total a pagar por la compra de camisas. Si se compran tres camisas o mas se aplica un descuento del 20% sobre el total de la compra y si son menos de tres camisas un descuento del 10%. Datos de entrada: NumeroDeCamisas, Precio.

// let camisas = prompt("Ingrese el total de las camisas a comprar: ")
// let precio = prompt("Ingrese el precio total: ")

let camisas = 10;
let precio = 50000;

function calcularDescuento(camisas, precio) {
  precioTotal = precio;
  if (camisas >= 3) precioTotal -= precio* 0.2;
  else precioTotal -= precio * 0.1;
  console.log("El precio total es: " + precioTotal);
}

calcularDescuento(camisas, precio)
