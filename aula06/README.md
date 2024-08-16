<img src="../assets/img/function.jpg" style="width: 100%; height: auto;" />
<div align="center">
    <h1>✨ Funções (Function) 関数 👾</h1>
    <p> Esse guia é nada mais de anotações sobre as aulas de Javascript da turma TI 24 feita por Matheus Dantas (O tal Dante) para colegas e aprendizados. Ao longo das aulas, terá uma source aberta no GitHub para acesso de códigos, exemplos e etc.  <strong>(¬‿¬)</strong></p>
    <div>
        <img src="https://img.shields.io/static/v1?label=aula&message=6.0&color=5353ec&style=for-the-badge"/>
        <img src="https://img.shields.io/badge/JavaScript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript" />
    </div>
</div>

<div align="center">
    <h2>✨ O que são Funções? 導入</h2>
    <p> Funções são blocos de código reutilizáveis que realizam uma tarefa específica ou calculam um valor. Ela pode receber parâmetros (dados de entrada), processá-los e retornar um valor (saída). São fundamentais no JavaScript, permitindo que você organize e modularize seu código.
    </p>    
</div>

### Exemplo de função:

```js
function saudacao() {
    console.log("Olá, bem-vindo!");
}
```
<div align="center">
    <h2>✨ Como Usar Funções? 導入</h2>
    <p> Vamos aprofundar o tópico das funções, focando nas diferentes formas de declarar uma função em JavaScript, e em quais situações cada tipo de declaração é mais apropriado.
    </p>  
</div>

## 1. Função Declarada (Function Declaration):
```js
function nomeDaFuncao(parametro1, parametro2) {
    // Bloco de código
    return resultado; // opcional
}
```

### Chamando uma função:
> Para usar (ou "chamar") a função, basta escrever o nome dela seguido dos parênteses, passando os argumentos necessários.
```js
nomeDaFuncao(argumento1, argumento2);
```

## Exemplo:
```js
function somar(a, b) {
    return a + b;
}

let resultado = somar(2, 3); // resultado será 5
}
```

### Características:
- **Elevação (Hoisting):** Funções declaradas são "elevadas" ao topo do escopo pelo interpretador JavaScript, o que significa que você pode chamar a função antes mesmo de declará-la no código.
- **Legibilidade:** Como essas funções têm um nome, isso melhora a legibilidade do código, pois o nome da função muitas vezes descreve o que ela faz.

### Quando Usar:
> Use funções declaradas quando precisar que a função esteja disponível em todo o escopo, mesmo antes de sua declaração no código. Isso é útil em scripts mais longos ou em casos onde a ordem de execução pode variar.


## 2. Função Expressa (Function Expression)

```js
const nomeDaFuncao = function(parametro1, parametro2) {
    // Bloco de código
    return resultado; // opcional
};
```
## Exemplo:
```js
const multiplicar = function(x, y) {
    return x * y;
};

let resultado = multiplicar(4, 5); // resultado será 20
```

### Características:
- **Sem Elevação:** Diferente das funções declaradas, as funções expressas não são elevadas. Elas só podem ser chamadas após serem definidas no código.
- **Flexibilidade:** Podem ser anônimas, ou seja, não precisam ter um nome. Isso é útil quando você não precisa reutilizar a função em outros lugares.

### Quando Usar:
> Use funções expressas quando quiser que a função seja usada apenas em um contexto específico e não precise ser acessada antes de sua definição. Isso é comum em funções passadas como argumentos para outras funções ou usadas dentro de blocos específicos de código.


## 3. Funções de Seta (Arrow Functions)

```js
const nomeDaFuncao = (parametro1, parametro2) => {
    // Bloco de código
    return resultado; // opcional
};
```
## Exemplo:
```js
const dividir = (x, y) => x / y;

let resultado = dividir(10, 2); // resultado será 5
```

### Características:
- **Sintaxe Concisa:** Arrow functions têm uma sintaxe mais curta, especialmente útil para funções simples.
- **Contexto de this:** Ao contrário das funções declaradas e expressas, as arrow functions não têm seu próprio this. Elas herdam o this do escopo onde foram definidas, o que pode ser vantajoso em certos casos, como em callbacks.
- **Sem Elevação:** Como as funções expressas, as arrow functions não são elevadas.

### Quando Usar:
> Use arrow functions quando precisar de uma função curta e simples, ou quando estiver lidando com contextos onde o comportamento de this precisa ser preservado de uma função de escopo superior. Elas são muito populares em funções de callback, como em métodos de array (`map`, `filter`, `reduce`).

## Resumo
- **Function Declaration:** Útil para funções que precisam estar disponíveis em todo o escopo, com suporte ao hoisting.
- **Function Expression:** Ideal para funções que precisam ser usadas em contextos específicos, sem necessidade de hoisting.
- **Arrow Function:** Melhor para funções curtas e situações onde o this precisa ser herdado do contexto superior, com uma sintaxe mais concisa.
Essas diferentes formas de declarar funções oferecem flexibilidade ao programador para escolher a melhor abordagem de acordo com o contexto e os requisitos do código.

<h2 align="center">✨ Por que usar funções? 導入</h2>

- **Reutilização de código:** Funções permitem que você escreva um bloco de código uma vez e o reutilize quantas vezes for necessário, evitando a duplicação de código.
- **Modularidade:** Elas ajudam a dividir um programa em partes menores, facilitando a organização e a leitura do código.
- **Manutenção:** Quando o código está organizado em funções, é mais fácil localizar e corrigir erros ou implementar melhorias.
- **Abstração:** Funções permitem que você trabalhe em um nível mais alto de abstração, focando no que o código faz, em vez de como ele faz.

> Esses conceitos são essenciais para qualquer desenvolvedor e são aplicáveis em praticamente todas as linguagens de programação, não apenas em JavaScript.
---


<div align="center">
    <h2>💻 Veja mais</h2>
    <div style="display: flex; justify-content: center; align-items: flex-end;">
    <div style="text-align: center; margin-right: 10px;">
        <a href="../README.md">
            <img src="https://img.shields.io/static/v1?label=VOLTAR&message=Clique&color=f0db4f&style=for-the-badge"/>
        </a>
        <a href="../aula01/README.md">
            <img src="https://img.shields.io/static/v1?label=Variaveis e Consoles&message=Clique&color=f0db4f&style=for-the-badge"/>
        </a>
        <a href="../aula02/README.md">
            <img src="https://img.shields.io/static/v1?label=Operadores e Expressoes&&message=Clique&color=f0db4f&style=for-the-badge"/>
        </a>
        <a href="../aula04/README.md">
            <img src="https://img.shields.io/static/v1?label=If...Else&message=Clique&color=f0db4f&style=for-the-badge"/>
        </a>
    </div>
</div>

<section align="center">
    <p>😀 Se você tiver sugestões, feedback ou quiser colaborar em algum projeto, ficarei feliz em ouvir de você! 😁</p>
    <h3>💻 Contato 接触</h3>
    <p>
        <a href="mailto:dantasmatheus001@gmail.com">
            <img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
        </a>
        <a href="https://www.instagram.com/downzin_" rel="nofollow">
            <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram" />
        </a>
        <a href="https://x.com/DownloaderChan1" rel="nofollow">
            <img src="https://img.shields.io/badge/X-%23000000.svg?style=for-the-badge&logo=X&logoColor=white" alt="X" />
        </a>
        <a href="https://discord.com/users/576935681167982595">
            <img src="https://img.shields.io/badge/Discord-%235865F2.svg?style=for-the-badge&logo=discord&logoColor=white" alt="Discord" />
        </a>
    </p>
</section>