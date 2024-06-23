# Curso de Angular 2 (v17+) Typescript do Básico ao Avançado

## 12.1. Pipes 1
[[Home - Curso 2]](../../README.md#curso-2)<br />

- Diretório de arquivos: [01_arquivos](./01_arquivos/)
- Projetos
  - [Projeto 1](./01_arquivos/proj_01/) [(iniciado em)](#o-que-são-pipes)
- Conteúdo
  - [O que são pipes](#o-que-são-pipes)
  - [Como usar pipes](#como-usar-pipes)
  - [Exemplo de utilização simples com pipe nativo (DatePipe)](#exemplo-de-utilização-simples-com-pipe-nativo-datepipe)
  - [Exemplo de utilização simples com pipe nativo com parâmetros (DatePipe)](#exemplo-de-utilização-simples-com-pipe-nativo-com-parâmetros-datepipe)
  - [Utilizando outros pipes](#utilizando-outros-pipes)

### O que são pipes
[[Topo]](#)<br />

- Ver projeto: [Projeto 1](./01_arquivos/proj_01/)

Pipes no Angular são uma forma poderosa de transformar dados diretamente nas templates. Eles permitem que você altere a aparência dos dados sem modificá-los diretamente na lógica do componente. Pipes podem ser usados para realizar diversas operações, como formatação de números, datas, manipulação de strings, entre outras.

### Como usar pipes
[[Topo]](#)<br />

Nas versões mais antigas do Angular, os pipes nativos estão disponíveis através do módulo CommonModule, porém atualmente é possível importar apenas o pipe utilizado em questão.

### Exemplo de utilização simples com pipe nativo (DatePipe)
[[Topo]](#)<br />

**Classe**
```typescript
@Component({
  imports: [DatePipe],
  templateUrl: './angular-pipes.component.html',
})
export class AngularPipesComponent {
  currentDate = signal(new Date());
}
```

**Template**
```html
<p>{{ currentDate() | date }}</p>
```

### Exemplo de utilização simples com pipe nativo com parâmetros (DatePipe)
[[Topo]](#)<br />

**Template**
```html
<p>{{ currentDate() | date: 'short' }}</p>

<p>{{ currentDate() | date: 'dd/MM/yyyy' }}</p>
```

### Utilizando outros pipes
[[Topo]](#)<br />

#### UpperCasePipe

**Classe**
```typescript
@Component({
  imports: [UpperCasePipe],
  templateUrl: './angular-pipes.component.html',
})
export class AngularPipesComponent {
}
```

**Template**
```html
<p>{{ "rudi antoni" | uppercase }}</p>
```

#### LowerCasePipe

**Classe**
```typescript
@Component({
  imports: [LowerCasePipe],
  templateUrl: './angular-pipes.component.html',
})
export class AngularPipesComponent {
}
```

**Template**
```html
<p>{{ "RUDI ANTONI" | lowercase }}</p>
```

#### JsonPipe

**Classe**
```typescript
@Component({
  imports: [JsonPipe],
  templateUrl: './angular-pipes.component.html',
})
export class AngularPipesComponent {
  obj = signal({name: 'Rudi Antoni'});
}
```

**Template**
```html
<p>Obj sem JsonPipe: {{ obj() }}</p>
<p>Obj com JsonPipe: {{ obj() | json }}</p>
```

#### AsyncPipe

**Classe**
```typescript
@Component({
  imports: [AsyncPipe],
  templateUrl: './angular-pipes.component.html',
})
export class AngularPipesComponent {
  loadingData$: Observable<string[]> = of([
    'item1', 'item2', 'item3'
  ]).pipe(delay(500));
}
```

**Template**
```html
<p>LoadingData sem AsyncPipe: {{ loadingData$ }}</p>
<p>LoadingData com AsyncPipe: {{ loadingData$ | async }}</p>
```
