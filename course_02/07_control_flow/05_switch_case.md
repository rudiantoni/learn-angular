# Curso de Angular 2 (v17+) Typescript do Básico ao Avançado

## 7.5. switch case
[[Home - Curso 2]](../../README.md#curso-2)<br />

- Diretório de arquivos: [05_arquivos](./05_arquivos/)
- Projetos
  - [Projeto 1](./05_arquivos/proj_01/) [(iniciado em)](#control-flow-switch-case)
- Conteúdo
  - [Control flow: switch case](#control-flow-switch-case)
  - [Diretiva estrutural: switch case](#diretiva-estrutural-switch-case)

### Control flow: switch case
[[Topo]](#)<br />

- Ver projeto: [Projeto 1](./05_arquivos/proj_01/)

**Classe**
```typescript
public switchCondition: string = 'A';
```

**Template**
```html
@switch (switchCondition) {
  @case('A') {
    <p>Sim sua letra é A.</p>
  }
  @case('B') {
    <p>Sim sua letra é B.</p>
  }
  @default {
    <p>Os dados não foram encontrados.</p>
  }
}
```

### Diretiva estrutural: switch case
[[Topo]](#)<br />

**Classe**
```typescript
import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-template-control-flow',
  standalone: true,
  imports: [NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './template-control-flow.component.html',
  styleUrl: './template-control-flow.component.scss'
})
export class TemplateControlFlowComponent {
  public switchCondition: string = 'A';
}
```

**Template**
```html
<ng-container [ngSwitch]="switchCondition">
  <ng-container *ngSwitchCase="'A'">
    <p>Sim sua letra é A.</p>
  </ng-container>
  <ng-container *ngSwitchCase="'B'">
    <p>Sim sua letra é B.</p>
  </ng-container>
  <ng-container *ngSwitchDefault>
    <p>Os dados não foram encontrados.</p>
  </ng-container>
</ng-container>
```
