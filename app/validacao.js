function veruficaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute;

    if (seOChuteForInvalido(numero)) {
        console.log('valor inválido');
    }

    if (seONumeroForMaiorOuMenorQueOValorPermitido(numero)) {
        console.log(`Valor inválido! O número secreto precisa esta entre ${menorValor} e ${maiorValor}`);
    }
}

function seOChuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function seONumeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}
