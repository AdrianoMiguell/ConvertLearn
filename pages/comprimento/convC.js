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
  // convText = convC.options[convC.selectedIndex].textContent;

  if (valor > 0) {
    console.log("Peguei a unidade de medida " + unid + " O valor é : " + valor);
    convertC(valor, unid, conv);
    respC.innerHTML = "Comprimento: " + comp + " " + convText;
  } else if (valor < 0) {
    respC.innerHTML =
      "Informe um valor positivo ok! Não existem medidas negativas";
  } else {
    respC.innerHTML = 'Qual é o comprimento mesmo? "0" não vale...';
  }
}

// revisar logica
function convertC(v, u, c) {
  comp = (Number(v) * u) / Number(c);
  return comp;
}