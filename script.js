const select = document.querySelector('#converter-para');
const convertido = document.querySelector('#convertido');
const valor = document.querySelector('#valor');

document.addEventListener('keyup', (e) => {
    if(e.keyCode >= 48 && e.keyCode <= 57){
        atualizaValor();
    }
});

const atualizaValor = () => {
    fetch(`http://economia.awesomeapi.com.br/json/last/${select.value}`).then((res) => res.json()).then((resposta) => {
        let sifrao = select.value.replace('-', '');
        let valorDoInput = Number(valor.value);
        let valorDaMoeda = Number(resposta[sifrao].high);
        let moedaConvertoda = (valorDoInput * valorDaMoeda).toFixed(2);

        convertido.value = moedaConvertoda;
    });
}