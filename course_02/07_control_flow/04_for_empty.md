# Curso de Angular 2 (v17+) Typescript do Básico ao Avançado

## 7.4. for e empty
[[Home - Curso 2]](../../README.md#curso-2)<br />

- Diretório de arquivos: [04_arquivos](./04_arquivos/)
- Projetos
  - [Projeto 1](./04_arquivos/proj_01/) [(iniciado em)](#control-flow-for-e-empty)
- Conteúdo
  - [Control flow: for e empty](#control-flow-for-e-empty)
  - [Diretiva estrutural: for e empty](#diretiva-estrutural-for-e-empty)

### Control flow: for e empty
[[Topo]](#)<br />

- Ver projeto: [Projeto 1](./04_arquivos/proj_01/)

**Classe**
```typescript
public emptyItems: Array<{name: string}> = []
```

**Template**
```html
<ul>
  @for(item of emptyItems; track item.name) {
    <li>{{ item.name }}</li>
  } @empty {
    <li>Não contém valores</li>
  }
</ul>
```

### Diretiva estrutural: for e empty
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

  public emptyItems: Array<{name: string}> = []
}
```

**Template**
```html
<ul>
  <ng-container *ngIf="emptyItems.length === 0; else notEmptyItens">
    <li>Não contém valores</li>
  </ng-container>
  <ng-template #notEmptyItens>
    <ng-container *ngFor="let item of emptyItems">
      <li>{{ item.name }}</li>
    </ng-container>
  </ng-template>
</ul>
```
