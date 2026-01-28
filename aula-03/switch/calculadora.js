const input = require('readline-sync');

console.log("=== Calculadora ===");
console.log("1 - Soma");
console.log("2 - Subtração");
console.log("3 - Multiplicação");
console.log("4 - Divisão");

const operation = input.questionInt("Escolha a operação (1-4): ");
const num1 = input.questionFloat("Digite o primeiro número: ");
const num2 = input.questionFloat("Digite o segundo número: ");

let result;

switch (operation) {
  case 1:
    result = num1 + num2;
    console.log(`${num1} + ${num2} = ${result}`);
    break;
  case 2:
    result = num1 - num2;
    console.log(`${num1} - ${num2} = ${result}`);
    break;
  case 3:
    result = num1 * num2;
    console.log(`${num1} * ${num2} = ${result}`);
    break;
  case 4:
    if (num2 !== 0) {
      result = num1 / num2;
      console.log(`${num1} / ${num2} = ${result}`);
    } else {
      console.log("Erro: Divisão por zero não é permitida.");
    }
    break;
  default:
    console.log("Operação inválida.");
}