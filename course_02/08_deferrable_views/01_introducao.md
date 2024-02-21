# Curso de Angular 2 (v17+) Typescript do Básico ao Avançado

## 8.1. Introdução
[[Home - Curso 2]](../../README.md#curso-2)<br />

- Diretório de arquivos: [01_arquivos](./01_arquivos/)
- Projetos
  - [Projeto 1](./01_arquivos/proj_01/) [(iniciado em)](#defer)
- Conteúdo
  - [Defer](#defer)

### Defer
[[Topo]](#)<br />

- Ver projeto: [Projeto 1](./01_arquivos/proj_01/)

**Template**
```html
@defer {
  <app-new-component />
} @placeholder {
  <p>Mostrar antes do carregamento.</p>
} @loading {
  <p>Carregando...</p>
} @error {
  <p>Erro no carregamento.</p>
}
```
