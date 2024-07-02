# Curso de Angular 2 (v17+) Typescript do Básico ao Avançado

## 16.8. AfterContentChecked e AfterViewChecked
[[Home - Curso 2]](../../README.md#curso-2)<br />

- Diretório de arquivos: [08_arquivos](./08_arquivos/)
- Projetos
  - [Projeto 1](./08_arquivos/proj_01/) [(iniciado em)](#aftercontentchecked-e-afterviewchecked)
- Conteúdo
  - [AfterContentChecked e AfterViewChecked](#aftercontentchecked-e-afterviewchecked)

### AfterContentChecked e AfterViewChecked
[[Topo]](#)<br />

- Ver projeto: [Projeto 1](./08_arquivos/proj_01/)

O `AfterContentChecked` é chamado após o Angular verificar as alterações dos conteúdos dos componentes e suas visualizações filhas.

O `AfterViewChecked` é chamado após o Angular verificar as alterações das visualizações dos componentes e suas visualizações filhas.

`AfterContentChecked` e `AfterViewChecked` são executados em paralelo.

**Classe**
```typescript
// imports
// cfg componente...
export class LifeCycleComponent implements /*...*/ AfterContentChecked, AfterViewChecked {
  // outras funções...
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
}
```
