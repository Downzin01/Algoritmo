// Atividade 5 - Escreva um programa que verifique se uma letra fornecida pelo usuário é uma vogal ou uma consoante.
import colors from 'colors';

console.log(
    colors.bgWhite(' Atividade 5 '),
    '↪ Escreva um programa que verifique se uma letra fornecida pelo usuário é uma vogal ou uma consoante.\n'
);

// váriaveis
let letraEscolhida = 'B';
let vogais = ['a', 'e', 'i', 'o', 'u'];

console.log(colors.white(' ▹ Letra escolhida:'), colors.yellow(letraEscolhida));

if (vogais.includes(letraEscolhida.toLowerCase())) {
    console.log(
        '   ' + colors.bgGreen(' VOGAL '),
        colors.green(
            `A letra ${colors.yellow(letraEscolhida)} está na lista de vogais: ${colors.yellow(vogais)}\n`
        )
    );
} else {
    console.log(
        '   ' + colors.bgRed(' CONSOANTE '),
        colors.red(
            `A letra ${colors.yellow(letraEscolhida)} não está na lista de vogais: ${colors.yellow(vogais)}\n`
        )
    );
}
