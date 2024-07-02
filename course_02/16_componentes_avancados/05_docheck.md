# Curso de Angular 2 (v17+) Typescript do Básico ao Avançado

## 16.5. DoCheck
[[Home - Curso 2]](../../README.md#curso-2)<br />

- Diretório de arquivos: [05_arquivos](./05_arquivos/)
- Projetos
  - [Projeto 1](./05_arquivos/proj_01/) [(iniciado em)](#docheck)
- Conteúdo
  - [DoCheck](#docheck)

### DoCheck
[[Topo]](#)<br />

- Ver projeto: [Projeto 1](./05_arquivos/proj_01/)

O DoCheck é executado sempre que é detectado alguma alteração de estado no componente angular.

**Classe**
```typescript
// imports...
// cfg componente...
export class LifeCycleComponent implements /*...*/ DoCheck {
  constructor(/*...*/private hostEl: ElementRef) {}
  /*...*/
  myText = signal('Rudi');
  ngDoCheck(): void {
    console.log('ngDoCheck');
    const p = (this.hostEl.nativeElement as HTMLElement).querySelector('#do-check-text')
    console.log(p)
  }
}
```

**Template**
```html
<h2>Lifecycle</h2>
<!-- ... -->
<h3>DoCheck</h3>
<p id="do-check-text">myText: {{ myText() }}</p>
<button (click)="myText.set('Texto novo')">Alterar texto</button>
```
