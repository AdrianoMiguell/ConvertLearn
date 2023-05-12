const valorV = document.querySelector("#valorV");
const unidV = document.querySelector("#unidV");
const convV = document.querySelector("#convV");
const respV = document.querySelector("#respV");
const calcV = document.querySelector("#calcV");

let valor;
let conv;
let vol;
let unid;
let convText;

function convert() {
  valor = valorV.value;
  unid = unidV.options[unidV.selectedIndex].value;
  conv = convV.options[convV.selectedIndex].value;
  convText = convV.options[convV.selectedIndex].textContent;

  if (valor > 0) {
    convertA(valor, unid, conv);

    calcV.innerHTML =
      "<span> <strong>Calculo:</strong> ( " + valor.toLocaleString("pt-BR");
    calcV.innerHTML += unid < conv ? " / " : " * ";
    calcV.innerHTML +=
      conv > 1000
        ? (10 ** conv / 10 ** unid).toLocaleString("pt-BR")
        : 10 ** conv / 10 ** unid;

    if (vol > 10 ** 10) {
      respV.innerHTML = "<strong>Volume:</strong> " + vol.toExponential() + " " + convText;
      calcV.innerHTML +=
        ") = " + vol.toExponential() + " " + convText + " </span>";
    } else if (vol > 10 ** 2) {
      respV.innerHTML =
        "<strong>Volume:</strong> " + vol.toLocaleString("pt-BR") + " " + convText;
      calcV.innerHTML +=
        ") = " + vol.toLocaleString("pt-BR") + " " + convText + " </span>";
    } else {
      respV.innerHTML = "<strong>Volume:</strong> " + vol + " " + convText;
      calcV.innerHTML += ") = " + vol + " " + convText + " </span>";
    }
  } else if (valor < 0) {
    respV.innerHTML =
      "Informe um valor positivo ok! Não existem medidas negativas";
    calcV.innerHTML = "";
  } else {
    respV.innerHTML = 'Qual é o volume mesmo? "0" não vale...';
    calcV.innerHTML = "";
  }
}

// revisar logica
function convertA(v, u, c) {
  vol = (Number(v) * 10 ** u) / 10 ** Number(c);
  console.log(vol);
  return vol;
}
