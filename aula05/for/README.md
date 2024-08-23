<img src="../assets/img/loops.jpg" style="width: 100%; height: auto;"/>

<h1 align='center'>📒 Loop For ループ 📒</h1>

>  Esse guia é nada mais de anotações sobre as aulas de Javascript da turma TI 24 feita por Matheus Dantas (O tal Dante) para colegas e aprendizados. Ao longo das aulas, terá uma source aberta no GitHub para acesso de códigos, exemplos e etc. `(¬‿¬)`

<div align="center">
    <img src="https://img.shields.io/static/v1?label=aula&message=5.0&color=5353ec&style=for-the-badge"/>
    <img src="https://img.shields.io/badge/JavaScript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript" />
</div>

<h2 align="center">✨ Introdução 導入</h2>
<p>O loop <code>for</code> é uma das estruturas de repetição mais utilizadas em JavaScript. Ele permite que você execute repetidamente um bloco de código, um número específico de vezes. Diferente do <code>while</code>, o loop <code>for</code> é ideal para quando se sabe o número de iterações necessárias.</p>

## 💻 Funcionamento do For:
- **Inicialização:** Define uma variável de controle (geralmente um contador).
- **Condição:** Verifica se a condição é verdadeira antes de cada iteração.
  - Se a condição for `true`, o bloco de código é executado.
  - Se a condição for `false`, o loop termina.
- **Incremento/Decremento:** Modifica a variável de controle ao final de cada iteração.
```js
    for (inicialização; condição; incremento) {
        // bloco de código a ser executado
    }
```
<h3 align="center">―» Exemplo «―</h3>

```js
    for (let i = 0; i < 5; i++) {
        console.log("O valor de i é: " + i);
    }
```

## 📖 Explicação do exemplo:
- A variável `i` é inicializada com o valor 0.
- O loop `for` verifica se `i` é menor que 5.
  - Se a condição for verdadeira, o valor de `i` é impresso no console e `i` é incrementado em 1.
- Este processo se repete até que `i` não seja mais menor que 5.

### 📣 Considerações Importantes
- **Controle Flexível:** O loop `for` é altamente flexível e pode ser usado para incrementar, decrementar ou modificar a variável de controle de várias maneiras.
- **Uso de Arrays:** O loop `for` é comumente usado para percorrer arrays, onde a variável de controle serve como índice.

<h3 align="center">―» Exemplo com <code>array</code> «―</h3>

```js
    let numeros = [1, 2, 3, 4, 5];

    for (let i = 0; i < numeros.length; i++) {
        console.log(numeros[i]);
    }
```

<h2 align="center">💻 Considerações Finais 終わり</h2>

> O loop for é uma ferramenta essencial para a execução repetida de blocos de código em JavaScript. Sua estrutura clara e controle explícito o tornam uma escolha natural para iterar sobre sequências, como arrays ou intervalos de números. Com sua flexibilidade, o loop for pode ser ajustado para atender a uma ampla gama de necessidades de iteração.

---

<div align="center">

### ―» 📚 Atividades «―

[![Atividades](https://img.shields.io/static/v1?label=Atividades&message=Clique&color=f0db4f&style=for-the-badge)](./atividades/README.md)

### ―» 💻 Veja mais «―

[![VOLTAR](https://img.shields.io/static/v1?label=VOLTAR&message=Clique&color=f0db4f&style=for-the-badge)](../README.md)
[![Variaveis e Consoles](https://img.shields.io/static/v1?label=Variaveis%20e%20Consoles&message=Clique&color=f0db4f&style=for-the-badge)](../../aula01/README.md)
[![Operadores](https://img.shields.io/static/v1?label=Operadores%20e%20Expressoes&message=Clique&color=f0db4f&style=for-the-badge)](../../aula02/README.md)
[![If...Else](https://img.shields.io/static/v1?label=If...Else&message=Clique&color=f0db4f&style=for-the-badge)](../../aula04/README.md)
[![Funções](https://img.shields.io/static/v1?label=Funções&message=Clique&color=f0db4f&style=for-the-badge)](../../aula06/README.md)

😀 Se você tiver sugestões, feedback ou quiser colaborar em algum projeto, ficarei feliz em ouvir de você! 😁

### ―» ✨ Contato «―

[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:dantasmatheus001@gmail.com)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/downzin_)
[![X](https://img.shields.io/badge/X-%23000000.svg?style=for-the-badge&logo=X&logoColor=white)](https://x.com/DownloaderChan1)
[![Discord](https://img.shields.io/badge/Discord-%235865F2.svg?style=for-the-badge&logo=discord&logoColor=white)](https://discord.com/users/576935681167982595)
</div>



