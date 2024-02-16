import { Component } from '@angular/core';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {
  public name: string = 'Rudi Antoni';
  public age: number = 29;
  public condition: string = this.age >= 18 ? 'Maior de idade' : 'Menor de idade';
  public isDisabled: boolean = true;
  public srcValue: string = 'https://angular.io/assets/images/logos/angular/shield-large.svg';
  public srcName: string = 'John Doe';
  public ariaLabel: string = 'Esse é um aria-label de exemplo';
  public isTextDecoration: string = true === true ? 'underline' : 'none';
  constructor() {
    setTimeout(() => {
      this.srcName = 'Karate Kid';
    }, 3000)
  }

}
