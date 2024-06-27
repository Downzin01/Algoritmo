// Atividade 4 - Crie um programa que leia três números e determine qual é o maior.
import colors from 'colors';

console.log(
    colors.bgWhite(' Atividade 4 '),
    '↪ Crie um programa que leia três números e determine qual é o maior.\n'
);

let numero1 = 8;
let numero2 = 5;
let numero3 = 10;
let numeroMaior, numeroIntermediario, numeroMenor;

console.log(colors.white(' ▹ Números escolhidos:'), colors.yellow(numero1, numero2, numero3));

// criando uma solução que usando operador ternário
if (numero1 >= numero2 && numero1 >= numero3) {
    numeroMaior = numero1;
    numeroIntermediario = numero2 >= numero3 ? numero2 : numero3;
    numeroMenor = numero2 <= numero3 ? numero2 : numero3;
} else if (numero2 >= numero1 && numero2 >= numero3) {
    numeroMaior = numero2;
    numeroIntermediario = numero1 >= numero3 ? numero1 : numero3;
    numeroMenor = numero1 <= numero3 ? numero1 : numero3;
} else {
    numeroMaior = numero3;
    numeroIntermediario = numero1 >= numero2 ? numero1 : numero2;
    numeroMenor = numero1 <= numero2 ? numero1 : numero2;
}

// Imprimir o resultado
console.log(
    colors.white(' ▹ Lista Decrescente:'),
    colors.yellow(numeroMaior, numeroIntermediario, numeroMenor)
);
console.log(colors.white(' ▹ Número maior:'), colors.yellow(numeroMaior));

// Usando Array e o método sort() - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

console.log(colors.magenta('\n↪ Usando método sort():\n'));

// Array de números
let numerosArray = [8, 9, 10];
console.log(colors.white(' ▹ Números escolhidos:'), colors.yellow(numerosArray));

// Ordena o array em ordem decrescente
numerosArray.sort((a, b) => b - a);

// Imprimir o resultado
console.log(
    colors.white(' ▹ Lista Decrescente:'),
    colors.yellow(numerosArray.sort((a, b) => b - a))
);
console.log(colors.white(' ▹ Número maior:'), colors.yellow(numerosArray[0]));
