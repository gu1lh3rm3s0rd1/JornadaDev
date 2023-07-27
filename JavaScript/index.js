//declarando variavel
let nomeDaVariavel = 5;
let frutaVermelha = "morango";

//tipos de dados p/ variaveis
//string
let nome = "Guilherme"; //textos

//integers
let idade = 22; //numeros inteiros

//floats
let notaProva = 8.25; //numeros reais

//boleano (ou é true ou é false) ou a condicao é verdade ou é falsa
let GuilhermeCabeloDeBuneca = false;

//arrays [] - contem diversos valores dentro da variavel
let frutas = ["maça", "banana", "uva", "laranja", "abacaxi"];
//acessar um item especifico dentro de um array
frutas[0];

//objetos {} - propriedades/caracteristicas dos objetos
let copo = {
  cor: "branco",
  material: "porcelana",
  peso: 100,
};
//acessando uma prorpiedade de um objeto
copo.peso;

///////////////////////////////////////////////////////////////////////////////

//crie uma variavel do tipo objeto!!
let carro = {
  modelo: "Fiat Uno Mille",
  ano: 1984,
  foraLinha: true,
  cores: ["branco", "preto", "cinza"],
};

//declarando uma variavel do tipo string
let string = ", Seja bem-vindo(a)!";
let mensagem = "Olá";
let mensagem2 = "Seja bem-vindo(a)!";
let pessoa = "Guilherme";

//concatenar strings
let concatenar = mensagem + mensagem2;
let concatenar2 = pessoa + string;
//outro modo de concatenacao
let concatenar3 = `Olá ${pessoa}, seja bem-vindo(a)!`;

//vizualizar o conteudo de uma variavel
//console.log(concatenar3);

///////////////////////////////////////////////////////////////////////////////

//OPERADORES ARITIMETICOS
//soma
10 + 10;

//subtracao
10 - 5;

//multiplicacao
10 * 5;

//divisao
5 / 10;

let calculo = 10 * 5;
let calculo2 = 10;
let calculo3 = calculo * calculo2;

//console.log(calculo3) //500

////////////////////////////////////////////////////////////////////////////////

//OPERADORES DE COMPARACAO
//comparar se é identico
a === b;

//comparar se nao é identico
a != b;

//maior que
10 > 20;

//menor que
10 < 20;

//maior ou igual
10 >= 10;

//menor ou igual
10 <= 20;

////////////////////////////////////////////////////////////////////////////////

//ESTRUTURA DE REPETIÇÃO
//FOR
for (inicializador; condicao; expressao - final) {
  //executar nosso codigo
}

////////////////////////////////////////////////////////////////////////////////

//FUNÇOES    servem para evitar que programadores reescrevam estruturas de codigo novamente
function name(params) {
  //nosso codigo da funcao
}

////////////////////////////////////////////////////////////////////////////////

//EXPLORANDO O DOM DO NAVEGADOR
//capturando elemento por ID
let titulo = document.getElementById("titulo1");

//capturando por classe
let titulo2 = document.getElementsByClassName("titulo2");

//capturando por tags
let tags = document.getElementsByTagName("h1");

//console.log(titulo)
//console.log(titulo2)

////////////////////////////////////////////////////////////////////////////////

//EVENTOS      sao acoes que ocorrem dentro do navegador
document.getElementById("botao").addEventListener("click", function () {
  //acao do click
});
