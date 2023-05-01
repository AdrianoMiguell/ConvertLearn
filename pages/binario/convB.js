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
    respB.innerHTML = 'Qual é o Tempo mesmo? "0" não vale...';
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
    default:
      respB.innerHTML = "Unidade não identificada!";
      break;
  }
  convertTime(unidResult, convResult);
}

function convertTime(u, c) {
  // if (u <= c) {
  time = (valor * u) / c;
  // } else {
  // time = valor * u * c;
  // }

  console.log("time = " + time + ", u = " + u + ", c = " + c + " - a = " + a);

  if (time < 10 ** -8) {
    respB.innerHTML = "Tempo: " + time.toFixed(16) + " " + convText;
  } else if (time < 10 ** -4) {
    respB.innerHTML = "Tempo: " + time.toFixed(8) + " " + convText;
  } else if (time > 10 ** 10) {
    respB.innerHTML = "Tempo: " + time.toExponential() + " " + convText;
  } else if (time > 10 ** 3 && parseInt(conv) != parseFloat(conv)) {
    respB.innerHTML = "Tempo: " + time.toLocaleString("pt-BR") + " " + convText;
  } else {
    respB.innerHTML = "Tempo: " + time + " " + convText;
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
