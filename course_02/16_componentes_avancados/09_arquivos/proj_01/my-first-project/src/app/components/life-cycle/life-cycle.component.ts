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
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
  signal,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { timer } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

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
    AfterViewChecked,
    OnDestroy
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

  // Descomentar para demonstrar o OnDestroy (utiliza botão A do app.component)
  // Utilizando apenas hook OnDestroy
  /*
  private destroy$ = timer(0, 1000).subscribe({
    next: (res) => console.log('next res:', res),
    error: (error) => console.log('error:', error),
    complete: () => console.log('complete'),
  });
  ngOnDestroy(): void {
    console.log('ngOnDestroy')
    this.destroy$.unsubscribe();
  }
  */

  // Descomentar para demonstrar o OnDestroy (utiliza botão A do app.component)
  // Sem utilizar hook OnDestroy

  private destroy$ = timer(0, 1000)
    .pipe(takeUntilDestroyed())
    .subscribe({
      next: (res) => console.log('next res:', res),
      error: (error) => console.log('error:', error),
      complete: () => console.log('complete'),
    });
  ngOnDestroy(): void {
    console.log('ngOnDestroy (SEM AÇÃO)');
  }
}
