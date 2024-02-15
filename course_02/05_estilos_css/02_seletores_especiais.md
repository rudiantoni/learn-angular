# Curso de Angular 2 (v17+) Typescript do Básico ao Avançado

## 5.2. Seletores especiais
[[Home - Curso 2]](../../README.md#curso-2)<br />

- Conteúdo
  - [host](#host)
  - [host-context](#host-context)
  - [ng-deep](#ng-deep)

### host
[[Topo]](#)<br />

O seletor ``:host` é um seletor especial que se refere o componente em que está sendo usado.

É usado para aplicar estilos diretamente ao componente em si, em vez de seus elementos filhos.

Você pode definir estulos específicos para o componente raiz, por exemplo, alterando a cor de fundo ou a borda do componente.

```css
:host {
  h2 {
    background: red;
  }
}
```

### host-context
[[Topo]](#)<br />

O seletor `:host-context` ele é um seletor que permite aplicar estilos com base no contexto do componente pai.

Isso é útil quando você deseja aplicar estilos com base em condições no componente pai.

Por exemplo, você pode alterar a cor de fundo de um componente filho com base em um valor definido em seu componente pai.

```css
:host-context(.theme-dark) {
h2 {
    background: #000;
    color: #fff;
  }
}

:host-context(.theme-red) {
h2 {
    background: red;
  }
}
```

### ng-deep
[[Topo]](#)<br />

O seletor `::ng-deep` é um mecanismo que permite que os estilos definidos em um componente sejam aplicados aos elementos.

Em outras palavras, ele permite que você contorne o encapsulamento de estilos em componentes.

No entanto, é importante notar que o uso excessivo de `::ng-deep` pode tornar o código mais difícil de manter e pode não ser a melhor prática em muitos casos.

```css
::ng-deep {
  .theme-red {
    border: 5px solid blue;
  }
}
```
