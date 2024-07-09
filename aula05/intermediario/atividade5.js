// atividade 10 - Implemente uma contagem regressiva de 10 até 0 utilizando um laço de repetição.
let i = 10;

while (i > 0) {
    (function (i) {
        setTimeout(
            () => {
                console.log(i);
            },
            1000 * (10 - i)
        );
    })(i);
    i--;
}
