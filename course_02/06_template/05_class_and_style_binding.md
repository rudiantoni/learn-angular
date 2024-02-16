# Curso de Angular 2 (v17+) Typescript do Básico ao Avançado

## 6.5. Class and style binding
[[Home - Curso 2]](../../README.md#curso-2)<br />

- Diretório de arquivos: [05_arquivos](./05_arquivos/)
- Projetos
  - [Projeto 1](./05_arquivos/proj_01/) [(iniciado em)](#vinculação-de-classe-e-estilo)
- Conteúdo
  - [Vinculação de classe e estilo](#vinculação-de-classe-e-estilo)

### Vinculação de classe e estilo
[[Topo]](#)<br />

- Ver projeto: [Projeto 1](./05_arquivos/proj_01/)

A vinculação de classe e estilo (ou style and class binding) é classificada como sendo **UNIDIRECTIONAL (ONE WAY) DATA BINDING, CLASS -> TEMPLATE**, ou seja, uma vinculação de dados unidirecional, da classe para o template.

Ela permite adicionar ou remover classes CSS e estilos em elementos HTML com base em expressões Angular. A sintaxe é `[class.nome-da-classe]="expressão"` para classes e `[style.estilo]="expressão"` para estilos. Exemplo: `<div [class.active]="isActive">` adicionará a classe `active` se `isActive` for verdadeiro.

**Estilo**
```css
:host {
  .background-red {
    background: red;
  }
  .color-white {
    color: white;
  }
};
```

**Classe**
```typescript
public isTextDecoration: string = true === true ? 'underline' : 'none';
```

**Template**
```html
<p [class.background-red]="true" [class.color-white]="false === false" >Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

<p [style.text-decoration]="isTextDecoration">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
```
