# Curso de Angular 2 (v17+) Typescript do Básico ao Avançado

## 13.1 a 13.21 - Configuração e desenvolvimento do projeto: Lista de tarefas
[[Home - Curso 2]](../../README.md#curso-2)<br />

- Diretório de arquivos: [01_arquivos](./01_arquivos/)
- Projetos
  - [Projeto 1](./01_arquivos/proj_01/) [(iniciado em)](#132-passos-iniciais-do-projeto)
- Conteúdo
  - [13.1. Introdução](#131-introdução)
  - [13.2. Passos iniciais do projeto](#132-passos-iniciais-do-projeto)
  - [13.3. Recursos](#133-recursos)
  - [13.4. Configurando reset scss](#134-configurando-reset-scss)
  - [13.5. HTML - Componente PageList](#135-html---componente-pagelist)
  - [13.6. CSS - Container e Buttons](#136-css---container-e-buttons)
  - [13.7. CSS - Input label text](#137-css---input-label-text)
  - [13.8. CSS - Componente PageList](#138-css---componente-pagelist)
  - [13.9. TS - Componente PageList](#139-ts---componente-pagelist)
  - [13.10. Novo componente - Input add item](#1310-novo-componente---input-add-item)
  - [13.11. Persistindo dados no localstorage](#1311-persistindo-dados-no-localstorage)
  - [13.12. Transitando dados entre componentes](#1312-transitando-dados-entre-componentes)
  - [13.13. CSS - Input label text](#1313-css---input-label-text)
  - [13.14. CSS - Componente PageList](#1314-css---componente-pagelist)
  - [13.15. Criando e editando um novo componente input list item](#1315-criando-e-editando-um-novo-componente-input-list-item)
  - [13.16. Filtrando os dados](#1316-filtrando-os-dados)
  - [13.17. Update checked](#1317-update-checked)
  - [13.18. Update value](#1318-update-value)
  - [13.19. Delete Item](#1319-delete-item)
  - [13.20. Melhorias no código](#1320-melhorias-no-código)
  - [13.21. Sweet Alert 2](#1321-sweet-alert-2)

### 13.1. Introdução
[[Topo]](#)<br />

Este projeto consiste na criação de um gerenciador de tarefas no frontend. É possível adicionar e remover tarefas, bem como alterar o status atual dela.

Também é possível remover todas as tarefas.

Os dados permanecem persistidos entre page refresh por meio do Local Storage.

### 13.2. Passos iniciais do projeto
[[Topo]](#)<br />

#### Criação do projeto

- Ver projeto: [Projeto 1](./01_arquivos/proj_01/)

- Abrir o terminal e executar o seguinte comando para criar o projeto: `ng new curso-angular-lista-de-tarefas`
  - Escolha
    - Formato de estilização (padrão CSS): SCSS
    - Ativação do SSR Server-Side Rendering e SSG Static Site Generation (padrão N): Não
- Entre na pasta do projeto: `cd curso-angular-lista-de-tarefas`
- Pata testar, inicie a aplicação: `ng serve` ou `ng s`
  - Você pode interrompê-la após o início enviando `SIGINT` (Ctrl + C).

#### Estruturação inicial

- Configuração do template inicial
  - No template `app.component.html`: copie tudo que estiver abaixo do comentário `End of Placeholder`.
  - No componente `app.component.ts`: adicione a propriedade `template` do decorador `@Component`, como valor cole o conteúdo copiado anteriormente.
  - No componente `app.component.ts`: remova as propriedades `templateUrl` e `styleUrl` do decorador `@Component`.
  - No componente `app.component.ts`: remova qualquer código existente na classe `AppComponent`.
  - Remover os arquivos: `app.component.html`, `app.component.scss` e `app.component.spec.ts`
- Editar arquivo `./src/index.html`
```html
<head>
  <!-- ... -->
  <meta property="og:image" content="https://troquatte.github.io/curso-angular-lista-de-tarefas/browser/assets/img/og-image-lista-de-tarefas.png" />
  <meta name="description" content="Sou um apaixonado desenvolvedor front-end com expertise em HTML5, CSS3, JavaScript e frameworks modernos como Angular. Explore minha lista de tarefas e veja este meu projeto envolvente e responsivos." />
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet"/>
  <!-- ... -->
</head>
```

#### CSS bootstrap

- Criar pasta *scss* em *./src/*.
- Criar pasta *base* em *./src/scss/*.
- Criar pasta *component* em *./src/scss/*.
- Criar pasta *layout* em *./src/scss/*.
- Criar pasta *theme* em *./src/scss/*.
- Criar arquivo `_index.scss` em *./src/scss/*.
- Criar arquivo `_index.scss` em *./src/scss/base/*.
- Criar arquivo `_index.scss` em *./src/scss/component/*.
- Criar arquivo `_index.scss` em *./src/scss/layout/*.
- Criar arquivo `_index.scss` em *./src/scss/theme/*.
- Criar arquivo `_variables.scss` em *./src/scss/theme/*.
- Editar arquivo `./src/styles.scss`
```scss
@import "scss";
```
- Editar arquivo `./src/scss/_index.scss`
```scss
@import "base/index";
@import "component/index";
@import "layout/index";
@import "theme/index";
```
- Editar arquivo `./src/scss/theme/_index.scss`
```scss
@use "variables";
```
- Editar arquivo `./src/scss/theme/_variables.scss`
```scss
:root {
  --primary: #2fbf71;
  --primary-010: #21804d;

  --white: #fff;
  
  --grey: #9b9ba0;

  --black: #10101a;
  --black-010: #2a2a30;

  --red: #c90025;
  --red-010: #a3001e;
}
```

#### Arquivos do projeto inicial (com bootstrap de CSS)

```
src
│   favicon.ico
│   index.html
│   main.ts
│   styles.scss
│
├───app
│       app.component.ts
│       app.config.ts
│       app.routes.ts
│
├───assets
│       .gitkeep
│
└───scss
    │   _index.scss
    │
    ├───base
    │       _index.scss
    │
    ├───component
    │       _index.scss
    │
    ├───layout
    │       _index.scss
    │
    └───theme
            _index.scss
            _variables.scss
```

### 13.3. Recursos
[[Topo]](#)<br />

Segue link da api que iremos utilizamos na aula.

- GitHub do projeto: https://github.com/troquatte/curso-angular-lista-de-tarefas
- Assets: https://github.com/troquatte/curso-angular-lista-de-tarefas/tree/master/src/assets
- GHPAGES: https://troquatte.github.io/curso-angular-lista-de-tarefas/browser/

### 13.4. Configurando reset scss
[[Topo]](#)<br />

Sem notas a adicionar.

### 13.5. HTML - Componente PageList
[[Topo]](#)<br />

Esse será o componente principal. Após criá-lo, adicioná-lo como rota inicial no arquivo `app.routes.ts`

**app.routes.ts**
```typescript
import { Routes } from '@angular/router';

// Pages
import { ListComponent } from './modules/to-do-list/pages/list/list.component';

export const routes: Routes = [
  {path: '', component: ListComponent}
];
```

### 13.6. CSS - Container e Buttons
[[Topo]](#)<br />

Sem notas a adicionar.

### 13.7. CSS - Input label text
[[Topo]](#)<br />

Sem notas a adicionar.

### 13.8. CSS - Componente PageList
[[Topo]](#)<br />

Sem notas a adicionar.

### 13.9. TS - Componente PageList
[[Topo]](#)<br />

Sem notas a adicionar.

### 13.10. Novo componente - Input add item
[[Topo]](#)<br />

Sem notas a adicionar.

### 13.11. Persistindo dados no localstorage
[[Topo]](#)<br />

Sem notas a adicionar.

### 13.12. Transitando dados entre componentes
[[Topo]](#)<br />

Sem notas a adicionar.

### 13.13. CSS - Input label text
[[Topo]](#)<br />

Sem notas a adicionar.

### 13.14. CSS - Componente PageList
[[Topo]](#)<br />

Sem notas a adicionar.

### 13.15. Criando e editando um novo componente input list item
[[Topo]](#)<br />

Sem notas a adicionar.

### 13.16. Filtrando os dados
[[Topo]](#)<br />

Sem notas a adicionar.

### 13.17. Update checked
[[Topo]](#)<br />

Sem notas a adicionar.

### 13.18. Update value
[[Topo]](#)<br />

Sem notas a adicionar.

### 13.19. Delete Item
[[Topo]](#)<br />

Sem notas a adicionar.

### 13.20. Melhorias no código
[[Topo]](#)<br />

Sem notas a adicionar.

### 13.21. Sweet Alert 2
[[Topo]](#)<br />

Documentação oficial do sweetalert2: https://sweetalert2.github.io/

Instalar no projeto com `npm install sweetalert2`
