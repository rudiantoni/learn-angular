# Curso de Angular 2 (v17+) Typescript do Básico ao Avançado

## 16.2. Host elements
[[Home - Curso 2]](../../README.md#curso-2)<br />

- Diretório de arquivos: [02_arquivos](./02_arquivos/)
- Projetos
  - [Projeto 1](./02_arquivos/proj_01/) [(iniciado em)](#o-que-é)
- Conteúdo
  - [O que é](#o-que-é)
  - [Como Funciona o Host Element](#como-funciona-o-host-element)
  - [Método atual](#método-atual)
  - [Método antigo](#método-antigo)
  - [Acessando a DOM](#acessando-a-dom)

### O que é
[[Topo]](#)<br />

- Ver projeto: [Projeto 1](./02_arquivos/proj_01/)

Host elements referem-se aos elementos HTML no DOM que hospedam componentes Angular.

Quando você define um componente Angular, esse componente é associado a um elemento host no DOM onde ele será inserido e renderizado.

### Como Funciona o Host Element
[[Topo]](#)<br />

Quando um componente Angular é instanciado, ele é associado a um elemento host, que é um elemento HTML que atua como o ponto de montagem para o componente.

O Angular usa esse elemento para inserir o conteúdo do componente e aplicar a lógica de renderização.

### Método atual

Atualmente, para alterar atributos do elemento host, se utiliza o atributo `host` do decorator `Component`, ficando assim:

**Classe**
```typescript
// imports
@Component({
  // cfg componente...
  host: {
    role: 'button',
    '[attr.class]': 'class',
    '(document:keypress)': 'updateHostListener($event)'
  }
})
export class HostElementsComponent {
  class = "vida-fullstack";
  updateHostListener(event: KeyboardEvent) {
    console.log('event', event)
  }
}
```

### Método antigo

Em alguns projetos mais antigos, é necessário utilizar o decorator `HostBinding` e `HostListener`:

**Classe**
```typescript
@Component({
  // cfg componente...
})
export class HostElementsComponent {
  @HostBinding('role') hostComponentRole = 'button';
  @HostBinding('attr.class') hostComponentClass = 'vida-fullstack';
  @HostListener('document:keypress', ['$event']) updateHostListener(event: KeyboardEvent) {
    console.log('event', event)
  }
}
```

### Acessando a DOM

Também é possível utilizar o host element para acessar a DOM da página HTML.

Como é possível ter acesso a ele diretamente, também é possível localizar todos os outros elementos a partir dele.

Não só isso, mas também é possível adicionar classes, outros atributos e eventos, da mesma maneira que foi feito anteriormente, mas utilizando apenas o código.

**Classe**
```typescript
// imports...
// cfg componente...
export class HostElementsComponent {
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
```

**Template**
```html
<h2>Host elements</h2>

<div>
  <h4>Título da div</h4>
  <p id="text">Primeiro parágrafo da minha div</p>
  <p>Segundo parágrafo da minha div</p>
</div>

<button (click)="changeText()">Mudar texto</button>
```
