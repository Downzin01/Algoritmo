<img src="../assets/img/if-else.jpg" style="width: 100%; height: auto;" />
<div align="center">
    <h1>✨ Condições 条件 👾</h1>
    <p> Esse guia é nada mais de anotações sobre as aulas de Javascript da turma TI 24 feita por Matheus Dantas (O tal Dante) para colegas e aprendizados. Ao longo das aulas, terá uma source aberta no GitHub para acesso de códigos, exemplos e etc.  <strong>(¬‿¬)</strong></p>
    <div>
        <img src="https://img.shields.io/static/v1?label=aula&message=4.0&color=5353ec&style=for-the-badge"/>
        <img src="https://img.shields.io/badge/JavaScript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript" />
    </div>
</div>

<section align="center">
    <h2>✨ Introdução 導入</h2>
    <p> As estruturas de controle são fundamentais para a lógica de programação, permitindo que o código tome decisões e execute diferentes blocos de código com base em determinadas condições. Em JavaScript, as estruturas if-else e switch são amplamente utilizadas para esse propósito.
    </p>    
</section>

<div align="center">
    <h2>💻 if-else</h2>
    <p>A estrutura if-else permite executar um bloco de código se uma condição especificada for verdadeira. Você também pode adicionar um bloco else para executar um código alternativo se a condição for falsa.</p>
</div>
 
```js
    if (condicao) {
    // Bloco de código a ser executado se a condição for verdadeira
    } else {
    // Bloco de código a ser executado se a condição for falsa
    }
```
## Exemplo:   
```js
    let idade = 18;

    if (idade >= 18) {
        console.log("Você é maior de idade.");

    } else {
        console.log("Você é menor de idade.");

    }
```

<div align="center">
    <h2>💻 if-else if-else</h2>
    <p>Você pode usar else if para verificar múltiplas condições.</p>
</div>

```js
    if (condicao1) {
    // Bloco de código a ser executado se a condição1 for verdadeira
    } else if (condicao2) {
    // Bloco de código a ser executado se a condição2 for verdadeira
    } else {
    // Bloco de código a ser executado se nenhuma das condições anteriores for verdadeira
    }
```

## Exemplo:   
```js
    let nota = 85;

    if (nota >= 90) {
        console.log("A");

    } else if (nota >= 80) {
        console.log("B");

    } else if (nota >= 70) {
        console.log("C");

    } else if (nota >= 60) {
        console.log("D");

    } else {
        console.log("F");
    }
```
<div align="center">
    <h2>💻 switch</h2>
    <p>A estrutura switch é usada para executar um bloco de código dentre várias opções com base no valor de uma expressão. É uma alternativa mais organizada ao if-else quando você precisa verificar muitas condições.</p>
</div>


```js
    switch (expressao) {
        case valor1:
            // Bloco de código a ser executado se a expressão for igual a valor1
            break;
        case valor2:
            // Bloco de código a ser executado se a expressão for igual a valor2
            break;
        // Mais casos conforme necessário
        default:
            // Bloco de código a ser executado se a expressão não corresponder a nenhum dos valores acima
    }
```

```js
    let diaDaSemana = 3;
    let dia;

    switch (diaDaSemana) {
        case 1:
            dia = "Domingo";
            break;
        case 2:
            dia = "Segunda-feira";
            break;
        case 3:
            dia = "Terça-feira";
            break;
        case 4:
            dia = "Quarta-feira";
            break;
        case 5:
            dia = "Quinta-feira";
            break;
        case 6:
            dia = "Sexta-feira";
            break;
        case 7:
            dia = "Sábado";
            break;
        default:
            dia = "Dia inválido";
}

console.log(dia);
```

<div align="center">
    <h2>💻 Considerações Finais 最終的な考慮事項</h2>
    <p>Use if-else quando você tiver poucas condições para verificar ou quando as condições não forem baseadas em um único valor.
    Use switch quando precisar verificar muitas condições baseadas no valor de uma única expressão, especialmente se houver muitos casos possíveis.</p>
</div>


## Exemplos Adicionais
> if-else com Operador Ternário
O operador ternário é uma forma concisa de escrever uma condição if-else.


```js
    let idade = 20;
    let status = (idade >= 18) ? "maior de idade" : "menor de idade";
    console.log(status);
```

> switch com Múltiplos Casos
Você pode agrupar múltiplos casos que compartilham o mesmo código.

```js 
    let cor = "vermelho";

    switch (cor) {
        case "vermelho":
        case "azul":
        case "verde":
            console.log("Você escolheu uma cor primária.");
            break;
        default:
            console.log("Você escolheu uma cor secundária ou inválida.");
    }
```
---
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