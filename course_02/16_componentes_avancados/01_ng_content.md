# Curso de Angular 2 (v17+) Typescript do Básico ao Avançado

## 16.1. ng-content
[[Home - Curso 2]](../../README.md#curso-2)<br />

- Diretório de arquivos: [01_arquivos](./01_arquivos/)
- Projetos
  - [Projeto 1](./01_arquivos/proj_01/) [(iniciado em)](#o-que-é)
- Conteúdo
  - [O que é](#o-que-é)

### O que é
[[Topo]](#)<br />

- Ver projeto: [Projeto 1](./01_arquivos/proj_01/)

O ng-content é uma diretiva usada para criar componentes de conteúdo inserido.

Ele permite que o conteúdo que é definido entre as tags do componente pai seja inserido no template do componente filho.

Isso é especialmente útil quando você deseja criar componentes reutilizáveis que podem aceitar diferentes tipos de conteúdo dinâmico.

Você também pode definir diferentes seletores para alterar a ordem onde os elementos chamados aparecem dentro do seu componente através do `select`.


**No componente filho**

**Classe**
```typescript
// imports
// cfg classe...
export class ContentComponent {}
```

**Template**
```html
<h2>ng-content</h2>
<ng-content select="#header"></ng-content>
<hr />
<ng-content select="[title]"></ng-content>
<hr />
<ng-content></ng-content>
<hr />
<ng-content select="[text]"></ng-content>
<hr />
<ng-content select=".footer"></ng-content>
```

**No componente pai**

**Template**
```html
<app-content>
  <p id="header">Cabeçalho</p>
  <p class="footer">Rodapé</p>
  <p text>Texto</p>
  <h4 title>Título</h4>
  <u>Conteúdo sublinhado</u>
</app-content>
```
