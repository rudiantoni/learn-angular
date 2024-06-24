import { Component, WritableSignal, signal } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  addItem: WritableSignal<boolean> = signal<boolean>(true)
}
