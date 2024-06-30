import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  ValidatorFn,
  Validators
} from '@angular/forms';

function textValidator (): ValidatorFn {
  return (control: AbstractControl) => {
    // Validação deu certo
    // return null
    const hasUpperCase = /[A-Z]/.test(control.value);
    const hasNumber = /[0-9]/.test(control.value);

    if (hasUpperCase && hasNumber) {
      return null;
    }

    // Validação deu errado
    return {textValidator: true}
  }
}

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss',
})
export class ReactiveFormsComponent {
  #fb = inject(FormBuilder);

  profileForm = this.#fb.group({
    name: ['', [Validators.required, textValidator()]],
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

  nameErrors() {
    const err = this.profileForm.get('name')?.errors
    console.log('err', err);
  }
}
