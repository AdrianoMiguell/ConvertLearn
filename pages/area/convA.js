const valorA = document.querySelector("#valorA");
const unidA = document.querySelector("#unidA");
const convA = document.querySelector("#convA");
const respA = document.querySelector("#respA");
const calcA = document.querySelector("#calcA");

let valor;
let conv;
let area;
let unid;
let convText;

function convert() {
  valor = valorA.value;
  unid = unidA.options[unidA.selectedIndex].value;
  conv = convA.options[convA.selectedIndex].value;
  convText = convA.options[convA.selectedIndex].textContent;

  if (valor > 0) {
    convertA(valor, unid, conv);

    calcA.innerHTML =
      "<span> <strong>Calculo:</strong> ( " + valor.toLocaleString("pt-BR");
    calcA.innerHTML += unid < conv ? " / " : " * ";
    calcA.innerHTML +=
      conv > 1000
        ? (10 ** conv / 10 ** unid).toLocaleString("pt-BR")
        : 10 ** conv / 10 ** unid;


    if (area > 10 ** 10) {
      respA.innerHTML = "<strong>Área:</strong> " + area.toExponential() + " " + convText;
      calcA.innerHTML += ") = " + area.toExponential() + " " + convText + " </span>";
    } else if (area > 10 ** 3) {
      respA.innerHTML =
        "<strong>Área:</strong> " + area.toLocaleString("pt-BR") + " " + convText;
      calcA.innerHTML += ") = " +
        area.toLocaleString("pt-BR") + " " + convText + " </span>";
    } else {
      respA.innerHTML = "<strong>Área:</strong> " + area + " " + convText;
      calcA.innerHTML += ") = " + area + " " + convText + " </span>";
    }
  } else if (valor < 0) {
    respA.innerHTML =
      "Informe um valor positivo ok! Não existem medidas negativas";
    calcA.innerHTML = "";
  } else {
    respA.innerHTML = 'Qual é o Área mesmo? "0" não vale...';
    calcA.innerHTML = "";
  }
}

// revisar logica
function convertA(v, u, c) {
  area = (Number(v) * 10 ** u) / 10 ** Number(c);
  console.log(area);
  return area;
}

// if (area < 10 ** -15) {
//   respA.innerHTML = "Área: " + area.toFixed(22) + " " + convText;
//   calcA.innerHTML +=
//     area.toFixed(22)+ " " + convText + " </span>";
// } else if (area < 10 ** -8) {
//   respA.innerHTML = "Área: " + area.toFixed(16) + " " + convText;
//   calcA.innerHTML +=
//     area.toFixed(16)+ " " + convText + " </span>";
// } else if (area < 10 ** -4) {
//   respA.innerHTML = "Área: " + area.toFixed(8) + " " + convText;
//   calcA.innerHTML +=
//     area.toFixed(8)+ " " + convText + " </span>";
// } else
