//EXPLORANDO OPERADORES DE COMPARACAO/LOGICOS
let nota1 = Number(prompt("Digite sua primeira nota"));
let nota2 = Number(prompt("Digite a sua segunda nota"));

let resultado = (nota1 + nota2) / 2;

//se o resultado da compracao dos valroes for menor ou igual a 5 o aluno esta reprovado
if (resultado >= 5) {
  alert("Você foi aprovado! Parabéns pelo resultado. :)");
} else {
  alert("Você foi reprovado. Está de recuperção... :(");
}
