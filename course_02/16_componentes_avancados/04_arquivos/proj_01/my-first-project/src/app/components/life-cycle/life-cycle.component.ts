import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-life-cycle',
  standalone: true,
  imports: [],
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.scss',
})
export class LifeCycleComponent implements OnChanges, OnInit {
  // Constrututor ou inicializador
  constructor(private fb: FormBuilder) {}
  
  // Changes detections
  @Input() myNumber = 0;
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
    if (changes['myNumber'].previousValue === 2) {
      alert('Deu bom, POR FAVOR CONFIRME LOGO')
    }
  }
  
  ngOnInit(): void {
    console.log('Componente inicializado, essa é uma boa hora para obter dados de alguma API.');
  }
}
