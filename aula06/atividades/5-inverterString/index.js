function inverterString(string) {
    console.clear();
    let stringFornecida = string;
    let i = stringFornecida.length;
    let stringInvertida = '';

    while(i > 0) {
        i--;

        stringInvertida += stringFornecida[i];
        console.log(stringInvertida);
    }
    console.log(`Resultado invertido de ${stringFornecida}: `, stringInvertida);

    return stringInvertida;
}


function exibirResultado(resultadoDiv, stringFornecida, stringInvertida) {
    resultadoDiv.innerHTML = `String Fornecida: <strong>${stringFornecida}</strong>\nResultado Invertido: <strong>${stringInvertida}</strong>`;
}

function exibirResultadoInverterString() {
    const stringFornecida = document.getElementById('stringFornecida').value;
    const stringInvertida = inverterString(stringFornecida); 

    const resultadoDiv = document.getElementById('resultado');
    exibirResultado(resultadoDiv, stringFornecida, stringInvertida); // Exibe os resultados no HTML
}