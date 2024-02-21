import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Component({
  selector: 'app-template-control-flow',
  standalone: true,
  imports: [NgIf, NgFor, AsyncPipe],
  templateUrl: './template-control-flow.component.html',
  styleUrl: './template-control-flow.component.scss'
})
export class TemplateControlFlowComponent {
  
  public itens = [
    {name: 'Rudi Antoni'},
    {name: 'John Doe'},
  ]

  public loadingData$: Observable<string[]> = of([
    'item 1', 'item 2', 'item 3'
  ]).pipe(delay(3000))

  public trackByFn(index: number) {
    return index;
  }

  public addNewName(value: string) {
    return this.itens.push({name: value})
  }
}
