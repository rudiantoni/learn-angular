# Curso de Angular 2 (v17+) Typescript do Básico ao Avançado

## 14.2. Form Input
[[Home - Curso 2]](../../README.md#curso-2)<br />

- Diretório de arquivos: [02_arquivos](./02_arquivos/proj_01/)
- Projetos
  - [Projeto 1](./02_arquivos/proj_01/) [(iniciado em)](#formulário-simples-com-binding-loop)
- Conteúdo
  - [Formulário simples com binding loop](#formulário-simples-com-binding-loop)
  - [O NgModel](#o-ngmodel)

### Formulário simples com binding loop
[[Topo]](#)<br />

- Ver projeto: [Projeto 1](./02_arquivos/proj_01/)

Comportamento: ao digitar algum texto no input, o valor é automaticamente exibido em `name.value`.

**Classe**
```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './template-driven-forms.component.html',
  styleUrl: './template-driven-forms.component.scss',
})
export class TemplateDrivenFormsComponent {}
```

**Template**
```html
<h2>Template driven forms</h2>
<form>
  <label>
    Nome:
    <input
      type="text"
      name="inputName"
      #name="ngModel"
      [ngModel]="name.value"
      required
    />
  </label>

  <hr />
  <p>name: {{name.value}}</p>
  <p>valid: {{name.valid}}</p>
  <p>dirty: {{name.dirty}}</p>
  <p>touched: {{name.touched}}</p>
  <hr />
</form>
```

### O NgModel
[[Topo]](#)<br />

Os valores `.value`, `.valid`, `.dirty` e `.touched` associados a `name` são propriedades do objeto NgModel em Angular. Quando você utiliza `#name="ngModel"` no template, está criando uma referência local chamada `name` que representa a instância do NgModel associada ao input. Essas propriedades fornecem informações sobre o estado do campo:

- `value`: O valor atual do campo.
- `valid`: Indica se o campo é válido de acordo com as validações aplicadas.
- `dirty`: Indica se o usuário já interagiu com o campo e alterou seu valor.
- `touched`: Indica se o campo foi focado e depois desfocado, mesmo sem alterar seu valor.
- `invalid`: Indica se o campo é inválido.
- `pristine`: Indica se o campo nunca foi modificado pelo usuário.
- `untouched`: Indica se o campo nunca foi focado pelo usuário.
- `errors`: Um objeto que contém os erros de validação, caso existam.
- `status`: Indica o estado do campo, como "VALID" ou "INVALID".
- `pending`: Indica se há uma validação assíncrona pendente.

Essas propriedades ajudam a monitorar e reagir às mudanças e ao estado do formulário no template, criar validações dinâmicas e a melhorar a interação com o usuário nos formulários.
