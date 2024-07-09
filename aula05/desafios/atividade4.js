// atividade 14
// Implemente a sequência de Collatz para um número fornecido pelo usuário.
// A sequência termina quando o número se torna 1.

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sequenciaCollatz(numero) {
    const sequencia = [numero];
    
    while (numero !== 1) {
        if (numero % 2 === 0) {
            numero = numero / 2;
        } else {
            numero = 3 * numero + 1;
        }
        sequencia.push(numero);
    }
    
    return sequencia;
}

rl.question("Insira um número para gerar a sequência de Collatz: ", (input) => {
    const numeroInicial = parseInt(input);
    
    if (!isNaN(numeroInicial) && numeroInicial > 0) {
        const resultado = sequenciaCollatz(numeroInicial);
        console.log(`A sequência de Collatz para ${numeroInicial} é: ${resultado.join(', ')}`);
    } else {
        console.log("Por favor, insira um número válido e positivo.");
    }

    rl.close();
});
