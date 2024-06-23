import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <p>TESTE QUALE</p>
    <router-outlet />
  `
})
export class AppComponent {}
