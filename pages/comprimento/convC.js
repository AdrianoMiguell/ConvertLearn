const valorC = document.querySelector("#valorC");
const unidC = document.querySelector("#unidC");
const convC = document.querySelector("#convC");
const respC = document.querySelector("#respC");
const calcC = document.querySelector("#calcC");

let valor;
let conv;
let comp;
let unid;
let convText;

function convert() {
  valor = valorC.value;
  unid = unidC.options[unidC.selectedIndex].value;
  conv = convC.options[convC.selectedIndex].value;
  convText = convC.options[convC.selectedIndex].textContent;

  if (valor > 0) {
    convertC(valor, unid, conv);

    calcC.innerHTML =
      "<span> <strong>Calculo:</strong> ( " + valor.toLocaleString("pt-BR");

    if (conv > unid) {
      calcC.innerHTML += " / ";
      calcC.innerHTML += (10 ** conv / 10 ** unid).toLocaleString("pt-BR");
    } else {
      calcC.innerHTML += " * ";
      calcC.innerHTML += (10 ** unid / 10 ** conv).toLocaleString("pt-BR");
    }

    if (comp > 10 ** 10) {
      respC.innerHTML =
        "<strong>Comprimento:</strong> " +
        comp.toExponential() +
        " " +
        convText;
      calcC.innerHTML +=
        ") = " + comp.toExponential() + " " + convText + " </span>";
    } else if (comp > 10 ** 3 && parseInt(conv) != parseFloat(conv)) {
      respC.innerHTML =
        "<strong>Comprimento:</strong> " +
        comp.toLocaleString("pt-BR") +
        " " +
        convText;
      calcC.innerHTML +=
        ") = " + comp.toLocaleString("pt-BR") + " " + convText + " </span>";
    } else {
      respC.innerHTML =
        "<strong>Comprimento:</strong> " + comp + " " + convText;
      calcC.innerHTML += ") = " + comp + " " + convText + " </span>";
    }
  } else if (valor < 0) {
    respC.innerHTML =
      "Informe um valor positivo ok! Não existem medidas negativas";
    calcC.innerHTML = "";
  } else {
    respC.innerHTML = 'Qual é o comprimento mesmo? "0" não vale...';
    calcC.innerHTML = "";
  }
}

// revisar logica
function convertC(v, u, c) {
  comp = (Number(v) * 10 ** u) / 10 ** Number(c);
  console.log(comp);
  return comp;
}
