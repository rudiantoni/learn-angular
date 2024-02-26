# Curso de Angular 2 (v17+) Typescript do Básico ao Avançado

## 9.2. Usando o Signal
[[Home - Curso 2]](../../README.md#curso-2)<br />

- Diretório de arquivos: [02_arquivos](./02_arquivos/)
- Projetos
  - [Projeto 1](./02_arquivos/proj_01/) [(iniciado em)](#criando-e-invocando-o-valor)
- Conteúdo
  - [Criando e invocando o valor](#criando-e-invocando-o-valor)
  - [Set](#set)
  - [Update](#update)

### Criando e invocando o valor
[[Topo]](#)<br />

- Ver projeto: [Projeto 1](./02_arquivos/proj_01/)

Variáveis que devem ser atualizadas automaticamente, devem ser inicializadas com `signal()`.

Variáveis devem ser atualizadas automaticamente e utilizam dados de signals na sua formação, devem ser inicializadas com `computed()`.

**Classe**
```typescript
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {
  public firstName = signal('Rudi');
  public lastName = signal('Antoni');
  public fullName = computed(() => {
    return `${this.firstName()} ${this.lastName()}`;
  })
  public array = signal([1]);
}
```

**Template**
```html
<p>{{ firstName() }} {{ lastName() }}</p>
<p>Nome completo: {{ fullName() }}</p>

<ul>
  @for(item of array(); track item) {
    <li>{{ item }}</li>
  }
</ul>
```

### Set
[[Topo]](#)<br />

Para definir um novo valor na variável, utilize `.set()`. Recomendado o uso quando não é necessário referenciar o valor anterior.

```typescript
public updateName() {
  this.firstName.set('John');
}
```

**Template**
```html
<button (click)="updateName()">Atualizar nome</button>
```

### Update
[[Topo]](#)<br />

Para atualizar o valor da variável, utilize `.update()`. Recomendado o uso quando é necessário referenciar o valor anterior.

```typescript
public updateArray() {
  this.array.update( (oldValue: Array<number>) => {
    console.log('oldValue:', oldValue)
    return [...oldValue, ++oldValue.length]
  })
}
```

**Template**
```html
<button (click)="updateArray()">Atualizar lista</button>
```
