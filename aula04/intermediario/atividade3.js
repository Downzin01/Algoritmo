// Atividade 6 - Faça um programa que leia a nota de um aluno e informe se ele está aprovado (nota maior ou igual a 7), em recuperação (nota entre 5 e 7) ou reprovado (nota menor que 5).
import colors from 'colors';
import readline from 'node:readline';

console.log(
    colors.bgWhite(' Atividade 6 '),
    '↪ Faça um programa que leia a nota de um aluno e informe se ele está aprovado, em recuperação ou reprovado.\n'
);

const rl = readline.createInterface({
    input: process.stdin,
});

rl.on('line', (input) => {
    if (input.toLowerCase() === 'parar') {
        console.log('Programa encerrado.');
        console.log('   ' + colors.bgGreen(' FIM '), colors.green(`Programa finalizado!`));
        rl.close();
        return;
    } else if (isNaN(parseInt(input))) {
        console.log(
            '   ' + colors.bgRed(' ERRO '),
            colors.red(`Por Favor! Mande um número ou escrevar "parar" para finalizar o programa`)
        );
        console.log(colors.blue('\nDigite a sua nota (ou digite "parar" para encerrar): '));
        return;
    }

    let nota = input;

    console.log(colors.white(' ▹  Sua nota:'), colors.yellow(nota));

    if ((nota < 0) | (nota > 10)) {
        console.log(
            '   ' + colors.bgRed(' ERRO '),
            colors.red(`Por favor! Mande uma nota de 0 à 10.`)
        );
    } else if (nota >= 7) {
        console.log(
            '   ' + colors.bgGreen(' APROVADO '),
            colors.green(`Parabéns! Você foi aprovado. Continue assim! Abraços :3`)
        );
    } else if (nota >= 5 && 6) {
        console.log(
            '   ' + colors.bgYellow(' RECUPERAÇÃO '),
            colors.yellow(`Boa sorte na recuperação! Estou aqui para te apoiar. Abraços :/`)
        );
    } else {
        console.log(
            '   ' + colors.bgRed(' REPROVADO '),
            colors.red(
                `Sinto muito pela reprovação. Não desista, você consegue superar isso. Abraços :(`
            )
        );
    }

    console.log(colors.blue('\nDigite a sua nota (ou digite "parar" para encerrar): '));
});

console.log(colors.blue('\nDigite a sua nota (ou digite "parar" para encerrar): '));
