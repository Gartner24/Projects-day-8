// 9. Un hombre desea saber cuanto dinero se genera por concepto de intereses sobre la cantidad que tiene en inversión en el banco. El decidirá reinvertir los intereses siempre y cuando estos excedan a $7,000, y en ese caso desea saber cuanto dinero tendrá finalmente en su cuenta. Datos de entrada: Interes, capital inicial.

// let interes = prompt("Ingrese el interes: ");
// let capitalInicial = prompt("Ingrese el capital inicial: ");

let interes = 0.1;
let capitalInicial = 100000;

function decidirInversion(interes, capital) {
  let intereses = interes * capital;
  if (intereses > 7000)
    console.log("Invierta su saldo sera: " + (intereses + capital));
  else console.log("No invierta");
}

decidirInversion(interes, capitalInicial);
