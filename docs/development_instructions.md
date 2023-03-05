# Development instructions for Angular

- Conteúdo
  - [Create project](#create-project)
  - [Development notes](#development-notes)
  - [Creating a new component manually](#creating-a-new-component-manually)
  - [Creating a new component using Angular CLI](#creating-a-new-component-using-angular-cli)

## Criar projeto

- Criar um novo projeto com `ng new project-name`
  - Convenção de nomenclatura: kebab-case

## Observações de desenvolvimento

- Padrões de nomenclatura
  - Nomes de projeto: kebab-case
  - Nomes de componente: kebab-case
  - Classes: PascalCase
  - Propriedade selector da anotação @Component: kebab case precedido por app (app-component-name)

- src/styles.css: estilização do componente global
- Para limpar a página inicial, esvazie o arquivo app.component.html.
- Lembrar: todos os comandos devem ser executados na pasta raiz do projeto, que é a pasta pai da src, ou o que for especificado no arquivo angular.json, com a propriedade projects.\[projectName\].root.

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

## ## Propriedade do @Component: selector

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

Um one Way data binding ocorre quando podemos acessar uma propriedade da classe do componente no view template html.

Isto pode ser alcançado através de:

- String interpolation: `{{ data }}`
- Property binding: `[property] = data`

Neste caso, o fluxo ocorre da classe do componente para a view template html.

Ele também ocorre quando podemos acessar um valor do view template html em uma propriedade da classe do componente.

Isto pode ser alcançado através de:

- Event binding: `(data) = "expression"`

Neste caso, o fluxo ocorre da view template html para a classe do componente.

### Two way data binding (conexão de dados bidirecional)

Um Two way data binding conecta dados da classe do componente para a view template html e da view template html para a classe do componente. Esta é uma combinação do property binding e o event binding.

### String interpolation (interpolação de string)

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
