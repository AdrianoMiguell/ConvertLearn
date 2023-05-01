const valorA = document.querySelector("#valorA");
const unidA = document.querySelector("#unidA");
const convA = document.querySelector("#convA");
const respA = document.querySelector("#respA");
const calcA = document.querySelector("#calcA");

let valor;
let conv;
let comp;
let unid;
let convText;

function convert() {
  valor = valorA.value;
  unid = unidA.options[unidA.selectedIndex].value;
  conv = convA.options[convA.selectedIndex].value;
  convText = convA.options[convA.selectedIndex].textContent;

  if (valor > 0) {
    convertC(valor, unid, conv);
    if (parseInt(conv) != parseFloat(conv)) {
      respA.innerHTML =
        "Comprimento: " + comp.toLocaleString("pt-BR") + " " + convText;
    } else {
      respA.innerHTML = "Comprimento: " + comp + " " + convText;
    }
  } else if (valor < 0) {
    respA.innerHTML =
      "Informe um valor positivo ok! Não existem medidas negativas";
  } else {
    respA.innerHTML = 'Qual é o comprimento mesmo? "0" não vale...';
  }
}

// revisar logica
function convertC(v, u, c) {
  comp = (Number(v) * 10 ** u) / 10 ** Number(c);
  console.log(comp);
  return comp;
}
