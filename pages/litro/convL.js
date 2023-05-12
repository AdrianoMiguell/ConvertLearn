const valorL = document.querySelector("#valorL");
const unidL = document.querySelector("#unidL");
const convL = document.querySelector("#convL");
const respL = document.querySelector("#respL");
const calcL = document.querySelector("#calcL");

let valor;
let conv;
let litro;
let unid;
let convText;

function convert() {
  valor = valorL.value;
  unid = unidL.options[unidL.selectedIndex].value;
  conv = convL.options[convL.selectedIndex].value;
  convText = convL.options[convL.selectedIndex].textContent;

  if (valor > 0) {
    convertL(valor, unid, conv);

    calcL.innerHTML =
      "<span> <strong>Calculo:</strong> ( " + valor.toLocaleString("pt-BR");
    calcL.innerHTML += unid < conv ? " / " : " * ";
    calcL.innerHTML +=
      conv > 1000
        ? (10 ** conv / 10 ** unid).toLocaleString("pt-BR")
        : 10 ** conv / 10 ** unid;

    if (litro > 10 ** 10) {
      respL.innerHTML = "<strong>Litro:</strong> " + litro.toExponential() + " " + convText;
      calcL.innerHTML += ") = " + litro.toExponential() + " " + convText + " </span>";
    } else if (litro > 10 ** 3) {
      respL.innerHTML =
        "<strong>Litro:</strong> " + litro.toLocaleString("pt-BR") + " " + convText;
        calcL.innerHTML += ") = " + litro.toExponential() + " " + convText + " </span>";
    } else {
      respL.innerHTML = "<strong>Litro:</strong> " + litro + " " + convText;
      calcL.innerHTML += ") = " + litro.toExponential() + " " + convText + " </span>";
    }
  } else if (valor < 0) {
    respL.innerHTML =
      "Informe um valor positivo ok! Não existem medidas de litro negativas";
  } else {
    respL.innerHTML = 'Qual é o Litro mesmo? "0" não vale...';
  }
}

// revisar logica
function convertL(v, u, c) {
  litro = (Number(v) * 10 ** u) / 10 ** Number(c);
  console.log(litro);
  return litro;
}
