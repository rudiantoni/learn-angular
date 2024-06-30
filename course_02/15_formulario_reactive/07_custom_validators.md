# Curso de Angular 2 (v17+) Typescript do Básico ao Avançado

## 15.7. Custom Validators
[[Home - Curso 2]](../../README.md#curso-2)<br />

- Diretório de arquivos: [07_arquivos](./07_arquivos/)
- Projetos
  - [Projeto 1](./07_arquivos/) [(iniciado em)](#criando-e-usando-custom-validators)
- Conteúdo
  - [Criando e usando custom validators](#criando-e-usando-custom-validators)

### Criando e usando custom validators
[[Topo]](#)<br />

- Ver projeto: [Projeto 1](./07_arquivos/proj_01/)

Qualquer custom validator é na verdade uma função que retorna uma função de callback `ValidatorFn`.

O valor de retorno dessa função de callback determina o resultado da validação:
- Quando o retorno for `null`, é porque a validação indica que o valor está correto, ou seja, a validação deu certo.
- Quando o retorno NÃO for `null`, é porque a validação indica que o valor está errado, ou seja, a validação deu errado. Nestes casos, normalmente se passa algum objeto com algum valor, é possível enviar até mesmo mensagens para serem resgatadas posteriormente.

No template, os erros de validação podem ser resgatados atravpes da propriedade `errors`, do `FormControl`.

**Classe**
```typescript
// imports ...

function textValidator (): ValidatorFn {
  return (control: AbstractControl) => {
    // Validação deu certo
    // return null
    const hasUpperCase = /[A-Z]/.test(control.value);
    const hasNumber = /[0-9]/.test(control.value);

    if (hasUpperCase && hasNumber) {
      return null;
    }

    // Validação deu errado
    return {textValidator: true}
  }
}

// component class setup...
export class ReactiveFormsComponent {
  #fb = inject(FormBuilder);

  profileForm = this.#fb.group({
    name: ['', [Validators.required, textValidator()]],
    myStacks: this.#fb.group({
      front: ['Angular'],
      back: ['NodeJS'],
    }),
    myFavoriteFoods: this.#fb.array([['']]),
  });
  
  // other functions...
}
```

**Template**
```html
<h2>Reactive forms</h2>

<form [formGroup]="profileForm">
  <h3>FormControl</h3>

  <label>
    Nome:
    <input type="text" formControlName="name" required />
  </label>

  <h4>[formControlName] = name</h4>
  <p>value: {{ profileForm.get('name')?.value }}</p>
  <p>valid: {{ profileForm.get('name')?.valid }}</p>
  <p>dirty: {{ profileForm.get('name')?.dirty }}</p>
  <p>touched: {{ profileForm.get('name')?.touched }}</p>
  <p>errors: {{ profileForm.get('name')?.errors }}</p>
  <p>errors json: {{ profileForm.get('name')?.errors | json}}</p>
  <hr />
  <!-- ... -->
  <button type="submit" [disabled]="!profileForm.valid">Enviar</button>

</form>
```
