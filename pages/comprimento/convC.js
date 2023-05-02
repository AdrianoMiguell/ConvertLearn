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
    console.log("Peguei a unidade de medida " + unid + " O valor é : " + valor);
    convertC(valor, unid, conv);

    if (comp < 10 ** -15) {
      respC.innerHTML = "Comprimento: " + comp.toFixed(22) + " " + convText;
    }
    else if (comp < 10 ** -8) {
      respC.innerHTML = "Comprimento: " + comp.toFixed(16) + " " + convText;
    } else if (comp < 10 ** -4) {
      respC.innerHTML = "Comprimento: " + comp.toFixed(8) + " " + convText;
    } else if (comp > 10 ** 10) {
      respC.innerHTML = "Comprimento: " + comp.toExponential() + " " + convText;
    } else if (comp > 10 ** 3 && parseInt(conv) != parseFloat(conv)) {
      respC.innerHTML = "Comprimento: " + comp.toLocaleString("pt-BR") + " " + convText;
    } else {
      respC.innerHTML = "Comprimento: " + comp + " " + convText;
    }
  } else if (valor < 0) {
    respC.innerHTML =
      "Informe um valor positivo ok! Não existem medidas negativas";
  } else {
    respC.innerHTML = 'Qual é o comprimento mesmo? "0" não vale...';
  }

 
}

// revisar logica
function convertC(v, u, c) {
  comp = (Number(v) * 10 ** u) / 10 ** Number(c);
  console.log(comp);
  return comp;
}