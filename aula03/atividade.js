// --------------------------------------------------
// Calculo das operações básicas
// --------------------------------------------------
var valor1 = 10;
var valor2 = 5;

var resultadoSoma = valor1 + valor2;
var resultadoSubtracao = valor1 - valor2;
var resultadoDivisao = valor1 / valor2;
var resultadoMultiplicacao = valor1 * valor2;

console.log('Calculo das operações básicas:\n');
console.log(`${valor1} + ${valor2} = ${resultadoSoma}`);
console.log(`${valor1} - ${valor2} = ${resultadoSubtracao}`);
console.log(`${valor1} / ${valor2} = ${resultadoDivisao}`);
console.log(`${valor1} * ${valor2} = ${resultadoDivisao}`);
console.log('============================================');


// --------------------------------------------------
// Convertor de Fahrenheit para Celsius e Celsius para Fahrenheit
// --------------------------------------------------

// Fórmula para Celsius -> C = F - 32 / 1,8
console.log('Convertor de Fahrenheit para Celsius e Celsius para Fahrenheit:\n');
var valorFahrenheit = 1;
var calculoCelsius = (valorFahrenheit - 32) / 1.8;

console.log(`A conversão de ${valorFahrenheit}Fº é ${calculoCelsius}Cº`);

// Fórmula para Fahrenheit ->  F = C x (9/5) + 32
var valorCelsius = 1;
var calculoFahrenheit = valorCelsius * (9 / 5) + 32;

console.log(`A conversão de ${valorCelsius}Cº é ${calculoFahrenheit}`);
console.log('============================================');


// --------------------------------------------------
// Convertor de Metros para Centimetros
// --------------------------------------------------
console.log('Convertor de Metros para Centimetros\n');
var metros = 1;
var calculoMetrosParaCentimetros = metros * 100;

console.log(`${metros} metros é ${calculoMetrosParaCentimetros} centímetros`);
console.log('============================================');

console.log('Calcular desconto do valor de um produto\n');
var valorProduto = 10;
var valorDesconto = 10;

var calculoDesconto = (10 / 100) * valorProduto;
var calculoDescontoProduto = valorProduto - calculoDesconto;

console.log(`O valor de R$${valorProduto} com ${valorDesconto}% é ${calculoDescontoProduto}`);
