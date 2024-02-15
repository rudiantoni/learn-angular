# learn-angular

Este repositório contém conteúdos teóricos e projetos referentes a minha aprendizagem pessoal sobre o framework Angular.

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


## Curso 2

Este curso foi feito com base no conteúdo disponibilizado pelo curso Custo de Angular 2 (v17+) Typescript do Básico ao Avançado, disponibilizado através do site Udemy, criado por Dener Troquatte.

Todos os comandos, quando não especificados, foram realizados em Linux. Leia atentamente o que as instruções indicam para que você possa realizá-la em outro sistema operacional.

- Site: [Udemy](https://www.udemy.com/)
- Curso: [Curso de Angular 2 (v17+) Typescript do Básico ao Avançado](https://www.udemy.com/course/curso-de-angular/)
- Criador(es)
  - [Dener Troquatte](https://www.udemy.com/user/dener-troquatte-3/)

### Conteúdo

1. Instruções para o curso
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41072048)\] 1.1. Não pule essa aula

2. Iniciando com Angular
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41056556)\] 2.1. O que é e para que serve o Angular
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41056568)\] 2.2. Conhecendo a Documentação
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41056534)\] 2.3. Importante
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41056574)\] 2.4. Versionamento

3. Instalação do Angular
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41056580)\] 3.1. Recursos da próxima aula
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41056620)\] [3.2. Instalando os recursos](arquivomd)
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41056628)\] 3.3. Angular CLI
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41056638)\] [3.4. CLI](arquiovmd)
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41056642)\] 3.5. Arquitetura
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41056648)\] 3.6. Build
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41057646)\] 3.7. Mais sobre

4. Componentes
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41056658)\] 4.1. Introdução
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41056660)\] [4.2. Entendendo o componente](arquivomd)
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41056662)\] [4.3. Criando um componente](arquivomd)
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41056668)\] 4.4. Final
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41057808)\] 4.5. Mais sobre

5. Estilos CSS
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41056674)\] 5.1. Introdução
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41056680)\] [5.2. Seletores especiais](arquivomd)
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41057850)\] 5.3. Mais sobre

6. Template
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41056686)\] 6.1. Introdução
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41056688)\] [6.2. Text interpolation](arquivomd)
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41056692)\] 6.3. Property binding
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41056698)\] 6.4. Attribute binding
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41056706)\] 6.5. Class and style binding
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41056710)\] 6.6. Event binding
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41056714)\] 6.7. Two-way binding
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41056720)\] 6.8. NgClass e NgStyle
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41056726)\] 6.9. Template variables
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41057892)\] 6.10. Mais sobre

x. nome_secao
  - \[[Ref](link)\] [x.x. nome_aula](arquivomd)
  - \[[Ref](link)\] x.x. nome_aula

TODO: atualizar arquivos MD