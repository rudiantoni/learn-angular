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

### Projetos do curso

- \[[Ref](https://github.com/troquatte/curso-angular-latest)\] [curso-angular-latest](course_02/00_projetos_curso/)
- \[[Ref](https://github.com/troquatte/curso-angular-portfolio)\] [curso-angular-portfolio](course_02/00_projetos_curso/)
- \[[Ref](https://github.com/troquatte/curso-angular-lista-de-tarefas)\] [curso-angular-lista-de-tarefas](course_02/00_projetos_curso/)

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
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41056638)\] [3.4. CLI](arquivomd)
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41056642)\] 3.5. Arquitetura
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41056648)\] 3.6. Build
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41057646)\] [3.7. Mais sobre](arquivomd)

4. Componentes
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41056658)\] 4.1. Introdução
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41056660)\] [4.2. Entendendo o componente](arquivomd)
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41056662)\] [4.3. Criando um componente](arquivomd)
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41056668)\] 4.4. Final
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41057808)\] [4.5. Mais sobre](arquivomd)

5. Estilos CSS
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41056674)\] 5.1. Introdução
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41056680)\] [5.2. Seletores especiais](arquivomd)
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41057850)\] [5.3. Mais sobre](arquivomd)

6. Template
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41056686)\] 6.1. Introdução
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41056688)\] [6.2. Text interpolation](arquivomd)
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41056692)\] [6.3. Property binding](arquivomd)
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41056698)\] [6.4. Attribute binding](arquivomd)
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41056706)\] [6.5. Class and style binding](arquivomd)
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41056710)\] [6.6. Event binding](arquivomd)
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41056714)\] [6.7. Two-way binding](arquivomd)
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41056720)\] [6.8. NgClass e NgStyle](arquivomd)
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41056726)\] [6.9. Template variables](arquivomd)
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41057892)\] [6.10. Mais sobre](arquivomd)

7. Control flow
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41056736)\] [7.1. If](arquivomd)
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41056742)\] [7.2. For](arquivomd)
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41056748)\] [7.3. For e seus valores](arquivomd)
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41056752)\] [7.4. For e Empty](arquivomd)
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41056758)\] [7.5. Switch](arquivomd)
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41057922)\] [7.6. Mais sobre](arquivomd)

8. Deferrable views
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41056874)\] [8.1. Introdução](arquivomd)
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41056878)\] [8.2. Defer: on](arquivomd)
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41056880)\] [8.3. Defer: when](arquivomd)
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41056888)\] [8.4. Placeholder](arquivomd)
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41056894)\] [8.5. Loading](arquivomd)
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41056902)\] 8.6. Error
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41057922)\] [8.7. Mais sobre](arquivomd)

9. Signals
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41056914#)\] 9.1. Introdução
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41056926#)\] [9.2. Usando o Signal](arquivomd)
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41056930#)\] [9.3. Usando o Effect](arquivomd)
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41057938#)\] [9.4. Mais sobre](arquivomd)

10. Projeto Prático: Portfólio
  - [10.1 a 10.19 - Configuração e desenvolvimento do projeto: Portfolio](arquivomd)
    - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41277222)\] 10.1. Introdução
    - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41277314)\] 10.2. Recursos
    - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41277224)\] 10.3. Passos iniciais do projeto
    - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41277226)\] 10.4. HTML - Componente Header
    - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41277228)\] 10.5. HTML - Componente Knowledge
    - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41277230)\] 10.6. HTML - Componente Experiences
    - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41277238)\] 10.7. HTML - Componente Projects
    - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41277240)\] 10.8. Configurando SMECSS com SCSS
    - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41277244)\] 10.9. Criando a classe CSS container
    - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41277248)\] 10.10. CSS - Componente Header
    - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41277252)\] 10.11. CSS - Componente Header e Button
    - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41277254)\] 10.12. CSS - Componente Knowledge
    - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41277256)\] 10.13. CSS - Componente Experiences
    - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41277260)\] 10.14. CSS - Componente Projects
    - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41277272)\] 10.15. Dialog - Componente Projects
    - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41277278)\] 10.16. HTML e TS - Componente Dialog
    - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41277284)\] 10.17. CSS - Componente Dialog
    - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41277290)\] 10.18. Final
    - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41277376)\] 10.19. Maximizando seu impacto online com um portfólio

11. Comunicação entre componentes
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41056942)\] 11.1. Introdução
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41056948)\] [11.2. Input](arquivomd)
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41056950)\] [11.3. Output](arquivomd)

12. Pipes
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41056970)\] [12.1. Pipes 1](arquivomd)
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41056974)\] [12.2. Pipes 2](arquivomd)
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41056978)\] [12.3. Pipes com Locale Global](arquivomd)
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41056984)\] [12.4. Pipes personalizados](arquivomd)
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41057946)\] [12.5. Mais sobre](arquivomd)

13. Projeto Prático: Lista de tarefas
  - [13.1 a 13.21 - Configuração e desenvolvimento do projeto: Lista de tarefas](arquivomd)
    - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41835278)\] 13.1. Introdução
    - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41835286)\] 13.2. Passos iniciais do projeto
    - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41835428)\] 13.3. Recursos
    - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41835298)\] 13.4. Configurando reset scss
    - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41835300)\] 13.5. HTML - Componente PageList
    - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41835304)\] 13.6. CSS - Container e Buttons
    - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41835306)\] 13.7. CSS - Input label text
    - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41835318)\] 13.8. CSS - Componente PageList
    - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41835322)\] 13.9. TS - Componente PageList
    - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41835330)\] 13.10. Novo componente - Input add item
    - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41835332)\] 13.11. Persistindo dados no localstorage
    - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41835338)\] 13.12. Transitando dados entre componentes
    - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41835346)\] 13.13. CSS - Input label text
    - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41835356)\] 13.14. CSS - Componente PageList
    - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41835362)\] 13.15. Criando e editando um novo componente input list item
    - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41835364)\] 13.16. Filtrando os dados
    - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41835366)\] 13.17. Update checked
    - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41835370)\] 13.18. Update value
    - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41835372)\] 13.19. Delete Item
    - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41835376)\] 13.20. Melhorias no código
    - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41835382)\] 13.21. Sweet Alert 2

14. Template driven forms
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41056998)\] [14.1. Introdução](arquivomd)
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41057004)\] [14.2. Form Input](arquivomd)
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41057010)\] [14.3. Form Radio](arquivomd)
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41057012)\] [14.4. Form Checkbox](arquivomd)
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41057020)\] [14.5. Form Select](arquivomd)
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41057028)\] [14.6. Form Submit](arquivomd)
  - \[[Ref](https://www.udemy.com/course/curso-de-angular/learn/lecture/41057968)\] [14.7. Mais sobre](arquivomd)

x. nome_secao
  - \[[Ref](link)\] [x.x. nome_aula](arquivomd)
  - \[[Ref](link)\] x.x. nome_aula
