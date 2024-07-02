# Curso de Angular 2 (v17+) Typescript do Básico ao Avançado

## 16.9. OnDestroy e takeUntilDestroyed
[[Home - Curso 2]](../../README.md#curso-2)<br />

- Diretório de arquivos: [09_arquivos](./09_arquivos/)
- Projetos
  - [Projeto 1](./09_arquivos/proj_01/) [(iniciado em)](#ondestroy-e-takeuntildestroyed)
- Conteúdo
  - [OnDestroy e takeUntilDestroyed](#ondestroy-e-takeuntildestroyed)

### OnDestroy e takeUntilDestroyed
[[Topo]](#)<br />

- Ver projeto: [Projeto 1](./09_arquivos/proj_01/)

O `OnDestroy` é chamado antes de um componente ser destruído. Isso normalmente ocorre quando alguma diretiva `*ngif` ou controle de fluxo `@if` é verdadeira e passa a ser false, removendo assim da DOM, um conteúdo previamente adicionado.

**Classe (componente pai)**
```typescript
// imports...
@Component({
  // cfg componente...
  template: `
    @if(showComponent) {
      <app-life-cycle />
    }
    <button (click)="showComponent = !showComponent">(A) Alternar exibição LifeCycleComponent</button>
  `
})
export class AppComponent implements OnInit {
  showComponent: boolean = true
}
```

**Classe (componente filho)**
```typescript
// imports...
// cfg componente...
export class LifeCycleComponent implements /**/ OnDestroy {
  // outras funções...
  ngOnDestroy(): void {
    console.log('ngOnDestroy')
  }
}
```

Um caso de uso importante, é quando, se utilizando de `Observables`, há a necessidade da desinscrição desses objetos. Quando isso é feito em um componente, o mais recomendado é realizar essa desinscrição no hook `onDestroy`. Caso contrário, podem haver memory leaks na aplicação.

No exemplo abaixo, temos o caso de como realizar a desinscrição, observe que, caso isso não seja feito, mesmo que o componente seja destruído, o `Observable` continuará processando os sinais enviados pelo `timer()`, o que está completamente errado.

Mesmo que a nossa função de disparo continuasse enviando entradas (como se fossem requisições de API por exemplo), não deveríamos processar essas entradas após o componente ter sido destruído.

Abaixo está a maneira mais simples de se evitar este problema.

**Classe (componente filho)**
```typescript
// imports
// cfg componente...
export class LifeCycleComponent implements /*...*/ OnDestroy {
  // outras funções...
  private destroy$ = timer(0, 1000).subscribe({
    next: (res) => console.log('next res:', res),
    error: (error) => console.log('error:', error),
    complete: () => console.log('complete'),
  });
  ngOnDestroy(): void {
    console.log('ngOnDestroy')
    this.destroy$.unsubscribe();
  }
}
```

Caso não utilizemos o hook `OnDestroy`, podemos utilizar a função `takeUntilDestroyed()` através de um `pipe()`. Atente-se para sua importação, algumas IDE's não reconhecem essa função:

**Classe (componente filho)**
```typescript
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
// outros imports...
// cfg componente...
export class LifeCycleComponent implements /*...*/ OnDestroy {
  // outras funções...
  private destroy$ = timer(0, 1000).pipe(
    takeUntilDestroyed()
  ).subscribe({
    next: (res) => console.log('next res:', res),
    error: (error) => console.log('error:', error),
    complete: () => console.log('complete'),
  });
}
```

Note que, o operador `takeUntilDestroyed()` e o hook `OnDestroy` servem apenas para classes gerenciados pelo Angular, que possuem um ciclo de vida definido, ou seja, componentes, serviços, diretivas, etc.

Não é possível utilizá-los em classes regulares, para esses, deve ser utilizado o método padrão para finalizá-lo, seja com `complete()` ou `unsubscribe()`.
