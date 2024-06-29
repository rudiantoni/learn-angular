import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IListItems } from '../../../../interface/IListItems.interface';

@Component({
  selector: 'app-input-list-item',
  standalone: true,
  imports: [],
  templateUrl: './input-list-item.component.html',
  styleUrl: './input-list-item.component.scss',
})
export class InputListItemComponent {
  @Input({ required: true }) inputListItems: IListItems[] = [];

  @Output() outputUpdateItemCheckbox = new EventEmitter<{
    id: string;
    checked: boolean;
  }>();

  @Output() outputUpdateItemText = new EventEmitter<{
    id: string;
    value: string;
  }>();

  updateItemCheckbox(id: string, checked: boolean): void {
    this.outputUpdateItemCheckbox.emit({ id, checked });
  }

  updateItemText(id: string, value: string): void {
    this.outputUpdateItemText.emit({ id, value });
  }
}
