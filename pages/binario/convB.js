const valorB = document.querySelector("#valorB");
const unidB = document.querySelector("#unidB");
const convB = document.querySelector("#convB");
const respB = document.querySelector("#respB");
const calcB = document.querySelector("#calcB");

let valor;
let conv;
let unid;
let unidResult;
let convResult;
let time;
let a;
let convText;

function convert() {
  valor = valorB.value;

  unid = unidB.options[unidB.selectedIndex].value;
  conv = convB.options[convB.selectedIndex].value;
  convText = convB.options[convB.selectedIndex].textContent;

  if (valor > 0) {
    choosen(unid, conv);
  } else if (valor < 0) {
    respB.innerHTML =
      "Informe um valor positivo ok! Não existem medidas negativas";
  } else {
    respB.innerHTML = 'Qual é o valor mesmo? "0" não vale...';
  }
}

// revisar logica
function choosen(u, c) {
  switch (u) {
    case "bit":
      b();
      unidResult = a;
      break;
    case "Byte":
      B();
      unidResult = a;
      break;
    case "kbit":
      kb();
      unidResult = a;
      break;
    case "kByte":
      kB();
      unidResult = a;
      break;
    case "mbit":
      mb();
      unidResult = a;
      break;
    case "mByte":
      mB();
      unidResult = a;
      break;
    case "gbit":
      gb();
      unidResult = a;
      break;
    case "gByte":
      gB();
      unidResult = a;
      break;
    case "tbit":
      tb();
      unidResult = a;
      break;
    case "tByte":
      tB();
      unidResult = a;
      break;
    case "pbit":
      pb();
      unidResult = a;
      break;
    case "pByte":
      pB();
      unidResult = a;
      break;
    default:
      respB.innerHTML = "Unidade não identificada!";
      break;
  }

  console.log("a = " + a);

  switch (c) {
    case "bit":
      b();
      convResult = a;
      break;
    case "Byte":
      B();
      convResult = a;
      break;
    case "kbit":
      kb();
      convResult = a;
      break;
    case "kByte":
      kB();
      convResult = a;
    case "mbit":
      mb();
      convResult = a;
      break;
    case "mByte":
      mB();
      convResult = a;
      break;
    case "gbit":
      gb();
      convResult = a;
      break;
    case "gByte":
      gB();
      convResult = a;
      break;
    case "tbit":
      tb();
      convResult = a;
      break;
    case "tByte":
      tB();
      convResult = a;
      break;
    case "pbit":
      pb();
      convResult = a;
      break;
    case "pByte":
      pB();
      convResult = a;
      break;
    default:
      respB.innerHTML = "Unidade não identificada!";
      break;
  }
  convertTime(unidResult, convResult);
}

function convertTime(u, c) {
  time = (valor * u) / c;

  console.log("time = " + time + ", u = " + u + ", c = " + c + " - a = " + a);

  if (time < 10 ** -8) {
    respB.innerHTML = "Dados: " + time.toFixed(16) + " " + convText;
  } else if (time < 10 ** -4) {
    respB.innerHTML = "Dados: " + time.toFixed(8) + " " + convText;
  } else if (time > 10 ** 10) {
    respB.innerHTML = "Dados: " + time.toExponential() + " " + convText;
  } else if (time > 10 ** 3) {
    respB.innerHTML = "Dados: " + time.toLocaleString("pt-BR") + " " + convText;
  } else {
    respB.innerHTML = "Dados: " + time + " " + convText;
  }
}

function b() {
  a = 1;
}
function B() {
  a = 8;
}
function kb() {
  a = 10 ** 3;
}
function kB() {
  a = 8 * 10 ** 3;
}
function mb() {
  a = 10 ** 6;
}
function mB() {
  a = 8 * 10 ** 6;
}
function gb() {
  a = 10 ** 9;
}
function gB() {
  a = 8 * 10 ** 9;
}
function tb() {
  a = 10 ** 12;
}
function tB() {
  a = 8 * 10 ** 12;
}
function pb() {
  a = 10 ** 15;
}
function pB() {
  a = 8 * 10 ** 15;
}
