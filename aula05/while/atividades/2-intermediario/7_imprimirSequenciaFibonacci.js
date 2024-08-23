// atividade 7 - Imprima os primeiros 10 números da sequência de Fibonacci utilizando um laço de repetição.
let a = 1,
    b = 1,
    i = 1;

while (i < 10) {
    let resultadoSoma = a + b;

    console.log(`${a} + ${b} = ${resultadoSoma}`);
    a = b;
    b = resultadoSoma;

    i++;
}
