//atividade 12 - Crie um programa que simule um jogo de adivinhação, onde o usuário tem que adivinhar um número entre 1 e 100 gerado aleatoriamente pelo programa, com dicas de "maior" ou "menor" após cada palpite.
import colors from 'colors';
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log(
    colors.bgWhite(' Atividade 13 '),
    '↪ Crie um programa que simule um jogo de adivinhação, onde o usuário tem que adivinhar um número entre 1 e 100 gerado aleatoriamente pelo programa, com dicas de "maior" ou "menor" após cada palpite.\n'
);

let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

function jogoAdivinhacao() {
    rl.question(
        colors.blue('Digite um valor entre 1 e 100 (digite "parar" para encerrar): '),
        (palpite) => {
            if (palpite.toLowerCase() === 'parar') {
                console.log('Programa encerrado.');
                console.log('   ' + colors.bgGreen(' FIM '), colors.green('Programa finalizado!'));
                rl.close();
                return;
            }

            if (isNaN(palpite)) {
                console.log(
                    '   ' + colors.bgRed(' ERRO '),
                    colors.red('Ops, você tem que me enviar um número')
                );
            } else if (palpite < 1 || palpite > 100) {
                console.log(
                    '   ' + colors.bgGreen(' JOGO '),
                    colors.green('O palpite tem que ser entre 1 e 100!')
                );
            } else if (palpite < numeroAleatorio) {
                console.log(
                    '\n   ' + colors.bgYellow(' JOGO '),
                    colors.yellow('O número é maior que o seu palpite!\n')
                );
            } else if (palpite > numeroAleatorio) {
                console.log(
                    '\n   ' + colors.bgYellow(' JOGO '),
                    colors.yellow('O número é menor que o seu palpite!\n')
                );
            } else if (parseInt(palpite) === numeroAleatorio) {
                console.log(
                    '\n   ' + colors.bgGreen(' FIM DE JOGO '),
                    colors.green(
                        `Parabéns!!! Você acertou o número: ${numeroAleatorio}\nOrgulho!!!!\n`
                    )
                );

                rl.question(colors.blue('Gostaria de jogar novamente? [S/N]: '), (resposta) => {
                    if (resposta.toLowerCase() === 's') {
                        numeroAleatorio = Math.floor(Math.random() * 100) + 1;
                        jogoAdivinhacao();
                    } else {
                        console.log(
                            '\n   ' + colors.bgRed(' FIM DE JOGO '),
                            colors.red(`Programa encerrado\n`)
                        );
                        console.log('Programa encerrado.');
                        rl.close();
                    }
                });
                return;
            }

            jogoAdivinhacao();
        }
    );
}

jogoAdivinhacao();
