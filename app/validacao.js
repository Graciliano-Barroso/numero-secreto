function veruficaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute;

    if (seOChuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>';
    }

    if (seONumeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido! Fale um número entre ${menorValor} e ${maiorValor}</div>`;
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
        `
    }
}

function seOChuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function seONumeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}
