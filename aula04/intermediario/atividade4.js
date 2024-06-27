// Atividade 7 - Escreva um programa que leia dois números e uma operação (adição, subtração, multiplicação, divisão) e realize a operação entre os dois números.
import colors from 'colors';
import readline from 'node:readline';

console.log(
    colors.bgWhite(' Atividade 7 '),
    '↪ Escreva um programa que leia dois números e uma operação (adição, subtração, multiplicação, divisão) e realize a operação entre os dois números.\n'
);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log(colors.bgBlue(' Calculadora Básica '));

function calcular() {
    rl.question(colors.blue('Digite o primeiro valor: '), (numero1) => {
        if (isNaN(numero1)) {
            console.log(
                '   ' + colors.bgRed(' ERRO '),
                colors.red('Ops, você tem que me enviar um número')
            );
            calcular();
        }
        rl.question(colors.blue('Digite o segundo valor: '), (numero2) => {
            if (isNaN(numero2)) {
                console.log(
                    '   ' + colors.bgRed(' ERRO '),
                    colors.red('Ops, você tem que me enviar um número')
                );
                calcular();
            }
            rl.question(colors.blue('Digite um operador ( + , - , * , / ): '), (operador) => {
                numero1 = parseFloat(numero1);
                numero2 = parseFloat(numero2);

                let resultado;
                switch (operador) {
                    case '+':
                    case 'adição':
                    case 'adicao':
                    case 'mais':
                        resultado = numero1 + numero2;
                        break;
                    case '-':
                    case 'subtração':
                    case 'subtracao':
                    case 'menos':
                        resultado = numero1 - numero2;
                        break;
                    case '*':
                    case 'multiplicação':
                    case 'multiplicacao':
                    case 'vezes':
                        resultado = numero1 * numero2;
                        break;
                    case '/':
                    case 'divisão':
                    case 'divisao':
                    case 'dividido':
                    case 'dividir':
                        if ((numero1 === 0) | (numero2 === 0)) {
                            console.log(
                                '   ' + colors.bgYellow(' :/ '),
                                colors.yellow('Por que dividir por 0 ou dividir o 0? Muda nada!')
                            );
                        } else {
                            resultado = numero1 / numero2;
                        }
                        break;
                    default:
                        console.log(
                            colors.bgRed(' ERRO '),
                            colors.red('Ops, parece que tu passou um operador inválido!')
                        );
                }

                if (resultado !== undefined) {
                    console.log(
                        '   ' + colors.bgBlue(' EXPRESSÃO '),
                        colors.blue(numero1, operador, numero2)
                    );
                    console.log(
                        '   ' + colors.bgGreen(' RESPOSTA  '),
                        colors.green('  ' + resultado)
                    );
                }

                rl.question(
                    colors.blue('Gostaria de realizar outra operação? [S/N]'),
                    (resposta) => {
                        if (resposta.toLowerCase() == 's') {
                            calcular();
                        } else if (resposta.toLowerCase() == 'n') {
                            console.log(
                                '   ' + colors.bgGreen(' FIM '),
                                colors.green('Programa finalizado com sucesso!')
                            );
                            rl.close();
                        } else {
                            console.log(
                                '   ' + colors.bgRed(' ERRO '),
                                colors.red('Ops, parece que tu passou resposta inválido!')
                            );
                        }
                    }
                );
            });
        });
    });
}

calcular();
