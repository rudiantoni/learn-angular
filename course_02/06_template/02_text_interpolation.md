# Curso de Angular 2 (v17+) Typescript do Básico ao Avançado

## 6.2. Text interpolation
[[Home - Curso 2]](../../README.md#curso-2)<br />

- Diretório de arquivos: [02_arquivos](./02_arquivos/)
- Projetos
  - [Projeto 1](./02_arquivos/proj_01/) [(iniciado em)](#interpolação-de-texto)
- Conteúdo
  - [Interpolação de texto](#interpolação-de-texto)

### Interpolação de texto
[[Topo]](#)<br />

- Ver projeto: [Projeto 1](./02_arquivos/proj_01/)

A interpolação de texto (ou text interpolation) é classificada como sendo **UNIDIRECTIONAL (ONE WAY) DATA BINDING, CLASS -> TEMPLATE**, ou seja, uma vinculação de dados unidirecional, da classe para o template.

É a forma mais simples de vinculação de dados em Angular, usada para exibir dados de componentes no template HTML. Utiliza a sintaxe `{{ }}` para inserir valores de propriedades do componente no HTML. Exemplo: `<div>{{ title }}</div>` exibirá o valor da propriedade title do componente.

Também podem ser chamados funções disponíveis na classe, ou também qualquer expressão TypeScript válida.

**Classe**
```typescript
public name: string = "Rudi Antoni";
public age: number = 29;
```

**Template**
```html
<p>Nome: {{name}}, idade: {{age}}</p>
```
