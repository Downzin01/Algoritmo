// Exibindo um array simples  =======================================================
console.log('\n==[ Exibindo um array simples:'); // titulo só pra ficar bonitinho

const frutas = ['Maçã', 'Banana', 'Laranja'];
console.table(frutas);

// Exibindo um objeto ===============================================================
console.log('\n==[ Exibindo um objeto:'); // titulo só pra ficar bonitinho

const pessoa = { nome: 'Dante', idade: 20, cidade: 'Sumaré' };
console.table(pessoa);

// Exibindo um array de objetos: ====================================================
console.log('\n==[ Exibindo um array de objetos:'); // titulo só pra ficar bonitinho

const clientes = [
    { nome: 'Dante devil may cry', idade: 20, cidade: 'Sumaré' },
    { nome: 'Pedro', idade: 32, cidade: 'Belo Horizonte' },
    { nome: 'Maria', idade: 40, cidade: 'Salvador' },
];

console.table(clientes);

// Especificando as colunas da tabela: ==============================================
console.log('\n==[ Especificando as colunas da tabela:'); // titulo só pra ficar bonitinho

const dados = [
    { nome: 'Produto A', preço: 12.5 },
    { nome: 'Produto B', preço: 23.99 },
    { nome: 'Produto C', preço: 18.75 },
];

const colunas = ['nome', 'preço']; // Definindo as colunas a serem exibidas

console.table(dados, colunas);
