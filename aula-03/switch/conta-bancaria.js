const input = require("readline-sync");

const fmt = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
});

console.log("=== Conta Bancária ===");
console.log("1 - Ver saldo");
console.log("2 - Depositar");
console.log("3 - Sacar");

let saldo = 1000.00; 

const operation = input.questionInt("Escolha a operação (1-3): ");

switch (operation) {
  case 1:
    console.log(`Seu saldo é: ${fmt.format(saldo)}`);
    break;
  case 2:
    const deposit = input.questionFloat("Valor: R$ ");
    if (deposit > 0) {
      saldo += deposit; 
      console.log(`Depósito realizado. Novo saldo: ${fmt.format(saldo)}`);
    } else {
      console.log("Valor de depósito inválido.");
    }
    break;
  case 3:
    const withdraw = input.questionFloat("Valor: R$ ");
    if (withdraw > 0 && withdraw <= saldo) {
      saldo -= withdraw;
      console.log(`Saque realizado. Novo saldo: ${fmt.format(saldo)}`);
    } else if (withdraw > saldo) {
      console.log("Saldo insuficiente para saque.");
    } else {
      console.log("Valor de saque inválido.");
    }
    break;
  default:
    console.log("Operação inválida.");
    return;
}