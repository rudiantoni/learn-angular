import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NewComponent } from '../new-component/new-component.component';

@Component({
  selector: 'app-template-variables',
  standalone: true,
  imports: [CommonModule, NewComponent],
  templateUrl: './template-variables.component.html',
  styleUrl: './template-variables.component.scss'
})
export class TemplateVariablesComponent implements AfterViewInit {
  @ViewChild('inpName') public inpName!: ElementRef;
  @ViewChild('h2') public h2!: ElementRef;
  @ViewChild(NewComponent) public newComponent!: NewComponent;

  ngAfterViewInit(): void {
    console.log('this.inpName.nativeElement.value', this.inpName.nativeElement.value)
    console.log('this.h2.nativeElement.innerText', this.h2.nativeElement.innerText)
    console.log('this.newComponent.name', this.newComponent.name)
  }

}
