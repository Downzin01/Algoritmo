// Usando o Operador +  ===============================================================================
let string1 = 'Olá, ';
let string2 = 'mundo!';
let resultado = string1 + string2;
console.log(resultado); // "Olá, mundo!"

let saudacao = 'Olá, ';
let nome = 'Dante';
let pontoExclamacao = '!';
let frase = saudacao + nome + pontoExclamacao;
console.log(frase); // "Olá, Dante!"

// Usando o Operador +=  =============================================================================
let mensagem = 'Olá';
mensagem += ', ';
mensagem += 'mundo!';
console.log(mensagem); // "Olá, mundo!"

// Usando o Método concat() ==========================================================================
let stringConcat1 = 'Olá, ';
let stringConcat2 = 'mundo!';
let resultadosConcat = stringConcat1.concat(stringConcat2);
console.log(resultadosConcat); // "Olá, mundo!"

let saudacaoConcat = 'Olá, ';
let nomeConcat = 'Dante';
let pontoExclamacaoConcat = '!';
let fraseConcat = saudacao.concat(nomeConcat, pontoExclamacaoConcat);
console.log(fraseConcat); // "Olá, Dante!"

// Usando Template Literals (Template Strings) =======================================================
let saudacaoDante = 'Eu sou';
let nomeDante = 'O Devil May Cry, Baby';
let fraseDante = `${saudacaoDante}, ${nomeDante}!`;
console.log(fraseDante); // "Eu sou, O Devil May Cry, Baby!"
