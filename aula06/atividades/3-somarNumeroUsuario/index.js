function somarDigitosUsuario() {
    console.clear();
    let resultado = 0;

    while(true) {
        let numeroFornecido = parseInt(prompt('Digite um número (Digite 0 para encerrar):'));

        if (numeroFornecido == 0) {
            if (isNaN(resultado)) {
                resultado = 'Nenhuma, pois não me enviou nada'
            }         

            break;
        }

        console.log(resultado)
        resultado = resultado + numeroFornecido;
        console.log(resultado)
    }

    return resultado;
}

function exibirResultado() {
    const resultadoDiv = document.getElementById('resultado');
    const resultado = somarDigitosUsuario();
    resultadoDiv.innerHTML = `O resultado da soma dos dígitos fornecidos é:\n${resultado}`;
}