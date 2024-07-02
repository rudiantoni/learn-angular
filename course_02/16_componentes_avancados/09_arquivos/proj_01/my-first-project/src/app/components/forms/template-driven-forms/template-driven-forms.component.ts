import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './template-driven-forms.component.html',
  styleUrl: './template-driven-forms.component.scss',
})
export class TemplateDrivenFormsComponent {
  listComidas = signal<Array<{nameFood: string, price: string}>>([
    {nameFood: 'X-salada', price: 'R$ 10'},
    {nameFood: 'X-bacon', price: 'R$ 11'},
    {nameFood: 'Coxinha', price: 'R$ 6'}
  ]);

  submitForm(form: NgForm) {
    console.log('Enviado form:')
    console.log('valid', form.valid)
    console.log('value', form.value);
  }

}
