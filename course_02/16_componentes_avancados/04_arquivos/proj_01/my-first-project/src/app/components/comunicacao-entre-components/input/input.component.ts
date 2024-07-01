import { Component, Input, signal } from '@angular/core';

function toUpperCase (value: string): string {
  return value.toUpperCase();
}

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  
  @Input() public nameA: string = "Sem dados";
  @Input() public nameB: string = "Sem dados";

  public nameC = signal("Sem dados")
  @Input({
    required: true,
    transform: toUpperCase
  }) set nameCSetter(value: string) {
    this.nameC.set(value);
  }
}
