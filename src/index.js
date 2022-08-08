import validator from "./validator.js";

console.log(validator);

const btnVerificar = document.getElementById("verificar");
btnVerificar.addEventListener("click", numeroDeTj);

function numeroDeTj() {
  let inputvalue = document.getElementById("numeroDeTj").value;
  // llamar la funcion
  console.log(validator.isValid(inputvalue));
  //
  console.log(validator.maskify(inputvalue))
}
//let creditCardNumber = document.getElementById("numeroDeTj").value
