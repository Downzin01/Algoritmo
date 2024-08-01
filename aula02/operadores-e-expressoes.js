// --------------------------------------------------
// Operadores Aritméticos
// --------------------------------------------------
console.log("Operadores Aritméticos:");
let a = 10;
let b = 5;

console.log("Adição:", a + b);          // 15
console.log("Subtração:", a - b);       // 5
console.log("Multiplicação:", a * b);   // 50
console.log("Divisão:", a / b);         // 2
console.log("Módulo:", a % b);          // 0
console.log("Exponenciação:", a ** b);  // 100000

a++; // Incremento
console.log("Incremento:", a); // 11

a--; // Decremento
console.log("Decremento:", a); // 10

// --------------------------------------------------
// Operadores de Atribuição
// --------------------------------------------------
console.log("\nOperadores de Atribuição:");
let c = 20;

c += 10; // Atribuição com Adição
console.log("Atribuição com Adição:", c); // 30

c -= 5;  // Atribuição com Subtração
console.log("Atribuição com Subtração:", c); // 25

c *= 2;  // Atribuição com Multiplicação
console.log("Atribuição com Multiplicação:", c); // 50

c /= 5;  // Atribuição com Divisão
console.log("Atribuição com Divisão:", c); // 10

c %= 3;  // Atribuição com Módulo
console.log("Atribuição com Módulo:", c); // 1

// --------------------------------------------------
// Operadores de Comparação
// --------------------------------------------------
console.log("\nOperadores de Comparação:");
console.log("Igualdade (5 == '5'):", 5 == '5');          // true
console.log("Igualdade Estrita (5 === '5'):", 5 === '5'); // false
console.log("Desigualdade (5 != '5'):", 5 != '5');      // false
console.log("Desigualdade Estrita (5 !== '5'):", 5 !== '5'); // true
console.log("Maior que (10 > 5):", 10 > 5);            // true
console.log("Maior ou Igual a (10 >= 10):", 10 >= 10);  // true
console.log("Menor que (5 < 10):", 5 < 10);            // true
console.log("Menor ou Igual a (5 <= 5):", 5 <= 5);     // true

// --------------------------------------------------
// Operadores Lógicos
// --------------------------------------------------
console.log("\nOperadores Lógicos:");
let x = true;
let y = false;

console.log("E Lógico (x && y):", x && y); // false
console.log("OU Lógico (x || y):", x || y); // true
console.log("NÃO Lógico (!x):", !x);        // false

// --------------------------------------------------
// Operadores Bit a Bit
// --------------------------------------------------
console.log("\nOperadores Bit a Bit:");
let m = 5;  // 0101 em binário
let n = 3;  // 0011 em binário

console.log("E Bit a Bit (m & n):", m & n); // 1 (0001 em binário)
console.log("OU Bit a Bit (m | n):", m | n); // 7 (0111 em binário)
console.log("XOR Bit a Bit (m ^ n):", m ^ n); // 6 (0110 em binário)
console.log("NOT Bit a Bit (~m):", ~m);      // -6 (invertendo bits de 0101)
console.log("Deslocamento à Esquerda (m << 1):", m << 1); // 10 (1010 em binário)
console.log("Deslocamento à Direita (m >> 1):", m >> 1);  // 2 (0010 em binário)
console.log("Deslocamento à Direita Não Sinalizado (m >>> 1):", m >>> 1); // 2

// --------------------------------------------------
// Operadores de String
// --------------------------------------------------
console.log("\nOperadores de String:");
let str1 = "Olá, ";
let str2 = "Mundo!";
let str3 = str1 + str2; // Concatenação
console.log("Concatenação:", str3); // Olá, Mundo!

str1 += "JavaScript "; // Concatenação com Atribuição
console.log("Concatenação com Atribuição:", str1); // Olá, JavaScript

// --------------------------------------------------
// Operador Condicional (Ternário)
// --------------------------------------------------
console.log("\nOperador Condicional (Ternário):");
let idade = 18;
let podeDirigir = (idade >= 18) ? "Sim" : "Não";
console.log("Pode dirigir:", podeDirigir); // Sim

// --------------------------------------------------
// Operadores Unários
// --------------------------------------------------
console.log("\nOperadores Unários:");
let num = 10;
console.log("Negação (-num):", -num); // -10
num++;
console.log("Incremento (num++):", num); // 11
num--;
console.log("Decremento (num--):", num); // 10
console.log("Tipo de (typeof num):", typeof num); // number

// --------------------------------------------------
// Operadores Relacionais
// --------------------------------------------------
console.log("\nOperadores Relacionais:");
let objeto = { nome: "João" };
console.log("'nome' in objeto:", 'nome' in objeto); // true
console.log("objeto instanceof Object:", objeto instanceof Object); // true

// --------------------------------------------------
// Operador de Vírgula
// --------------------------------------------------
console.log("\nOperador de Vírgula:");
let resultado = (1, 2, 3);
console.log("Resultado do operador de vírgula:", resultado); // 3
