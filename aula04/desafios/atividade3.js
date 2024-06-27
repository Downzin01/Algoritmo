//Ativade 16 - Crie um programa que simule um caixa eletrônico e dê o troco em notas (R$100, R$50, R$20, R$10, R$5, R$2, R$1).
import colors from 'colors';
import readline from 'node:readline';

// Criação da interface de leitura e escrita para interação com o usuário
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Mensagem inicial do programa
console.log(
    colors.bgWhite(' Atividade 16 '),
    '↪ Crie um programa que simule um caixa eletrônico e dê o troco em notas (R$100, R$50, R$20, R$10, R$5, R$2, R$1).\n'
);

// Lista de produtos disponíveis na lojinha com seus preços
const produtos = [
    { nome: 'pamonha', preco: 10 },
    { nome: 'monhas', preco: 5 },
    { nome: 'curau', preco: 7 },
    { nome: 'canjica', preco: 8 },
    { nome: 'bolo de milho', preco: 12 },
    { nome: 'pipoca', preco: 3 },
    { nome: 'milho cozido', preco: 4 },
    { nome: 'tapioca', preco: 6 },
    { nome: 'beijinho', preco: 2 },
    { nome: 'brigadeiro', preco: 2 },
];

// Função principal que simula a interação de compra na lojinha
function lojinha() {
    console.log(colors.bgMagenta(' LOJINHA DO DANTE '), '\n'); // Título da lojinha

    // Exibe cada produto com seu índice e preço
    produtos.map((produto, index) => {
        console.log(
            colors.bgBlue(` ${index + 1} `),
            colors.blue(`${produto.nome} ↪ ${colors.bgBlue(` R$${produto.preco} `)}`) // Nome e preço formatado
        );
        //console.table(produtos);
    });

    // Pergunta ao usuário qual produto deseja comprar
    rl.question(
        colors.blue('\nO que deseja comprar? (digite "nada" para não comprar nenhum produto) '),
        (produtoSelecionado) => {
            let precoProduto;

            // Verifica se a resposta é um número
            if (!isNaN(produtoSelecionado)) {
                const numeroProduto = parseInt(produtoSelecionado);
                if (numeroProduto > 0 && numeroProduto <= produtos.length) {
                    precoProduto = produtos[numeroProduto - 1].preco;
                }
            } else {
                // Caso não seja um número, procura pelo nome do produto
                const produtoEncontrado = produtos.find(
                    (produto) => produto.nome.toLowerCase() === produtoSelecionado.toLowerCase()
                );
                if (produtoEncontrado) {
                    precoProduto = produtoEncontrado.preco;
                }
            }

            // Se o produto selecionado existe, mostra mensagem de confirmação
            if (precoProduto !== undefined) {
                const produtoEncontrado = produtos.find(
                    (produto) => produto.nome.toLowerCase() === produtoSelecionado.toLowerCase()
                );
                console.log(
                    '\n    ' + colors.bgGreen(' SELECIONADO '),
                    colors.green(`Você pegou ${produtoEncontrado} no valor de R$${precoProduto}\n`)
                );
            } else {
                // Se o produto não existe, mostra mensagem de erro e pergunta se deseja continuar
                console.log(
                    '\n    ' + colors.bgRed(' ERRO '),
                    colors.red(
                        `Produto não encontrado. Por favor, digite o número ou nome de um produto válido.\n`
                    )
                );

                rl.question(colors.blue('\nDeseja continuar com a compra? [S/N]'), (resposta) => {
                    if (resposta.toLowerCase() === 's') {
                        lojinha();
                    } else if (resposta.toLowerCase() === 'n') {
                        console.log(
                            '\n    ' + colors.bgGreen(' FIM '),
                            colors.green(`Programa foi finalizado com sucesso.\n`)
                        );
                        rl.close();
                    }
                });
            }

            // Pergunta ao usuário quanto irá pagar pelo produto selecionado
            rl.question(colors.blue('\nQuanto irá pagar?'), (valorEscolhido) => {
                calcularTroco(valorEscolhido, precoProduto); // Chama a função para calcular o troco
            });
        }
    );
}

// Função para calcular e exibir o troco a ser dado ao usuário
function calcularTroco(valorPago, valorItem) {
    if (valorPago < valorItem) {
        // Se o valor pago for menor que o valor do produto, informa o erro
        console.log(
            '\n    ' + colors.bgRed(' ERRO '),
            colors.red(
                `Olá, o valor é menor do que o valor do produto! Faltam R$${valorItem - valorPago}\n`
            )
        );

        // Pergunta se deseja reiniciar a compra ou encerrar o programa
        rl.question(colors.blue('\nReiniciar a compra? [S/N]'), (resposta) => {
            if (resposta.toLowerCase() === 's') {
                lojinha();
            } else if (resposta.toLowerCase() === 'n') {
                console.log(
                    '\n    ' + colors.bgGreen(' FIM '),
                    colors.green(`Programa foi finalizado com sucesso.\n`)
                );
                rl.close();
            }
        });
        return;
    } else if (valorPago - valorItem === 0) {
        // Se o valor pago for exatamente igual ao valor do produto, finaliza a compra com sucesso
        console.log(
            '\n    ' + colors.bgGreen('  FIM  '),
            colors.green(`Compra feita com sucesso!\n`)
        );

        // Pergunta se deseja reiniciar a compra ou encerrar o programa
        rl.question(colors.blue('\nReiniciar a compra? [S/N]'), (resposta) => {
            if (resposta.toLowerCase() === 's') {
                lojinha();
            } else if (resposta.toLowerCase() === 'n') {
                console.log(
                    '\n    ' + colors.bgGreen(' FIM '),
                    colors.green(`Programa foi finalizado com sucesso.\n`)
                );
                rl.close();
            }
        });
        return;
    } else {
        // Se houver troco a ser dado ao usuário
        let troco = valorPago - valorItem;
        const notas = [100, 50, 20, 10, 5, 2, 1];
        let gaveta = {};

        // Calcula a quantidade de cada nota necessária para dar o troco
        for (let nota of notas) {
            if (troco >= nota) {
                let quantidadeNotas = Math.floor(troco / nota);
                troco -= quantidadeNotas * nota;
                gaveta[nota] = quantidadeNotas;
            }
        }

        // Exibe mensagem de compra finalizada com sucesso e o troco a ser dado
        console.log(colors.bgGreen('  FIM  '), colors.green(`Compra feita com sucesso!\n`));
        console.log(colors.bgBlue(' TROCO '), colors.blue(valorPago - valorItem));

        // Exibe a quantidade de cada nota que será dada como troco
        for (let nota in gaveta) {
            console.log(colors.blue(`Nota de R$${nota}・${gaveta[nota]} nota(s)`));
        }
    }
}

// Inicia a lojinha, chamando a função principal
lojinha();
