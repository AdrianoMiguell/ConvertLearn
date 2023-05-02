const valorM = document.querySelector("#valorM");
const unidM = document.querySelector("#unidM");
const convM = document.querySelector("#convM");
const respM = document.querySelector("#respM");
const calcM = document.querySelector("#calcM");

let valor;
let conv;
let comp;
let unid;
let convText;

function convert() {
  valor = valorM.value;
  unid = unidM.options[unidM.selectedIndex].value;
  conv = convM.options[convM.selectedIndex].value;
  convText = convM.options[convM.selectedIndex].textContent;

  if (valor > 0) {
    console.log("Peguei a unidade de medida " + unid + " O valor é : " + valor);
    convertC(valor, unid, conv);
    respM.innerHTML = "Massa: " + comp + " " + convText;
  } else if (valor < 0) {
    respM.innerHTML =
      "Informe um valor positivo ok! Não existem medidas de massa negativas";
  } else {
    respM.innerHTML = 'Qual é o Massa mesmo? "0" não vale...';
  }
}

// revisar logica
function convertC(v, u, c) {
  comp = (Number(v) * 10 ** u) / 10 ** Number(c);
  console.log(comp);
  return comp;
}