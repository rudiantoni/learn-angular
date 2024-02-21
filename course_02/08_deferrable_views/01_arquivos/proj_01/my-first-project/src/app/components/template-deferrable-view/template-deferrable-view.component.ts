import { Component } from '@angular/core';
import { NewComponent } from '../new-component/new-component.component';

@Component({
  selector: 'app-template-deferrable-view',
  standalone: true,
  imports: [NewComponent],
  templateUrl: './template-deferrable-view.component.html',
  styleUrl: './template-deferrable-view.component.scss'
})
export class TemplateDeferrableViewComponent {

}
