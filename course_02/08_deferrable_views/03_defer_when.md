# Curso de Angular 2 (v17+) Typescript do Básico ao Avançado

## 8.3. Defer: when
[[Home - Curso 2]](../../README.md#curso-2)<br />

- Diretório de arquivos: [03_arquivos](./03_arquivos/)
- Projetos
  - [Projeto 1](./03_arquivos/proj_01/) [(iniciado em)](#defer-when)
- Conteúdo
  - [Defer: when](#defer-when)

### Defer: when
[[Topo]](#)<br />

- Ver projeto: [Projeto 1](./03_arquivos/proj_01/)

Especifica uma condição imperativa como uma expressão que retorna um booleano.

Quando esta expressão se torna verdadeira, o espaço reservado é trocado pelo conteúdo carregado lentamente (o que pode ser uma operação assíncrona se as dependências precisarem ser buscadas).

> Vários `on` triggers são sempre condições *OR*. Da mesma forma, `on` misturado com `when` e `prefetch` também são condições *OR*.

**Classe**
```typescript
// Precisa importar o CommonModule ou AsyncPipe
public isTrue = false;

public loadingData$: Observable<string[]> = of([
  'item 1', 'item 2', 'item 3'
]).pipe(delay(3000))
```

**Template**
```html
<button (click)="isTrue = true">Tornar isTrue verdadeiro</button>

@defer (when isTrue) {
  <app-new-component />
} @placeholder {
  <p>Mostrar antes do carregamento.</p>
} @loading {
  <p>Carregando...</p>
} @error {
  <p>Erro no carregamento.</p>
}

<p>Usando operação assíncrona</p>

@defer (when loadingData$ | async) {
  <app-new-component />
} @placeholder {
  <p>Mostrar antes do carregamento.</p>
} @loading {
  <p>Carregando...</p>
} @error {
  <p>Erro no carregamento.</p>
}
```
