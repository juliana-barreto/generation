import input from 'readline-sync';
import Queue from './Queue.js'

const customers = new Queue<string>();
let option: number;

do {
  console.log('\n1 - Adicionar cliente na fila')
  console.log('2 - Listar todos os clientes')
  console.log('3 - Retirar cliente da fila')
  console.log('0 - Sair')
  option = input.questionInt('Digite uma opção: ')

  switch (option) {
    case 1:
      customers.enqueue(input.question('Digite o nome: '))
      console.log('\nFila:')
      customers.printQueue();
      console.log('\nCliente adicionado!')
      break;
    case 2:
      console.log('\nLista de clientes na fila:')  
      customers.printQueue()
      break;
    case 3:
      customers.dequeue()
      if (!customers.isEmpty()) {
        console.log('\nFila:')
        customers.printQueue()
        console.log('\nO cliente foi chamado!')
      }
      break;
    case 0:
      console.log('\nPrograma Finalizado.')
      break;
  }
} while(option != 0);