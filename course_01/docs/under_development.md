# Under development

- Conteúdo
  - [O que é um child component (componente filho)](#o-que-é-um-child-component-componente-filho)
    - [Custom event binding (conexão de evento personalizado)](#custom-event-binding-conexão-de-evento-personalizado)
      - [Custom property binding: @Input (dados do componente pai para o filho)](#custom-property-binding-input-dados-do-componente-pai-para-o-filho)
      - [Custom event binding: @Output (dados do componente filho para o pai)](#custom-event-binding-output-dados-do-componente-filho-para-o-pai)

## O que é um child component (componente filho)

Quando temos um componente dentro de outro, temos uma relação de componente pai e filho.

Ao componente de dentro, o chamamos de filho, portanto, ao de fora, o chamamos de pai.

### Custom event binding (conexão de evento personalizado)

Nós podemos passar dados da classe do componente para a view template e vice-versa usando property binding, string interpolation e event binding.

Nós também podemos passar dados de um componente pai para um componente filho e vice-versa. Usamos os decoradores @Input e @Output.

O decorador @Input serve para passar dados de um componente pai para um componente filho.

O decorador @Output serve para passar dados de um componente filho para um componente pai.

#### Custom property binding: @Input (dados do componente pai para o filho)

Nós podemos passar dados de um componente pai para um componente filho usando o decorador @Input.

Nós também o chamamos de custom property binding porque aqui nós conectarmos propriedades personalizadas de uma classe de um componente filho com a propriedade ou método de uma classe de um componente pai.

Para isso, imaginemos o seguinte caso, temos 2 componentes: app-courses e app-filter. O componente app-filter está dentro do componente app-courses, portanto, o componente app-filter é filho do componente app-courses, e o componente app-courses é pai do componente app-filter.

Primeiro, devemos decorar as propriedades na classe do componente filho que receberão os dados do pai.

Componente filho:

```javascript
@Input() all: number = 0;
@Input() free: number = 0;
@Input() premium: number = 0;
```

Agora, vamos criar os métodos no componente pai que retornarão os valores para o componente filho.

Componente pai:

```javascript
getAllCourses() {return 9}
getFreeCourses() {return 3}
getPremiumCourses() {return 6}
```

Agora, faremos o custom property binding. Neste caso, vamos fazer o bind das propriedades all, free e premium do componente filho, com os respectivos métodos da classe pai. Para isso, vamos na view template do componente pai, e vamos fazer o bind onde o componente filho está sendo chamado. Aqui é onde fazemos as conexões, as propriedades do elemento filho ficam sendo atributos do HTML com property binding (envoltos por \[\]), e o seu valor fica sendo uma expressão válida do typescript, que neste caso são os métodos da classe pai.

View pai:

```html
<div>
  <app-filter
    [all]="getAllCourses()"
    [free]="getFreeCourses()"
    [premium]="getPremiumCourses()">
  </app-filter>
</div>
```

Também é possível usar um alias, para isso basta adicionar o alias como parâmetro do decorador @Input, e fazer property binding para esse novo alias na view do pai:

```html
<div>
  <app-filter
    [total]="getAllCourses()"
  >
  </app-filter>
</div>
```

```javascript
@Input('total') all: number = 0;
```

#### Custom event binding: @Output (dados do componente filho para o pai)

Nós podemos passar dados de um componente filho para um componente pai usando o decorador @Output.

Nós também o chamamos de custom event binding porque aqui nós conectamos eventos personalizados de uma classe de um componente pai com a propriedade ou método de uma classe de um componente filho.

Para isso, imaginemos o seguinte caso, temos 2 componentes: app-courses e app-filter. O componente app-filter está dentro do componente app-courses, portanto, o componente app-filter é filho do componente app-courses, e o componente app-courses é pai do componente app-filter.

Primeiro, vamos criar dentro da view filho, um two way data binding com ngModel. Isso serve para que os inputs type radio iniciem com um valor padrão definido pelo componente da view, e também possam ser alterados pela view. Ou seja, se você não quisesse definir um valor inicial, poderíamos apenas ter usado um property binding. Mas nesse caso o filtro não ocorreria ao carregar a página.

Lembre-se, para usar o ngModel deve ser feito a importação no app.module.ts do FormsModule, e ele deve ser inserido no array de imports.

Componente filho:

```javascript
selectedRadioButtonValue: string = 'All';
```

View filho:

```html
<input type="radio" name="filter" value="All" [(ngModel)]="selectedRadioButtonValue" />
<input type="radio" name="filter" value="Free" [(ngModel)]="selectedRadioButtonValue" />
<input type="radio" name="filter" value="Premium" [(ngModel)]="selectedRadioButtonValue" />
```

Agora, devemos criar um evento no componente filho e definir o tipo de dado que o evento vai emitir, nesse caso é string. Também devemos decorá-lo com @Output:

Componente filho:

```javascript
@Output() filterRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();
```

Agora, ainda no componente filho, devemos criar um método que será o responsável por emitir, ou disparar o evento. Quando ele for emitido, serão enviados alguns dados com ele, que será a string da variável selectedRadioButtonValue previamente utilizada:

> Foi deixado um console.log() para que seja possível testar antes de continuarmos.

Componente filho:

```javascript
onRadioButtonSelectionChanged() {
  this.filterRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue)
  console.log(this.selectedRadioButtonValue)
}
```

Agora, precisamos indicar quando o método onRadioButtonSelectionChanged será chamado, neste caso, ele será chamado quando alterar-mos os radio buttons:

View filho:

```html
<input type="radio" name="filter" value="All" [(ngModel)]="selectedRadioButtonValue" (change)="onRadioButtonSelectionChanged()" />
<input type="radio" name="filter" value="Free" [(ngModel)]="selectedRadioButtonValue" (change)="onRadioButtonSelectionChanged()" />
<input type="radio" name="filter" value="Premium" [(ngModel)]="selectedRadioButtonValue" (change)="onRadioButtonSelectionChanged()" />
```

No componente pai, vamos criar uma propriedade apenas para atribuir o valor que o evento enviar, e um método que será chamado quando esse evento for disparado:

Componente pai:

```javascript
selectedCourseFilterRadioButton: string = 'All';

onFilterRadioButtonChanged(data: string) {
  this.selectedCourseFilterRadioButton = data;
}
```

Por último, na view pai, vamos fazer o bind do evento criado no componente filho, para o método que acabamos de criar no componente pai passando os dados do evento, exatamente da mesma maneira que fazemos o bind de um evento HTML:

View pai:

```html
<app-filter (filterRadioButtonSelectionChanged)="onFilterRadioButtonChanged($event)"></app-filter>
```
