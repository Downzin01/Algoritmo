<img src="../assets/img/loops.jpg" style="width: 100%; height: auto;"/>

<h1 align='center'>📒 Loop While ループ 📒</h1>

>  Esse guia é nada mais de anotações sobre as aulas de Javascript da turma TI 24 feita por Matheus Dantas (O tal Dante) para colegas e aprendizados. Ao longo das aulas, terá uma source aberta no GitHub para acesso de códigos, exemplos e etc. `(¬‿¬)`

<div align="center">
    <img src="https://img.shields.io/static/v1?label=aula&message=5.2&color=5353ec&style=for-the-badge"/>
    <img src="https://img.shields.io/badge/JavaScript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript" />
</div>

<h2 align="center">✨ Introdução 導入</h2>
<p>O loop while é uma das estruturas de repetição fundamentais em JavaScript. Ele permite que você execute repetidamente um bloco de código enquanto uma condição especificada for verdadeira. Este tipo de loop é particularmente útil quando não se sabe de antemão quantas vezes o bloco de código precisa ser executado.</p>

## 💻 Funcionamento do While:
- **Avaliação da Condição:** Antes de cada iteração, a condição é avaliada.
  - Se a condição for `true`, o bloco de código é executado.
  - Se a condição for `false`, o loop termina e a execução continua após o bloco `while`.
- **Execução do Bloco de Código:** O bloco de código dentro das chaves `{}` é executado repetidamente enquanto a condição for verdadeira.
```js
    while (condição) {
        // bloco de código a ser executado
    }
```
<h3 align="center">―» Exemplo «―</h3>

```js
    let contador = 0;

    while (contador < 5) {
        console.log("O valor de contador é: " + contador);
        contador++;
    }
```

## 📖 Explicação do exemplo:
- Inicializamos a variável `contador` com o valor 0.
- O loop `while` verifica se `contador` é menor que 5.
- Se a condição for verdadeira, o valor de `contador` é impresso no console e `contador` é incrementado em 1.
- Este processo se repete até que `contador` não seja mais menor que 5.

### 📣 Considerações Importantes
- **Condição Infinita:** Certifique-se de que a condição do loop eventualmente se torne falsa. Caso contrário, você pode criar um loop infinito que pode travar seu programa.
- **Controle de Fluxo:** É possível usar as declarações `break` e `continue` dentro de um loop `while` para controlar o fluxo de execução:
  - `break`: Encerra imediatamente o loop.
  - `continue`: Pula a execução do restante do bloco e vai para a próxima avaliação da condição.

<h3 align="center">―» Exemplo <code>Continue</code> & <code>Break</code> «―</h3>

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

<h2 align="center">💻 Considerações Finais 終わり</h2>

> O loop while é uma ferramenta poderosa e flexível para a repetição de blocos de código em JavaScript. Sua simplicidade e eficiência o tornam ideal para situações em que a quantidade de iterações não é conhecida antecipadamente. No entanto, é crucial garantir que a condição do loop possa se tornar falsa em algum momento para evitar loops infinitos. Com o uso adequado de break e continue, você pode controlar ainda mais a execução do loop para atender às suas necessidades específicas.

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



