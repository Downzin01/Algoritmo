//atividade 12 - Faça um programa que verifique se um triângulo é equilátero, isósceles ou escaleno com base nos comprimentos de seus lados.
import colors from 'colors';
import readline from 'node:readline';

console.log(
    colors.bgWhite(' Atividade 12 '),
    '↪ Faça um programa que verifique se um triângulo é equilátero, isósceles ou escaleno com base nos comprimentos de seus lados.\n'
);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log(colors.bgBlue(' QUAL TRIÂNGULO? '));

function calcularTriangulo() {
    rl.question(colors.blue('Digite o valor do comprimento AB: '), (ab) => {
        if (isNaN(ab)) {
            console.log(
                '   ' + colors.bgRed(' ERRO '),
                colors.red('Ops, você tem que me enviar um número')
            );
            calcularTriangulo();
        }
        rl.question(colors.blue('Digite o valor do comprimento BC: '), (bc) => {
            if (isNaN(bc)) {
                console.log(
                    '   ' + colors.bgRed(' ERRO '),
                    colors.red('Ops, você tem que me enviar um número')
                );
                calcularTriangulo();
            }
            rl.question(colors.blue('Digite o valor do comprimento AC: '), (ac) => {
                if (ab == bc && bc == ac) {
                    console.log(
                        '\n   ' + colors.bgGreen(' EQUILÁTERO '),
                        colors.green('Com essas medidas, é uma triângulo equilátero\n')
                    );
                } else if (ab == bc && bc != ac) {
                    console.log(
                        '\n   ' + colors.bgGreen(' ISÓSCELES '),
                        colors.green('Com essas medidas, é uma triângulo isósceles\n')
                    );
                } else if (ab != bc && bc != ac) {
                    console.log(
                        '\n   ' + colors.bgGreen(' ESCALENO '),
                        colors.green('Com essas medidas, é uma triângulo escaleno\n')
                    );
                }

                rl.question(
                    colors.blue('Gostaria de realizar outra operação? [S/N]'),
                    (resposta) => {
                        if (resposta.toLowerCase() == 's') {
                            calcularTriangulo();
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

calcularTriangulo();
