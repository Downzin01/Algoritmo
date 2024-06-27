var numeroMultiplicador = 4;

console.log('Tabuada do ' + numeroMultiplicador + ':');
console.log(numeroMultiplicador, ' x 0: ', numeroMultiplicador * 0);
console.log(numeroMultiplicador, ' x 1: ', numeroMultiplicador * 1);
console.log(numeroMultiplicador, ' x 2: ', numeroMultiplicador * 2);
console.log(numeroMultiplicador, ' x 3: ', numeroMultiplicador * 3);
console.log(numeroMultiplicador, ' x 4: ', numeroMultiplicador * 4);
console.log(numeroMultiplicador, ' x 5: ', numeroMultiplicador * 5);
console.log(numeroMultiplicador, ' x 6: ', numeroMultiplicador * 6);
console.log(numeroMultiplicador, ' x 7: ', numeroMultiplicador * 7);
console.log(numeroMultiplicador, ' x 8: ', numeroMultiplicador * 8);
console.log(numeroMultiplicador, ' x 9: ', numeroMultiplicador * 9);
console.log(numeroMultiplicador, ' x 10: ', numeroMultiplicador * 10);

console.log(!false);

// Utilizando Função
function tabuada(multiplicador) {
    let valoresTabuada = [];
    console.log(`Tabuada do ${multiplicador}:`);

    for (let i = 0; i <= 10; i++) {
        let expressao = `${multiplicador} x ${i} = `;
        let resultado = multiplicador * i;
        let imprimir = expressao + resultado;

        console.log(imprimir);
    }
}

tabuada(2);
