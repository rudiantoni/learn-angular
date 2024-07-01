# Curso de Angular 2 (v17+) Typescript do Básico ao Avançado

## 16.4. OnChanges e OnInit
[[Home - Curso 2]](../../README.md#curso-2)<br />

- Diretório de arquivos: [04_arquivos](./04_arquivos/)
- Projetos
  - [Projeto 1](./04_arquivos/proj_01/) [(iniciado em)](#onchanges-e-oninit)
- Conteúdo
  - [OnChanges e OnInit](#onchanges-e-oninit)

### OnChanges e OnInit
[[Topo]](#)<br />

- Ver projeto: [Projeto 1](./04_arquivos/proj_01/)

Quando o componente é criado, antes de disparar qualquer hook, é executado o construtor da classe, onde é recomendado fazer as injeções de dependências.

Após isso, é verificado o `ngOnChanges`, da interface `OnChanges`, que verifica se houve alguma alteração de entrada (por meio do decorator `@Input()`) e caso exista alguma alteração, esse hook é disparado.

O próximo hook a ser verificado é o `ngOnInit`, da interface `OnInit`, que é disparado após o componente ser inicializado. É recomendado utilizá-lo para fazer atualizações em propriedades (como definir valores iniciais) e principalmente requisitar dados de uma API.

**Classe (componente pai)**
```typescript
// imports...
@Component({
  // cfg componente...
  template: `
    <app-life-cycle [myNumber]="number" />
  `
})
export class AppComponent implements OnInit {
  number = 1;
  ngOnInit(): void {
    setInterval(() => {
      this.number++
    }, 1000)
  }
}
```

**Classe (componente filho)**
```typescript
// imports...
// cfg classe...
export class LifeCycleComponent implements OnChanges, OnInit {
  // Constrututor ou inicializador
  constructor(private fb: FormBuilder) {}
  
  // Changes detections
  @Input() myNumber = 0;
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
    if (changes['myNumber'].previousValue === 2) {
      alert('Deu bom, POR FAVOR CONFIRME LOGO')
    }
  }
  
  ngOnInit(): void {
    console.log('Componente inicializado, essa é uma boa hora para obter dados de alguma API.');
  }
}
```

**Template (componente filho)**
```html
<h2>Lifecycle</h2>
<p>myNumber: {{ myNumber }}</p>
```
