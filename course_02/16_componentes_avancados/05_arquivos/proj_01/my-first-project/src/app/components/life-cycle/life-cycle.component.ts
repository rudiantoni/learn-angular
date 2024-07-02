import {
  Component,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
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
export class LifeCycleComponent implements OnChanges, OnInit, DoCheck {
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
    const p = (this.hostEl.nativeElement as HTMLElement).querySelector('#do-check-text')
    console.log(p)
  }
}
