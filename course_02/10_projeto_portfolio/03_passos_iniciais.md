# Curso de Angular 2 (v17+) Typescript do Básico ao Avançado

## 10.3. Passos iniciais do projeto
[[Home - Curso 2]](../../README.md#curso-2)<br />

- Diretório de arquivos: [03_arquivos](./03_arquivos/)
- Projetos
  - [Projeto 1](./03_arquivos/proj_01/) [(iniciado em)](#criação-do-projeto)
- Conteúdo
  - [Criação do projeto](#criação-do-projeto)
  - [Estruturação inicial](#estruturação-inicial)
  - [Estrutura de arquivos do projeto](#estrutura-de-arquivos-do-projeto)
  - [Arquivos alterados](#arquivos-alterados)

### Criação do projeto
[[Topo]](#)<br />

- Ver projeto: [Projeto 1](./03_arquivos/proj_01/)

- Abrir o terminal e executar o seguinte comando para criar o projeto:
  - `ng new curso-angular-portfolio`
- Escolha
  - Formato de estilização (padrão CSS): SCSS  
  - Ativação do SSR Server-Side Rendering e SSG Static Site Generation (padrão N): Não
- Entre na pasta do projeto:
  - `cd curso-angular-portfolio`
- Inicie a aplicação:
  - `ng s`

### Estruturação inicial
[[Topo]](#)<br />

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

### Estrutura de arquivos do projeto
[[Topo]](#)<br />

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

### Arquivos alterados
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
