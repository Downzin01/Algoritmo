function calcularTabuada(numeroFornecido) {
    const numeroTratado = parseFloat(numeroFornecido.replace(',', '.'));

    if (isNaN(numeroTratado) || numeroTratado == 'e') {
        const mensagem = 'O valor precisa ser um número válido!';
        console.log(mensagem);
        alert(mensagem);

        return [];
    } else {
        let i = 1;
        let resultados = [];

        while (i <= 10) {
            const resultado = numeroTratado * i;
            const expressao = `${numeroTratado.toFixed().padStart(6, ' ')} x ${i.toString().padStart(2, ' ')} = ${resultado.toFixed().padStart(3, ' ')}`;

            console.log(expressao);
            resultados.push(expressao);

            i++;
        }

        return resultados; // Retorna o array com os resultados da tabuada
    }
}

// tabuada(prompt('Digite um número para ver a tabuada'));

function exibirResultado(resultadoDiv, resultados) {
    resultadoDiv.innerHTML = '';

    // Cria a tabela
    const tabela = document.createElement('table');
    tabela.classList.add('tabuada-tabela');

    // Adiciona o corpo da tabela
    const corpoTabela = document.createElement('tbody');

    resultados.forEach((resultado) => {
        const linha = document.createElement('tr');
        const cedula = document.createElement('td');

        cedula.textContent = resultado;
        linha.appendChild(cedula);
        corpoTabela.appendChild(linha);
    });

    tabela.appendChild(corpoTabela);
    resultadoDiv.appendChild(tabela);
}

function exibirTabuada() {
    const numero = document.getElementById('numero').value;
    const resultados = calcularTabuada(numero); // Calcula a tabuada e obtém os resultados

    const resultadoDiv = document.getElementById('resultado');
    exibirResultado(resultadoDiv, resultados); // Exibe os resultados no HTML
}

// Sistema para alterar de tema claro para escuroi
const botaoAlterarTema = document.getElementById('alterar-tema');
const temaIcon = document.getElementById('tema-icon');
const resultadoDiv = document.getElementById('resultado');
const body = document.body;

botaoAlterarTema.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    resultadoDiv.classList.toggle('dark-theme');

    if (body.classList.contains('dark-theme')) {
        temaIcon.src = '../../../assets/img/aula06/sol.png'; 
    } else {
        temaIcon.src = '../../../assets/img/aula06/lua.png'; 
    }
});
