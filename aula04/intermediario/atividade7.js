// atividade 11 - Escreva um programa que leia um mês do ano e informe quantos dias ele tem.
import colors from 'colors';
import readline from 'node:readline';

console.log(
    colors.bgWhite(' Atividade 11 '),
    '↪ Escreva um programa que leia um mês do ano e informe quantos dias ele tem.\n'
);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const meses = {
    janeiro: { dias: 31 },
    fevereiro: { dias: 28 },
    marco: { dias: 31 },
    abril: { dias: 30 },
    maio: { dias: 31 },
    junho: { dias: 30 },
    julho: { dias: 31 },
    agosto: { dias: 31 },
    setembro: { dias: 30 },
    outubro: { dias: 31 },
    novembro: { dias: 30 },
    dezembro: { dias: 31 },
};

console.log(colors.bgBlue(' Verificar quantos dias no mês '));

rl.on('line', (input) => {
    if (input.toLowerCase() === 'parar') {
        console.log('Programa encerrado.');
        console.log('   ' + colors.bgGreen(' FIM '), colors.green(`Programa finalizado!`));
        rl.close();
        return;
    }

    if (meses[input]) {
        console.log(
            '\n   ' + colors.bgGreen(` ${input} `),
            colors.green(`O mês de ${input} tem ${meses[input].dias} dias!\n`)
        );
    } else {
        console.log(
            '\n   ' + colors.bgRed(` ERRO `),
            colors.red('Você informou um mês invalido!\n')
        );
    }

    console.log(colors.blue('Informe um mês (digite "parar" para encerrar): '));
});

console.log(colors.blue('Informe um mês (digite "parar" para encerrar): '));
