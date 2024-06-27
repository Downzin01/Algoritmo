// Declaração de variáveis =====================================================================
// tipo nome_da_variavel = valor_inicial;

var nome = 'Dante';
var cidade = 'Sumaré';
var idade = 30;
var tamanho = 1.65;
var humano = true;

console.log('\n======[ Declaração de variáveis ]======'); // só para deixar bonitinho no terminal
console.log('Nome: ' + nome);
console.log('Cidade: ' + cidade);
console.log('Idade: ' + idade);
console.log('Tamanho: ' + tamanho);
console.log('Humano: ' + humano);

// Tipos de variáveis ==========================================================================
console.log('\n======[ Tipos de variáveis ]======'); // só para deixar bonitinho no terminal

// Variável do tipo string
var nome = 'Dante';

// Variável do tipo number
var idade = 20; // Tipo Int
var altura = 1.65; //Tipo Float ou Double

// Variável do tipo boolean
var humano = true;

// Variável do tipo array
var hobbies = ['Programação', 'Edição', 'Pamonha'];

// Variável do tipo object
var endereco = {
    cidade: 'Sumaré',
    estado: 'SP',
    pais: 'Brasil',
};

// Variável do tipo null
var carro = null;

// Variável do tipo undefined
var emprego;

// Log de todas as variáveis
console.log('Nome: ' + nome);
console.log('Idade: ' + idade);
console.log('Altura: ' + altura);
console.log('Humano: ' + humano);
console.log('Hobbies: ' + hobbies);
console.log('Endereço: ' + JSON.stringify(endereco));
console.log('Carro: ' + carro);
console.log('Emprego: ' + emprego);
