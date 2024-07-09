// atividade 6 - Calcule o fatorial de um número fornecido pelo usuário utilizando um laço de repetição.
let numeroFatorial = 0;
let fatorial = 1;
let i = numeroFatorial;

if (numeroFatorial == 0) {
    console.log(`O fatorial de ${numeroFatorial}! é igual à 1`);
} else {
    while (i > 0) {
        fatorial *= i;
        i--;
    }

    console.log(`O fatorial de ${numeroFatorial}! é igual à ${fatorial}`);
}
