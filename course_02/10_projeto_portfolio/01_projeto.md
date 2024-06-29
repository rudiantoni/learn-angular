# Curso de Angular 2 (v17+) Typescript do Básico ao Avançado

## 10.1 a 10.19 - Configuração e desenvolvimento do projeto: Portfolio
[[Home - Curso 2]](../../README.md#curso-2)<br />

- Diretório de arquivos: [01_arquivos](./01_arquivos/)
- Projetos
  - [Projeto 1](./01_arquivos/proj_01/) [(iniciado em)](#103-passos-iniciais-do-projeto)
- Conteúdo
  - [10.1. Introdução](#101-introdução)
  - [10.2. Recursos](#102-recursos)
  - [10.3. Passos iniciais do projeto](#103-passos-iniciais-do-projeto)
  - [10.4. HTML - Componente Header](#104-html---componente-header)
  - [10.5. HTML - Componente Knowledge](#105-html---componente-knowledge)
  - [10.6. HTML - Componente Experiences](#106-html---componente-experiences)
  - [10.7. HTML - Componente Projects](#107-html---componente-projects)
  - [10.8. Configurando SMECSS com SCSS](#108-configurando-smecss-com-scss)
  - [10.9. Criando a classe CSS container](#109-criando-a-classe-css-container)
  - [10.10. CSS - Componente Header](#1010-css---componente-header)
  - [10.11. CSS - Componente Header e Button](#1011-css---componente-header-e-button)
  - [10.12. CSS - Componente Knowledge](#1012-css---componente-knowledge)
  - [10.13. CSS - Componente Experiences](#1013-css---componente-experiences)
  - [10.14. CSS - Componente Projects](#1014-css---componente-projects)
  - [10.15. Dialog - Componente Projects](#1015-dialog---componente-projects)
  - [10.16. HTML e TS - Componente Dialog](#1016-html-e-ts---componente-dialog)
  - [10.17. CSS - Componente Dialog](#1017-css---componente-dialog)
  - [10.18. Final](#1018-final)
  - [10.19. Maximizando seu impacto online com um portfólio](#1019-maximizando-seu-impacto-online-com-um-portfólio)

### 10.1. Introdução
[[Topo]](#)<br />

Este projeto consiste na criação de um portfólio simples.

Ele conterá um histórico simples, experiências e um local para ser direcionado a diferentes websites criados e outros links desejados.

### 10.2. Recursos
[[Topo]](#)<br />

Segue link da api que iremos utilizamos na aula.

- GitHub do projeto: https://github.com/troquatte/curso-angular-portfolio
- Assets: https://github.com/troquatte/curso-angular-portfolio/tree/924ef6380941ed38c0092ddbe06c3fc56f43fae4/src/assets
- GHPAGES: https://troquatte.github.io/curso-angular-portfolio/browser/

### 10.3. Passos iniciais do projeto
[[Topo]](#)<br />

#### Criação do projeto

- Ver projeto: [Projeto 1](./01_arquivos/proj_01/)

- Abrir o terminal e executar o seguinte comando para criar o projeto:
  - `ng new curso-angular-portfolio`
- Escolha
  - Formato de estilização (padrão CSS): SCSS  
  - Ativação do SSR Server-Side Rendering e SSG Static Site Generation (padrão N): Não
- Entre na pasta do projeto:
  - `cd curso-angular-portfolio`
- Inicie a aplicação:
  - `ng s`

#### Estruturação inicial

- Abra o template `app.component.html` e remova todo o conteúdo que estiver entre `The content below is only a placeholder and can be replaced.` e `The content above is only a placeholder and can be replaced.`.
  - Normalmente será apenas uma tag `<style>` e `<main>` e sobra apenas a tag `<router-outlet />`.
- Caso ainda sobrar algum conteúdo, adicione-o como template diretamente no component `app.component.ts` na propriedade *template* do componente.
- Os arquivos `app.component.html`, `app.component.scss` e `app.component.spec.ts` devem ser removidos.
- Remova as propriedades *templateUrl* e *styleUrl* de componente na classe do componente app.
- Remova a propriedade *title*.
- Criar pasta *modules* em *./src/app/*.
- Criar pasta *portfolio* em *./src/app/modules/*.
- Criar pasta *components* em *./src/app/modules/portfolio/*.
- Criar pasta *enum* em *./src/app/modules/portfolio/*.
- Criar pasta *interface* em *./src/app/modules/portfolio/*.
- Criar pasta *pages* em *./src/app/modules/portfolio/*.
- Crie o componente *home* em *./src/app/modules/portfolio/pages/home*:
  - `ng g c modules/portfolio/pages/home`
- No arquivo `app.routes.ts`, adicione uma entrada de rota principal para o *HomeComponent*:
  - `{path: '', component: HomeComponent}`

#### Estrutura de arquivos do projeto

```
src
│   favicon.ico
│   index.html
│   main.ts
│   styles.scss
│
├───app
│   │   app.component.ts
│   │   app.config.ts
│   │   app.routes.ts
│   │
│   └───modules
│       └───portfolio
│           ├───components
│           ├───enum
│           ├───interface
│           └───pages
│               └───home
│                       home.component.html
│                       home.component.scss
│                       home.component.spec.ts
│                       home.component.ts
│
└───assets
        .gitkeep
```

#### Arquivos alterados
[[Topo]](#)<br />

**App: Classe**
```typescript
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <router-outlet />
  `
})
export class AppComponent {
}
```

**App: Routes**
```typescript
import { Routes } from '@angular/router';
import { HomeComponent } from './modules/portfolio/pages/home/home.component';

export const routes: Routes = [
  {path: '', component: HomeComponent}
];
```

### 10.4. HTML - Componente Header
[[Topo]](#)<br />

A partir do Angular 17, sempre que for utilizar a arroba `@` no html, utilize seu código HTML diretamente `&#64;`. Pois atualmente o arroba denota uma diretiva de controle de fluxo.

### 10.5. HTML - Componente Knowledge
[[Topo]](#)<br />

Sem notas a adicionar.

### 10.6. HTML - Componente Experiences
[[Topo]](#)<br />

Sem notas a adicionar.

### 10.7. HTML - Componente Projects
[[Topo]](#)<br />

Sem notas a adicionar.

### 10.8. Configurando SMECSS com SCSS
[[Topo]](#)<br />

Sem notas a adicionar.

### 10.9. Criando a classe CSS container
[[Topo]](#)<br />

Sem notas a adicionar.

### 10.10. CSS - Componente Header
[[Topo]](#)<br />

Sem notas a adicionar.

### 10.11. CSS - Componente Header e Button
[[Topo]](#)<br />

Sem notas a adicionar.

### 10.12. CSS - Componente Knowledge
[[Topo]](#)<br />

Sem notas a adicionar.

### 10.13. CSS - Componente Experiences
[[Topo]](#)<br />

Sem notas a adicionar.

### 10.14. CSS - Componente Projects
[[Topo]](#)<br />

Sem notas a adicionar.

### 10.15. Dialog - Componente Projects
[[Topo]](#)<br />

- Site oficiais
- Angular Material: https://material.angular.io/
- Angular Material - Components: https://material.angular.io/components/categories
- Angular Material - Dialog: https://material.angular.io/components/dialog/overview

Existe uma alternativa para fazer a injeção de dependência no Angular.

É possível criar uma propriedade privada e injetar diretamente uma dependência nela utilizando `inject()` ao invés da clássica injeção via construtor:

**Classe**
```typescript
#dialog = inject(MatDialog);

public openDialog(data: SomeDataType) {
  this.#dialog.open(SomeDialogClass, {data})
}
```

O código acima equivale a:

**Classe**
```typescript
constructor(private dialog: MatDialog) {}

public openDialog(data: SomeDataType) {
  this.dialog.open(SomeDialogClass, {data})
}
```

### 10.16. HTML e TS - Componente Dialog
[[Topo]](#)<br />

Sem notas a adicionar.

### 10.17. CSS - Componente Dialog
[[Topo]](#)<br />

Sem notas a adicionar.

### 10.18. Final
[[Topo]](#)<br />

Sem notas a adicionar.

### 10.19. Maximizando seu impacto online com um portfólio
[[Topo]](#)<br />

No mundo digital em constante evolução, a presença online é essencial para quem busca destacar-se e criar uma conexão significativa com seu público.

#### O que é um portfólio online?

Um portfólio online é uma coleção organizada de seus melhores trabalhos, projetos, realizações e habilidades. Ele funciona como uma vitrine virtual que destaca suas capacidades e cria uma impressão impactante sobre quem você é e o que você pode oferecer.

#### Por que é importante?

- Credibilidade: Um portfólio confere credibilidade, mostrando que você é experiente e qualificado no seu nicho.
- Visualização de habilidades: Seu portfólio serve como uma ferramenta visual para destacar suas habilidades. Se você é um fotógrafo, designer, escritor, ou qualquer outra coisa, um portfólio pode trazer à tona o melhor do seu trabalho.

#### Como criar e utilizar um portfólio

Escolha a plataforma certa: Existem várias plataformas online para criar portfólios, como Behance, WordPress, ou até mesmo uma seção dedicada no seu blog. Escolha uma que se alinhe ao seu estilo e objetivos. Ou então no nosso caso, crie o seu!

Selecione seus melhores trabalhos: Seja seletivo ao escolher o conteúdo para o seu portfólio. Destaque projetos que demonstrem sua habilidade e diversidade.

Mantenha atualizado: Um portfólio dinâmico é mais eficaz. Regularmente adicione novos trabalhos e atualize informações para refletir seu crescimento profissional.

Conte sua história: Use seu portfólio como uma oportunidade para contar sua história. Adicione descrições pessoais ou profissionais para contextualizar seus projetos e inspirar uma conexão mais profunda.

Em resumo, um portfólio online é uma ferramenta poderosa para destacar suas habilidades, construir credibilidade e criar uma conexão mais significativa com seu público. Ao incorporar estrategicamente um portfólio, você estará maximizando seu impacto online e solidificando sua presença no vasto mundo digital.
