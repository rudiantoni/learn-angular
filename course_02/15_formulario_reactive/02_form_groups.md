# Curso de Angular 2 (v17+) Typescript do Básico ao Avançado

## 15.2. Form Groups
[[Home - Curso 2]](../../README.md#curso-2)<br />

- Diretório de arquivos: [02_arquivos](./02_arquivos/)
- Projetos
  - [Projeto 1](./02_arquivos/proj_01/) [(iniciado em)](#utilizando-formgroup)
- Conteúdo
  - [Utilizando Group](#utilizando-formgroup)

### Utilizando FormGroup
[[Topo]](#)<br />

- Ver projeto: [Projeto 1](./02_arquivos/proj_01/)

O `FormGroup` serve para agrupar várias entradas em um objeto.

Quando se utiliza o `FormGroup`, não há mais a opção de utilizar a função `setValue()` como se utilizava no `FormControl`.

Para alterar um valor no `FormGroup`, se utiliza a função `patchValue()` que funciona exatamente da mesma maneira que um *HTTP PATCH* deve funcionar: Ela altera apenas os valores presentes no objeto, os outros permanecem inalterados.

**Classe**
```typescript
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss',
})
export class ReactiveFormsComponent {
  profileForm = new FormGroup( {
    name: new FormControl('Rudi Antoni'),
    myStacks: new FormGroup({
      front: new FormControl('Angular'),
      back: new FormControl('NodeJS'),
    })
  });
  
  updateName() {
    this.profileForm.patchValue({
      name: 'Nome de teste'
    })
  }
  
  update() {
    this.profileForm.patchValue({
      name: 'Nome de teste',
      myStacks: {
        front: 'React',
        back: 'Kotlin'
      }
    })
  }
}
```

**Template**
```html
<h2>Reactive forms</h2>

<form [formGroup]="profileForm">
  <label>
    Nome:
    <input type="text" formControlName="name" />
  </label>
  <div formGroupName="myStacks">
    <label>
      Front:
      <input type="text" formControlName="front">
    </label>
    <label>
      Back:
      <input type="text" formControlName="back">
    </label>
  </div>

  <br />
  <button type="button" (click)="update()">Atualizar</button>
  <br />
  <button type="button" (click)="updateName()">Atualizar nome</button>

  <hr />
  <div>
    <p>name: {{ profileForm.value.name }}</p>
    <p>myStacks.front: {{ profileForm.value.myStacks?.front }}</p>
    <p>myStacks.back: {{ profileForm.value.myStacks?.back }}</p>
  </div>
</form>
```
