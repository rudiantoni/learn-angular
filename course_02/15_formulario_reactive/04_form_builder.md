# Curso de Angular 2 (v17+) Typescript do Básico ao Avançado

## 15.4. Form Builder
[[Home - Curso 2]](../../README.md#curso-2)<br />

- Diretório de arquivos: [04_arquivos](./04_arquivos/)
- Projetos
  - [Projeto 1](./04_arquivos/proj_01/) [(iniciado em)](#utilizando-formbuilder)
- Conteúdo
  - [Utilizando FormBuilder](#utilizando-formbuilder)

### Utilizando FormBuilder
[[Topo]](#)<br />

- Ver projeto: [Projeto 1](./04_arquivos/proj_01/)

Toda a sintaxe dos objetos `Form*` podem ser substituidas pelo `FormBuilder`.

Também é possível utilizar tanto a injeção de dependência pelo construtor quanto pela função `inject()`.

**Classe**
```typescript
// Exemplo de injeção de dependência no construtor.
// constructor(private fb: FormBuilder) {}

// Exemplo de injeção de dependência utilizando função inject()
// Muito usado para injetar dependências em funções
#fb = inject(FormBuilder);

profileForm = this.#fb.group({
  name: [''],
  myStacks: this.#fb.group({
    front: ['Angular'],
    back: ['NodeJS'],
  }),
  myFavoriteFoods: this.#fb.array([['']]),
});
```
