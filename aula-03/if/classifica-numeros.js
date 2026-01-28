const input = require("readline-sync");

const number = input.questionInt("Digite um número: ");

if (number % 2 == 0 && number > 0) {
    console.log(`O número ${number} é par e positivo.`);
} else if (number % 2 == 0 && number < 0) {
    console.log(`O número ${number} é par e negativo.`);
} else if (number % 2 != 0 && number > 0) {
    console.log(`O número ${number} é ímpar e positivo.`);
} else if (number % 2 != 0 && number < 0) {
    console.log(`O número ${number} é ímpar e negativo.`);
} else {
    console.log(`O número é zero.`);
}