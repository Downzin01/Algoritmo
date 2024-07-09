// atividade 15
// Verifique se uma matriz fornecida pelo usuário é um quadrado mágico utilizando laços de repetição.
// (Um quadrado mágico é uma matriz onde a soma de cada linha, coluna e diagonal é a mesma).

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isQuadradoMagico(matriz) {
    const n = matriz.length;
    let somaMagica = 0;

    // Calcular a soma mágica usando a primeira linha
    for (let j = 0; j < n; j++) {
        somaMagica += matriz[0][j];
    }

    // Verificar as somas das linhas
    for (let i = 1; i < n; i++) {
        let somaLinha = 0;
        for (let j = 0; j < n; j++) {
            somaLinha += matriz[i][j];
        }
        if (somaLinha !== somaMagica) {
            return false;
        }
    }

    // Verificar as somas das colunas
    for (let j = 0; j < n; j++) {
        let somaColuna = 0;
        for (let i = 0; i < n; i++) {
            somaColuna += matriz[i][j];
        }
        if (somaColuna !== somaMagica) {
            return false;
        }
    }

    // Verificar a soma da diagonal principal
    let somaDiagonalPrincipal = 0;
    for (let i = 0; i < n; i++) {
        somaDiagonalPrincipal += matriz[i][i];
    }
    if (somaDiagonalPrincipal !== somaMagica) {
        return false;
    }

    // Verificar a soma da diagonal secundária
    let somaDiagonalSecundaria = 0;
    for (let i = 0; i < n; i++) {
        somaDiagonalSecundaria += matriz[i][n - i - 1];
    }
    if (somaDiagonalSecundaria !== somaMagica) {
        return false;
    }

    return true;
}

function receberMatriz(callback) {
    rl.question("Digite o tamanho da matriz (n): ", (input) => {
        const n = parseInt(input);
        if (isNaN(n) || n <= 0) {
            console.log("Por favor, insira um número válido e positivo.");
            rl.close();
            return;
        }

        const matriz = [];
        let linhasLidas = 0;

        function lerLinha() {
            if (linhasLidas < n) {
                rl.question(`Digite a linha ${linhasLidas + 1} (separada por espaços): `, (linha) => {
                    const elementos = linha.split(' ').map(Number);
                    if (elementos.length !== n || elementos.some(isNaN)) {
                        console.log("Por favor, insira a linha corretamente com números válidos.");
                        lerLinha();
                    } else {
                        matriz.push(elementos);
                        linhasLidas++;
                        lerLinha();
                    }
                });
            } else {
                callback(matriz);
                rl.close();
            }
        }

        lerLinha();
    });
}

receberMatriz((matriz) => {
    if (isQuadradoMagico(matriz)) {
        console.log("A matriz fornecida é um quadrado mágico.");
    } else {
        console.log("A matriz fornecida não é um quadrado mágico.");
    }
});
