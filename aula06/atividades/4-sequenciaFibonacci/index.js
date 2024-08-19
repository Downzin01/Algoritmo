function sequenciaFibornacci(sequenciaNumero) {
    console.clear();
    let a = 1, b = 1, i = 1;
    let numeroSequencia = parseInt(sequenciaNumero);
    let resultado;

    if(numeroSequencia === 0 || numeroSequencia < 0 || numeroSequencia === 'e') {
        resultado = 'Basicamente 0 (Nada)'
    } else if (numeroSequencia === 1) {
        resultado = 'Basicamente 1 (Tem nenhuma sequência para somar)'
    } else {
        while(i < numeroSequencia) {
            resultado = a + b;
            console.log(`${a} + ${b} = ${resultado}`);
    
            a = b;
            b = resultado;
    
            i++
        }
    }

    return resultado;
}


function exibirResultado(resultadoDiv, sequenciaFornecida, resultado) {
    resultadoDiv.innerHTML = `Resultado de ${sequenciaFornecida} sequência é: ${resultado}`;
}

function exibirResultadoSequenciaFibornacci() {
    const numeroSequenciaFornecida = document.getElementById('numeroSequenciaFornecida').value;
    const resultado = sequenciaFibornacci(numeroSequenciaFornecida); 

    const resultadoDiv = document.getElementById('resultado');
    exibirResultado(resultadoDiv, numeroSequenciaFornecida, resultado); // Exibe os resultados no HTML
}