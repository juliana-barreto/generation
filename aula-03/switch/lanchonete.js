const input = require("readline-sync");

const fmt = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
});

console.log("========== Cardápio ==========");
console.log("1 - Cachorro Quente - R$ 10,00");
console.log("2 - X-Salada - R$ 15,00");
console.log("3 - X-Bacon - R$ 18,00");
console.log("4 - Bauru - R$ 12,00");
console.log("5 - Refrigerante - R$ 8,00");
console.log("6 - Suco - R$ 13,00");

const productID = input.questionInt("Código do produto: ");
const quantity = input.questionInt("Quantidade: ");

let total = 0;

switch (productID) {
  case 1:
    total = quantity * 10;
    break;
  case 2:
    total = quantity * 15;
    break;
  case 3:
    total = quantity * 18;
    break;
  case 4:
    total = quantity * 12;
    break;
  case 5:
    total = quantity * 8;
    break;
  case 6:
    total = quantity * 13;
    break;
  default:
    console.log("Produto inválido!");  
    return;
}

console.log("Total: ", fmt.format(total));
