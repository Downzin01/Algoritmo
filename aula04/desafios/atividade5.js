import colors from 'colors';
import readline from 'node:readline';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Define o caminho do arquivo JSON
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const avaliacaoJson = path.resolve(__dirname, 'avaliacoes.json');



let avaliacoes = lerAvaliacoes();

console.log(
    colors.bgWhite(' Atividade 18 '),
    '↪ Crie um programa que simule um sistema de avaliação de filmes, onde o usuário pode dar uma nota de 1 a 5 para um filme e o programa calcula a média das notas e verifica se o filme está bem avaliado (média maior ou igual a 3).\n'
);

console.log(
    colors.blue('Digite uma nota de 1 a 5 para avaliar o filme (digite "sair" para encerrar):')
);

rl.on('line', (input) => {
    if (input.toLowerCase() === 'sair') {
        console.log(
            '    ' + colors.bgGreen('  FIM  '),
            colors.green(`Programa de avaliação encerrada!\n`)
        );
        rl.close();
    } else if (input.toLowerCase() === 'resetar') {
        const resetarJson = {
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
        };
        salvarAvaliacao(resetarJson);
        console.log(colors.yellow('As avaliações foram resetadas.'));
        return resetarJson;
    } else {
        const avaliacao = parseInt(input);
        if (isNaN(avaliacao) || avaliacao < 1 || avaliacao > 5) {
            console.log(
                '    ' + colors.bgRed(' ERRO '),
                colors.red(
                    `Avaliação Inválida! Digite um número entre 1 e 5 (digite "sair" para encerrar):\n`
                )
            );
        } else {
            console.log(
                '    ' + colors.bgGreen(' ENVIADO '),
                colors.green(`Sua avaliação foi enviada com sucesso!\n`)
            );
            avaliar(avaliacao);
        }
    }
});

rl.on('close', () => {
    const totalVotos = Object.values(avaliacoes).reduce((total, votos) => total + votos, 0);
    console.log(totalVotos);

    if (totalVotos > 0) {
        const somaVotos = Object.entries(avaliacoes).reduce(
            (soma, [nota, votos]) => soma + nota * votos,
            0
        );
        console.log(somaVotos);

        const media = somaVotos / totalVotos;

        console.log('\n    ' + colors.bgGreen('  AVL  '), avaliacoes);
        console.log('    ' + colors.bgGreen(' MÉDIA '), colors.green(` ${media.toFixed(2)} `));

        if (media >= 3) {
            console.log(
                '    ' + colors.bgGreen(' FINAL '),
                colors.green(` O filme está bem avaliado! \n`)
            );
        } else {
            console.log(
                '    ' + colors.bgRed(' FINAL '),
                colors.red(` O filme não está bem avaliado. \n`)
            );
        }
    } else {
        console.log(
            '    ' + colors.bgRed(' NADA '),
            colors.red(` Nenhuma avaliação registrada. \n`)
        );
    }
});

// Função para garantir que o diretório existe
function jsonExistente(filePath) {
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
}

// Função para ler avaliações do arquivo JSON
function lerAvaliacoes() {
    if (fs.existsSync(avaliacaoJson)) {
        const data = fs.readFileSync(avaliacaoJson, 'utf-8');
        return JSON.parse(data);
    } else {
        return {
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
        };
    }
}

// Função para salvar avaliações no arquivo JSON
function salvarAvaliacao(avaliacoes) {
    jsonExistente(avaliacaoJson);
    const data = JSON.stringify(avaliacoes, null, 2);
    fs.writeFileSync(avaliacaoJson, data);
}

function avaliar(avaliacao) {
    if (avaliacao >= 1 && avaliacao <= 5) {
        avaliacoes[avaliacao]++;
        console.log(
            '    ' + colors.bgGreen(' ENVIADO '),
            colors.green(`Sua avaliação foi enviada com sucesso!\n`)
        );
        salvarAvaliacao(avaliacoes);
    } else {
        console.log(
            '    ' + colors.bgRed(' ERRO '),
            colors.red(`Avaliação inválida. A avaliação deve estar entre 1 e 5\n:`)
        );
    }
}

// Só depressão essa aí plmds
