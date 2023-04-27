const valorB = document.querySelector("#valorB");
const unidB = document.querySelector("#unidB");
const convB = document.querySelector("#convB");
const respB = document.querySelector("#respB");
const calcB = document.querySelector("#calcB");

let valor;
let conv;
let resp;
let unid;
let op;
let unidText;
let convText;

function convert() {
  valor = valorB.value;

  unid = unidB.options[unidB.selectedIndex].value;
  conv = convB.options[convB.selectedIndex].value;
  unidText = unidB.options[unidB.selectedIndex].textContent;
  convText = convB.options[convB.selectedIndex].textContent;

  respB.innerHTML = "isso: " + convText.slice(-3);

  if (unidText == convText) {
    respB.innerHTML = "Valor: " + valor;
  } else if (unidText.slice(-3) == "bit" || convText.slice(-3) == "bit") {
    respB.innerHTML = "é bit;";

    if (unid < conv) {
      resp = (valor * 10 ** unid) / (8 * 10 ** conv);
      respB.innerHTML = " unidade menor de bit " + resp.toLocaleString("pt-BR");
    } else {
      resp = valor * 10 ** unid * (8 * 10 ** conv);
      respB.innerHTML = " unidade Maior de bit " + resp.toLocaleString("pt-BR");
    }
    
  } else if (unidText.slice(-4) == "byte" || convText.slice(-4) == "byte") {
    if (unid < conv) {
      resp = (valor * 10 ** unid) / 10 ** conv;
      respB.innerHTML = " unidade menor " + resp.toLocaleString("pt-BR");
    } else {
      resp = valor * 10 ** unid * 10 ** conv;
      respB.innerHTML = " unidade Maior " + resp.toLocaleString("pt-BR");
    }
  } else {
    respB.innerHTML = "Deu ruim";
  }
  // else{

  //   if(unid < conv) {
  //     resp = (valor * (10 ** unid)) / (10 ** conv)
  //     respB.innerHTML = " unidade menor " + resp.toLocaleString("pt-BR");
  //   }
  //   else{
  //     resp = (valor * (10 ** unid)) * (10 ** conv)
  //     respB.innerHTML = " unidade Maior " + resp.toLocaleString("pt-BR");
  //   }
}

// respB.innerHTML = " 1 byte = 8bits ; 2 ^ 3 = "+ 2**3;
// respB.innerHTML += "<br> 1 KB = 2 ^ 10 Bytes; 1 Byte = 8 bits; entt é 8 * 2 ^ 10 =  "+ 8 * 2**10;
// respB.innerHTML += " <br> 2 ^ 10 = "+ 2**10;
// respB.innerHTML += " <br> 2 ^ 10 = "+ 2**10;
// respB.innerHTML += " <br> 2 ^ 10 = "+ 2**10;

// if (valor == 0) {
//   respB.innerHTML = "Informe um valor";
//   calcB.innerHTML = "";
// } else if (unid == "b" || conv == "b") {
//   convBit();
// } else {
//   respB.innerHTML = "";
//   calcB.innerHTML = "";
// }
// }

// function convBit() {
//   if (unid == "B" || conv == "B") {
//     if (unid == "b") {
//       op = "/";
//       resp = valor / 8;
//     } else {
//       op = "*";
//       resp = valor * 8;
//     }
//     numMaior(resp);
//     calcB.innerHTML = "Calculo: " + valor + " " + op + " 8";
//   } else if (unid == "kB" || conv == "kB") {
//     if (unid == "b") {
//       op = "/";
//       resp = valor / (8 * 10 ** 3);
//     } else {
//       op = "*";
//       resp = valor * (8 * 10 ** 3);
//     }
//     numMaior(resp);
//     calcB.innerHTML =
//       "Calculo: " + valor + " " + op + " ( 8 * 10 ^ 3) = " + resp;
//   } else if (unid == "mB" || conv == "mB") {
//     if (unid == "b") {
//       op = "/";
//       resp = valor / (8 * 10 ** 6);
//     } else {
//       op = "*";
//       resp = valor * (8 * 10 ** 6);
//     }
//     numMaior(resp);
//     calcB.innerHTML = "Calculo: " + valor + " " + op + " ( 8 * 10 ^ 6) <br>";
//     calcB.innerHTML +=
//       "Calculo: " + valor + " " + op + " " + 8 * 10 ** 6 + " = " + resp;
//   } else if (unid == "mB" || conv == "mB") {
//     if (unid == "b") {
//       op = "/";
//       resp = valor / (8 * 10 ** 6);
//     } else {
//       op = "*";
//       resp = valor * (8 * 10 ** 6);
//     }
//     numMaior(resp);
//     calcB.innerHTML = "Calculo: " + valor + " " + op + " ( 8 * 10 ^ 6) <br>";
//     calcB.innerHTML +=
//       "Calculo: " + valor + " " + op + " " + 8 * 10 ** 6 + " = " + resp;
//   } else if (unid == "mB" || conv == "mB") {
//     if (unid == "b") {
//       op = "/";
//       resp = valor / (8 * 10 ** 6);
//     } else {
//       op = "*";
//       resp = valor * (8 * 10 ** 6);
//     }
//     numMaior(resp);
//     calcB.innerHTML = "Calculo: " + valor + " " + op + " ( 8 * 10 ^ 6) <br>";
//     calcB.innerHTML +=
//       "Calculo: " + valor + " " + op + " " + 8 * 10 ** 6 + " = " + resp;
//   } else {
//     respB.innerHTML = valor;
//     calcB.innerHTML = "";
//   }
// }

// function numMaior(resp) {
//   if (parseInt(resp) == parseFloat(resp)) {
//     respB.innerHTML = "Inteiro: " + resp.toLocaleString("pt-BR");
//   } else {
//     respB.innerHTML = "Decimal: " + resp;
//   }
// }
