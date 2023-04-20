const valorB = document.querySelector("#valorB");
const unidB = document.querySelector("#unidB");
const convB = document.querySelector("#convB");
const respB = document.querySelector("#respB");
const calcB = document.querySelector("#calcB");

let valor;
let conv;
let resp;
let unid;

{
  /* <option value="" selected> --- escolha --- </option>
<option value="b">bit</option>
<option value="B">byte</option>
<option value="kB">kilobyte</option>
<option value="mB">megabyte</option>
<option value="gB">gigabyte</option>
<option value="tB">terabyte</option> */
}

function convert() {
  valor = valorB.value;

  unid = unidB.options[unidB.selectedIndex].value;
  conv = convB.options[convB.selectedIndex].value;

  if (valor != "") {
    switch (unid) {
      case "0":
        convertBit();
        respB.innerHTML = resp;
        break;
      case "1":
        convertBit();
        respB.innerHTML = resp;
        break;
      case "2":
        convertBit();
        respB.innerHTML = resp;
        break;
      // case "B":
      //   convertK();
      //   break;
      default:
        respB.innerHTML = "Escala de temperatura invalida ou não informada";
        calcB.innerHTML = "";
        break;
    }
  } else {
    respB.innerHTML = "Insina um valor";
  }
}

function convertBit() {
  if(unid > conv) {
    resp = valor * (conv * (2^10))
  }
  else{
    resp = (valor / conv) * (2^10)
    // resp = (valor * (unid * 2^10))  / (conv * 2^10)
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
