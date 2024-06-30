# Curso de Angular 2 (v17+) Typescript do Básico ao Avançado

## 15.1. Form Control
[[Home - Curso 2]](../../README.md#curso-2)<br />

- Diretório de arquivos: [01_arquivos](./01_arquivos/)
- Projetos
  - [Projeto 1](./01_arquivos/proj_01/) [(iniciado em)](#utilizando-formcontrol)
- Conteúdo
  - [Utilizando FormControl](#utilizando-formcontrol)

### Utilizando FormControl
[[Topo]](#)<br />

- Ver projeto: [Projeto 1](./01_arquivos/proj_01/)

O `FormControl` serve para criar entradas de usuários simples e reativas.

**Classe**
```typescript
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss',
})
export class ReactiveFormsComponent {
  name = new FormControl('Rudi Antoni');

  updateName() {
    this.name.setValue('Nome de teste');
  }
}
```

**Template**
```html
<h2>Reactive forms</h2>

<form>
  <label>
    Nome:
    <input type="text" [formControl]="name" />
  </label>
  <p>{{ name.value }}</p>
  <button type="button" (click)="updateName()">Atualizar nome</button>
</form>
```
