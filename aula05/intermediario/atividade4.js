// atividade 9 - Calcule a soma dos dígitos de um número fornecido pelo usuário utilizando um laço de repetição.
let numeroFornecido = 123;
let soma = 0;

let numeroParaString = numeroFornecido.toString();
let i = 0;

while (i < numeroParaString.length) {
    soma += parseInt(numeroParaString[i]);
    i++;
}

console.log('A soma dos dígitos é: ' + soma);
