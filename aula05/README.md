<img src="../assets/img/loops.jpg" style="width: 100%; height: auto;" />
<div align="center">
    <h1>✨ Loops (While) ループ 👾</h1>
    <p> Esse guia é nada mais de anotações sobre as aulas de Javascript da turma TI 24 feita por Matheus Dantas (O tal Dante) para colegas e aprendizados. Ao longo das aulas, terá uma source aberta no GitHub para acesso de códigos, exemplos e etc.  <strong>(¬‿¬)</strong></p>
    <div>
        <img src="https://img.shields.io/static/v1?label=aula&message=5.0&color=5353ec&style=for-the-badge"/>
        <img src="https://img.shields.io/badge/JavaScript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript" />
    </div>
</div>

<section align="center">
    <h2>✨ Introdução 導入</h2>
    <p> O loop while é uma das estruturas de repetição fundamentais em JavaScript. Ele permite que você execute repetidamente um bloco de código enquanto uma condição especificada for verdadeira. Este tipo de loop é particularmente útil quando não se sabe de antemão quantas vezes o bloco de código precisa ser executado.
    </p>    
</section>

<div>
    <h2>💻 Funcionamento</h2>
    <ul>
        <li><strong>Avaliação da Condição:</strong> Antes de cada iteração, a condição é avaliada.
            <ul>
                <li>Se a condição for true, o bloco de código é executado.</li>
                <li>Se a condição for false, o loop termina e a execução continua após o bloco while.</li>
            </ul>
        </li>
        <li><strong>Execução do Bloco de Código:</strong> O bloco de código dentro das chaves {} é executado repetidamente enquanto a condição for verdadeira.</li>
    </ul>
</div>

```js
    while (condição) {
        // bloco de código a ser executado
    }
```

## Exemplo:   
```js
    let contador = 0;

    while (contador < 5) {
        console.log("O valor de contador é: " + contador);
        contador++;
    }
```
<div>
    <h3>Explicação do exemplo:</h3>
    <ul>
        <li>Inicializamos a variável contador com o valor 0.</li>
        <li>O loop while verifica se contador é menor que 5.</li>
        <li>Se a condição for verdadeira, o valor de contador é impresso no console e contador é incrementado em 1.</li>
        <li>Este processo se repete até que contador não seja mais menor que 5.</li>
    </ul>
    <h3>Considerações Importantes</h3>
    <ul>
        <li><strong>Condição Infinita:</strong> Certifique-se de que a condição do loop eventualmente se torne falsa. Caso contrário, você pode criar um loop infinito que pode travar seu programa.</li>
        <li><strong>Controle de Fluxo:</strong> É possível usar as declarações <code>break</code> e <code>continue</code> dentro de um loop <code>while</code> para controlar o fluxo de execução:
        <ul>
            <li><code>break</code>: Encerra imediatamente o loop.</li>
            <li><code>continue</code>: Pula a execução do restante do bloco e vai para a próxima avaliação da condição.</li>
        </ul>
        </li>
    </ul>
</div>

## Exemplo com break e continue

```js
    let numero = 0;

    while (numero < 10) {
        numero++;
        if (numero === 5) {
            continue; // pula o resto do bloco quando numero é 5
        }
        if (numero === 8) {
            break; // termina o loop quando numero é 8
        }
        console.log(numero);
    }
```

<div align="center">
    <h2>💻 Considerações Finais 最終的な考慮事項</h2>
    <p>O loop while é uma ferramenta poderosa e flexível para a repetição de blocos de código em JavaScript. Sua simplicidade e eficiência o tornam ideal para situações em que a quantidade de iterações não é conhecida antecipadamente. No entanto, é crucial garantir que a condição do loop possa se tornar falsa em algum momento para evitar loops infinitos. Com o uso adequado de break e continue, você pode controlar ainda mais a execução do loop para atender às suas necessidades específicas.</p>
</div>
</section>
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