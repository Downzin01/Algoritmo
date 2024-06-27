// Exemplo com var ====================================================================
var a = 1;
var a = 2; // Redeclaração permitida
a = 3; // Reatribuição permitida
console.log('> Resultado do exemplo var:', a); // 3

// Exemplo com let ====================================================================
let b = 1;
// let b = 2; // Uncaught SyntaxError: Identifier 'b' has already been declared - Redeclaração não permitida
b = 2; // Reatribuição permitida
console.log('> Resultado do exemplo let:', b); // 2

// Exemplo com const ===================================================================
const c = 1;
// const c = 2; // Uncaught SyntaxError: Identifier 'c' has already been declared - Redeclaração não permitida
// c = 2; // Uncaught TypeError: Assignment to constant variable. - Reatribuição não permitida
console.log('> Resultado do exemplo const:', c); // 1
