// atividade 15
// Verifique se uma matriz fornecida pelo usuário é um quadrado mágico utilizando laços de repetição.
// (Um quadrado mágico é uma matriz onde a soma de cada linha, coluna e diagonal é a mesma).

const matriz = [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8],
];

console.log(quadradoMagico(matriz));

function quadradoMagico(matriz) {
    const tamanhoMatriz = matriz.length;
    console.log(`Tamanho da matriz: ${tamanhoMatriz}`);

    // Soma da primeira linha para comparação
    const somaPrimeiraLinha = matriz[0].reduce((a, b) => a + b, 0);
    console.log(`Soma da primeira linha: ${somaPrimeiraLinha}`);

    // Verificar a soma de cada linha
    let i = 1;
    while (i < tamanhoMatriz) {
        const somaLinha = matriz[i].reduce((a, b) => a + b, 0);
        console.log(`Soma da linha ${i + 1}: ${somaLinha}`);
        if (somaLinha !== somaPrimeiraLinha) {
            console.log(
                `A soma da linha ${i + 1} (${somaLinha}) é diferente da soma esperada (${somaPrimeiraLinha})`
            );
            return false;
        }
        i++;
    }

    // Verificar a soma de cada coluna
    let j = 0;
    while (j < tamanhoMatriz) {
        let somaColunas = 0;
        let k = 0;
        while (k < tamanhoMatriz) {
            somaColunas += matriz[k][j];
            k++;
        }
        console.log(`Soma da coluna ${j + 1}: ${somaColunas}`);
        if (somaColunas !== somaPrimeiraLinha) {
            console.log(
                `A soma da coluna ${j + 1} (${somaColunas}) é diferente da soma esperada (${somaPrimeiraLinha})`
            );
            return false;
        }
        j++;
    }

    // Verificar a soma da diagonal principal
    let somaPrimeiraDiagonal = 0;
    i = 0;
    while (i < tamanhoMatriz) {
        somaPrimeiraDiagonal += matriz[i][i];
        i++;
    }
    console.log(`Soma da diagonal principal: ${somaPrimeiraDiagonal}`);
    if (somaPrimeiraDiagonal !== somaPrimeiraLinha) {
        console.log(
            `A soma da diagonal principal (${somaPrimeiraDiagonal}) é diferente da soma esperada (${somaPrimeiraLinha})`
        );
        return false;
    }

    // Verificar a soma da diagonal secundária
    let somaSegundaDiagonal = 0;
    i = 0;
    while (i < tamanhoMatriz) {
        somaSegundaDiagonal += matriz[i][tamanhoMatriz - 1 - i];
        i++;
    }
    console.log(`Soma da diagonal secundária: ${somaSegundaDiagonal}`);
    if (somaSegundaDiagonal !== somaPrimeiraLinha) {
        console.log(
            `A soma da diagonal secundária (${somaSegundaDiagonal}) é diferente da soma esperada (${somaPrimeiraLinha})`
        );
        return false;
    }

    console.log('A matriz é um quadrado mágico!');
    return true;
}
