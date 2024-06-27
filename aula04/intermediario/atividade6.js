// Atividade 10 - Escreva um programa que leia o peso e a altura de uma pessoa e calcule seu IMC, informando se está abaixo do peso, no peso normal, acima do peso ou obeso.
import colors from 'colors';
import readline from 'node:readline';

console.log(
    colors.bgWhite(' Atividade 10 '),
    '↪ Escreva um programa que leia o peso e a altura de uma pessoa e calcule seu IMC, informando se está abaixo do peso, no peso normal, acima do peso ou obeso.\n'
);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log(colors.bgBlue(' Calculadora IMC '));

function calcularIMC() {
    rl.question(colors.blue('Digite o peso: '), (pesoEscolhido) => {
        if (isNaN(pesoEscolhido)) {
            console.log(
                '   ' + colors.bgRed(' ERRO '),
                colors.red('Ops, você tem que me enviar um número')
            );
            calcularIMC();
        }
        rl.question(colors.blue('Digite a altura: '), (alturaEscolhida) => {
            if (isNaN(alturaEscolhida)) {
                console.log(
                    '   ' + colors.bgRed(' ERRO '),
                    colors.red('Ops, você tem que me enviar um número')
                );
                calcularIMC();
            }

            pesoEscolhido = parseFloat(pesoEscolhido);
            alturaEscolhida = parseFloat(alturaEscolhida);

            let formulaIMC = pesoEscolhido / (alturaEscolhida * alturaEscolhida);

            if (formulaIMC < 18.5) {
                console.log(
                    '\n   ' + colors.bgWhite(' RESULTADO '),
                    colors.white('Você está com Baixo peso\n')
                );
            } else if (formulaIMC > 18.5 && formulaIMC <= 24.9) {
                console.log(
                    '\n   ' + colors.bgGreen(' RESULTADO '),
                    colors.green('Você está com peso adequado\n')
                );
            } else if (formulaIMC >= 25 && formulaIMC <= 29.9) {
                console.log(
                    '\n   ' + colors.bgYellow(' RESULTADO '),
                    colors.yellow('Você está com Sobrepeso\n')
                );
            } else if (formulaIMC >= 30 && formulaIMC <= 34.9) {
                console.log(
                    '\n   ' + colors.bgRed(' RESULTADO '),
                    colors.red('Você está com obesidade grau I\n')
                );
            } else if (formulaIMC >= 35 && formulaIMC <= 39.9) {
                console.log(
                    '\n   ' + colors.bgRed(' RESULTADO '),
                    colors.red('Você está com obesidade grau II\n')
                );
            } else {
                console.log(
                    '\n   ' + colors.bgRed(' RESULTADO '),
                    colors.red('Você está com obesidade grau III')
                );
            }

            rl.question(colors.blue('Gostaria de realizar outra operação? [S/N]'), (resultado) => {
                if (resultado.toLowerCase() == 's') {
                    calcularIMC();
                } else if (resultado.toLowerCase() == 'n') {
                    console.log(
                        '   ' + colors.bgGreen(' FIM '),
                        colors.green('Programa finalizado com sucesso!')
                    );
                    rl.close();
                } else {
                    console.log(
                        '   ' + colors.bgRed(' ERRO '),
                        colors.red('Ops, parece que tu passou resultado inválido!')
                    );
                }
            });
        });
    });
}

calcularIMC();
