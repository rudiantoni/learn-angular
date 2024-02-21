# Curso de Angular 2 (v17+) Typescript do Básico ao Avançado

## 8.2. Defer: on
[[Home - Curso 2]](../../README.md#curso-2)<br />

- Diretório de arquivos: [02_arquivos](./02_arquivos/)
- Projetos
  - [Projeto 1](./02_arquivos/proj_01/) [(iniciado em)](#defer-on)
- Conteúdo
  - [Defer: on](#defer-on)
  - [Defer: on idle](#defer-on-idle)
  - [Defer: on timer](#defer-on-timer)
  - [Defer: on viewport](#defer-on-viewport)
  - [Defer: on interaction](#defer-on-interaction)
  - [Defer: on hover](#defer-on-hover)
  - [Defer: on immediate](#defer-on-immediate)
  - [Defer: on prefetch](#defer-on-prefetch)

### Defer: on
[[Topo]](#)<br />

- Ver projeto: [Projeto 1](./02_arquivos/proj_01/)

Especifica uma condição de acionador usando um acionador da lista: `idle`, `timer`, `viewport`, `interaction`, `hover` e `immediate`.

> Vários `on` triggers são sempre condições *OR*. Da mesma forma, `on` misturado com `when` e `prefetch` também são condições *OR*.

### Defer: on idle
[[Topo]](#)<br />

É o valor padrão do defer: Começa o carregamento do chunk do componente assim que o navegador já carregou tudo se tornando inativo.

**Template**
```html
@defer (on idle) {
  <app-new-component />
} @placeholder {
  <p>Mostrar antes do carregamento.</p>
} @loading {
  <p>Carregando...</p>
} @error {
  <p>Erro no carregamento.</p>
}
```

### Defer: on timer
[[Topo]](#)<br />

Começa o carregamento do chunk do componente após passar o tempo indicado em s ou ms.

**Template**
```html
@defer (on timer(5s)) {
  <app-new-component />
} @placeholder {
  <p>Mostrar antes do carregamento.</p>
} @loading {
  <p>Carregando...</p>
} @error {
  <p>Erro no carregamento.</p>
}
```

### Defer: on viewport
[[Topo]](#)<br />

Começa o carregamento do chunk do componente quando o bloco ficar no campo de visão do usuário.

**Template**
```html
@defer (on viewport) {
  <app-new-component />
} @placeholder {
  <p>Mostrar antes do carregamento.</p>
} @loading {
  <p>Carregando...</p>
} @error {
  <p>Erro no carregamento.</p>
}
```

### Defer: on interaction
[[Topo]](#)<br />

Começa o carregamento do chunk do componente quando o usuário interagir com um elemento referenciado indicado ou o próprio placeholder (que também pode ser referenciado) por padrão. Os eventos que o ativam atualmente são keydown e click.

**Template**
```html
<p #deferOnInteractionTrigger>On interaction</p>

@defer (on interaction(deferOnInteractionTrigger)) {
  <app-new-component />
} @placeholder {
  <p>Mostrar antes do carregamento.</p>
} @loading {
  <p>Carregando...</p>
} @error {
  <p>Erro no carregamento.</p>
}
```

### Defer: on hover
[[Topo]](#)<br />

Começa o carregamento do chunk do componente quando o usuário passar o mouse sobre um elemento referenciado indicado ou o próprio placeholder (que também pode ser referenciado) por padrão. Os eventos que o ativam atualmente é o mouseenter.

**Template**
```html
<p #deferOnHoverTrigger>On hover</p>

@defer (on hover(deferOnHoverTrigger)) {
  <app-new-component />
} @placeholder {
  <p>Mostrar antes do carregamento.</p>
} @loading {
  <p>Carregando...</p>
} @error {
  <p>Erro no carregamento.</p>
}
```

### Defer: on immediate
[[Topo]](#)<br />

Começa o carregamento do chunk do componente imediatamente, sem esperar que o navegador fica inativo. A única coisa que o immediate espera é o carregamento das dependências para que ele funcione.

**Template**
```html
@defer (on immediate) {
  <app-new-component />
} @placeholder {
  <p>Mostrar antes do carregamento.</p>
} @loading {
  <p>Carregando...</p>
} @error {
  <p>Erro no carregamento.</p>
}
```

### Defer: on prefetch
[[Topo]](#)<br />

Pré-carrega o chunk do componente segundo um trigger mas sem renderizar nada na página. A renderização ainda será controlada pelos triggers, mas o recurso já estará disponível.

No exemplo abaixo, assim que o navegador fica no estado de ocioso, o recurso do defer é carregado, mas ele só é renderizado na tela quando há a interação com o componente referenciado no template `deferOnPrefetchTrigger`.

**Template**
```html
<h3 #deferOnPrefetchTrigger>On prefetch</h3>

@defer (on interaction(deferOnPrefetchTrigger); prefetch on idle) {
  <app-new-component />
} @placeholder {
  <p>Mostrar antes do carregamento.</p>
} @loading {
  <p>Carregando...</p>
} @error {
  <p>Erro no carregamento.</p>
}
```
