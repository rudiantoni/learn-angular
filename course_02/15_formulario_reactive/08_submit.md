# Curso de Angular 2 (v17+) Typescript do Básico ao Avançado

## 15.8. Submit
[[Home - Curso 2]](../../README.md#curso-2)<br />

- Diretório de arquivos: [08_arquivos](./08_arquivos/)
- Projetos
  - [Projeto 1](./08_arquivos/proj_01/) [(iniciado em)](#usando-ngsubmit)
- Conteúdo
  - [Usando NgSubmit](#usando-ngsubmit)

### Usando NgSubmit
[[Topo]](#)<br />

- Ver projeto: [Projeto 1](./08_arquivos/proj_01/)

Para fazer o envio do formulário, basta ligar o evento `ngSubmit` do `form` no template, a uma função que será invocada.

Nessa função, é só fazer a validação utilizando as propriedades padrão de validação do próprio `FormControl` e ler os valores de cada propriedade.

**Classe**
```typescript
// imports...
// validador personalizado...
function textValidator (): ValidatorFn {
  return (control: AbstractControl) => {
    if (control.value === true) {
      // Validação deu certo
      return null
    }
    // Validação deu errado
    return {textValidator: true}
  }
}

// cfg classe...
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

  //outras funções...
  
  submit(): void {
    console.log('valid', this.profileForm.valid)
    if (this.profileForm.valid) {
      console.log('value', this.profileForm.value)
    }
  }
}
```

**Template**
```html
<form [formGroup]="profileForm" (ngSubmit)="submit()">
  <!-- ... -->
  <button type="button">Ação personalizada</button>
  <button type="submit" [disabled]="!profileForm.valid">Enviar</button>
</form>
```
