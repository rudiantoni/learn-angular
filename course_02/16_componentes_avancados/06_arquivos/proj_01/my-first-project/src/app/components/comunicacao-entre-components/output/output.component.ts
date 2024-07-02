import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  standalone: true,
  imports: [],
  templateUrl: './output.component.html',
  styleUrl: './output.component.scss'
})
export class OutputComponent {
  
  @Output() public outputName = new EventEmitter<string>();
  @Output() public outputNameSig = new EventEmitter<string>();

  public sendOutputName(): void {
    this.outputName.emit('Rudi Antoni - From Output');
  }

  public sendOutputNameSig(): void {
    this.outputNameSig.emit('Rudi Antoni - From Output (Signal)');
  }
}
