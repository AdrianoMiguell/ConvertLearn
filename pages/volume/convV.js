const valorV = document.querySelector("#valorV");
const unidV = document.querySelector("#unidV");
const convV = document.querySelector("#convV");
const respV = document.querySelector("#respV");
const calcV = document.querySelector("#calcV");

let valor;
let conv;
let comp;
let unid;
let convText;

function convert() {
  valor = valorV.value;
  unid = unidV.options[unidV.selectedIndex].value;
  conv = convV.options[convV.selectedIndex].value;
  // convText = convV.options[convV.selectedIndex].textContent;

  if (valor > 0) {
    console.log("Peguei a unidade de medida " + unid + " O valor é : " + valor);
    convertC(valor, unid, conv);
    respV.innerHTML = "Comprimento: " + comp + " " + convText;
  } else if (valor < 0) {
    respV.innerHTML =
      "Informe um valor positivo ok! Não existem medidas negativas";
  } else {
    respV.innerHTML = 'Qual é o comprimento mesmo? "0" não vale...';
  }
}

// revisar logica
function convertC(v, u, c) {
  comp = (Number(v) * 10 ** u) / 10 ** Number(c);
  console.log(comp);
  return comp;
}