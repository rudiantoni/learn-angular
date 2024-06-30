import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './template-driven-forms.component.html',
  styleUrl: './template-driven-forms.component.scss',
})
export class TemplateDrivenFormsComponent {
  public listComidas = signal<Array<{nameFood: string, price: string}>>([
    {nameFood: 'X-salada', price: 'R$ 10'},
    {nameFood: 'X-bacon', price: 'R$ 11'},
    {nameFood: 'Coxinha', price: 'R$ 6'}
  ]);

}
