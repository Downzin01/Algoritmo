// atividade 12
// Imprima todos os números perfeitos de 1 a 1000 utilizando um laço de repetição.
// (Um número perfeito é um número que é igual à soma de seus divisores próprios, excluindo ele mesmo).
let i = 1
while(i < 1000) {
    
    i++;
}
for (let numero = 1; numero <= 1000; numero++) {
    if (numeroPerfeito(numero)) {
        console.log(numero);
    }
}


function numeroPerfeito(numero) {
    let somaDivisores = 0;
    for (let i = 1; i < numero; i++) {
        if (numero % i === 0) {
            somaDivisores += i;
        }
    }
    return somaDivisores === numero;
}
