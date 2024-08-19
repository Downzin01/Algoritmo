function somarNumerosEntre(primeiroNumero, segundoNumero) {
    console.clear();
    let contador = primeiroNumero;
    let soma = 0;
    
    console.log(parseInt(segundoNumero) + 1)
    while (contador < parseInt(segundoNumero) + 1) {
        let somaAnterior = soma;
        soma += parseInt(contador);
    
        console.log(`${somaAnterior} + ${contador} = ${soma}`);
        contador++
    }
    console.log(soma);
    console.log(`A soma do todos os números entre ${segundoNumero} é ${soma}`)
    
    return soma;
}


function exibirResultado(resultadoDiv, primeiroNumero, segundoNumero, soma) {
    resultadoDiv.innerHTML = `Resultado entre ${primeiroNumero} e ${segundoNumero} é: ${soma}`;
}

function exibirSomarNumerosEntre() {
    const primeiroNumero = document.getElementById('primeiroNumero').value;
    const segundoNumero = document.getElementById('segundoNumero').value;
    const soma = somarNumerosEntre(primeiroNumero, segundoNumero); 

    const resultadoDiv = document.getElementById('resultado');
    exibirResultado(resultadoDiv, primeiroNumero, segundoNumero, soma); // Exibe os resultados no HTML
}