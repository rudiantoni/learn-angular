# Angular basics

- Conteúdo
  - [Criar projeto](#criar-projeto)
  - [Observações de desenvolvimento](#observações-de-desenvolvimento)

## Criar projeto

- Criar um novo projeto com `ng new project-name`
  - Convenção de nomenclatura: kebab-case

## Observações de desenvolvimento

- Padrões de nomenclatura
  - Nomes de projeto: kebab-case
  - Nomes de componente: kebab-case
  - Classes: PascalCase
  - Propriedade selector da anotação @Component: kebab case precedido por app (app-component-name)
- src/styles.css: estilização do componente global
- Para limpar a página inicial, esvazie o arquivo app.component.html.
- Lembrar: todos os comandos devem ser executados na pasta raiz do projeto, que é a pasta pai da src, ou o que for especificado no arquivo angular.json, com a propriedade projects.\[projectName\].root.
