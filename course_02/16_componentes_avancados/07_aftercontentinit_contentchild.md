# Curso de Angular 2 (v17+) Typescript do Básico ao Avançado

## 16.7. AfterContentInit e ContentChild
[[Home - Curso 2]](../../README.md#curso-2)<br />

- Diretório de arquivos: [07_arquivos](./07_arquivos/)
- Projetos
  - [Projeto 1](./07_arquivos/proj_01/) [(iniciado em)](#aftercontentinit-e-contentchild)
- Conteúdo
  - [AfterContentInit e ContentChild](#aftercontentinit-e-contentchild)

### AfterContentInit e ContentChild
[[Topo]](#)<br />

- Ver projeto: [Projeto 1](./07_arquivos/proj_01/)

Chamado após o Angular projetar elementos e suas visualizações filhas no DOM. É um bom momento para executar ações assim que o conteúdo estiver disponível.

Ele é executado paralelamente ao `AfterViewInit`.

**Classe (componente pai)**
```typescript
// imports...
@Component({
  // cfg componente...
  template: `
    <app-life-cycle>
      <p #textContent>Este é o conteúdo de texto que deve ser exibido no AfterContentInit</p>
    </app-life-cycle> 
  `
})
export class AppComponent{}
```

**Classe (componente filho)**
```typescript
// imports...
// cfg componente...
export class LifeCycleComponent implements /*...*/ AfterContentInit {
  // outras funções...
  @ContentChild('textContent') textContent?: ElementRef
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
    const text = (this.textContent?.nativeElement as HTMLParagraphElement).textContent;
    console.log(text);
  }
}
```

**Template (componente filho)**
```html
<h2>Lifecycle</h2>

<h3>OnChanges e OnInit</h3>
<p>myNumber: {{ myNumber }}</p>

<h3>DoCheck</h3>
<p id="do-check-text">myText: {{ myText() }}</p>
<button (click)="myText.set('Texto novo')">Alterar texto</button>

<h3>AfterViewInit</h3>
<p #content>Este é o conteúdo de texto que deve ser exibido no AfterViewInit</p>

<h3>AfterContentInit</h3>
<ng-content></ng-content>
```
