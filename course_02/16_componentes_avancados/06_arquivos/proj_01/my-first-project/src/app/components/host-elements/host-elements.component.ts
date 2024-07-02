import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'app-host-elements',
  standalone: true,
  imports: [],
  templateUrl: './host-elements.component.html',
  styleUrl: './host-elements.component.scss',
  //Método atual
  host: {
    role: 'button',
    '[attr.class]': 'class',
    '(document:keypress)': 'updateHostListener($event)',
  },
})
export class HostElementsComponent {
  // Método atual
  class = 'vida-fullstack';
  updateHostListener(event: KeyboardEvent) {
    console.log('event', event);
  }

  /*
  // Método antigo
  @HostBinding('role') hostComponentRole = 'button';
  @HostBinding('attr.class') hostComponentClass = 'vida-fullstack';
  @HostListener('document:keypress', ['$event']) updateHostListener(event: KeyboardEvent) {
    console.log('event', event)
  }
  */

  // Acessando o host element pela DOM
  constructor(private hostElRef: ElementRef) {}

  changeText(): void {
    const hostEl = this.hostElRef.nativeElement as HTMLElement
    const pElText = hostEl.querySelector('#text') as HTMLParagraphElement;
    console.log('host element', hostEl)
    console.log('p element, text', pElText);
    pElText.textContent = 'Esse texto foi alterado diretamente pela DOM através da classe angular';
  }
}
