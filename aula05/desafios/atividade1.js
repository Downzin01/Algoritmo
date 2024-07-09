// atividade 11 - Implemente um programa que inverte uma String fornecida pelo usuário utilizando um laço de repetição.
let stringFornecida = 'Monhas';
let stringInvertida = '';
let i = stringFornecida.length;

while (i > 0) {
    i--;
    stringInvertida += stringFornecida[i];
    console.log(stringInvertida);
}

console.log(`Resultado invertido de ${stringFornecida}: `, stringInvertida);
