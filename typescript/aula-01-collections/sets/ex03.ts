import input from 'readline-sync';

const numbers: Set<number> = new Set<number>();

console.log('Digite 10 números inteiros não repetidos:');
while (numbers.size < 10) {
  const number = input.questionInt(`Número ${numbers.size + 1}: `);
  if (numbers.has(number)) {
    console.log('Número já inserido, por favor insira um número diferente.');
  } else {
    numbers.add(number);
  }
}

console.log('Lista de dados do set:');
for (const number of numbers) {
  console.log(number);
}