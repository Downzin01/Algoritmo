// atividade 3 - Calcule a soma de todos os números de 1 a 100 utilizando um laço de repetição
let i = 0;
let resultadoSoma = 0;

while (i < 101) {
    let somaAnterior = resultadoSoma;
    resultadoSoma += i;

    // console.log(`A soma de ${somaAnterior} + ${i} é igual a ${resultadoSoma}`);
    i++;
}

console.log(`A soma de 1 à 100 é igual à ${resultadoSoma}`);
