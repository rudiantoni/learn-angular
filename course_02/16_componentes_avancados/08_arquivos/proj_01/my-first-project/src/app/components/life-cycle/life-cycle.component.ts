import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
  signal,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-life-cycle',
  standalone: true,
  imports: [],
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.scss',
})
export class LifeCycleComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterViewInit,
    AfterContentInit,
    AfterContentChecked,
    AfterViewChecked
{
  // Constrututor ou inicializador
  constructor(private fb: FormBuilder, private hostEl: ElementRef) {}

  // Changes detections
  @Input() myNumber = 0;
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
    if (changes['myNumber'].previousValue === 2) {
      alert('Deu bom, POR FAVOR CONFIRME LOGO');
    }
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  myText = signal('Rudi');
  ngDoCheck(): void {
    console.log('ngDoCheck');
    const p = (this.hostEl.nativeElement as HTMLElement).querySelector(
      '#do-check-text'
    );
    console.log(p);
  }

  @ViewChild('content') content?: ElementRef;
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    const text = (this.content?.nativeElement as HTMLParagraphElement)
      .textContent;
    console.log(text);
  }

  @ContentChild('textContent') textContent?: ElementRef;
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
    const text = (this.textContent?.nativeElement as HTMLParagraphElement)
      .textContent;
    console.log(text);
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
}
