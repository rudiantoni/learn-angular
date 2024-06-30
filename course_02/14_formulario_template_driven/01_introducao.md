# Curso de Angular 2 (v17+) Typescript do Básico ao Avançado

## 14.1. Introdução
[[Home - Curso 2]](../../README.md#curso-2)<br />

- Diretório de arquivos: [01_arquivos](01_arquivos/)
- Projetos
  - [Projeto 1](./01_arquivos/proj_01/) [(iniciado em)](#o-que-é)
- Conteúdo
  - [O que é](#o-que-é)
  - [Alternativas](#alternativas)
  - [Comparação](#comparação)

### O que é
[[Topo]](#)<br />

- Ver projeto: [Projeto 1](./01_arquivos/proj_01/)

Template driven forms (ou formulários orientados e templates) são uma abordagem para criar e gerenciar formulários utilizando diretivas diretamente no template HTML.

São usados em formulários simples ou quando a lógica é mínima.

É uma boa escolha quando se quer aproveitar o poder do Angular em sincronizar automaticamente os dados do formulário com o modelo de dados.

- **Vantagens**
  - Facilidade de uso e menor curva de aprendizado.
  - Código mais conciso no componente TypeScript, pois grande parte da lógica é gerida no template.
  - Ideal para formulários pequenos e médios.
- **Desvantagens**
  - Menor controle sobre a validação e o estado do formulário.
  - Dificuldade em lidar com formulários complexos.
  - Testabilidade reduzida em comparação com outras abordagens.

### Alternativas

Uma alternativa aos template driven forms, são os reactive forms. Eles são usados em formulários complexos, onde é necessário mais controle sobre o fluxo de dados e validações.

- **Vantagens**
  - Maior controle e flexibilidade.
  - Melhor suporte a testes unitários.
  - As validações e o estado do formulário são geridos no componente TypeScript.
- **Desvantagens**
- Curva de aprendizado um pouco mais acentuada.
- Mais código é necessário para configurar o formulário.

### Comparação

Template Driven: Melhor para formulários simples, aproveita o binding automático, mas com menos controle.

Reactive Forms: Ideal para formulários complexos, oferece controle total e é altamente testável, mas requer mais configuração.
