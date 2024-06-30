# Curso de Angular 2 (v17+) Typescript do Básico ao Avançado

## 15.3. Form Array
[[Home - Curso 2]](../../README.md#curso-2)<br />

- Diretório de arquivos: [03_arquivos](./03_arquivos/)
- Projetos
  - [Projeto 1](./03_arquivos/proj_01/) [(iniciado em)](#utilizando-formarray)
- Conteúdo
  - [Utilizando FormArray](#utilizando-formarray)

### Utilizando FormArray
[[Topo]](#)<br />

- Ver projeto: [Projeto 1](./03_arquivos/proj_01/)

O `FormArray` serve para adicionar várias entradas reativas em lista, ou seja, é aplicado quando é necessário uma quantidade variável de entradas do usuário, seja com valores literais ou seja com objetos.

**Classe**
```typescript
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

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
    }),
    myFavoriteFoods: new FormArray([
      new FormControl('X-Tudo')
    ])
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

  addMyFavoriteFoods(newFood: string) {
    const myFavoriteFoods = this.profileForm.get('myFavoriteFoods') as FormArray;
    const addNewFood = new FormControl(newFood);
    myFavoriteFoods.push(addNewFood);
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
      <input type="text" formControlName="front" />
    </label>
    <label>
      Back:
      <input type="text" formControlName="back" />
    </label>
  </div>

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
</form>
```
