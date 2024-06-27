// Atividade 8 - Crie um programa que determine se um ano é bissexto.
import colors from 'colors';
import readline from 'node:readline';

console.log(
    colors.bgWhite(' Atividade 8 '),
    '↪ Crie um programa que determine se um ano é bissexto.\n'
);

const rl = readline.createInterface({
    input: process.stdin,
});

rl.on('line', (input) => {
    let ano = parseInt(input);

    if (input.toLowerCase() === 'parar') {
        console.log('Programa encerrado.');
        console.log('   ' + colors.bgGreen(' FIM '), colors.green(`Programa finalizado!`));
        rl.close();
        return;
    }

    if (!ano) {
        console.log(
            '   ' + colors.bgRed(' ERRO '),
            colors.red('Ops, você tem que me enviar um ano válido!')
        );
    } else if (ano % 4 === 0) {
        console.log(
            '\n   ' + colors.bgGreen(' BISSEXTO '),
            colors.green(`O ano de ${ano} é um ano bissexto!\n`)
        );
    } else {
        console.log(
            '\n   ' + colors.bgRed(' NÃO BISSEXTO '),
            colors.red(`O ano de ${ano} não é um ano bissexto!\n`)
        );
    }
    console.log(colors.blue('Informe um ano (digite "parar" para encerrar): '));
});

console.log(colors.blue('Informe um ano (digite "parar" para encerrar): '));
