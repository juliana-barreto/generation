const input = require("readline-sync");

const name = input.question("Nome do doador: ");
const age = input.questionInt("Idade do doador: ");
let answer = input.question("Primeira doação? (s/n): ");

if (answer.toLowerCase() === 's') {
  answer = true;
} else {
  answer = false;
}

if (age >= 18 && age <= 59) {
  console.log(`${name} está apto a doar sangue.`);
} else if (age >= 60 && age <= 69 && answer == false) {
  console.log(`${name} está apto a doar sangue.`);
} else {
  console.log(`${name} não está apto a doar sangue.`);
}