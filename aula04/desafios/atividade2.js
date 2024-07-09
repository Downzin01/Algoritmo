//Ativade 15 - Escreva um programa que leia uma data (dia, mês, ano) e verifique se é uma data válida.
import colors from 'colors';
import readline from 'node:readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log(
    colors.bgWhite(' Atividade 15 '),
    '↪ Escreva um programa que leia uma data (dia, mês, ano) e verifique se é uma data válida.\n'
);

function verificarData() {
    rl.question(colors.blue('Informe o dia: '), (dia) => {
        rl.question(colors.blue('Informe o mês: '), (mes) => {
            rl.question(colors.blue('Informe o ano: '), (ano) => {
                dia = parseInt(dia);
                mes = parseInt(mes);
                ano = parseInt(ano);

                if (isNaN(dia) || isNaN(mes) || isNaN(ano)) {
                    console.log(
                        '\n    ' + colors.bgRed(' ERRO '),
                        colors.red(
                            `Valores inseridos são inválidos! Certifique-se de digitar números inteiros.\n`
                        )
                    );
                } else if (dataValida(dia, mes, ano)) {
                    console.log(
                        '\n    ' + colors.bgGreen(' VÁLIDA '),
                        colors.green(`A data ${dia}/${mes}/${ano} informa, é válida\n`)
                    );
                } else {
                    console.log(
                        '\n    ' + colors.bgRed(' INVÁLIDA '),
                        colors.red(`A data ${dia}/${mes}/${ano} informa, é inválida\n`)
                    );
                }

                rl.question(
                    colors.blue('Gostaria de realizar outra verificação de data? [S/N]'),
                    (resultado) => {
                        if (resultado.toLowerCase() == 's') {
                            verificarData();
                        } else if (resultado.toLowerCase() == 'n') {
                            console.log(
                                '\n   ' + colors.bgGreen(' FIM '),
                                colors.green('Programa finalizado com sucesso!\n')
                            );
                            rl.close();
                        } else {
                            console.log(
                                '\n   ' + colors.bgRed(' ERRO '),
                                colors.red('Ops, parece que tu passou resultado inválido!\n')
                            );
                            rl.close();
                        }
                    }
                );
            });
        });
    });
}

verificarData();

function dataValida(dia, mes, ano) {
    let data = new Date(ano, mes - 1, dia);

    let dataDia = data.getDate();
    let dataMes = data.getMonth() + 1;
    let dataAno = data.getFullYear();

    return dataDia === dia && dataMes === mes && dataAno === ano;
}
