//Ativade 17 - Escreva um programa que leia uma senha e permita até três tentativas para acertar. Caso contrário, bloqueie o acesso.
import colors from 'colors';
import readline from 'node:readline';

const rl = readline.createInterface({
    input: process.stdin,
});

console.log(
    colors.bgWhite(' Atividade 17 '),
    '↪ Escreva um programa que leia uma senha e permita até três tentativas para acertar. Caso contrário, bloqueie o acesso.\n'
);

const senha = 'monhas';
let tentativas = 3;

console.log(colors.blue('Digite a senha:'));

// Função para lidar com o evento de entrada de linha
rl.on('line', (resposta) => {
    if (resposta !== senha) {
        tentativas--;
        if (tentativas > 0) {
            console.log(
                colors.bgRed(' ERRO '),
                colors.red(`Senha incorreta. Restam ${tentativas} tentativas disponiveis!\n`)
            );
            console.log(colors.blue('Digite a senha:'));
        } else {
            console.log(
                colors.bgRed(' BLOQUEADO '),
                colors.red(`Senha incorreta. Acesso negado!\n`)
            );
            rl.close();
        }
    } else {
        console.log(
            colors.bgGreen(' LIBERADO '),
            colors.green(`Senha correta. Acesso liberado!\n`)
        );
        rl.close();
    }
});

rl.on('close', () => {
    console.log(colors.bgGreen(' ENCERRADO '), colors.green(`Programa encerrado.!\n`));
});
