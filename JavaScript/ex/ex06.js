//EXPLORANDO FUNÇOES
function soma(a, b) {
  //nosso codigo da funcao
  return a + b;
}

function subtracao(a, b) {
  //nosso codigo da funcao
  return a - b;
}

function multiplicacao(a, b) {
  //nosso codigo da funcao
  return a * b;
}

function divisao(a, b) {
  //nosso codigo da funcao
  return a / b;
}

//parselfloat para aceitar numeros reais
let n1 = parseFloat(prompt("Insira o primeiro valora a ser calculado"));
let n2 = parseFloat(prompt("Insira o segundo valora a ser calculado"));
let operacao = prompt(
  "Escolha a operação (1 p/ soma, 2 p/ subtracao, 3 p/ multiplicacao ou 4 p/ divisao)"
);

if (operacao === "1") {
  alert(soma(n1, n2));
} else if (operacao === "2") {
  alert(subtracao(n1, n2));
} else if (operacao === "3") {
  alert(multiplicacao(n1, n2));
} else if (operacao === "4") {
  alert(divisao(n1, n2));
} else {
  alert("Operação digita errada! Tente novamente.");
}
