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

    if (area < 10 ** -15) {
      respA.innerHTML = "Área: " + area.toFixed(22) + " " + convText;
    } else if (area < 10 ** -8) {
      respA.innerHTML = "Área: " + area.toFixed(16) + " " + convText;
    } else if (area < 10 ** -4) {
      respA.innerHTML = "Área: " + area.toFixed(8) + " " + convText;
    } else if (area > 10 ** 10) {
      respA.innerHTML = "Área: " + area.toExponential() + " " + convText;
    } else if (area > 10 ** 3) {
      respA.innerHTML =
        "Área: " + area.toLocaleString("pt-BR") + " " + convText;
    } else {
      respA.innerHTML = "Área: " + area + " " + convText;
    }
  } else if (valor < 0) {
    respA.innerHTML =
      "Informe um valor positivo ok! Não existem medidas negativas";
  } else {
    respA.innerHTML = 'Qual é o Área mesmo? "0" não vale...';
  }
}

// revisar logica
function convertA(v, u, c) {
  area = (Number(v) * 10 ** u) / 10 ** Number(c);
  console.log(area);
  return area;
}
