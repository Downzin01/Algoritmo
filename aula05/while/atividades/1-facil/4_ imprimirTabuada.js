// atividade 4 - Imprima a tabuada do 5 (5 x 1 até 5 x 10) utilizando um laço de repetição.
let i = 0;
let multiplicador = 5;

console.log(`Tabuado do ${multiplicador}`);

while (i < 10) {
    i++;
    let resultado = multiplicador * i;

    console.log(` ${multiplicador} x ${i} = ${resultado}`);
}
