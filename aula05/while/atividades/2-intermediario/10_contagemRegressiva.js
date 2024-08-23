// atividade 10 - Implemente uma contagem regressiva de 10 até 0 utilizando um laço de repetição.
let i = 10;

while (i >= 0) {
    function criarSetTimeout(contagem) {
        setTimeout(() => {
            console.log(contagem);
        }, (10 - contagem) * 1000);
    }
    
    criarSetTimeout(i);
    i--;
}
