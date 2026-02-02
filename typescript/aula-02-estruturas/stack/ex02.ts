import input from 'readline-sync';
import Stack from './Stack.js';

const books = new Stack();
let option;

do {
  console.log('\n1 - Adicionar livro na pilha');
  console.log('2 - Listar todos os livros');
  console.log('3 - Retirar livro da pilha');
  console.log('0 - Sair');
  option = input.questionInt('Digite uma opção: ');
  switch (option) {
      case 1:
          books.push(input.question('Digite o nome: '));
          console.log('\nPilha:');
          books.printStack();
          console.log('\nLivro adicionado!');
          break;
      case 2:
          console.log('\nLista de livros na pilha:');
          books.printStack();
          break;
      case 3:
          books.pop();
          if (!books.isEmpty()) {
              console.log('\nPilha:');
              books.printStack();
              console.log('\nUm livro foi retirado da pilha!');
          }
          break;
      case 0:
          console.log('\nPrograma Finalizado.');
          break;
    }
} while (option != 0);
