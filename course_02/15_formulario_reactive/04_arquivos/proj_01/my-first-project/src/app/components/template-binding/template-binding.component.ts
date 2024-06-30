import { CommonModule, NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  /**
   * O NgClass está dentro do CommonModule, este código serve para lembrar isso
   * e da possibilidade de importar o NgClass sozinho
   */
  imports: [FormsModule, CommonModule, NgClass, NgStyle],
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
  public count: number = 0;
  public country: string = "Brazil";

  constructor() {
    setTimeout(() => {
      this.srcName = 'Karate Kid';
    }, 3000)
  }

  public increment() {
    this.count++;
  }
  public decrement() {
    this.count--;
  }

  public onKeyDown(event: Event) {
    return console.log('event onKeyDown', event)
  }

  public onMouseMove(event: MouseEvent) {
    return console.log('event onMouseEvent', event)
  }

  public printCountry() {
    console.log(`country: ${this.country}`)
  }
}
