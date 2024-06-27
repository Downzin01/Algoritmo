// Atividade 14 - Crie um programa que resolva a equação quadrática (ax² + bx + c = 0) e informe as raízes, se existirem.
import colors from 'colors';
import readline from 'node:readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log(
    colors.bgWhite(' Atividade 14 '),
    '↪ Crie um programa que resolva a equação quadrática (ax² + bx + c = 0) e informe as raízes, se existirem.\n'
);

function equacao() {
    rl.question(colors.blue('Informe o valor de ax: '), (ax) => {
        rl.question(colors.blue('Informe o valor de bx: '), (bx) => {
            rl.question(colors.blue('Informe o valor de c: '), (c) => {
                ax = ax === '' ? 0 : parseFloat(ax);
                bx = bx === '' ? 0 : parseFloat(bx);
                c = c === '' ? 0 : parseFloat(c);
                console.log(ax, bx, c);

                if (ax === 0 && bx === 0 && c === 0) {
                    console.log(
                        colors.bgBlue(' FIM '),
                        colors.blue('A equação é indeterminada (0 = 0).')
                    );
                } else if (ax === 0 && bx === 0) {
                    console.log(
                        colors.bgBlue(' FIM '),
                        colors.blue('A equação é inconsistente (não há solução).')
                    );
                } else {
                    let delta = bx * bx - 4 * ax * c;

                    console.log(colors.bgBlue(' AX '), colors.blue('⇢ ', ax));
                    console.log(colors.bgBlue(' BX '), colors.blue('⇢ ', bx));
                    console.log(colors.bgBlue(' C  '), colors.blue('⇢ ', c), '\n');

                    console.log(
                        colors.bgGreen(' FÓRMULA DELTA '),
                        colors.green.italic(`⇢   ∆ = b² - 4.a.c`)
                    );
                    console.log(
                        '    ' + colors.bgBlue(' EXPRESSÃO '),
                        colors.blue(`⇢   ∆ = ${bx}² - 4.${ax}.${c}`)
                    );
                    console.log(
                        '    ' + colors.bgBlue(' EXPRESSÃO '),
                        colors.blue(`⇢   ∆ = ${bx * bx} - ${4 * ax * c}`)
                    );
                    console.log(
                        '    ' + colors.bgGreen(' RESULTADO '),
                        colors.green(`⇢   ∆ = ${delta}\n`)
                    );

                    if (delta < 0) {
                        console.log(
                            colors.bgBlue(' FIM '),
                            colors.blue('A equação não possui raízes reais.')
                        );
                    } else {
                        let formulabhaskara1 = (-bx + delta) / (2 * ax);
                        let formulabhaskara2 = (-bx - delta) / (2 * ax);

                        console.log(
                            colors.bgGreen(' FÓRMULA BHASKARA '),
                            colors.green.italic(`⇢   X = -b ± √Δ / 2.a`)
                        );
                        console.log(
                            '    ' + colors.bgBlue(' EXPRESSÃO X1 '),
                            colors.blue(`⇢   X¹ = -${bx} + √${delta} / 2.${ax}`)
                        );
                        console.log(
                            '    ' + colors.bgBlue(' EXPRESSÃO X1 '),
                            colors.blue(`⇢   X¹ = ${bx} + ${2 * ax}`)
                        );
                        console.log(
                            '    ' + colors.bgGreen(' RESULTADO X1 '),
                            colors.green(`⇢   X¹ = ${formulabhaskara1}\n`)
                        );

                        console.log(
                            '    ' + colors.bgBlue(' EXPRESSÃO X2 '),
                            colors.blue(`⇢   X² = -${bx} - √${delta} / 2.${ax}`)
                        );
                        console.log(
                            '    ' + colors.bgBlue(' EXPRESSÃO X2 '),
                            colors.blue(`⇢   X² = ${bx} - ${2 * ax}`)
                        );
                        console.log(
                            '    ' + colors.bgGreen(' RESULTADO X2 '),
                            colors.green(`⇢   X² = ${formulabhaskara2}\n`)
                        );
                    }
                }

                rl.question(colors.blue('Deseja fazer o tal do bhaskara [S/N]: '), (resposta) => {
                    if (resposta.toLowerCase() === 's') {
                        equacao();
                    } else if (resposta.toLowerCase() === 'n') {
                        console.log(colors.bgGreen(' FIM '), colors.blue('Programa finalizado!'));
                        rl.close();
                    }
                });
            });
        });
    });
}

equacao();
