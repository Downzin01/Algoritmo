function gerarBotoes() {
    const container = document.getElementById('botoesContainer');
    const paginas = [
        { src: 'tabuada' },
        { src: 'somarNumeroEntre' },
        { src: 'somarNumeroUsuario' },
        { src: 'sequenciaFibonacci' },
        { src: 'inverterString' },
        { src: 'thanks' },
    ];
    for (let i = 1; i <= 6; i++) {
        const botao = document.createElement('button');
        botao.className = 'card-menu-botao';
        botao.textContent = i;

        // Define o comportamento ao clicar no botão
        botao.onclick = function () {
            const novaUrl =
                window.location.href.replace(/6-menu\/.*/, '') +
                `${i}-${paginas[i - 1].src}/index.html`;
            window.location.href = novaUrl;
        };

        container.appendChild(botao);
    }
}

gerarBotoes();
