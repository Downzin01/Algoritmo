function contagemRegressiva(numeroFornecido) {
    console.clear();

    if (isNaN(numeroFornecido) && parseFloat(numeroFornecido)) {
        console.log('Você não me mandou um número inteiro válido!');
        alert('Você não me mandou um número inteiro válido!!');
    } else {
        const contagem = numeroFornecido;

        for (let i = contagem; i >= 0; i--) {
            setTimeout(
                () => {
                    console.log(i);

                    if (i === 0) {
                        console.log('Kabuuuuuuuuuummm🎇🎇🎇🎆🎆');
                    }
                },
                (contagem - i) * 1000
            );
        }
    }
}

function tabuada(numeroFornecido) {
    console.clear();
    const numeroMultiplicador = parseInt(numeroFornecido);

    if (isNaN(numeroMultiplicador)) {
        alert('Você não me mandou um número válido!');
        console.log('Você não me mandou um número válido!');
    } else {
        for (let i = 0; i < 11; i++) {
            console.log(`${numeroMultiplicador} x ${i} = ${numeroMultiplicador * i}`);
        }
    }
}

function somarNumeros(numeroFornecido) {
    console.clear();
    if (isNaN(numeroFornecido)) {
        alert('Você não me mandou um número válido!');
        console.log('Você não me mandou um número válido!');
    } else {
        let resultado = 0;

        for (let i = 0; i < parseInt(numeroFornecido) + 1; i++) {
            let anterior = resultado;
            resultado += i;

            console.log(`${anterior} + ${i} = ${resultado}`);
        }
        console.log(`Resultado da soma de 0 até ${numeroFornecido} é: ${resultado}`);
        alert(`Resultado da soma de 0 até ${numeroFornecido} é: ${resultado}`);
    }
}

function imprimirPares(numeroFornecido) {
    console.clear();
    if (isNaN(numeroFornecido)) {
        alert('Você não me mandou um número válido!');
        console.log('Você não me mandou um número válido!');
    } else {
        let resultado = 0;

        for (let i = 0; i < numeroFornecido; i + 1) {
            if (numeroFornecido < 2) {
                console.log('Nenhum número par');
                break;
            }
            resultado = i += 2;
            console.log(resultado);
        }
    }
}

function sequenciaFibonacci(numeroFornecido) {
    console.clear();
    let numeroAntecessor = 0;
    let numeroAnterior = 1;
    let numeroAtual = 0;

    for (let i = 0; i < numeroFornecido; i++) {
        numeroAtual = numeroAntecessor + numeroAnterior;
        numeroAntecessor = numeroAnterior;
        numeroAnterior = numeroAtual;
        console.log(numeroAtual);
    }
  
    alert(`Resultado da sequência de Fibonacci de uma sequência de Nº${numeroFornecido} é de: ${numeroAtual}`)
}

function imprimirImpares(numeroFornecido) {
    console.clear();
    if (isNaN(numeroFornecido)) {
        alert('Você não me mandou um número válido!');
        console.log('Você não me mandou um número válido!');
    } else {
        let resultado = 0;

        for (let i = 1; i < numeroFornecido; i + 1) {
            if (numeroFornecido < 1) {
                console.log('Nenhum número ímpar');
                break;
            }
            resultado = i += 2;
            console.log(resultado - 2);
        }
    }
}

function verificarVogais(stringFornecida) {
    const vogais = 'aeiou';

    for (let i = 0; i < stringFornecida.length; i++) {
        caractere = stringFornecida[i];

        if (vogais.includes(caractere.toLowerCase())) {
            console.log(caractere + ' é uma vogal');
        } else {
            console.log(caractere + ' não é uma vogal');
        }
    }
}


// contagemRegressiva(parseInt(prompt("Digite um número:")));
// tabuada(parseInt(prompt('Digite um número:')));
// somarNumeros(parseInt(prompt('Escreva um número:')));
// imprimirPares(parseInt(prompt('Digite um número:'))) 
// sequenciaFibonacci(parseInt(prompt('Digite um número:')))
// imprimirImpares(parseInt(prompt('Digite um número:'))) v
// verificarVogais(prompt("Escreva algo:"))
