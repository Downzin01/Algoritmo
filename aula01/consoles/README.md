<img src="../../assets/img/consoles.jpg" style="width: 100%; height: auto;" />
<div align="center">
    <h1>✨ Consoles コンソール 👾</h1>
    <p> Esse guia é nada mais de anotações sobre as aulas de Javascript da turma TI 24 feita por Matheus Dantas (O tal Dante) para colegas e aprendizados. Ao longo das aulas, terá uma source aberta no GitHub para acesso de códigos, exemplos e etc.  <strong>(¬‿¬)</strong></p>
    <div>
        <img src="https://img.shields.io/static/v1?label=aula&message=1.1&color=5353ec&style=for-the-badge"/>
        <img src="https://img.shields.io/badge/JavaScript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript" />
    </div>
</div>

<section align="center">
    <h2>✨ Introdução 導入</h2>
    <p> O console é frequentemente utilizado para depuração e visualização de saídas no desenvolvimento de aplicações JavaScript. A interface de console mais comum é console.log(), mas há várias outras disponíveis.
    </p>    
</section>

###

<h2 align="center" >💻 Funções do Console</h2>

- `console.log()`: Imprime mensagens no console. É útil para exibir valores de variáveis e mensagens de depuração.

```js
    console.log("Olá, mundo!"); // Imprime "Olá mundo!"
    console.log(10);            // Imprime "10"
    console.log(true);          // Imprime "true"
```

<div style="display: flex; justify-content: center; align-items: flex-end;">
  <div style="text-align: center; margin-right: 10px;">
    <img src="../../assets/prints/consoles/consoleLogExemplo.png" alt="Imagem 1">
    <p style="margin: 0;">Terminal no Vscode</p>
  </div>
  <div style="text-align: center;">
    <img src="../../assets/prints/consoles/consoleLogExemploNavegador.png" alt="Imagem 2">
    <p style="margin: 0;">Terminal no navegador</p>
  </div>
</div>

- `console.error()`: Imprime mensagens de erro.

```js
    console.error("Isto é um erro!"); // Imprime "Isto é um erro!"
```
<div style="display: flex; justify-content: center; align-items: flex-end;">
  <div style="text-align: center; margin-right: 10px;">
    <img src="../../assets/prints/consoles/consoleErrorExemplo.png" alt="Imagem 1">
    <p style="margin: 0;">Terminal no Vscode</p>
  </div>
  <div style="text-align: center;">
    <img src="../../assets/prints/consoles/consoleErrorExemploNavegador.png" alt="Imagem 2">
    <p style="margin: 0;">Terminal no navegador</p>
  </div>
</div>

- `console.warn()`: Imprime mensagens de aviso.

```js
    console.warn("Isto é um aviso!");
```
<div style="display: flex; justify-content: center; align-items: flex-end;">
  <div style="text-align: center; margin-right: 10px;">
    <img src="../../assets/prints/consoles/consoleWarnExemplo.png" alt="Imagem 1">
    <p style="margin: 0;">Terminal no Vscode</p>
  </div>
  <div style="text-align: center;">
    <img src="../../assets/prints/consoles/consoleWarnExemploNavegador.png" alt="Imagem 2">
    <p style="margin: 0;">Terminal no navegador</p>
  </div>
</div>

- `console.table()`: Exibe dados em formato de tabela.

```js
    const frutas = ['Maçã', 'Banana', 'Laranja'];

    console.table(frutas);
```
<div style="display: flex; justify-content: center; align-items: flex-end;">
  <div style="text-align: center; margin-right: 10px;">
    <img src="../../assets/prints/consoles/consoleTableExemplo.png" alt="Imagem 1">
    <p style="margin: 0;">Terminal no Vscode</p>
  </div>
  <div style="text-align: center;">
    <img src="../../assets/prints/consoles/consoleTableExemploNavegador.png" alt="Imagem 2">
    <p style="margin: 0;">Terminal no navegador</p>
  </div>
</div>

- `console.time()` e `console.timeEnd()`: Medem o tempo de execução de um bloco de código.

```js
    console.time("timer");
        // Código a ser medido
        console.log('Olá mundo!')

    console.timeEnd("timer");
```
<div style="display: flex; justify-content: center; align-items: flex-end;">
  <div style="text-align: center; margin-right: 10px;">
    <img src="../../assets/prints/consoles/consoleTimeExemplo.png" alt="Imagem 1">
    <p style="margin: 0;">Terminal no Vscode</p>
  </div>
  <div style="text-align: center;">
    <img src="../../assets/prints/consoles/consoleTimeExemploNavegador.png" alt="Imagem 2">
    <p style="margin: 0;">Terminal no navegador</p>
  </div>
</div>

<div align="center">
    <h2>💻 Considerações Finais 最終的な考慮事項</h2>
    <p>Os métodos de console no JavaScript são ferramentas poderosas para depuração e desenvolvimento. Eles oferecem várias formas de exibir informações, desde mensagens simples até tabelas detalhadas e rastreamentos de pilha. Utilizar esses métodos de maneira eficaz pode tornar o processo de desenvolvimento mais eficiente e organizado, ajudando a identificar e corrigir problemas rapidamente.</p>
</div>

---

<div align="center">
    <h2>💻 Veja mais</h2>
    <div style="display: flex; justify-content: center; align-items: flex-end;">
    <div style="text-align: center; margin-right: 10px;">
        <a href="../variaveis/README.md">
            <img src="https://img.shields.io/static/v1?label=Variáveis&message=Clique&color=f0db4f&style=for-the-badge"/>
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