//EXPLORANDO ESTRUTRAS DE REPETICAO
let notas = [
  2, 5, 10, 15, 20, 25, 30, 15, 20, 25, 30, 15, 20, 25, 30, 2, 5, 10, 15, 20,
  25, 30, 15, 20, 25, 30, 15, 20, 25, 30,
];
let total = 0;

for (let repeticoes = 0; repeticoes < notas.length; repeticoes++) {
  total = total + notas[repeticoes];
}

console.log(`O total do seu dinheiro é ${total}, 00`);
