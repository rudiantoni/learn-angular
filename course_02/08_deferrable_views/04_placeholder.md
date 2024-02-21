# Curso de Angular 2 (v17+) Typescript do Básico ao Avançado

## 8.4. Placeholder
[[Home - Curso 2]](../../README.md#curso-2)<br />

- Diretório de arquivos: [04_arquivos](./04_arquivos/)
- Projetos
  - [Projeto 1](./04_arquivos/proj_01/) [(iniciado em)](#placeholder-minimum)
- Conteúdo
  - [Placeholder: minimum](#placeholder-minimum)

### Placeholder: minimum
[[Topo]](#)<br />

- Ver projeto: [Projeto 1](./04_arquivos/proj_01/)

O placeholder serve para exibir uma mensagem antes que o carregamento do elemento do defer seja iniciado.

O parâmetro minimum serve para que o placeholder seja obrigatório durante um tempo mínimo, ou seja, após o elemento ter sido carregado e pronto para renderizar, ele só será renderizado após o tempo do placeholder finalizar, esse tempo é iniciado no término do carregamento do elemento.

**Template**
```html
@defer {
  <app-new-component />
} @placeholder(minimum 5s) {
  <p>Mostrar antes do carregamento.</p>
} @loading {
  <p>Carregando...</p>
} @error {
  <p>Erro no carregamento.</p>
}
```
