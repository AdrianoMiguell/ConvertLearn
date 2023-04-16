const valor = document.getElementById('temperature');
const unidade = document.querySelector('#unidade');
const result = document.querySelector('#result');

valor.addEventListener('keyup', (e) => {
    const newValue = e.target.value
    console.log(newValue);
    calcCelsius(newValue);
})

function calcCelsius(t) {
    const convercao = t - 273;
    result.innerHTML = convercao + 'K'
}
// var opcao = valor.options[valor.selectedIndex].value;
// result.innerHTML = opcao;

