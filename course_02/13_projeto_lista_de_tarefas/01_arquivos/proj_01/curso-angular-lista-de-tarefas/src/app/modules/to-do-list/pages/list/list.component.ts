import { Component, Signal, WritableSignal, signal } from '@angular/core';
import { IListItems } from '../../../../interface/IListItems.interface';
import { InputAddItemComponent } from '../../components/input-add-item/input-add-item.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [InputAddItemComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  addItem = signal<boolean>(true);

  #setListItems = signal<IListItems[]>(this.#parseItems());
  getListItems = this.#setListItems.asReadonly();

  #parseItems(): IListItems[] {
    return JSON.parse(localStorage.getItem('@my-list') || '[]');
  }
  getInputAndAddItem(value: IListItems): void {
    localStorage.setItem(
      '@my-list',
      JSON.stringify([...this.#setListItems(), value])
    );
    this.#setListItems.set(this.#parseItems());
  }

  deleteAllItems(): void {
    localStorage.removeItem('@my-list');
    this.#setListItems.set(this.#parseItems());
  }
}
