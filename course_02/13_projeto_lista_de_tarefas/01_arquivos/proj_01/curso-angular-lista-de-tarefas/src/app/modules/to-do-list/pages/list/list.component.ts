import { Component, signal } from '@angular/core';
import { IListItems } from '../../../../interface/IListItems.interface';
import { InputAddItemComponent } from '../../components/input-add-item/input-add-item.component';
import { InputListItemComponent } from '../../components/input-list-item/input-list-item.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [InputAddItemComponent, InputListItemComponent],
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

  listItemsStage(value: 'pending' | 'completed'): any[] {
    return this.getListItems().filter((res: IListItems) => {
      if (value === 'pending') {
        return !res.checked;
      }
      if (value === 'completed') {
        return res.checked;
      }
      return res;
    });
  }

  updateItemCheckbox(newItem: { id: string; checked: boolean }) {
    this.#setListItems.update((oldValue: IListItems[]) => {
      oldValue.filter((res) => {
        if (res.id === newItem.id) {
          res.checked = newItem.checked;
          return res;
        }
        return res;
      });
      return oldValue;
    });

    localStorage.setItem('@my-list', JSON.stringify(this.#setListItems()));
  }

  updateItemText(newItem: { id: string; value: string }) {
    this.#setListItems.update((oldValue: IListItems[]) => {
      oldValue.filter((res) => {
        if (res.id === newItem.id) {
          res.value = newItem.value;
          return res;
        }
        return res;
      });
      return oldValue;
    });

    localStorage.setItem('@my-list', JSON.stringify(this.#setListItems()));
  }

  deleteItemText(id: string): void {
    this.#setListItems.update((oldValue: IListItems[]) => {
      return oldValue.filter((res) => res.id !== id);
    });

    localStorage.setItem('@my-list', JSON.stringify(this.#setListItems()));
  }

  deleteAllItems(): void {
    localStorage.removeItem('@my-list');
    this.#setListItems.set(this.#parseItems());
  }
}
