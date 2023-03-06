# learn-angular

Este repositório contém projetos referentes a minha aprendizagem pessoal sobre o framework Angular.

## Curso 1

Este curso tem uma abordagem mais prática. Mas mesmo assim há uma quantidade significativa de teoria.

Todos os projetos foram construídos usando Node v18.12.1 LTS (hydrogen) e Angular CLI 15.2.1.

Há alguns requisitos para executar os projetos:

- Sistema operacional: Linux Ubuntu ou outra distribuição Linux baseada em Debian
  - Você pode tentar executá-lo no Windows com a ajuda do Git Bash, mas eu não posso testar por enquanto.
- Softwares: curl, nvm, npm, node 18+ and angular cli (ng) 15+.
  - Se quiser saber como instalar cada um deles, siga essas instruções:
  - Instalar curl: `sudo apt install curl`
  - Instalar NVM: `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash`
    - Reabra o terminal após essa instalação
  - Instalar npm: `sudo apt install npm`
  - Instalar Node v18.12.1: `nvm install 18.12.1`
  - Instalar Angular CLI: `npm install -g @angular/cli`
  - Referência: [https://angular.io/](https://angular.io/)
- Clone o projeto.
- Certifique-se de estar usando o Node v18.12.1: `nvm use 18.12.1`
- Instale as dependências: `npm install`
- Inicie o servidor: `ng serve`

Todos os projetos desenvolvidos possuem o objetivo único de aprender e praticar. Aqui segue uma lista do conteúdo teórico criado e cada projeto relacionado a ele:

- Conteúdo teórico
  - [Angular básico](./course_01/docs/01_angular_basics.md) [Projeto: angular-first](./course_01/angular-first/)
  - [Componentes](./course_01/docs/02_components.md) [Projeto: angular-first-component](./course_01/angular-first-component/)
  - [](xxx) [Projeto: custom-binding](./course_01/custom-binding/)
