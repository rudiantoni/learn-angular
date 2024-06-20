# Curso de Angular 2 (v17+) Typescript do Básico ao Avançado

## 10.4 a 10.19 - Desenvolvimento do projeto
[[Home - Curso 2]](../../README.md#curso-2)<br />

- Diretório de arquivos: [04_arquivos](./04_arquivos/)
- Projetos
  - [Projeto 1](./04_arquivos/proj_01/) [(iniciado em)](#desenvolvimento-do-projeto)
- Conteúdo
  - [Desenvolvimento do projeto](#desenvolvimento-do-projeto)

### Desenvolvimento do projeto
[[Topo]](#)<br />

- Ver projeto: [Projeto 1](./04_arquivos/proj_01/)

#### 10.4. HTML - Componente Header

A partir do Angular 17, sempre que for utilizar a arroba `@` no html, utilize seu código HTML diretamente `&#64;`. Pois atualmente o arroba denota uma diretiva de controle de fluxo.

#### 10.5. HTML - Componente Knowledge

Sem notas a adicionar.

#### 10.6. HTML - Componente Experiences

Sem notas a adicionar.

#### 10.7. HTML - Componente Projects

Sem notas a adicionar.

#### 10.8. Configurando SMECSS com SCSS

Sem notas a adicionar.

#### 10.9. Criando a classe CSS container

Sem notas a adicionar.

#### 10.10. CSS - Componente Header

Sem notas a adicionar.

#### 10.11. CSS - Componente Header e Button

Sem notas a adicionar.

#### 10.12. CSS - Componente Knowledge

Sem notas a adicionar.

#### 10.13. CSS - Componente Experiences

Sem notas a adicionar.

#### 10.14. CSS - Componente Projects

Sem notas a adicionar.

#### 10.15. Dialog - Componente Projects

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

#### 10.16. HTML e TS - Componente Dialog
