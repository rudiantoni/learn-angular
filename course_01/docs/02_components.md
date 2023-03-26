# Componentes

- Conteúdo
  - [Criar um novo componente manualmente](#criar-um-novo-componente-manualmente)
  - [Criar um novo componente usando o Angular CLI](#criar-um-novo-componente-usando-o-angular-cli)
  - [Propriedade do @Component: template](#propriedade-do-component-template)
  - [Propriedade do @Component: styles](#propriedade-do-component-styles)
  - [Usando Bootstrap com Angular](#usando-bootstrap-com-angular)
  - [Propriedade do @Component: selector](#propriedade-do-component-selector)
    - [Seletor como atributo HTML](#seletor-como-atributo-html)
    - [Seletor como classe CSS](#seletor-como-classe-css)
  - [O que é data binding (conexão de dados)](#o-que-é-data-binding-conexão-de-dados)
    - [One way data binding (conexão de dados unidirecional)](#one-way-data-binding-conexão-de-dados-unidirecional)
      - [String interpolation (interpolação de string): do componente para a view](#string-interpolation-interpolação-de-string-do-componente-para-a-view)
      - [Property binding (conexão de propriede): do componente para a view](#property-binding-conexão-de-propriede-do-componente-para-a-view)
      - [Event binding (conexão de eventos): da view para o componente](#event-binding-conexão-de-eventos-da-view-para-o-componente)
    - [Two way data binding (conexão de dados bidirecional)](#two-way-data-binding-conexão-de-dados-bidirecional)
  - [O que são directives (diretivas)](#o-que-são-directives-diretivas)
    - [Structural directive (diretiva de estrutura)](#structural-directive-diretiva-de-estrutura)
    - [Attribute directive (diretiva de atributo)](#attribute-directive-diretiva-de-atributo)
  - [ngFor directive](#ngfor-directive)
  - [ngStyle directive](#ngstyle-directive)
  - [ngIf directive](#ngif-directive)
  - [ngClass directive](#ngclass-directive)

## Criar um novo componente manualmente

- Para começar a criar um novo componente chamado container
- Crie uma nova pasta dentro do app chamado: container
- Crie os seguintes arquivos na nova pasta:
  - container.component.css
  - container.component.html
  - container.component.ts
- Anote a classe (named as ContainerComponent) do arquivo container.component.ts com @Component, do @angular/core. Fornecendo os seguintes parâemetros:
  - selector: Elemento html que será substituído por esse componente.
  - templateUrl: Modelo de visualização (template view) do componente, apenas defina o arquivo HTML.
  - styleUrls: Um dos arquivos de estilo a serem aplicados no componente, apenas define o arquivo CSS.
- Importe a classe do componente anotado por @Component no arquivo app.module.ts, adicionando ele ao array declarations.

```javascript
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
```

```javascript
@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    ...
  ],
  ...
})
export class AppModule { }
```

## Criar um novo componente usando o Angular CLI

- Abra o terminal dentro da pasta raiz do projeto.
- Use o comando `ng generate component component-name`
  - Atalho `ng g c component-name`
- O Angular CLI will gerará o novo componente dentro da pasta src/app com todos os arquivos necessários e aplicará as mudanças ao app.module.ts.

## Propriedade do @Component: template

Na anotação @Component, a propriedade templateUrl apontará um arquivo html como um "template view", enquanto a propriedade template criará todo o HTML.

Fazer isso tem suas desvantagens:

1. Erros na sintaxe HTML não serão exibidos na IDE/Editor (exceto com o uso de plugins) enquanto for uma string válida, você só os verá ocorrendo no tempo de compilação.
2. Mistura de códifo HTML com TS, o que não é uma boa prática.

```javascript
@Component({
  selector: 'app-notification',
  template: `<div>
              <p>This website uses cookies to provide better user experience.</p>
            </div>`,
  styleUrls: ['./notification.component.css']
})
```

## Propriedade do @Component: styles

Em vez de usar arquivos CSS externos com a propriedade styleUrls, você pode usar a propriedadesStyles para escrever estilos diretamente com CSS.

Como a propriedade styles recebe um array, você precisará fornecer cada seletor CSS como um item desse array.

Mas lembr-se que teremos as mesmas desvantagens mostradas na propriedade template:

1. Erros na sintaxe CSS não serão exibidos na IDE/Editor (exceto com o uso de plugins) enquanto for um string array válido, você só os verá ocorrendo no tempo de compilação.
2. Mistura de códifo CSS com TS, o que não é uma boa prática.

```javascript
@Component({
  selector: 'app-notification',
  template: `<div>
              <p>This website uses cookies to provide better user experience.</p>
            </div>`,
  styles: ['div{margin: 10px 0px; padding: 10px 20px; background-color: #FAD7A0; text-align: center;}', 'p{font-size: 14px;}']
})
```

## Usando Bootstrap com Angular

Primeiro precisaremos instalar a dependências com npm. Desta vez iremos salvá-la, pois precisaremos apontar para arquivos dentro de node_modules:

- `npm install --save bootstrap`
  - Se você quiser, você pode selecionar outra versão usando `npm install --save bootstrap@version` substituindo version com um núemro indicando a versão. Se você substituir com a palavra latest, o resultado será o mesmo que omití-la, pois esse já é o comportamento padrão.

Procure pelo arquivo bootstrap.min.css em node_modules, ele deve estar em: node_modules/bootstrap/dist/css/bootstrap.min.css.

Atualize a propriedade projects.\[projectName\].architect.build.options.styles no seu arquivo angular.json. Como ela precisa de um array de strings, adicione o caminho completo do arquivo como um elemento desse array:

```json
{
  ...
  "projects": {
    "angular-first-component": {
      ...
      "architect": {
        "build": {
          ...
          "options": {
            ...
            "styles": [
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "src/styles.css"
            ],
            ...
          },
          ...
        },
        ...
      }
    }
  }
}
```

## Propriedade do @Component: selector

Normalmente no atributo selector, nós usamos uma tag HTML, mas além disso, podemos usar atributos HTML e classes CSS como selectores de componente.

### Seletor como atributo HTML

Primeiro altere o arquivo \*.component.ts, indicando o atributo HTML a ser usado entre colchetes

```javascript
selector: '[app-nav]'
```

Segundo, altere o template HTML aonde você chama este componente:

```html
<!-- <app-nav></app-nav> -->
<div app-nav></div>
```

### Seletor como classe CSS

Primeiro altere o arquivo \*.component.ts, indicando a class CSS a ser usada com o seletor de classes do CSS:

```javascript
selector: '.app-nav'
```

Segundo, altere o template HTML aonde você chama este componente:

```htm
<!-- <app-nav></app-nav> -->
<!-- <div app-nav></div> -->
<div class="app-nav"></div>
```

## O que é data binding (conexão de dados)

Data binding no Angular nos permite se comunicar entre uma classe de componente e seu template HTML correspondente.

Component class:

```javascript
export class MyComponent {
  title = 'eShopping';
  slogan = 'Your one shop shop';
  display = false;

  onClick() {
    this.display = true
  }
}
```

View template:

```html
<div class="header">
  <div>{{ title }}</div>
  <div>{{ slogan }}</div>
  <button (click)="onClick()">Show/Hide</button>
  <div [hidden]="display">
    <p>Display this content</p>
  </div>
</div>
```

O data binding pode ser classificado de duas maneiras: one way data binding ou two way data binding.

### One way data binding (conexão de dados unidirecional)

Um one way data binding ocorre quando podemos acessar uma propriedade da classe do componente no view template html.

Isto pode ser alcançado através de:

- String interpolation: `{{ data }}`
- Property binding: `[property] = data`

Neste caso, o fluxo ocorre da classe do componente para a view template html.

Ele também ocorre quando podemos acessar um valor do view template html em uma propriedade da classe do componente.

Isto pode ser alcançado através de:

- Event binding: `(data) = "expression"`

Neste caso, o fluxo ocorre da view template html para a classe do componente.

#### String interpolation (interpolação de string): do componente para a view

String interpolation no Angular é usado para conectar dados da classe do compoenent para a view template. Isso significa que os dados fluem do componente para a view.

- String interpolation: `{{ data }}`

Componente:

```javascript
export class HeaderComponent {
  slogan: string = 'Your one stop shop for everything.';
}
```

View:

```html
<h2>{{ slogan }}</h2>
```

A string interpolation não é limitado a apenas propriedades, você pode utilizar qualquer método ou propriedade disponível no componente, bem como executar qualquer expressão válida para o typescript:

Componente:

```javascript
export class HeaderComponent {
  slogan: string = 'Your one stop shop for everything.';
  getSlogan(): string {
    return this.slogan;
  }
}
```

View:

```html
<h2>{{ 23+56+32-53 }}</h2>
<h2>{{ getSlogan() }}</h2>
```

#### Property binding (conexão de propriede): do componente para a view

O property binding é usado para conectar uma propriedade (atributo) de um elemento HTML a uma propriedade ou método de uma classe de componente.

O property binding não é limitado a apenas propriedades, você pode utilizar qualquer método ou propriedade disponível no componente, bem como executar qualquer expressão válida para o typescript desde que esteja dentro de aspas duplas (""):

- Property binding: `[property] = data`

Componente:

```javascript
export class HeaderComponent {
  source: string = '/assets/shopping.jpg'
}
```

View:

```html
<img [src]="source" height="240" width="320" />
```

Outro exemplo de property binding:

Componente:

```javascript
export class HeaderComponent {
  displayNotification: boolean = true;
}
```

View:

```html
<div class="alert alert-success" [hidden]="!displayNotification">
  <p>This website uses cookies to provide better user experience.</p>
</div>
```

#### Event binding (conexão de eventos): da view para o componente

O event binding nos permite conectar os eventos de uma página da web para propriedades ou métodos de uma classe de componente. Usando o event binding nós podemos passar dados da view para o componente.

- Event binding: `(data) = "expression"`

Component:

```javascript
export class SearchComponent {
  searchValue: string = '';
  changeSearchValue(eventData: Event) {
    this.searchValue = (<HTMLInputElement>eventData.target).value;
    console.log(this.searchValue);
  }
}
```

View:

```html
<input type="text" (input)="changeSearchValue($event)" />
```

### Two way data binding (conexão de dados bidirecional)

Um two way data binding conecta dados da classe do componente para a view template html e da view template html para a classe do componente. Esta é uma combinação do property binding e o event binding.

Para poder usar o two way data binding, é necessário usar a diretiva ngModel dentro da view, sendo assim, só é possível utilizá-lo importando o FormsModule no módulo do componente (app.module.ts) e o configurando como import:

Módulo:

```javascript
// ...
import { FormsModule } from '@angular/forms';

@NgModule({
  // ...
  imports: [
    // ...
    FormsModule
  ],
  // ...
})
export class AppModule { }
```

Componente:

```javascript
export class SearchComponent {
  searchValue: string = 'Mobile';
  changeSearchValue(eventData: Event) {
    this.searchValue = (<HTMLInputElement>eventData.target).value
  }
}
```

View:

```html
<input type="text" [(ngModel)]="searchValue" />
```

Assim assim que o componente for renderizado, o elemento input será populado com os dados iniciais da variável, mas ela tambem será alterada quando o elemento input for alterado no cliente.

Então, esse valor é tanto alterado pelo componente quando pela view.

## O que são directives (diretivas)

Diretivas são simplesmente instruções para o DOM.

Os componentes são um exemplo de diretivas.

Da mesma maneira que os componentes, as diretivas também podem ser usadas como elementos HTML, atributos HTML ou classes CSS por causa de seus seletores.

No componente a boa prática recomendada é usar o seletor de elemento HTML, já nas diretivas é recomendado o uso como atributo HTML.

Nós podemos criar nossas própries diretivas, mas o Angular nos fornece um conjunto padrão: ngIf, ngFor, ngClass, ngStyle, etc.

View:

```html
<div changeDivGreen >This is a div element.</div>
```

Directive:

```javascript
@Directive({
  selector: '[changeDivGreen]'
})
export class ChangeDivGreen {

}
```

Uma diretiva pode ser classificada em 2 tipos: structural directive e attribute directive.

### Structural directive (diretiva de estrutura)

Altera a view de uma webpage ao adicionar ou remover elementos DOM de uma página web.

Não é possível usar mais de uma diretiva estrutural em um mesmo elemento HTML.

Todas as diretivas estruturais devem ser precedidas por um asterisco (\*) quando forem declaradas na view. Ex.: \*ngFor.

### Attribute directive (diretiva de atributo)

Usado como um atributo em um elemento existente de uma webpage existente para alterar sua exibição e comportamento.

## ngFor directive

A diretiva ngFor é uma diretiva estrutural. Isso significa que ngFor manipula o DOM através da adição ou remoção de elementos.

A diretiva ngFor é usada para repetir uma parte de um template HTML uma vez para cada item de uma lista iterável.

O elemento que se repete na view HTML é o elemento onde o ngFor está presente.

```javascript
<div *ngFor="let item of [1,2,3]" >
    <p>Number is: {{ item }}</p>
</div>
```

Também é possível iterar em uma lista de objetos:

```javascript
<div *ngFor="let item of [{nm: 1, lt: 'a'},{nm: 2, lt: 'b'},{nm: 3, lt: 'c'}]" >
    <p>Number is: {{ item.nm }}, Letter is {{ item.lt }}</p>
</div>
```

Para iterar em listas do componente:

Componente:

```javascript
products = [
  {nm: 1, lt: 'a'},
  {nm: 2, lt: 'b'},
  {nm: 3, lt: 'c'},
  {nm: 4, lt: 'd'},
  {nm: 5, lt: 'e'}
]
```

View:

```html
<div *ngFor="let p of products">
  <p>Number is: {{ item.nm }}, Letter is {{ item.lt }}</p>
</div>
```

Se você precisar do índice da iteração na view, é possível assim:

```html
<div *ngFor="let p of products; let i = index">
  <p>Index: {{ i }}</p>
  <p>Number is: {{ item.nm }}, Letter is {{ item.lt }}</p>
</div>
```

## ngStyle directive

A diretiva ngStyle é uma diretiva de atributo, ou seja ela altera a exibição e/ou o comportamento de um elemento no DOM.

A diretiva ngStyle é usada para definir uma estilização CSS dinamicamente para um elemento HTML baseada em uma dada expressão typescript.

No exemplo abaixo, temos uma diretiva ngFor iterando sobre a variável producs do componente, que é uma lista de objetos. Segundo o código da diretiva ngStyle, toda vez que a propriedade available do objeto iterado for exatamente igual a Available, o valor da propriedade css será green, caso o contrário será red.

```html
<div *ngFor="let p of products; let i = index">
  <div [ngStyle]="{color: p.available === 'Available' ? 'green' : 'red'}" >{{ p.available }}</div>
</div>
```

## ngIf directive

A diretiva ngIf é uma diretiva estrutural. Isso significa que ngFor manipula o DOM através da adição ou remoção de elementos.

A diretiva ngIf é usada para adicionar ou remover elementos de uma página view baseada em uma dada condição.

Se a condição atribuída ao ngIf retornar true, o elemento no qual o ngIf está sendo usado será adicionado a webpage. Caso contrário, se a condição retornar false, ele removerá o elemento da webpage.

No exemplo abaixo, o elemento span só será inserido na página quando a variável searchValue (do componente) não for vazia e não conter apenas espaços em branco.

```javascript
searchValue: string = '';
```

```html
<span *ngIf="searchValue !== '' && searchValue.trim() !== ''">You searched for "{{ searchValue }}"</span>
```

Com o uso do elemento ng-template, se torna possível indicar um elemento que será renderizado caso a condição do ngIf seja falsa e o elemento em que ele está não renderize. Para isso, basta identificarmos um elemento ng-template com um nome usando a cerquilha (\#) e chamar esse nome na condição else no ngIf.

No exemplo abaixo, quando a variável available for Available, o ngIf do botao Buy Now será verdadeiro, e ele será renderizado. Agora, quando a variável available retornar um valor diferente de Available, o ngIf será falso e será chamado o else, que nesse caso está ancorado ao elemento ng-template através do identificador notifyMe, e renderizará todo o conteúdo do ng-template notifyMe, que nesse caso é só o botão Notify me.

```javascript
available: string = 'Not Available';
```

```html
<button class="btn btn-warning" *ngIf="available === 'Available'; else notifyMe">Buy Now</button>
<ng-template #notifyMe >
  <button class="btn btn-danger">Notify me</button>
</ng-template>
```

## ngClass directive

A diretiva ngClass é uma diretiva de atributo, ou seja ela altera a exibição e/ou o comportamento de um elemento no DOM.

A diretiva ngClass é usada para adicionar uma classe CSS dinamicamente para um elemento em uma webpage.

Passando a classe como uma propriedade de um objeto (por isso que classes com hífens precisam ser strings aqui), o valor seria a condição. Se a condição for verdadeira, a classe passada será atribuída ao elemento, caso contrário não.

```css
.change-background {
    background-color: #FAD7A0;
}
```

```javascript
export class SearchComponent {
  searchValue: string = '';
}
```

```html
<div class="normal-div" [ngClass]="{'change-background': searchValue !== '' && searchValue.trim() !== ''}">
</div>
```

Nesse caso, como usamos uma classe CSS como hífen, precisamos adicioná-lo como uma string, se você não quiser fazer isso, deve mudar o nome da classe. É recomendado usar camelCase nesse caso.
