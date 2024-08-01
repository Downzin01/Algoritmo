<img src="../../assets/img/consoles.jpg" style="width: 100%; height: auto;" />
<div align="center">
    <h1>✨ Var, Let e Const 宣言 👾</h1>
    <p> Esse guia é nada mais de anotações sobre as aulas de Javascript da turma TI 24 feita por Matheus Dantas (O tal Dante) para colegas e aprendizados. Ao longo das aulas, terá uma source aberta no GitHub para acesso de códigos, exemplos e etc.  <strong>(¬‿¬)</strong></p>
    <div>
        <a href="./README.md">
            <img src="https://img.shields.io/static/v1?label=VOLTAR&message=Clique&color=f0db4f&style=for-the-badge"/>
        </a>
        <img src="https://img.shields.io/static/v1?label=aula&message=1.4&color=5353ec&style=for-the-badge"/>
        <img src="https://img.shields.io/badge/JavaScript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript" />
    </div>
</div>

<section align="center">
    <h2>✨ Introdução 導入</h2>
    <p> No JavaScript, <code>var</code>, <code>let</code> e <code>const</code> são palavras-chave usadas para declarar variáveis, cada uma com suas particularidades. var é a forma mais antiga e tem escopo de função ou global, permitindo reatribuição e redeclaração. <code>let</code> e <code>const</code>, introduzidos no ECMAScript 2015 (ES6), trazem melhorias significativas: <code>let</code> tem escopo de bloco e permite reatribuição, enquanto const também tem escopo de bloco, mas é usada para constantes, não permitindo reatribuição. Essas distinções ajudam a escrever um código mais seguro e previsível.</p>    
</section>

###

<h2 align="center" >💻 Declaração com <code>var</code></h2>

```js
    function exemploVar() {
    if (true) {
        var x = 10;
        console.log(x); // 10 - x está acessível aqui
    }
    console.log(x); // 10 - x ainda está acessível aqui devido ao escopo de função
    }

    exemploVar();
```
### Características do `var`:

- Escopo de função: a variável é acessível em toda a função onde foi declarada.
- Permite redeclaração.
- Permite reatribuição.
- `Hoisting`: a declaração da variável é "elevada" ao topo do escopo, mas não a inicialização.

<h2 align="center" >💻 Declaração com <code>let</code></h2>

```js
    function exemploLet() {
    if (true) {
        let y = 20;

        // y está acessível aqui
        console.log(y); //  imprimir 20 
    }

    // Uncaught ReferenceError: y is not defined
    console.log(y);  // y não está acessível fora do bloco
    }

    exemploLet();
```

### Características do `let`:

- Escopo de bloco: a variável é acessível apenas dentro do bloco onde foi declarada.
- Não permite redeclaração no mesmo escopo.
- Permite reatribuição.
- `Hoisting`: a variável é "elevada" ao topo do escopo de bloco, mas não pode ser usada antes da linha de declaração.

<h2 align="center" >💻 Características do <code>const</code></h2>

```js
    function exemploConst() {
    if (true) {
        const z = 30;
        console.log(z); // 30 - z está acessível aqui
    }
    // console.log(z); // Uncaught ReferenceError: z is not defined - z não está acessível fora do bloco
    }

    exemploConst();
```

### Características do `const`:

- Escopo de bloco: a variável é acessível apenas dentro do bloco onde foi declarada.
- Não permite redeclaração.
- Não permite reatribuição.
- `Hoisting`: a variável é "elevada" ao topo do escopo de bloco, mas não pode ser usada antes da linha de declaração.

<h2 align="center" >📚 Resumo das Diferenças</h2>


- ### Escopo:
  - `var`: escopo de função.
  - `let` e `const`: escopo de bloco.
- ### Redeclaração:
  - `var`: permitido.
  - `let` e `const`: não permitido no mesmo escopo.
- ### Reatribuição:
  - `var` e `let`: permitido.
  - `const`: não permitido (`const` antes não podem ser reatribuídas).
- ### Hoisting:
  - `var`: declarado no topo do escopo, inicializado como `undefined`.
  - `let` e `const`: declarados no topo do escopo de bloco, mas não inicializados até a linha de declaração (causando um ReferenceError se acessados antes da declaração).


### Exemplos de Uso com Comentários:
```js
    // Exemplo com var
    var a = 1;
    var a = 2; // Redeclaração permitida
    a = 3; // Reatribuição permitida
    console.log(a); // 3

    // Exemplo com let
    let b = 1;
    // let b = 2; // Uncaught SyntaxError: Identifier 'b' has already been declared - Redeclaração não permitida
    b = 2; // Reatribuição permitida
    console.log(b); // 2

    // Exemplo com const
    const c = 1;
    // const c = 2; // Uncaught SyntaxError: Identifier 'c' has already been declared - Redeclaração não permitida
    // c = 2; // Uncaught TypeError: Assignment to constant variable. - Reatribuição não permitida
    console.log(c); // 1
```

<blockquote> Esses exemplos ilustram claramente como usar <code>var</code>, <code>let</code> e <code>const</code> em diferentes situações e as regras associadas a cada um deles.
</blockquote>


---

<div align="center">
    <h2>💻 Veja mais</h2>
    <div style="display: flex; justify-content: center; align-items: flex-end;">
    <div style="text-align: center; margin-right: 10px;">
        <a href="./README.md">
            <img src="https://img.shields.io/static/v1?label=VOLTAR&message=Clique&color=f0db4f&style=for-the-badge"/>
        </a>
        <a href="../consoles/README.md">
            <img src="https://img.shields.io/static/v1?label=Consoles&message=Clique&color=f0db4f&style=for-the-badge"/>
        </a>
        <a href="./zConcatenacao.md">
            <img src="https://img.shields.io/static/v1?label=Concatenacao&message=Clique&color=f0db4f&style=for-the-badge"/>
        </a>
    </div>
</div>

<section align="center">
    <h2>💻 Contato 接触</h2>
    <p>😀 Se você tiver sugestões, feedback ou quiser colaborar em algum projeto, ficarei feliz em ouvir de você! 😁</p>
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