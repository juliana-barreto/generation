import input from 'readline-sync';

const numbers = Array.from({ length: 10 }, () =>  Math.round(Math.random() * 100));

const searchNumber = input.questionInt('Digite o número que deseja encontrar: ');

const foundIndex = numbers.indexOf(searchNumber);

if (foundIndex !== -1) {
  console.log(`O número ${searchNumber} está localizado na posição ${foundIndex}.`);
} else {
  console.log(`O número ${searchNumber} não foi encontrado!`);
}