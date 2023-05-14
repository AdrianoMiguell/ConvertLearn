const labelT = document.querySelector("#labelT");
const valorT = document.querySelector("#valorT");
const unidT = document.querySelector("#unidT");
const convT = document.querySelector("#convT");
const respT = document.querySelector("#respT");
const calcT = document.querySelector("#calcT");

let valor;
let conv;
let unid;
let unidResult;
let convResult;
let time;
let a;
let convText;

function convert() {
  valor = valorT.value;

  unid = unidT.options[unidT.selectedIndex].value;
  conv = convT.options[convT.selectedIndex].value;
  convText = convT.options[convT.selectedIndex].textContent;
  // labelT.innerHTML = "Valor em: " + convText;

  if (valor > 0) {
    choosen(unid, conv);
  } else if (valor < 0) {
    respT.innerHTML =
      "Informe um valor positivo ok! Não existem medidas negativas";
  } else {
    respT.innerHTML = 'Qual é o Tempo mesmo? "0" não vale...';
  }
}

// revisar logica
function choosen(u, c) {
  switch (u) {
    case "mm":
      milis();
      unidResult = a;
      break;
    case "s":
      segs();
      unidResult = a;
      break;
    case "m":
      mins();
      unidResult = a;
      break;
    case "h":
      hours();
      unidResult = a;
      break;
    case "d":
      days();
      unidResult = a;
      break;
    case "w":
      weeks();
      unidResult = a;
      break;
    case "mes":
      mounths();
      unidResult = a;
      break;
    case "y":
      years();
      unidResult = a;
      break;
    default:
      respT.innerHTML = "Unidade não identificada!";
      break;
  }

  console.log("a = " + a);

  switch (c) {
    case "mm":
      milis();
      convResult = a;
      break;
    case "s":
      segs();
      convResult = a;
      break;
    case "m":
      mins();
      convResult = a;
      break;
    case "h":
      hours();
      convResult = a;
      break;
    case "d":
      days();
      convResult = a;
      break;
    case "w":
      weeks();
      convResult = a;
      break;
    case "mes":
      mounths();
      convResult = a;
      break;
    case "y":
      years();
      convResult = a;
      break;
    default:
      respT.innerHTML = "Unidade não identificada!";
      break;
  }
  convertTime(unidResult, convResult);
}

function convertTime(u, c) {
  time = (valor * u) / c;

  calcT.innerHTML =
    "<span> <strong>Calculo:</strong> (" + valor.toLocaleString("pt-BR");
  calcT.innerHTML += u < c ? " / " : " * ";
  calcT.innerHTML += u >= c ? (u / c).toLocaleString("pt-br") : (c / u).toLocaleString("pt-br");

  if (time > 10 ** 10) {
    respT.innerHTML = "Tempo: " + time.toExponential() + " " + convText;
    calcT.innerHTML += ") = " + time.toExponential() + " " + convText + " </span>";
  } else if (time > 10 ** 3) {
    respT.innerHTML = "Tempo: " + time.toLocaleString("pt-BR") + " " + convText;
    calcT.innerHTML += ") = " + time.toLocaleString("pt-BR") + " " + convText + " </span>";
  } else {
    respT.innerHTML = "Tempo: " + time + " " + convText;
    calcT.innerHTML += ") = " + time + " " + convText + " </span>";
  }
}

function milis() {
  a = 1 / 1000;
}
function segs() {
  a = 1;
}
function mins() {
  a = 60;
}
function hours() {
  a = 3600;
}
function days() {
  a = 86400;
}
function weeks() {
  a = 86400 * 7;
}
function mounths() {
  a = 86400 * 30;
}
function years() {
  a = 86400 * 365;
}
