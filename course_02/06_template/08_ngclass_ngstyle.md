# Curso de Angular 2 (v17+) Typescript do Básico ao Avançado

## 6.8. NgClass e NgStyle
[[Home - Curso 2]](../../README.md#curso-2)<br />

- Diretório de arquivos: [08_arquivos](./08_arquivos/)
- Projetos
  - [Projeto 1](./08_arquivos/proj_01/) [(iniciado em)](#ngclass)
- Conteúdo
  - [ngClass](#ngclass)
  - [ngStyle](#ngstyle)

### ngClass

- Ver projeto: [Projeto 1](./08_arquivos/proj_01/)

`ngClass` permite que você adicione ou remova classes CSS com base em expressões ou objetos. Veja alguns exemplos:

1. **Usando uma string**: Se a expressão for avaliada como verdadeira, a classe será aplicada.

```html
<div [ngClass]="isActive ? 'active' : ''">Conteúdo</div>
```

No componente TypeScript:

```typescript
isActive = true;
```

2. **Usando um objeto**: As chaves são os nomes das classes, e os valores são expressões que determinam se a classe deve ser aplicada.

```html
<div [ngClass]="{'active': isActive, 'disabled': isDisabled}">Conteúdo</div>
```

No componente TypeScript:

```typescript
isActive = true;
isDisabled = false;
```

### ngStyle

`ngStyle` permite que você aplique estilos em linha a um elemento com base em um objeto cujas chaves são nomes de propriedades de estilo e cujos valores são expressões que determinam o valor do estilo. Veja alguns exemplos:

1. **Aplicando estilos dinamicamente**:

```html
<div [ngStyle]="{'background-color': bgColor, 'color': textColor}">Conteúdo</div>
```

No componente TypeScript:

```typescript
bgColor = 'blue';
textColor = 'white';
```

2. **Alterando estilos com base em condições**:

```html
<div [ngStyle]="isWarning ? {'background-color': 'yellow', 'font-weight': 'bold'} : {}">Atenção</div>
```

No componente TypeScript:

```typescript
isWarning = true;
```

Essas diretivas são poderosas ferramentas para criar interfaces de usuário dinâmicas e reativas no Angular.
