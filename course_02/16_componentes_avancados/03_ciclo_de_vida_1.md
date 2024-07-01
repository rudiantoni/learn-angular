# Curso de Angular 2 (v17+) Typescript do Básico ao Avançado

## 16.3. Ciclo de Vida 1
[[Home - Curso 2]](../../README.md#curso-2)<br />

- Conteúdo
  - [Introdução](#introdução)
  - [Visão geral](#visão-geral)
  - [Conclusão](#conclusão)

### Introdução
[[Topo]](#)<br />

Documentação oficial Lifecycle - Angular: https://angular.dev/guide/components/lifecycle

O ciclo de vida de um componente segue uma sequência de eventos que determinam a criação, atualização e destruição dos componentes.

Cada um desses eventos é associado a um hook específico que você pode implementar em seu componente para executar lógica personalizada em cada estágio do ciclo de vida.

### Visão geral
[[Topo]](#)<br />

- **ngOnChanges**: Chamado quando um ou mais dados ligados a uma propriedade de entrada (`@Input`) vinculada ao componente são alterados.
  - Recebe um objeto SimpleChanges que contém os valores anteriores e atuais das propriedades.
- **ngOnInit**: Chamado uma vez após a primeira execução do `ngOnChanges`. Ideal para inicializações de dados no componente.
- **ngDoCheck**: Chamado durante cada verificação de mudanças do Angular. Use para detectar e reagir a alterações que o Angular não detecta automaticamente.
- **ngAfterContentInit**: Chamado uma vez após a Angular realizar a projeção de conteúdo no componente (inserção de conteúdo usando `ng-content`).
- **ngAfterContentChecked**: Chamado após cada verificação do conteúdo projetado.
- **ngAfterViewInit**: Chamado uma vez após a inicialização das views do componente e das views filhas.
- **ngAfterViewChecked**: Chamado após cada verificação das views do componente e das views filhas.
- **ngOnDestroy**: Chamado imediatamente antes da destruição do componente. Use para limpar recursos, como subscrições e timers.

### Conclusão
[[Topo]](#)<br />

Compreender e utilizar corretamente os hooks do ciclo de vida dos componentes em Angular permite que você controle precisamente a lógica de inicialização, atualização e destruição dos componentes, garantindo um comportamento consistente e eficiente nas suas aplicações.
