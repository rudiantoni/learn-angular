import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {
  public firstName = signal('Rudi');
  public lastName = signal('Antoni');
  public fullName = computed(() => {
    return `${this.firstName()} ${this.lastName()}`;
  })
  public array = signal([1]);

  constructor() {

  }

  public updateName() {
    this.firstName.set('John');
  }

  public updateArray() {
    this.array.update( (oldValue: Array<number>) => {
      console.log('oldValue:', oldValue)
      return [...oldValue, ++oldValue.length]
    })
  }
}
