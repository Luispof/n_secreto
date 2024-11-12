function verificaChute(chute) {
    const numero = +chute

    if(chuteForInvalido(numero)){
        elementoChute.innerHTML += '<div>Valor inválido</div>';
        return
    }

    if(NumeroForMaiorOuMenor(numero)){
        elementoChute.innerHTML += `<div>valor inválido: Fale um numero entre ${menorValor} e ${maiorValor}</div>
        `
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você Acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>

        <button id="jogar-novamnete" class="btn-jogar">Jogar novamente</button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
    } else {
        {
            elementoChute.innerHTML += `
            <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
            `
        }
    }
};

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function NumeroForMaiorOuMenor(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente')
        window.location.reload()
})