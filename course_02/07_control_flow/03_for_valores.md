# Curso de Angular 2 (v17+) Typescript do Básico ao Avançado

## 7.3. For e seus valores
[[Home - Curso 2]](../../README.md#curso-2)<br />

- Diretório de arquivos: [03_arquivos](./03_arquivos/)
- Projetos
  - [Projeto 1](./03_arquivos/proj_01/) [(iniciado em)](#control-flow-for-com-valores)
- Conteúdo
  - [Control flow: @for com valores](#control-flow-for-com-valores)
  - [Diretiva estrutural: ngFor com valores](#diretiva-estrutural-ngfor-com-valores)

### Control flow: @for com valores
[[Topo]](#)<br />

- Ver projeto: [Projeto 1](./03_arquivos/proj_01/)

**Classe**
```typescript
public itens = [
  {name: 'Rudi Antoni'},
  {name: 'John Doe'},
]
```

**Template**
```html
@for (
  item of itens; track item.name;
  let i = $index;
  let c = $count;
  let f = $first;
  let l = $last;
  let e = $even;
  let o = $odd;
) {
  <p>{{item.name}}. DADOS - index: {{ i }}, count: {{ c }}, first: {{ f }}, last: {{ l }}, even: {{ e }}, odd: {{ o }}</p>
}
```

### Diretiva estrutural: ngFor com valores
[[Topo]](#)<br />

**Classe**
```typescript
import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-template-control-flow',
  standalone: true,
  imports: [NgFor],
  templateUrl: './template-control-flow.component.html',
  styleUrl: './template-control-flow.component.scss'
})
export class TemplateControlFlowComponent {
  
  public itens = [
    {name: 'Rudi Antoni'},
    {name: 'John Doe'},
  ]

  public trackByFn(index: number) {
    return index;
  }

}
```

**Template**
```html
<ng-container *ngFor="
  let item of itens;
  let i = index;
  let c = count;
  let f = first;
  let l = last;
  let e = even;
  let o = odd;
  trackBy: trackByFn
">
  <p>{{item.name}}. DADOS - index: {{ i }}, count: {{ c }}, first: {{ f }}, last: {{ l }}, even: {{ e }}, odd: {{ o }}</p>
</ng-container>
```