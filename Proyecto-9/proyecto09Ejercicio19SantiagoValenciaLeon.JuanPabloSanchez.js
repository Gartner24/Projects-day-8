// 19-Un supermercado ha puesto en oferta la venta al por mayor de cierto producto, ofreciendo un descuento del 15% por la compra de más de 3 docenas y 10% en caso contrario. Además por la compra de más de 3 docenas se obsequia una unidad del producto por cada docena en exceso sobre 3. Diseñe un algoritmo que determine el monto de la compra, el monto del descuento, el monto a pagar y el número de unidades de obsequio por la compra de cierta cantidad de docenas del producto.

// let cantidad = prompt("Ingrese la cantidad de docenas a comprar: ");
// let precio = prompt("Ingrese el precio del producto: ");

let cantidad = 4;
let precio = 1000;

function calcularCompra(cantidad, precio) {
    let precioTotal = cantidad * precio;
    let descuento = 0;
    let obsequio = 0;
    if (cantidad > 3) {
        descuento = precioTotal * 0.15;
        obsequio = (cantidad - 3) * 12;
    } else descuento = precioTotal * 0.1;
    precioTotal -= descuento;
    console.log("El precio total es: " + precioTotal);
    console.log("El descuento es: " + descuento);
    console.log("El obsequio es: " + obsequio);
    }

calcularCompra(cantidad, precio);