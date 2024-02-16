# Curso de Angular 2 (v17+) Typescript do Básico ao Avançado

## 6.3. Property binding
[[Home - Curso 2]](../../README.md#curso-2)<br />

- Diretório de arquivos: [03_arquivos](./03_arquivos/)
- Projetos
  - [Projeto 1](./03_arquivos/proj_01/) [(iniciado em)](#vinculação-de-propriedade)
- Conteúdo
  - [Vinculação de propriedade](#vinculação-de-propriedade)

### Vinculação de propriedade
[[Topo]](#)<br />

- Ver projeto: [Projeto 1](./03_arquivos/proj_01/)

A vinculação de propriedade (ou property binding) é classificada como sendo **UNIDIRECTIONAL (ONE WAY) DATA BINDING, CLASS -> TEMPLATE**, ou seja, uma vinculação de dados unidirecional, da classe para o template.

Ela permite vincular propriedades de elementos HTML a propriedades de componentes Angular. Usa a sintaxe `[propriedade]="valor"`. Por exemplo, `<input [value]="username">` vincula a propriedade `value` do elemento input à propriedade `username` do componente.

**Classe**
```typescript
public isDisabled: boolean = true;
public srcValue: string = 'https://angular.io/assets/images/logos/angular/shield-large.svg';
public srcName: string = 'John Doe';

constructor() {
  setTimeout(() => {
    this.srcName = 'Karate Kid';
  }, 3000)
}
```

**Template**
```html
<button [disabled]="isDisabled">Botão</button>
<img [src]="srcValue" [alt]="srcName" [title]="srcName"/>
<p>O valor do input abaixo será alterado 3000 ms (3s) após a página iniciar:</p>
<input disabled="true" type="text" [value]="srcName" />
```
