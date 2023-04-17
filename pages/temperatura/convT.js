const valorT = document.querySelector("#valorT");
const unidT = document.querySelector("#unidT");
const convT = document.querySelector("#convT");
const respT = document.querySelector("#respT");
const calcT = document.querySelector("#calcT");

let valor;
let conv;
let tempC;
let tempK;
let tempF;
let unid;

function convert() {
  valor = valorT.value;

  unid = unidT.options[unidT.selectedIndex].value;
  conv = convT.options[convT.selectedIndex].value;

  if (valor != "") {
    switch (unid) {
      case "c":
        convertC();
        break;
      case "k":
        convertK();
        break;
      case "f":
        convertF();
        break;
      default:
        respT.innerHTML = "Escala de temperatura invalida ou não informada";
        calcT.innerHTML = "";
        break;
    }
  } else {
    respT.innerHTML = "Insina um valor";
  }
}

function convertC() {
  switch (conv) {
    case "k":
      CforK(valor);
      respT.innerHTML =
        "<span class='dest-bold'> Temperatura é: </span>" +
        tempK +
        " Kelvis <br>";
      calcT.innerHTML =
        " <span class='dest-bold'> Calculo: </span> <span> (" +
        valor +
        ") + 273.15 = " +
        tempK +
        " </span>";
      break;
    case "f":
      CforF(valor);
      respT.innerHTML =
        "<span class='dest-bold'> Temperatura é: </span>" +
        tempF +
        " Fahrenheit <br>";
      calcT.innerHTML =
        " <span class='dest-bold'> Calculo: </span> <span> ((" +
        valor +
        ") * 9 / 5) + 32 = " +
        tempF +
        " F° </span>";
      break;
    default:
      respT.innerHTML = "Temperatura informada: " + valor + " Celsius <br>";
      calcT.innerHTML = "";
      break;
  }
}

function convertF() {
  switch (conv) {
    case "k":
      FforK(valor);
      respT.innerHTML =
        "<span class='dest-bold'> Temperatura é: </span>" +
        tempK +
        " Kelvis <br>";
      calcT.innerHTML =
        "<span class='dest-bold'> Calculo: </span> <br> <span> ( (" +
        valor +
        ") - 32) x 5 / 9) + 273,15 = " +
        tempK +
        " </span> <br> ";
      calcT.innerHTML +=
        "<span> ( " +
        (valor - 32 * 5) / 5 +
        ") + 273,15 = " +
        tempK +
        " K </span>";

      break;
    case "c":
      FforC(valor);
      respT.innerHTML =
        "<span class='dest-bold'> Temperatura é: </span>" +
        tempC +
        " Celsius <br>";
      calcT.innerHTML =
        " <span class='dest-bold'> Calculo: </span> <span> ( (" +
        valor +
        ") - 32) * 9 / 5 = " +
        tempC +
        " C° </span>";
      break;
    default:
      respT.innerHTML =
        "Temperatura informada: " +
        valor +
        " Fahrenheit <br>";
      calcT.innerHTML = "";
      break;
  }
}

function convertK() {
  switch (conv) {
    case "c":
      KforC(valor);
      respT.innerHTML =
        "<span class='dest-bold'> Temperatura é: </span>" +
        tempC +
        " Celsius <br>";
      calcT.innerHTML =
        " <span class='dest-bold'> Calculo: </span> <span> (" +
        valor +
        ") + 273.15 = " +
        tempC +
        " C° </span>";
      break;
    case "f":
      KforF(valor);
      respT.innerHTML =
        "<span class='dest-bold'> Temperatura é: </span>" +
        tempF +
        " Kelvis <br>";
      calcT.innerHTML =
        "<span class='dest-bold'> Calculo: </span> <br> <span> ( (" +
        valor +
        ") - 273,15) x 5 / 9) + 32 = " +
        tempF +
        " </span> <br> ";
      calcT.innerHTML +=
        "<span> ( " +
        (Number(valor) - 273.15).toFixed(3) +
        ") * 5 / 9 + 32 = " +
        tempF +
        " </span> <br>";
      calcT.innerHTML +=
        "<span> ( " +
        (((Number(valor) - 273.15) * 5) / 9).toFixed(3) +
        ") + 32 = " +
        tempF +
        " </span>";
      break;
    default:
      respT.innerHTML =
        "Temperatura informada: " +
        valor +
        " Kelvin <br>";
      calcT.innerHTML = "";
      break;
  }
}

function CforK(c) {
  tempK = Number(c) + 273.15;
  tempK = tempK.toFixed(2);
  return tempK;
}
function CforF(c) {
  tempF = (Number(c) * 9) / 5 + 32;
  tempF = tempF.toFixed(2);
  return tempF;
}

function FforK(f) {
  tempK = ((Number(f) - 32) * 5) / 9 + 273.15;
  tempK = tempK.toFixed(3);
  return tempK;
}
function FforC(c) {
  tempC = ((Number(c) - 32) * 5) / 9;
  tempC = tempC.toFixed(2);
  return tempC;
}

function KforF(k) {
  tempF = ((Number(k) - 273.15) * 5) / 9 + 32;
  tempF = tempF.toFixed(3);
  return tempF;
}
function KforC(c) {
  tempC = Number(c) - 273.15;
  tempC = tempC.toFixed(2);
  return tempC;
}
