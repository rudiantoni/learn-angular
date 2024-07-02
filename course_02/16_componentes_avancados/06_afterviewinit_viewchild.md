# Curso de Angular 2 (v17+) Typescript do Básico ao Avançado

## 16.6. AfterViewInit e ViewChild
[[Home - Curso 2]](../../README.md#curso-2)<br />

- Diretório de arquivos: [06_arquivos](./06_arquivos/)
- Projetos
  - [Projeto 1](./06_arquivos/proj_01/) [(iniciado em)](#afterviewinit-e-viewchild)
- Conteúdo
  - [AfterViewInit e ViewChild](#afterviewinit-e-viewchild)

### AfterViewInit e ViewChild
[[Topo]](#)<br />

- Ver projeto: [Projeto 1](./06_arquivos/proj_01/)

Ele é chamado assim que a visualização do template do componente Angular e de todas as visualizações filhas terem sido inicializadas.

O decorator `@ViewChild` serve para acessar elementos da dom presentes no template do componente atual ou dos componentes filhos. Deve ser informado uma template variable nele.

**Classe**
```typescript
// imports...
// cfg componente...
export class LifeCycleComponent implements /*...*/ AfterViewInit {
  // outras funções ...
  @ViewChild('content') public content?: ElementRef
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    const text = (this.content?.nativeElement as HTMLParagraphElement).textContent;
    console.log(text);
  }
}
```

**Template**
```html
<h2>Lifecycle</h2>
<!--  -->
<h3>AfterViewInit</h3>
<p #content>Este é o conteúdo de texto que deve ser exibido no AfterViewInit</p>
```
