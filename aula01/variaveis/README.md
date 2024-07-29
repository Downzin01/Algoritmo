<img src="../../assets/img/variables.jpg" style="width: 100%; height: auto;" />
<div align="center">
    <h1>✨ Variáveis 変数 👾</h1>
    <p> Esse guia é nada mais de anotações sobre as aulas de Javascript da turma TI 24 feita por Matheus Dantas (O tal Dante) para colegas e aprendizados. Ao longo das aulas, terá uma source aberta no GitHub para acesso de códigos, exemplos e etc.  <strong>(¬‿¬)</strong></p>
    <div>
        <img src="https://img.shields.io/static/v1?label=aula&message=1.2&color=5353ec&style=for-the-badge"/>
        <img src="https://img.shields.io/badge/JavaScript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript" />
    </div>
</div>

<section align="center">
    <h2>✨ Introdução 導入</h2>
    <p> Em JavaScript, as variáveis são como containers que armazenam valores, permitindo que você os utilize em diferentes partes do seu código. Elas são essenciais para organizar e manipular dados de forma eficiente.
    </p>    
</section>

###

<h2 align="center" >💻 Declaração de variáveis</h2>
<p>A declaração de uma variável envolve a criação de um nome para o container e a definição do tipo de valor que ele irá armazenar. A sintaxe básica para declarar uma variável em JavaScript é:</p>

```js
    tipo nome_da_variavel = valor_inicial;
```
## Exemplo:  

```js
let numero = 10; // Declara uma variável 'numero' do tipo 'number' e atribui o valor inicial 10.
const texto = "Olá, mundo!"; // Declara uma constante 'texto' do tipo 'string' e atribui o valor "Olá, mundo!".
var verdade = true; //Declara uma variável 'verdade' do tipo 'Boolean' e atribui o valor "true"
```
<h2 align="center" >💻 Declaração de variáveis</h2>

- `number`: Armazena números inteiros e decimais (ex: 10, 3.14).
  - 3.14 (Números decimais) - Tipo `Float` ou `Double` 
  - 10 (Número Inteiro) - `Tipo Int`
- `string`: Armazena textos entre aspas (ex: "Oi", "JavaScript").
- `boolean`: Armazena valores lógicos (ex: true, false).
- `undefined`: Indica que a variável não possui valor definido.
- `null`: Indica que a variável foi intencionalmente definida como vazia.

```js
// Variável do tipo string
var nome = "Dante";

// Variável do tipo number
var idade = 20; // Tipo Int
var altura = 1.65; //Tipo Float ou Double

// Variável do tipo boolean
var humano = true;

// Variável do tipo array
var hobbies = ["Programação", "Edição", "Pamonha"];

// Variável do tipo object
var endereco = {
    cidade: "Sumaré",
    estado: "SP",
    pais: "Brasil"
};

// Variável do tipo null
var carro = null;

// Variável do tipo undefined
var emprego;


// Log de todas as variáveis
console.log("Nome: " + nome);
console.log("Idade: " + idade);
console.log("Altura: " + altura);
console.log("Humano: " + humano);
console.log("Hobbies: " + hobbies);
console.log("Endereço: " + JSON.stringify(endereco));
console.log("Carro: " + carro);
console.log("Emprego: " + emprego);
```
<h2 align="center" >💻 Escopos de variável</h2>

- **Bloco:** Variáveis declaradas com `let` ou `const` dentro de blocos (`{}`) só são acessíveis dentro daquele bloco.
- **Função:** Variáveis declaradas com `var` ou `let`/`const` dentro de funções só são acessíveis dentro daquela função.
- **Global:** Variáveis declaradas sem `let`/`const`/`var` (antiga forma) ou fora de blocos e funções são acessíveis em todo o programa.

### Lembre-se:
- Utilize variáveis para organizar e manipular dados de forma eficiente em seu código.
- Escolha o tipo de variável correto de acordo com o tipo de valor que precisa armazenar.
- Utilize as palavras-chave `let`, `const` e `var` de forma adequada para controlar o escopo das suas variáveis.
- Evite usar variáveis globais desnecessariamente, pois podem dificultar a leitura e a manutenção do código.

---

<div align="center">
    <h2>💻 Veja mais</h2>
    <div style="display: flex; justify-content: center; align-items: flex-end;">
    <div style="text-align: center; margin-right: 10px;">
        <a href="../consoles/README.md">
            <img src="https://img.shields.io/static/v1?label=Consoles&message=Clique&color=f0db4f&style=for-the-badge"/>
        </a>
        <a href="#">
            <img src="https://img.shields.io/static/v1?label=Concatenação&message=Clique&color=f0db4f&style=for-the-badge"/>
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