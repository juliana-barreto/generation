const input = require("readline-sync");

const fmt = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
});

console.log("====Tabela de Reajuste Salarial====");
console.log("1 - Gerente - 10%");
console.log("2 - Vendedor - 7%");
console.log("3 - Supervisor - 9%");
console.log("4 - Motorista - 6%");
console.log("5 - Estoquista - 5%");
console.log("6 - Técnico de TI - 8%");

const name = input.question("\nNome do colaborador: ");
const position = input.questionInt("Código do cargo (1-6): ");
let salary = input.questionFloat("Salário atual: R$ ");

switch (position) {
  case 1:
    salary *= 1.10;
    break;
  case 2:
    salary *= 1.07;
    break;
  case 3:
    salary *= 1.09;
    break
  case 4:
    salary *= 1.06;
    break;
  case 5:
    salary *= 1.05;
    break;
  case 6:
    salary *= 1.08;
    break
  default:
    console.log("Código de cargo inválido.");
    return;
}

console.log(`\nColaborador: ${name}`);
console.log(`Cargo: ${position}`);
console.log(`Novo salário: ${fmt.format(salary)}`);