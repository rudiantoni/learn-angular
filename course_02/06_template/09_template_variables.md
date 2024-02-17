# Curso de Angular 2 (v17+) Typescript do Básico ao Avançado

## 6.9. Template variables
[[Home - Curso 2]](../../README.md#curso-2)<br />

- Diretório de arquivos: [09_arquivos](./09_arquivos/)
- Projetos
  - [Projeto 1](./09_arquivos/proj_01/) [(iniciado em)](#introdução)
- Conteúdo
  - [Introdução](#introdução)
  - [Acessando um elemento HTML](#acessando-um-elemento-html)
  - [Trabalhando com componentes filhos](#trabalhando-com-componentes-filhos)
  - [Usando com diretivas](#usando-com-diretivas)

### Introdução
[[Topo]](#)<br />

- Ver projeto: [Projeto 1](./09_arquivos/proj_01/)

As template variables no Angular são uma maneira de nomear elementos ou diretivas dentro do seu template HTML para que você possa acessá-los dentro do template. Elas são definidas com um prefixo `#` (hash) seguido do nome da variável. Isso permite que você acesse as propriedades e métodos do elemento ou diretiva diretamente no template.

### Acessando um elemento HTML
[[Topo]](#)<br />

Você pode usar uma template variable para obter uma referência direta a um elemento DOM no seu template.

**Classe**
```typescript
showValue(value: string) {
  console.log(value);
}
```

**Template**
```html
<!-- Definindo uma template variable #inputElement para o elemento de entrada -->
<input #inputElement type="text" placeholder="Digite algo...">

<!-- Usando a template variable para acessar a propriedade 'value' do elemento de entrada -->
<button (click)="showValue(inputElement.value)">Mostrar Valor</button>
```

### Trabalhando com componentes filhos
[[Topo]](#)<br />

Você também pode usar template variables para interagir com componentes filhos no seu template.

Suponha que você tenha um componente filho chamado `ChildComponent` com um método `doSomething()`:

**Classe**
```typescript
// child.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<p>Componente Filho</p>`
})
export class ChildComponent {
  doSomething() {
    console.log('Fazendo algo no componente filho');
  }
}
```

Você pode usar uma template variable para chamar esse método a partir do template do componente pai:

**Template**
```html
<!-- Definindo uma template variable #childComponent para o componente filho -->
<app-child #childComponent></app-child>

<!-- Usando a template variable para chamar o método 'doSomething' do componente filho -->
<button (click)="childComponent.doSomething()">Chamar Método do Componente Filho</button>
```

### Usando com diretivas
[[Topo]](#)<br />

Template variables também podem ser usadas com diretivas. Por exemplo, você pode usá-las com a diretiva `ngFor` para obter uma referência ao índice ou ao próprio item da lista:

**Template**
```html
<ul>
  <!-- Definindo uma template variable #item para cada item da lista -->
  <li *ngFor="let item of items; let i = index" #itemElement>
    {{i}}: {{item}} - <span (click)="showItem(itemElement.textContent)">Clique para mostrar</span>
  </li>
</ul>
```

**Classe**
```typescript
items = ['Maçã', 'Banana', 'Laranja'];

showItem(item: string) {
  console.log(item);
}
```

Esses exemplos demonstram como as template variables podem ser usadas para acessar elementos do DOM, componentes filhos e itens de uma lista diretamente no template do Angular.
