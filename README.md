<div align="center">
    <img src="https://i.imgur.com/r9lrbPG.png" title="Generation Brasil Logo" width="30%"/>
</div>

<br />

<div align="center">
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" />
    <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" />
    <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white" />
    <br />
    <img src="https://img.shields.io/github/last-commit/SEU_USUARIO/NOME_DO_REPO?style=flat-square&color=orange" />
    <img src="https://img.shields.io/github/languages/count/SEU_USUARIO/NOME_DO_REPO?style=flat-square&color=blue" />
    <img src="https://img.shields.io/github/repo-size/SEU_USUARIO/NOME_DO_REPO?style=flat-square&color=green" />
</div>

---

## Visão Geral

Este repositório consolida a trajetória prática desenvolvida durante o módulo de fundamentos de programação do Bootcamp Full Stack da [Generation Brasil](https://brazil.generation.org/).

O projeto foi arquitetado para demonstrar a evolução do raciocínio lógico e técnico. A estrutura segrega os conceitos iniciais de algoritmo e sintaxe abordados com **JavaScript** das implementações mais robustas focadas em Orientação a Objetos e Estruturas de Dados desenvolvidas com **TypeScript**. Essa divisão reflete a progressão pedagógica que parte do controle de fluxo básico para o desenvolvimento de aplicações escaláveis, tipadas e seguras.

## Módulos de Aprendizado

O conteúdo programático foi dividido em duas grandes etapas que cobrem desde a execução do primeiro script até a aplicação de paradigmas complexos de desenvolvimento backend.

### Fundamentos com JavaScript

Nesta primeira etapa o foco é a fixação da sintaxe da linguagem e o desenvolvimento do raciocínio algorítmico. Os exercícios cobrem situações cotidianas para facilitar a compreensão da lógica de programação pura, sem a complexidade inicial de tipos estáticos.

| Aula | Tema | Descrição Técnica |
| :--- | :--- | :--- |
| **01** | Introdução e Setup | Configuração do ambiente Node.js, execução de scripts e saída de dados no console. |
| **02** | Variáveis e Operadores | Manipulação de tipos primitivos, entrada de dados e uso de operadores aritméticos e relacionais. |
| **03** | Controle de Fluxo | Implementação de tomadas de decisão com [if...else](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else) e [switch](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/switch). |
| **04** | Laços de Repetição | Automação de tarefas repetitivas utilizando estruturas como [for](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for) e [while](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/while). |
| **05** | Arrays e Matrizes | Armazenamento e manipulação de dados em estruturas indexadas unidimensionais e bidimensionais. |

### Arquitetura e Tipagem com TypeScript

A segunda etapa introduz o superset TypeScript para aplicar rigor técnico ao código. Aqui são explorados conceitos de orientação a objetos, contratos de interface e manipulação eficiente de memória com coleções específicas.

| Aula | Tema | Descrição Técnica |
| :--- | :--- | :--- |
| **01** | Intro e Collections | Transição para tipagem estática e uso de [Set](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Set) para listas de valores únicos. |
| **02** | Estruturas de Dados | Implementação de estruturas lineares clássicas como [Stack](https://www.geeksforgeeks.org/stack-data-structure/) (Pilha) e [Queue](https://www.geeksforgeeks.org/queue-data-structure/) (Fila). |
| **03** | Funções Tipadas | Declaração de assinaturas de métodos, tipagem de parâmetros e retornos. |
| **04** | POO: Fundamentos | Criação de [Classes](https://www.typescriptlang.org/docs/handbook/2/classes.html), instanciamento de objetos e encapsulamento. |
| **05** | POO: Herança | Reutilização de código e extensão de funcionalidades através de herança e polimorfismo. |
| **06** | POO: Abstração | Definição de contratos rígidos utilizando Classes Abstratas e [Interfaces](https://www.typescriptlang.org/docs/handbook/2/objects.html). |
| **07** | Tratamento de Erros | Controle de exceções e fluxo de erro com blocos `try`, `catch` e `finally`. |
| **08** | Programação Funcional | Uso de Arrow Functions e métodos de ordem superior para um código mais declarativo. |

## Estrutura do Repositório

A organização física dos diretórios segue a ordem cronológica e temática das aulas ministradas, facilitando a navegação entre os paradigmas da linguagem.

```text
generation/
├── javascript/
│   ├── aula-01-intro/        # Hello World e Variáveis
│   ├── aula-02-operadores/   # Entrada e Saída de Dados
│   ├── aula-03-fluxo/        # Condicionais
│   ├── aula-04-loops/        # Laços de Repetição
│   └── aula-05-arrays/       # Vetores e Matrizes
│
├── typescript/
│   ├── aula-01-collections/  # Arrays Tipados e Set
│   ├── aula-02-estruturas/   # Queue e Stack
│   ├── aula-03-funcoes/      # Funções e Métodos
│   ├── aula-04-poo-basico/   # Classes e Objetos
│   ├── aula-05-poo-heranca/  # Herança e Polimorfismo
│   ├── aula-06-poo-interf/   # Interfaces e Abstração
│   ├── aula-07-erros/        # Try/Catch
│   └── aula-08-arrow/        # Arrow Functions
│
└── README.md
