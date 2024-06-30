# Curso de Angular 2 (v17+) Typescript do Básico ao Avançado

## 14.5. Form Select
[[Home - Curso 2]](../../README.md#curso-2)<br />

- Diretório de arquivos: [folder_name-nn_arquivos](./05_arquivos/proj_01/)
- Projetos
  - [Projeto N](./05_arquivos/proj_01/) [(iniciado em)](#form-select)
- Conteúdo
  - [Form Select](#form-select)
  - [Estático com valor nativo](#estático-com-valor-nativo)
  - [Estático com objetos](#estático-com-objetos)
  - [Automático com valor nativo](#automático-com-valor-nativo)
  - [Automático com objetos](#automático-com-objetos)

### Form Select
[[Topo]](#)<br />

- Ver projeto: [Projeto 1](./05_arquivos/proj_01/)

Ao lidar com o elemento `select`, a atribuição e leitura dos valores é um pouco diferente do que o normal.

Resumidamente, ao definirmos uma série de options, e formos utilizar property binding no `value` para capturar/atribuir o valor do elemento `option`, temos as seguintes regras para o seu uso:
- Utilizar `[value]` caso for capturar/atribuir algum valor nativo: string ou number;
- Utilizar `[ngValue]` caso for capturar/atribuir algum valor que é um objeto;

Veja os exemplos a seguir.

### Estático com valor nativo

Este select utiliza apenas valores diretamente no atributo `value`, gerado de maneira estática no html.

Neste modo, só é possível acessar os valores atribuídos ao atributo `value` do option.

**Template**
```html
<select name="foodStatic" #foodStatic="ngModel" ngModel>
  <option value="">Selecione um alimento</option>
  <option value="X-salada">X-salada</option>
  <option value="X-bacon">X-bacon</option>
  <option value="Coxinha">Coxinha</option>
</select>

<hr />
<p>value: {{ foodStatic.value }}</p>
<p>valid: {{ foodStatic.valid }}</p>
<p>dirty: {{ foodStatic.dirty }}</p>
<p>touched: {{ foodStatic.touched }}</p>
<hr />
```

### Estático com objetos
[[Topo]](#)<br />

Este select utiliza property binding no atributo `ngValue`, gerado através do TS no template.

Neste modo, é possível acessar os valores do objeto assim que a opção for escolhida.

Observe as diferenças principalmente no uso do binding por `ngValue` ao invés de `value`.

**Template**
```html
<select name="foodStaticObj" #foodStaticObj="ngModel" ngModel>
  <option value="">Selecione um alimento</option>
  <option [ngValue]="{ nameFood: 'X-salada', price: 'R$ 10' }">
    X-salada
  </option>
  <option [ngValue]="{ nameFood: 'X-bacon', price: 'R$ 11' }">X-bacon</option>
  <option [ngValue]="{ nameFood: 'Coxinha', price: 'R$ 6' }">Coxinha</option>
</select>

<hr />
<p>value: {{ foodStaticObj.value }}</p>
<p>json value: {{ foodStaticObj.value | json }}</p>
<p>nameFood: {{ foodStaticObj.value?.nameFood }}</p>
<p>price: {{ foodStaticObj.value?.price }}</p>
<p>valid: {{ foodStaticObj.valid }}</p>
<p>dirty: {{ foodStaticObj.dirty }}</p>
<p>touched: {{ foodStaticObj.touched }}</p>
<hr />
```

### Automático com valor nativo
[[Topo]](#)<br />

Este select utiliza property binding no atributo `value`, recebidos da classe.

Neste modo, só é possível acessar os valores atribuídos ao atributo `value` do `option`.

Observe que, ao utilizar valores nativos, podemos usar o binding no atributo `[value]`.

**Classe**
```typescript
import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './template-driven-forms.component.html',
  styleUrl: './template-driven-forms.component.scss',
})
export class TemplateDrivenFormsComponent {
  public listComidas = signal<Array<{nameFood: string, price: string}>>([
    {nameFood: 'X-salada', price: 'R$ 10'},
    {nameFood: 'X-bacon', price: 'R$ 11'},
    {nameFood: 'Coxinha', price: 'R$ 6'}
  ]);
}
```

**Template**
```html
<select name="foodAuto" #foodAuto="ngModel" ngModel>
  <option value="">Selecione um alimento</option>
  @for(item of listComidas(); track item) {
  <option [value]="item.nameFood">{{ item.nameFood }}</option>
  }
</select>

<hr />
<p>value: {{ foodAuto.value }}</p>
<p>valid: {{ foodAuto.valid }}</p>
<p>dirty: {{ foodAuto.dirty }}</p>
<p>touched: {{ foodAuto.touched }}</p>
<hr />
```

### Automático com objetos
[[Topo]](#)<br />

Este select utiliza property binding no atributo `ngValue`, recebidos da classe.

Neste modo, é possível acessar os valores do objeto assim que a opção for escolhida.

Observe as diferenças principalmente no uso do binding por `[ngValue]` ao invés de `[value]`.

**Classe**
```typescript
import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './template-driven-forms.component.html',
  styleUrl: './template-driven-forms.component.scss',
})
export class TemplateDrivenFormsComponent {
  public listComidas = signal<Array<{nameFood: string, price: string}>>([
    {nameFood: 'X-salada', price: 'R$ 10'},
    {nameFood: 'X-bacon', price: 'R$ 11'},
    {nameFood: 'Coxinha', price: 'R$ 6'}
  ]);

}
```

**Template**
```html
<select name="foodAutoObj" #foodAutoObj="ngModel" ngModel>
  <option value="">Selecione um alimento</option>
  @for(item of listComidas(); track item) {
  <option [ngValue]="item">{{ item.nameFood }}</option>
  }
</select>

<hr />
<p>value: {{ foodAutoObj.value }}</p>
<p>json value: {{ foodAutoObj.value | json }}</p>
<p>nameFood: {{ foodAutoObj.value?.nameFood }}</p>
<p>price: {{ foodAutoObj.value?.price }}</p>
<p>valid: {{ foodAutoObj.valid }}</p>
<p>dirty: {{ foodAutoObj.dirty }}</p>
<p>touched: {{ foodAutoObj.touched }}</p>
<hr />
```
