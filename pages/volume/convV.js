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

    if (vol < 10 ** -15) {
      respV.innerHTML = "Volume: " + vol.toFixed(22) + " " + convText;
    } else if (vol < 10 ** -8) {
      respV.innerHTML = "Volume: " + vol.toFixed(16) + " " + convText;
    } else if (vol < 10 ** -4) {
      respV.innerHTML = "Volume: " + vol.toFixed(8) + " " + convText;
    } else if (vol > 10 ** 10) {
      respV.innerHTML = "Volume: " + vol.toExponential() + " " + convText;
    } else if (vol > 10 ** 2) {
      respV.innerHTML =
        "Volume: " + vol.toLocaleString("pt-BR") + " " + convText;
    } else {
      respV.innerHTML = "Volume: " + vol + " " + convText;
    }
  } else if (valor < 0) {
    respV.innerHTML =
      "Informe um valor positivo ok! Não existem medidas negativas";
  } else {
    respV.innerHTML = 'Qual é o volume mesmo? "0" não vale...';
  }
}

// revisar logica
function convertA(v, u, c) {
  vol = (Number(v) * 10 ** u) / 10 ** Number(c);
  console.log(vol);
  return vol;
}
