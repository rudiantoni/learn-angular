# Curso de Angular 2 (v17+) Typescript do Básico ao Avançado

## 8.5. Loading
[[Home - Curso 2]](../../README.md#curso-2)<br />

- Diretório de arquivos: [05_arquivos](./05_arquivos/)
- Projetos
  - [Projeto 1](./05_arquivos/proj_01/) [(iniciado em)](#loading-after)
- Conteúdo
  - [Loading: after](#)
  - [Loading: minimum](#)

### Loading: after
[[Topo]](#)<br />

- Ver projeto: [Projeto 1](./05_arquivos/proj_01/)

O loading é executado quando o chunk do componente está sendo carregado.

Especifica que o indicador de carregamento só deve ser exivido se o carregamento demorar mais de um certo tempo em s ou ms.

**Template**
```html
@defer (on interaction) {
  <app-new-component />
} @placeholder {
  <p>Mostrar antes do carregamento.</p>
} @loading(after 150ms) {
  <p>Carregando...</p>
} @error {
  <p>Erro no carregamento.</p>
}
```

### Loading: minimum
[[Topo]](#)<br />

Existe para evitar oscilações rápidas do conteúdo do espaço reservado.

Após o conteúdo ser exibido, ele permanecerá na tela por pelo menos o tempo de minimum.

**Template**
```html
@defer (on interaction) {
  <app-new-component />
} @placeholder {
  <p>Mostrar antes do carregamento.</p>
} @loading(minimum 2s) {
  <p>Carregando...</p>
} @error {
  <p>Erro no carregamento.</p>
}
```
