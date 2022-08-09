import validator from "./validator.js";

console.log(validator);

const btnVerificar = document.getElementById("verificar");
btnVerificar.addEventListener("click", numeroDeTj);

function numeroDeTj() {
  let inputvalue = document.getElementById("numeroDeTj").value;
  console.log(inputvalue);

  // llamar la funcion
  console.log(validator.isValid(inputvalue));
  console.log(validator.maskify(inputvalue));
}
// funcion para validar y enmascarar

document.getElementById("verificar").addEventListener("click", () => {
  let nombreUsuario = document.getElementById("nombre").value;
  let cvv = document.getElementById("codigoDeSeguridad");
  let vencimiento = document.getElementById("fechaDeVencimiento").value;
  let entradaNum = document.getElementById("numeroDeTj").value;

  //llamo la funcion isvalid
  let verificacion = validator.isValid(entradaNum);

  if (nombreUsuario === "") {
    return alert("Escribe tu nombre");
  }
  if (cvv === "") {
    return alert("Nuemero de tres dijitos detras de la tarjeta");
  }
  if (vencimiento === "") {
    return alert("Cuando vence tu tarjeta?");
  }
  if (entradaNum === null || entradaNum === "") {
    return alert("Numero de tu tarjeta");
  }
  console.log(verificacion);

  //enmascaro el numero dentro del input llamando maskify
  let enmascarar = validator.maskify(entradaNum);

  document.getElementById("numeroDeTj").value = enmascarar;

  console.log(enmascarar);

  if (verificacion == true) {
    return alert("¡Ya puedes compra!");
  } else {
    verificacion == false;
    return alert("¡intenta de nuevo!");
  }
});
