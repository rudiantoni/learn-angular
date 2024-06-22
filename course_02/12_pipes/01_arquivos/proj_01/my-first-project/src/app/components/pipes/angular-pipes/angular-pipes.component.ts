import {
  AsyncPipe,
  DatePipe,
  JsonPipe,
  LowerCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component, signal } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Component({
  selector: 'app-angular-pipes',
  standalone: true,
  imports: [DatePipe, UpperCasePipe, LowerCasePipe, JsonPipe, AsyncPipe],
  templateUrl: './angular-pipes.component.html',
  styleUrl: './angular-pipes.component.scss',
})
export class AngularPipesComponent {
  currentDate = signal(new Date());
  obj = signal({ name: 'Rudi Antoni' });
  loadingData$: Observable<string[]> = of([
    'item1', 'item2', 'item3'
  ]).pipe(delay(500));
}
