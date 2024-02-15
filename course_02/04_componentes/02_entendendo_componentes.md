# Curso de Angular 2 (v17+) Typescript do Básico ao Avançado

## 4.2. Entendendo o componente
[[Home - Curso 2]](../../README.md#curso-2)<br />

- Diretório de arquivos: [02_arquivos](./02_arquivos/)
- Projetos
  - [Projeto 1](./02_arquivos/proj_01/) [(iniciado em)](#padrão-de-projeto)
- Conteúdo
  - [Padrão de projeto](#padrão-de-projeto)

### Padrão de projeto
[[Topo]](#)<br />

- Ver projeto: [Projeto 1](./02_arquivos/proj_01/)

Ao iniciar o projeto, é recomendado remover o modelo (arquivo .html) do componente app-root e deixá-lo apenas no componente como template inline.

Também é recomendável remover a estilização (arquivo .scss) do componente app-root.

```typescript
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <!-- <router-outlet /> -->
    <h1>Curso de Angular</h1>
    <h2>Componentes</h2>
  `,
})
export class AppComponent {}
```
