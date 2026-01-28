const input = require("readline-sync");

const numA = input.questionInt("Digite o número A: ");
const numB = input.questionInt("Digite o número B: ");
const numC = input.questionInt("Digite o número C: ");

const sumAB = numA + numB;

console.log(`A soma de ${numA} (A) + ${numB} (B) é ${sumAB}.`);

if (sumAB > numC) {
    console.log(`A soma A + B é maior que ${numC} (C).`);
} else if (sumAB < numC) {
    console.log(`A soma A + B é menor que ${numC} (C).`);
} else {
    console.log(`A soma A + B é igual a ${numC} (C).`);
}