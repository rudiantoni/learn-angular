# Curso de Angular 2 (v17+) Typescript do Básico ao Avançado

## 14.6. Form Submit
[[Home - Curso 2]](../../README.md#curso-2)<br />

- Diretório de arquivos: [06_arquivos](./06_arquivos/)
- Projetos
  - [Projeto 1](./06_arquivos/proj_01/) [(iniciado em)](#form-submit)
- Conteúdo
  - [Form Submit](#form-submit)

### Form Submit
[[Topo]](#)<br />

- Ver projeto: [Projeto 1](./06_arquivos/proj_01/)

Sempre que usar esta abordagem, é recomendado adicionar um botão com `type="submit"` especificado para que fique explícito que ele é o botão para envio do formulário. Principalmente se houver outros botões no formulário que não devem servir para enviá-lo.

No caso de existirem botões dentro do formulário que não são para o envio dos dados, estes devem OBRIGATORIAMENTE ser especificados com `type="button"`, caso contrário, todos os botões acionarão o envio dos dados.

No exemplo abaixo, também é possível analisar os diferentes usos para as opções no caso de um `select`.

**Classe**
```typescript
import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './template-driven-forms.component.html',
  styleUrl: './template-driven-forms.component.scss',
})
export class TemplateDrivenFormsComponent {
  listComidas = signal<Array<{nameFood: string, price: string}>>([
    {nameFood: 'X-salada', price: 'R$ 10'},
    {nameFood: 'X-bacon', price: 'R$ 11'},
    {nameFood: 'Coxinha', price: 'R$ 6'}
  ]);

  submitForm(form: NgForm) {
    console.log('Enviado form:')
    console.log('valid', form.valid)
    console.log('value', form.value);
  }

}
```

**Template**
```html
<p>Dados do formulário</p>
<p>value: {{ myForm.value }}</p>
<p>value json: {{ myForm.value | json }}</p>
<p>valid: {{ myForm.valid }}</p>

<form #myForm="ngForm" (ngSubmit)="submitForm(myForm)">
  ...
  <label>
    Nome:
    <input #name="ngModel" [ngModel]="name.value" type="text" name="inputName" required/>
  </label>
  <label>
    Feminino:
    <input #sex="ngModel" [ngModel]="sex.value" type="radio" name="radioSex" value="female" required />
  </label>
  <label>
    Masculino:
    <input #sex="ngModel" [ngModel]="sex.value" type="radio"  name="radioSex" value="male" required />
  </label>
  <label>
    Outros:
    <input #sex="ngModel" [ngModel]="sex.value" type="radio" name="radioSex" value="others" required />
  </label>
  <label>
    Angular:
    <input #techAngular="ngModel" [ngModel]="techAngular.value" type="checkbox" name="checkboxAngular" value="angular" />
  </label>
  <label>
    Vue:
    <input #techVue="ngModel" [ngModel]="techVue.value" type="checkbox" name="checkboxVue" value="vue" />
  </label>
  <label>
    React:
    <input #techReact="ngModel" [ngModel]="techReact.value" type="checkbox" name="checkboxReact" value="react" />
  </label>
  
  <p>Alimento opção A</p>
  <select #foodStatic="ngModel" ngModel name="foodStatic">
    <option value="">Selecione um alimento</option>
    <option value="X-salada">X-salada</option>
    <option value="X-bacon">X-bacon</option>
    <option value="Coxinha">Coxinha</option>
  </select>
  
  <p>Alimento opção B</p>
  <select name="foodStaticObj" #foodStaticObj="ngModel" ngModel>
    <option value="">Selecione um alimento</option>
    <option [ngValue]="{ nameFood: 'X-salada', price: 'R$ 10' }">
      X-salada
    </option>
    <option [ngValue]="{ nameFood: 'X-bacon', price: 'R$ 11' }">X-bacon</option>
    <option [ngValue]="{ nameFood: 'Coxinha', price: 'R$ 6' }">Coxinha</option>
  </select>
  
  <p>Alimento opção C</p>
  <select name="foodAuto" #foodAuto="ngModel" ngModel>
    <option value="">Selecione um alimento</option>
    @for(item of listComidas(); track item) {
    <option [value]="item.nameFood">{{ item.nameFood }}</option>
    }
  </select>

  <p>Alimento opção D</p>
  <select name="foodAutoObj" #foodAutoObj="ngModel" ngModel>
    <option value="">Selecione um alimento</option>
    @for(item of listComidas(); track item) {
    <option [ngValue]="item">{{ item.nameFood }}</option>
    }
  </select>

  <button type="submit" [disabled]="!myForm.valid">Enviar</button>
  <button type="button">Botão de ação adicional</button>
</form>
```
