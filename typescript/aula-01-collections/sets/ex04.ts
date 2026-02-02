import input from 'readline-sync';

const numbers: Set<number> = new Set<number>();

while (numbers.size < 10) {
  const number = Math.round(Math.random() * 100);
  numbers.add(number);
}

const searchNumber = input.questionInt('Digite o número que deseja encontrar: ');

if (numbers.has(searchNumber)) {
  console.log(`O número ${searchNumber} foi encontrado!`);
} else {
  console.log(`O número ${searchNumber} não foi encontrado!`);
}