<img src="../../assets/img/consoles.jpg" style="width: 100%; height: auto;" />
<div align="center">
    <h1>✨ Concatenação 変数 👾</h1>
    <p> Esse guia é nada mais de anotações sobre as aulas de Javascript da turma TI 24 feita por Matheus Dantas (O tal Dante) para colegas e aprendizados. Ao longo das aulas, terá uma source aberta no GitHub para acesso de códigos, exemplos e etc.  <strong>(¬‿¬)</strong></p>
    <div>
        <img src="https://img.shields.io/static/v1?label=aula&message=1.2&color=5353ec&style=for-the-badge"/>
        <img src="https://img.shields.io/badge/JavaScript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript" />
    </div>
</div>

<section align="center">
    <h2>✨ Introdução 導入</h2>
    <p> Concatenação de strings é o processo de juntar duas ou mais strings para formar uma única string. Em JavaScript, existem várias maneiras de concatenar strings:
    </p>    
</section>

###

<h2 align="center" >💻 Usando o Operador <code>+</code></h2>
<p>O método mais simples e comum de concatenar strings é usando o operador de adição <code>(+)</code>.</p>

```js
    let string1 = "Olá, ";
    let string2 = "mundo!";
    let resultado = string1 + string2;
    console.log(resultado); // Imprimir "Olá, mundo!"
```
<p>Você também pode concatenar múltiplas strings de uma vez:</p>

```js
    let saudacao = "Olá, ";
    let nome = "Dante";
    let pontoExclamacao = "!";
    let frase = saudacao + nome + pontoExclamacao;
    console.log(frase); // Imprimir "Olá, Dante!"
```

<h2 align="center" >💻 Usando o Operador <code>+=</code></h2>
<p>O operador de adição e atribuição (+=) adiciona uma string a uma variável existente.</p>

```js
    let mensagem = "Olá";
    mensagem += ", ";
    mensagem += "mundo!";
    console.log(mensagem); // Imprimir "Olá, mundo!"
```

<h2 align="center" >💻 Usando o Método <code>concat()</code></h2>
<p>O método <code>concat()</code> é um método de string que pode ser usado para concatenar strings.</p>

```js
    let string1 = "Olá, ";
    let string2 = "mundo!";
    let resultado = string1.concat(string2);
    console.log(resultado); // Imprimir "Olá, mundo!"
```

<p>O método <code>concat()</code> pode receber múltiplos argumentos:</p>

```js
    let saudacao = "Olá, ";
    let nome = "Dante";
    let pontoExclamacao = "!";
    let frase = saudacao.concat(nome, pontoExclamacao);
    console.log(frase); // Imprimir "Olá, Dante!"
```

<h2 align="center" >💻 Usando Template Literals <strong>(Template Strings)</strong></h2>
<p>As Template Literals, introduzidas no ES6, são uma maneira moderna e mais legível de concatenar strings. Usam crases <code>(``)</code> em vez de aspas e permitem a interpolação de variáveis e expressões dentro de placeholders <code>${}</code>.</p>

```js
    let saudacao = "Eu sou";
    let nome = "O Devil May Cry, Baby";
    let frase = `${saudacao}, ${nome}!`;
    console.log(frase); // "Eu sou, O Devil May Cry, Baby!"
```

<p>As Template Literals também suportam expressões mais complexas:</p>

```js
    let a = 5;
    let b = 10;
    console.log(`A soma de ${a} e ${b} é ${a + b}.`); // "A soma de 5 e 10 é 15."
```

<h2 align="center" >💻 Diferenças e Considerações</h2>

- **Legibilidade:** Template Literals são geralmente mais legíveis, especialmente quando você precisa concatenar múltiplas strings ou incluir expressões.
- **Performance:** Em muitos casos, o operador + e += podem ser mais rápidos para concatenar strings devido à sua simplicidade. No entanto, a diferença de performance é geralmente insignificante para a maioria dos casos de uso.
- **Escapando Caracteres:** Em Template Literals, você pode usar quebras de linha diretamente dentro das crases, o que não é possível com strings normais sem caracteres de escape.

### Exemplos Adicionais:
```js
    let texto = "O resultado é: ";
    let numero = 42;
    let resultado = texto + numero;
    console.log(resultado); // "O resultado é: 42"
```

```js
    let mensagem = `Esta é uma mensagem
    em várias linhas.
    Muito útil para textos longos.`;
    console.log(mensagem);
```

```js
    function obterNome() {
    return "Dante";
    }

    let saudacao = `Olá, ${obterNome()}!`;
    console.log(saudacao); // "Olá, Dante!"
```

- A concatenação de strings em JavaScript pode ser feita de várias maneiras, desde o uso do operador + e +=, até métodos como concat() e Template Literals. Cada método tem suas próprias vantagens e pode ser escolhido com base nas necessidades específicas do seu código e na legibilidade desejada. Template Literals são especialmente poderosos e flexíveis, tornando a concatenação de strings complexas mais fácil e intuitiva.


---

<div align="center">
    <h2>💻 Veja mais</h2>
    <div style="display: flex; justify-content: center; align-items: flex-end;">
    <div style="text-align: center; margin-right: 10px;">
        <a href="../consoles/README.md">
            <img src="https://img.shields.io/static/v1?label=Consoles&message=Clique&color=f0db4f&style=for-the-badge"/>
        </a>
        <a href="#">
            <img src="https://img.shields.io/static/v1?label=Concatenacao&message=Clique&color=f0db4f&style=for-the-badge"/>
        </a>
        <a href="#">
            <img src="https://img.shields.io/static/v1?label=var, let e const&message=Clique&color=f0db4f&style=for-the-badge"/>
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