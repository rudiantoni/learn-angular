# Curso de Angular 2 (v17+) Typescript do Básico ao Avançado

## 7.2. for
[[Home - Curso 2]](../../README.md#curso-2)<br />

- Diretório de arquivos: [02_arquivos](./02_arquivos/)
- Projetos
  - [Projeto 1](./02_arquivos/proj_01/) [(iniciado em)](#control-flow-for)
- Conteúdo
  - [Control flow: for](#control-flow-for)
  - [Diretiva estrutural: for](#diretiva-estrutural-for)

### Control flow: for
[[Topo]](#)<br />

- Ver projeto: [Projeto 1](./02_arquivos/proj_01/)

**Classe**
```typescript
import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Component({
  selector: 'app-template-control-flow',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './template-control-flow.component.html',
  styleUrl: './template-control-flow.component.scss'
})
export class TemplateControlFlowComponent {
  public loadingData$: Observable<string[]> = of([
    'item 1', 'item 2', 'item 3'
  ]).pipe(delay(3000))
}
```

**Template**
```html
@if (loadingData$ | async; as data) {
<ul>
  @for(item of data; track item) {
  <li>{{item}}</li>
  }
</ul>
} @else {
<p>Carregando...</p>
}
```

### Diretiva estrutural: for
[[Topo]](#)<br />

**Classe**
```typescript
import { AsyncPipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Component({
  selector: 'app-template-control-flow',
  standalone: true,
  imports: [NgFor, AsyncPipe],
  templateUrl: './template-control-flow.component.html',
  styleUrl: './template-control-flow.component.scss'
})
export class TemplateControlFlowComponent {
  public loadingData$: Observable<string[]> = of([
    'item 1', 'item 2', 'item 3'
  ]).pipe(delay(3000))

  public trackByFn(index: number) {
    return index;
  }
}
```

**Template**
```html
<ng-container *ngIf="loadingData$ | async as data; else loading">
  <ul>
    <ng-container *ngFor="let item of data; trackBy: trackByFn">
      <li>{{item}}</li>
    </ng-container>
  </ul>
</ng-container>
<ng-template #loading>
  <p>Carregando...</p>
</ng-template>
```
