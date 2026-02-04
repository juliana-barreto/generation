<div align="center">
    <img src="https://i.imgur.com/r9lrbPG.png" title="Generation Brasil Logo" width="30%"/>
</div>

<br />

<div align="center">
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" />
    <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" />
    <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white" />
    <br />
    <img src="https://img.shields.io/github/last-commit/juliana-barreto/generation?style=flat-square&color=orange" />
    <img src="https://img.shields.io/github/languages/count/juliana-barreto/generation?style=flat-square&color=blue" />
    <img src="https://img.shields.io/github/repo-size/juliana-barreto/generation?style=flat-square&color=green" />
</div>

---

## Visão Geral

Este repositório consolida a trajetória prática desenvolvida durante o módulo de fundamentos de programação do Bootcamp Full Stack da [Generation Brasil](https://brazil.generation.org/).

O projeto foi arquitetado para demonstrar a evolução do raciocínio lógico e técnico. A estrutura documenta os conceitos iniciais de algoritmo e sintaxe abordados com **JavaScript**, bem como a introdução às estruturas de dados fundamentais com **TypeScript**. A partir do estudo de funções e tipagem avançada, o desenvolvimento prático migra para um projeto dedicado, simulando um ambiente real de aplicação bancária.

## Módulos de Aprendizado

O conteúdo programático foi dividido em etapas que cobrem desde a execução do primeiro script até a manipulação de estruturas de dados tipadas.

### Fundamentos com JavaScript

Nesta primeira etapa, o foco é a fixação da sintaxe da linguagem e o desenvolvimento do raciocínio algorítmico. Os exercícios cobrem situações cotidianas para facilitar a compreensão da lógica de programação pura.

| Aula | Tema | Descrição Técnica |
| :--- | :--- | :--- |
| **01** | Introdução e Setup | Configuração do ambiente Node.js, execução de scripts e saída de dados no console. |
| **02** | Variáveis e Operadores | Manipulação de tipos primitivos, entrada de dados e uso de operadores aritméticos e relacionais. |
| **03** | Controle de Fluxo | Implementação de tomadas de decisão com [if...else](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else) e [switch](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/switch). |
| **04** | Laços de Repetição | Automação de tarefas repetitivas utilizando estruturas como [for](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for) e [while](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/while). |
| **05** | Arrays e Matrizes | Armazenamento e manipulação de dados em estruturas indexadas unidimensionais e bidimensionais. |

### Introdução ao TypeScript

A segunda etapa introduz o superset TypeScript para aplicar rigor técnico ao código. Aqui são exploradas coleções específicas e estruturas de dados lineares antes da migração para o projeto final.

| Aula | Tema | Descrição Técnica |
| :--- | :--- | :--- |
| **01** | Intro e Collections | Transição para tipagem estática e uso de [Set](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Set) para listas de valores únicos. |
| **02** | Estruturas de Dados | Implementação de estruturas lineares clássicas como [Stack](https://www.geeksforgeeks.org/stack-data-structure/) (Pilha) e [Queue](https://www.geeksforgeeks.org/queue-data-structure/) (Fila). |

## Projeto Prático: Conta Bancária

A partir da **Aula 03**, o aprendizado foca na construção de uma aplicação robusta utilizando o paradigma de Orientação a Objetos. Todo o desenvolvimento referente a Funções, Classes, Herança e Polimorfismo foi centralizado em um repositório específico.

Você pode acessar a implementação completa e a documentação técnica destes conceitos no link abaixo:

### [🏦 Acessar Repositório: Conta Bancária](https://github.com/juliana-barreto/conta-bancaria)

O projeto externo aborda os seguintes tópicos avançados:
* **Funções Tipadas:** Declaração de assinaturas de métodos, tipagem de parâmetros e retornos.
* **POO Fundamentos:** Criação de Classes, instanciamento de objetos e encapsulamento.
* **Herança e Polimorfismo:** Extensão de funcionalidades e sobrescrita de métodos.
* **Abstração:** Definição de contratos rígidos utilizando Classes Abstratas e Interfaces.
* **Tratamento de Erros:** Controle de fluxo de exceções.

## Estrutura do Repositório Atual

A organização física deste repositório reflete a ordem cronológica das aulas de fundamentos até a introdução às estruturas de dados.

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
│   └── aula-02-estruturas/   # Queue e Stack
│
└── README.md
