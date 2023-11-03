const menorValor = 1;
const maiorValor = 1000;
const numeroSecreto = gerarNumeroAleatorio();

const elementoMenorValor = document.getElementById('menor-valor');
const elementoMaiorvalor = document.getElementById('maior-valor');


function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1);
}

elementoMenorValor.innerHTML = menorValor;
elementoMaiorvalor.innerHTML = maiorValor;

console.log('Numero Secreto', numeroSecreto);

