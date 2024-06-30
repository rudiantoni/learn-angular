import { Component, signal } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { OutputComponent } from '../output/output.component';

@Component({
  selector: 'app-pai',
  standalone: true,
  imports: [InputComponent, OutputComponent],
  templateUrl: './pai.component.html',
  styleUrl: './pai.component.scss'
})
export class PaiComponent {
  public myName: string = "Rudi Antoni - Name B"
  public sendNameC = signal("Rudi Antoni - Name C");
  public outName = 'Output: sem valor'
  public outNameSig = signal('Output Signal: sem valor')

  receiveOutputName(value: string): void {
    this.outName = value;
  }
}
