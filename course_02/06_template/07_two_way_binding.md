# Curso de Angular 2 (v17+) Typescript do Básico ao Avançado

## 6.7. Two-way binding
[[Home - Curso 2]](../../README.md#curso-2)<br />

- Diretório de arquivos: [07_arquivos](./07_arquivos/)
- Projetos
  - [Projeto 1](./07_arquivos/proj_01/) [(iniciado em)](#vinculação-bidirecional)
- Conteúdo
  - [Vinculação bidirecional](#vinculação-bidirecional)

### Vinculação bidirecional
[[Topo]](#)<br />

- Ver projeto: [Projeto 1](./07_arquivos/proj_01/)

A vinculação bidirecional (ou two way binding) é classificada como uma **BIRECTIONAL (TWO WAY) DATA BINDING, TEMPLATE <-> CLASS**, ou seja, uma vinculação de dados bidirecional, do template para a classe e da classe para o template.

Ela combina property e event binding para criar uma via de mão dupla entre o modelo de dados do componente e a view. Utiliza a diretiva `[(ngModel)]`. Por exemplo, `<input [(ngModel)]="username">` mantém a propriedade username sincronizada com o valor do campo de entrada.

Para poder utilizar essa diretiva é necessário importar o `FormsModule` na classe.

**Classe**
```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {
  public country: string = "Brazil";

  public printCountry() {
    console.log(`country: ${this.country}`)
  }
}
```

**Template**
```html
<p>Lendo country: {{country}}</p>
<input type="text" [(ngModel)]="country" />
<button (click)="printCountry()">Exibe o country</button>
```
