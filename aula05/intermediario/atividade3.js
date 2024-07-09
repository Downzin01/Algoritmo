// atividade 8 - Imprima todos os números primos de 1 a 50 utilizando um laço de repetição.
let numeroSequencia = 50;
let i = 0;
let numeroPrimosArray = [];

while (i < numeroSequencia) {
    i++;

    if (numeroPrimo(i)) {
        // console.log(i)
        numeroPrimosArray.push(i);
    }
}

console.log(
    `Números primos de 1 à ${numeroSequencia} (${numeroPrimosArray.length} números primos encontrados):`,
    numeroPrimosArray
);

function numeroPrimo(numero) {
    if (numero < 2) {
        return false;
    }
    for (let i = 2; i < numero; i++) {
        if (numero % i == 0) {
            return false;
        }
    }
    return true;
}
