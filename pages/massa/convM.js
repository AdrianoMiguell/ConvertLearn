const valorM = document.querySelector("#valorM");
const unidM = document.querySelector("#unidM");
const convM = document.querySelector("#convM");
const respM = document.querySelector("#respM");
const calcM = document.querySelector("#calcM");

let valor;
let conv;
let massa;
let unid;
let convText;

function convert() {
  valor = valorM.value;
  unid = unidM.options[unidM.selectedIndex].value;
  conv = convM.options[convM.selectedIndex].value;
  convText = convM.options[convM.selectedIndex].textContent;

  if (valor > 0) {
    convertC(valor, unid, conv);

    calcM.innerHTML =
      "<span> <strong>Calculo:</strong> ( " + valor.toLocaleString("pt-BR");
    calcM.innerHTML += unid < conv ? " / " : " * ";
    calcM.innerHTML +=
      conv > 1000
        ? (10 ** conv / 10 ** unid).toLocaleString("pt-BR")
        : 10 ** conv / 10 ** unid;

    if (massa > 10 ** 10) {
      respM.innerHTML = "<strong>Área:</strong> " + massa.toExponential() + " " + convText;
      calcM.innerHTML += ") = " + massa.toExponential() + " " + convText + " </span>";
    } else if (massa > 10 ** 3) {
      respM.innerHTML =
        "<strong>Área:</strong> " + massa.toLocaleString("pt-BR") + " " + convText;
      calcM.innerHTML += ") = " +
        massa.toLocaleString("pt-BR") + " " + convText + " </span>";
    } else {
      respM.innerHTML = "<strong>Área:</strong> " + massa + " " + convText;
      calcM.innerHTML += ") = " + massa + " " + convText + " </span>";
    }
  } else if (valor < 0) {
    respM.innerHTML =
      "Informe um valor positivo ok! Não existem medidas de massa negativas";
      calcM.innerHTML = "";
  } else {
    respM.innerHTML = 'Qual é o Massa mesmo? "0" não vale...';
    calcM.innerHTML = "";
  }
}

// revisar logica
function convertC(v, u, c) {
  massa = (Number(v) * 10 ** u) / 10 ** Number(c);
  console.log(massa);
  return massa;
}
