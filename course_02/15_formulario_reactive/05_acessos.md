# Curso de Angular 2 (v17+) Typescript do Básico ao Avançado

## 15.5. Acessos - value - valid - dirty - touched
[[Home - Curso 2]](../../README.md#curso-2)<br />

- Diretório de arquivos: [05_arquivos](./05_arquivos/)
- Projetos
  - [Projeto 1](./05_arquivos/proj_01/) [(iniciado em)](#usando-get)
- Conteúdo
  - [Usando get()](#usando-get)

### Usando get()
[[Topo]](#)<br />

- Ver projeto: [Projeto 1](./05_arquivos/proj_01/)

Para acessar uma dada propriedade (`FormControl`, `FormArray`, etc) em um `FormGroup`, você pode usar a função `get()`. Ela disponibiliza as propriedades do objeto definido no `FormGroup`.

**Classe**
```typescript
import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  ReactiveFormsModule
} from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss',
})
export class ReactiveFormsComponent {
  // Exemplo de injeção de dependência no construtor.
  // constructor(private fb: FormBuilder) {}

  // Exemplo de injeção de dependência utilizando função inject()
  // Muito usado para injetar dependências em funções

  #fb = inject(FormBuilder);

  profileForm = this.#fb.group({
    name: [''],
    myStacks: this.#fb.group({
      front: ['Angular'],
      back: ['NodeJS'],
    }),
    myFavoriteFoods: this.#fb.array([['']]),
  });

  updateName() {
    this.profileForm.patchValue({
      name: 'Nome de teste',
    });
  }

  update() {
    this.profileForm.patchValue({
      name: 'Nome de teste',
      myStacks: {
        front: 'React',
        back: 'Kotlin',
      },
    });
  }

  addMyFavoriteFoods(newFood: string) {
    const myFavoriteFoods = this.profileForm.get(
      'myFavoriteFoods'
    ) as FormArray;
    const addNewFood = new FormControl(newFood);
    myFavoriteFoods.push(addNewFood);
  }
}
```

**Template**
```html
<h2>Reactive forms</h2>

<form [formGroup]="profileForm">
  <h3>FormControl</h3>

  <label>
    Nome:
    <input type="text" formControlName="name" required />
  </label>

  <hr />
  <h4>[formGroup] = profileForm</h4>
  <p>value: {{ profileForm.value }}</p>
  <p>value json: {{ profileForm.value | json }}</p>
  <p>name: {{ profileForm.value.name }}</p>
  <p>valid: {{ profileForm.valid }}</p>
  <p>dirty: {{ profileForm.dirty }}</p>
  <p>touched: {{ profileForm.touched }}</p>
  <hr />

  <h4>[formControlName] = name</h4>
  <p>value: {{ profileForm.get('name')?.value }}</p>
  <p>valid: {{ profileForm.get('name')?.valid }}</p>
  <p>dirty: {{ profileForm.get('name')?.dirty }}</p>
  <p>touched: {{ profileForm.get('name')?.touched }}</p>
  <hr />

  <h4>[formGroupName] = myStacks</h4>
  <p>value: {{ profileForm.get('myStacks')?.value }}</p>
  <p>value json: {{ profileForm.get('myStacks')?.value | json}}</p>
  <p>front: {{ profileForm.get('myStacks')?.value?.front }}</p>
  <p>back: {{ profileForm.get('myStacks')?.value?.back }}</p>
  <p>dirty: {{ profileForm.get('myStacks')?.dirty }}</p>
  <p>touched: {{ profileForm.get('myStacks')?.touched }}</p>
  <hr />

  <h3>FormGroup</h3>

  <div formGroupName="myStacks">
    <label>
      Front:
      <input type="text" formControlName="front" />
    </label>
    <label>
      Back:
      <input type="text" formControlName="back" />
    </label>
  </div>

  <h3>FormArray</h3>

  <label>
    Comida favorita:
    <input #newFood type="text" />
  </label>
  <button type="button" (click)="addMyFavoriteFoods(newFood.value)">
    Adicionar comida
  </button>

  <div formArrayName="myFavoriteFoods">
    @for(food of profileForm.value.myFavoriteFoods; track i; let i = $index) {
    <label>{{ food }} <input type="text" [formControlName]="i" /><br /> </label>
    }
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
    <div>
      <p>myFavoriteFoods:</p>
      @for(food of profileForm.value.myFavoriteFoods; track i; let i = $index) {
      <p>{{ food }}</p>
      }
    </div>
  </div>

  <button type="submit" [disabled]="!profileForm.valid">Enviar</button>

</form>
```
