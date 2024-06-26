import { NgClass } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  inject,
} from '@angular/core';
import { IListItems } from '../../../../interface/IListItems.interface';

@Component({
  selector: 'app-input-add-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './input-add-item.component.html',
  styleUrl: './input-add-item.component.scss',
})
export class InputAddItemComponent {
  #cdr = inject(ChangeDetectorRef);
  @ViewChild('inputText') inputText!: ElementRef;
  @Input({ required: true }) inputListItems: IListItems[] = [];
  @Output() outputAddListItem = new EventEmitter<IListItems>();

  focusAndAddItem(value: string): void {
    if (value) {
      this.#cdr.detectChanges();
      this.inputText.nativeElement.value = '';
      const timestamp = new Date().getTime();
      const id = `ID ${timestamp}`;
      this.outputAddListItem.emit({
        id,
        value,
        checked: false,
      });
      this.inputText.nativeElement.focus();
    }
  }
}
