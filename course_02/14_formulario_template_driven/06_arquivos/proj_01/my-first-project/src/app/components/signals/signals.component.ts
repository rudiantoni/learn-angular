import { Component, computed, effect, signal } from '@angular/core';

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
    effect(() => {
      console.log('this.firstName()', this.firstName());
    });

    effect(() => {
      console.log('this.array()', this.array())
    })
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
