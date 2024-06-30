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
