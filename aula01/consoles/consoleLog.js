// Registrando mensagens simples: --------------------------------------------------------------------------------
console.log('\n======[ Registrando mensagens simples ]======'); // só para deixar bonitinho no terminal

console.log('Olá, mundo!'); // Exibe a string "Olá, mundo!" no console.
console.log(10); // Exibe o número 10 no console.
console.log(true); // Exibe o valor booleano true no console.

// Registrando múltiplas mensagens: ------------------------------------------------------------------------------
console.log('\n======[ Registrando múltiplas mensagens ]======'); // só para deixar bonitinho no terminal

console.log('Nome:', 'Dante'); // Exibe "Nome: Dante" no console.
console.log('Idade:', 20); // Exibe "Idade: 20" no console.
console.log('Cidade:', 'Sumaré'); // Exibe "Cidade: Sumaré" no console.

// Combinando strings e variáveis: --------------------------------------------------------------------------
console.log('\n======[ Combinando strings e variáveis ]======'); // só para deixar bonitinho no terminal

var nome = 'Dante';
var idade = 20;

console.log('Nome:', nome); // Exibe "Nome: Dante" no console.
console.log('Idade:', idade); // Exibe "Idade: 20" no console.
console.log(`Usuário: ${nome} - Idade: ${idade}`); // Exibe "Usuário: Dante - Idade: 20" no console (concatenação com template string).
console.log('Usuário: ', nome, '- Idade:', idade); // Exibe "Usuário: Dante - Idade: 20" no console (concatenação sem template string).

// Registrando objetos e arrays: (Conteúdo mais avançado) ----------------------------------------------------
console.log('\n======[ Registrando objetos e arrays ]======'); // só para deixar bonitinho no terminal

const pessoa = { nome: 'Dante', idade: 20 };
const frutas = ['Maçã', 'Banana', 'Laranja'];

console.log(pessoa); // Exibe o objeto completo { nome: "Dante", idade: 20 } no console.
console.log(frutas); // Exibe o array completo ["Maçã", "Banana", "Laranja"] no console.
console.log(pessoa.nome); // Exibe apenas a propriedade "nome": "Dante" no console.
console.log(frutas[1]); // Exibe apenas o segundo elemento do array: "Banana" no console.
