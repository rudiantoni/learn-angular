# Curso de Angular 2 (v17+) Typescript do Básico ao Avançado

## 9.3. Usando o Effect
[[Home - Curso 2]](../../README.md#curso-2)<br />

- Diretório de arquivos: [03_arquivos](./03_arquivos/)
- Projetos
  - [Projeto 1](./03_arquivos/proj_01/) [(iniciado em)](#effect)
- Conteúdo
  - [Effect](#effect)

### Effect
[[Topo]](#)<br />

- Ver projeto: [Projeto 1](./03_arquivos/proj_01/)

Raramente é necessário na maioria dos códigos, mas podem ser úteis em circunstâncias específicas:
- Registro de dados sendo exibidos e quando eles mudam, seja para análise ou como ferramente de depuração.
- Manter os dados sincronizados com o windows.localStorage.
- Adicionando comportamento DOM personalizado que não pode ser expresso com sintaxe de modelo.
- Executar renderização personalizada em um `<canvas>`, biblioteca de gráficos ou outra biblioteca de UI de terceiros.

Ao utilizar uma variável dentro do `effect()`, sempre que ela for alterada, o `effect()` onde ela está será executado.

**Classe**:
```typescript
constructor() {
  effect(() => {
    console.log('this.firstName()', this.firstName());
  });

  effect(() => {
    console.log('this.array()', this.array())
  })
}
```
