# Curso de Angular 2 (v17+) Typescript do Básico ao Avançado

## 6.4. Attribute binding
[[Home - Curso 2]](../../README.md#curso-2)<br />

- Diretório de arquivos: [04_arquivos](./04_arquivos/)
- Projetos
  - [Projeto 1](./04_arquivos/proj_01/) [(iniciado em)](#vinculação-de-atributo)
- Conteúdo
  - [Vinculação de atributo](#vinculação-de-atributo)

### Vinculação de atributo
[[Topo]](#)<br />

- Ver projeto: [Projeto 1](./04_arquivos/proj_01/)

A vinculação de atributo (ou attribute binding) é classificada como sendo **UNIDIRECTIONAL (ONE WAY) DATA BINDING, CLASS -> TEMPLATE**, ou seja, uma vinculação de dados unidirecional, da classe para o template.

É semelhante ao property binding, mas usado para atributos que não possuem uma propriedade correspondente no DOM. Utiliza a sintaxe `[attr.atributo]="valor"`. Por exemplo, `<table [attr.colspan]="colspanValue">` define o atributo colspan de uma tabela.

**Classe**
```typescript
public ariaLabel: string = 'Esse é um aria-label de exemplo';
```

**Template**
```html
<p [attr.title]="ariaLabel" [attr.aria-label]="ariaLabel">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores beatae autem odit porro ab vero, sunt quae ratione nobis voluptatum atque magni minima possimus sed cum nam ex cumque ut?</p>
```

> Alguns atributos pode ser necessário inspecionar a página para poder visualizar seus valores.
