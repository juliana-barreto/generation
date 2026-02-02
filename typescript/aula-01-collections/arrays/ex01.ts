import input from 'readline-sync';

const colors: Array<string> = [];

for (let i = 0; i < 5; i++) {
  const color = input.question(`Digite a ${i + 1} cor: `);
  colors.push(color);
}

console.log(`Listar todas as cores: ${colors.join(', ')}`);

console.log(`Cores ordenadas: ${colors.sort().join(', ')}`);