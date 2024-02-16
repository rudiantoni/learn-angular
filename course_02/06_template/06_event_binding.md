# Curso de Angular 2 (v17+) Typescript do Básico ao Avançado

## 6.6. Event binding
[[Home - Curso 2]](../../README.md#curso-2)<br />

- Diretório de arquivos: [06_arquivos](./06_arquivos/)
- Projetos
  - [Projeto 1](./06_arquivos/proj_01/) [(iniciado em)](#vinculação-de-evento)
- Conteúdo
  - [Vinculação de evento](#vinculação-de-evento)

### Vinculação de evento
[[Topo]](#)<br />

- Ver projeto: [Projeto 1](./06_arquivos/proj_01/)

A vinculação de classe e estilo (ou style and class binding) é classificado como uma **UNIDIRECTIONAL (ONE WAY) DATA BINDING, TEMPLATE -> CLASS**, ou seja, uma vinculação de dados unidirecional, do template para a classe.

É utilizado para ouvir e responder a eventos do usuário, como cliques, teclas pressionadas, etc. A sintaxe é `(evento)="handler()"`. Por exemplo, `<button (click)="save()">Save</button>` chama o método `save()` quando o botão é clicado.

**Classe**
```typescript
public increment() {
  this.count++;
}
public decrement() {
  this.count--;
}

public onKeyDown(event: Event) {
  return console.log('event onKeyDown', event)
}

public onMouseMove(event: MouseEvent) {
  return console.log('event onMouseEvent', event)
}
```

**Template**
```html
<p>Contagem: {{count}}</p>
<button (click)="increment()">+</button>
<button (click)="decrement()">-</button>
<p>O elemento abaixo dispara um evento ao pressionar Shift + T. Visualizar o console.</p>
<input (keydown.shift.t)="onKeyDown($event)" />
<p>O elemento abaixo dispara um evento ao passar o mouse sobre ele. Visualizar o console.</p>
<div (mousemove)="onMouseMove($event)" style="background: red; width: 300px; height: 300px; margin-top: 10px;"></div>
```
