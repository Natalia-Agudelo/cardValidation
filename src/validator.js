const validator = {
  isValid: function (creditCardNumber) {
    let numeroTarjetaRever = "";

    // para revesar el numero //

    for (let i = creditCardNumber.length - 1; i >= 0; i--) {
      numeroTarjetaRever += creditCardNumber[i];
      console.log(creditCardNumber[i]);
    }
   

    // convertir string en array

    let numeroArray = numeroTarjetaRever.split("");
    console.log(numeroArray);

    // seleccion de numeros en posicion par y multiplicacion de cada numero *2

    let nDobles = [];
    numeroArray.forEach((element, index) => {
      if (index % 2 > 0) {
        nDobles.push(element * 2);
        console.log(nDobles);
      } else {
        nDobles.push(parseInt(element));
      }
     
    });

    // SELECCIONAR NUMEROS MAYORES A 9
    let nMayores = [];
    nDobles.forEach((element) => {
      if (element > 9) {
        nMayores.push(element - 9);
        console.log(nMayores);
      } else {
        nMayores.push(element);
        
      }
    });

    //SUMA DE NUMEROS EN TODAS LAS POSICIONES

    let nSumado = 0;

    for (let i = 0; i < nMayores.length; i++) {
      nSumado += nMayores[i];
    }
    //RETORNAR SI ES VALIDA O NO
    if (nSumado % 10 === 0) {
      return true;
      // alert("Valida");
    } else {
      return false;
      // alert("Invalida");
    }
    
  },
  // MASKIFY
  maskify: function (creditCardNumber) {
    let numeroMaski = creditCardNumber.split("");

    let numeros12Masky = numeroMaski.slice(0, -4).join('').replace(/\w/g, "#");
   

    let numerosSinM = numeroMaski.slice(-4);
    

    let union =numeros12Masky+numerosSinM.join('');
   

    return union
  },
   

};

//validator.maskify('4556364607935616'); // ############5616
// 1 // null // ()

export default validator;
