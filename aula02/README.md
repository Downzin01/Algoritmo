<img src="../assets/img/operators.jpg" style="width: 100%; height: auto;" />
<div align="center">
    <h1>✨ Operadores em JavaScript オペレーター 👾</h1>
    <p> Esse guia é nada mais de anotações sobre as aulas de Javascript da turma TI 24 feita por Matheus Dantas (O tal Dante) para colegas e aprendizados. Ao longo das aulas, terá uma source aberta no GitHub para acesso de códigos, exemplos e etc.  <strong>(¬‿¬)</strong></p>
    <div>
        <a href="../README.md">
            <img src="https://img.shields.io/static/v1?label=VOLTAR&message=Clique&color=f0db4f&style=for-the-badge"/>
        </a>
        <img src="https://img.shields.io/static/v1?label=aula&message=2.0&color=5353ec&style=for-the-badge"/>
        <img src="https://img.shields.io/badge/JavaScript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript" />
    </div>
</div>

<section align="center">
    <h2>✨ Introdução 導入</h2>
    <p> JavaScript oferece uma ampla variedade de expressões e operadores que permitem realizar diversas operações em variáveis e valores. Esses operadores são essenciais para manipular dados e construir lógica no código. Abaixo, apresento uma visão geral de todos os tipos de expressões e operadores em JavaScript.
    </p>    
</section>

###

<div align="center">

## Operadores Aritméticos
Usados para realizar operações matemáticas básicas.

| Operador | Descrição                             |
|----------|---------------------------------------|
| `+`      | Adição: Soma dois valores             |
| `-`      | Subtração: Subtrai o segundo valor do primeiro |
| `*`      | Multiplicação: Multiplica dois valores|
| `/`      | Divisão: Divide o primeiro valor pelo segundo |
| `%`      | Módulo: Retorna o resto da divisão de dois valores |
| `**`     | Exponenciação: Eleva um valor à potência de outro |
| `++`     | Incremento: Aumenta o valor de uma variável em 1 |
| `--`     | Decremento: Diminui o valor de uma variável em 1 |

## Operadores de Atribuição
Usados para atribuir valores a variáveis.

| Operador | Descrição                                                     |
|----------|---------------------------------------------------------------|
| `=`      | Atribuição Simples: Atribui o valor da direita à variável da esquerda |
| `+=`     | Atribuição com Adição: Soma o valor à direita à variável e atribui o resultado à variável |
| `-=`     | Atribuição com Subtração: Subtrai o valor à direita da variável e atribui o resultado à variável |
| `*=`     | Atribuição com Multiplicação: Multiplica a variável pelo valor à direita e atribui o resultado à variável |
| `/=`     | Atribuição com Divisão: Divide a variável pelo valor à direita e atribui o resultado à variável |
| `%=`     | Atribuição com Módulo: Calcula o módulo da variável pelo valor à direita e atribui o resultado à variável |
| `**=`    | Atribuição com Exponenciação: Eleva a variável à potência do valor à direita e atribui o resultado à variável |

## Operadores de Comparação
Usados para comparar valores e retornam um valor booleano (`true` ou `false`).

| Operador | Descrição                                                  |
|----------|------------------------------------------------------------|
| `==`     | Igualdade: Compara se dois valores são iguais, sem considerar o tipo |
| `===`    | Igualdade Estrita: Compara se dois valores são iguais e do mesmo tipo |
| `!=`     | Desigualdade: Compara se dois valores são diferentes, sem considerar o tipo |
| `!==`    | Desigualdade Estrita: Compara se dois valores são diferentes e de tipos diferentes |
| `>`      | Maior que: Verifica se o valor à esquerda é maior que o valor à direita |
| `>=`     | Maior ou Igual a: Verifica se o valor à esquerda é maior ou igual ao valor à direita |
| `<`      | Menor que: Verifica se o valor à esquerda é menor que o valor à direita |
| `<=`     | Menor ou Igual a: Verifica se o valor à esquerda é menor ou igual ao valor à direita |

## Operadores Lógicos
Usados para operações lógicas em valores booleanos.

| Operador | Descrição                                      |
|----------|------------------------------------------------|
| `&&`     | E Lógico: Retorna `true` se ambos os operandos forem verdadeiros |
| `\|\|`     | OU Lógico: Retorna `true` se pelo menos um dos operandos for verdadeiro |
| `!`      | NÃO Lógico: Inverte o valor booleano do operando |

## Operadores Bit a Bit
Usados para operações de nível de bits.

| Operador | Descrição                                       |
|----------|-------------------------------------------------|
| `&`      | E Bit a Bit: Faz uma operação E a nível de bits |
| `\|`      | OU Bit a Bit: Faz uma operação OU a nível de bits |
| `^`      | XOR Bit a Bit: Faz uma operação OU Exclusivo a nível de bits |
| `~`      | NOT Bit a Bit: Inverte todos os bits do operando |
| `<<`     | Deslocamento à Esquerda: Desloca os bits de um número para a esquerda |
| `>>`     | Deslocamento à Direita: Desloca os bits de um número para a direita |
| `>>>`    | Deslocamento à Direita Não Sinalizado: Desloca os bits de um número para a direita, preenchendo com zeros à esquerda |

## Operadores de String
Usados para realizar operações em strings.

| Operador | Descrição                                           |
|----------|-----------------------------------------------------|
| `+`      | Concatenação: Junta duas strings                    |
| `+=`     | Concatenação com Atribuição: Adiciona uma string ao final de outra string e atribui o resultado à variável |

## Operador Condicional (Ternário)
Um operador condicional que avalia uma expressão e retorna um valor com base na condição.

| Operador | Descrição                                           |
|----------|-----------------------------------------------------|
| `? :`    | Condicional: Avalia uma expressão e retorna um valor se verdadeiro e outro se falso |

```js
    let resultado = (condicao) ? valorSeVerdadeiro : valorSeFalso;
```

## Operadores Unários
Usados para realizar operações em um único operando.

| Operador | Descrição                                    |
|----------|----------------------------------------------|
| `-`      | Negação: Inverte o sinal de um número        |
| `++`     | Incremento: Aumenta o valor da variável em 1 |
| `--`     | Decremento: Diminui o valor da variável em 1 |
| `typeof` | Tipo de: Retorna o tipo de um operando       |
| `delete` | Deleção: Remove uma propriedade de um objeto |

## Operadores Relacionais
Usados para determinar a relação entre dois valores.

| Operador  | Descrição                                          |
|-----------|----------------------------------------------------|
| `in`      | Verifica se uma propriedade existe em um objeto    |
| `instanceof` | Verifica se um objeto é uma instância de uma classe ou construtor específico |

## Operador de Vírgula
Usado para avaliar múltiplas expressões, retornando o valor da última expressão avaliada.

```js
    let a = (1, 2, 3);
    console.log(a); // 3
```

Esses operadores formam a base das operações em JavaScript, permitindo a construção de expressões e lógica complexas de maneira eficiente e legível.

</div>

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
        <a href="../aula04/README.md">
            <img src="https://img.shields.io/static/v1?label=If...Else&message=Clique&color=f0db4f&style=for-the-badge"/>
        </a>        
        <a href="../aula05/README.md">
            <img src="https://img.shields.io/static/v1?label=Loop While&&message=Clique&color=f0db4f&style=for-the-badge"/>
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