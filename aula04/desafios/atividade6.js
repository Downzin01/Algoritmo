// Atividade 9 - Escreva um programa que verifique se um número fornecido pelo usuário é primo.
import colors from 'colors';
import readline from 'node:readline';

const rl = readline.Interface({
    input: process.stdin,
})

console.log(
    colors.bgWhite(' Atividade 9 '),
    '↪ Escreva um programa que verifique se um número fornecido pelo usuário é primo.\n'
);
console.log(
    colors.blue('Digite um número:')
);

rl.on('line', (input) => {
    if(!parseInt(input)) {
        console.log(
            '\n    ' + colors.bgRed('  ERRO  '),
            colors.red(`O número precisa ser inteiro!\n`)
        );
    } else if (numeroPrimo(input)) {
        console.log(
            '\n    ' + colors.bgGreen('  PRIMO  '),
            colors.green(`O número ${input} é um número primo!\n`)
        );
    } else {
        console.log(
            '\n    ' + colors.bgRed(' NÃO PRIMO '),
            colors.red(`O número ${input} não é um número primo!`)
        );
    }

})

function numeroPrimo(numero) {
    if (numero <= 1) {
        return false;
    }

    for (var i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false; 
        } 
    }

    return true; 
}
