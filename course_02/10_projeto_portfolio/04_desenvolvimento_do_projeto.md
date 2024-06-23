# Curso de Angular 2 (v17+) Typescript do Básico ao Avançado

## 13.1 a 13.21 - Configuração e desenvolvimento do projeto
[[Home - Curso 2]](../../README.md#curso-2)<br />

- Diretório de arquivos: [04_arquivos](./04_arquivos/)
- Projetos
  - [Projeto 1](./04_arquivos/proj_01/) [(iniciado em)](#desenvolvimento-do-projeto)
- Conteúdo
  - [Desenvolvimento do projeto](#desenvolvimento-do-projeto)

### Desenvolvimento do projeto
[[Topo]](#)<br />

- Ver projeto: [Projeto 1](./04_arquivos/proj_01/)

#### 10.4. HTML - Componente Header

A partir do Angular 17, sempre que for utilizar a arroba `@` no html, utilize seu código HTML diretamente `&#64;`. Pois atualmente o arroba denota uma diretiva de controle de fluxo.

#### 10.5. HTML - Componente Knowledge

Sem notas a adicionar.

#### 10.6. HTML - Componente Experiences

Sem notas a adicionar.

#### 10.7. HTML - Componente Projects

Sem notas a adicionar.

#### 10.8. Configurando SMECSS com SCSS

Sem notas a adicionar.

#### 10.9. Criando a classe CSS container

Sem notas a adicionar.

#### 10.10. CSS - Componente Header

Sem notas a adicionar.

#### 10.11. CSS - Componente Header e Button

Sem notas a adicionar.

#### 10.12. CSS - Componente Knowledge

Sem notas a adicionar.

#### 10.13. CSS - Componente Experiences

Sem notas a adicionar.

#### 10.14. CSS - Componente Projects

Sem notas a adicionar.

#### 10.15. Dialog - Componente Projects

- Site oficiais
- Angular Material: https://material.angular.io/
- Angular Material - Components: https://material.angular.io/components/categories
- Angular Material - Dialog: https://material.angular.io/components/dialog/overview

Existe uma alternativa para fazer a injeção de dependência no Angular.

É possível criar uma propriedade privada e injetar diretamente uma dependência nela utilizando `inject()` ao invés da clássica injeção via construtor:

**Classe**
```typescript
#dialog = inject(MatDialog);

public openDialog(data: SomeDataType) {
  this.#dialog.open(SomeDialogClass, {data})
}
```

O código acima equivale a:

**Classe**
```typescript
constructor(private dialog: MatDialog) {}

public openDialog(data: SomeDataType) {
  this.dialog.open(SomeDialogClass, {data})
}
```

#### 10.16. HTML e TS - Componente Dialog

Sem notas a adicionar.

#### 10.17. CSS - Componente Dialog

Sem notas a adicionar.

#### 10.18. Final

Sem notas a adicionar.

#### 10.19. Maximizando seu impacto online com um portfólio

No mundo digital em constante evolução, a presença online é essencial para quem busca destacar-se e criar uma conexão significativa com seu público.

##### O que é um portfólio online?

Um portfólio online é uma coleção organizada de seus melhores trabalhos, projetos, realizações e habilidades. Ele funciona como uma vitrine virtual que destaca suas capacidades e cria uma impressão impactante sobre quem você é e o que você pode oferecer.

##### Por que é importante?

- Credibilidade: Um portfólio confere credibilidade, mostrando que você é experiente e qualificado no seu nicho.
- Visualização de habilidades: Seu portfólio serve como uma ferramenta visual para destacar suas habilidades. Se você é um fotógrafo, designer, escritor, ou qualquer outra coisa, um portfólio pode trazer à tona o melhor do seu trabalho.

##### Como criar e utilizar um portfólio

Escolha a plataforma certa: Existem várias plataformas online para criar portfólios, como Behance, WordPress, ou até mesmo uma seção dedicada no seu blog. Escolha uma que se alinhe ao seu estilo e objetivos. Ou então no nosso caso, crie o seu!

Selecione seus melhores trabalhos: Seja seletivo ao escolher o conteúdo para o seu portfólio. Destaque projetos que demonstrem sua habilidade e diversidade.

Mantenha atualizado: Um portfólio dinâmico é mais eficaz. Regularmente adicione novos trabalhos e atualize informações para refletir seu crescimento profissional.

Conte sua história: Use seu portfólio como uma oportunidade para contar sua história. Adicione descrições pessoais ou profissionais para contextualizar seus projetos e inspirar uma conexão mais profunda.

Em resumo, um portfólio online é uma ferramenta poderosa para destacar suas habilidades, construir credibilidade e criar uma conexão mais significativa com seu público. Ao incorporar estrategicamente um portfólio, você estará maximizando seu impacto online e solidificando sua presença no vasto mundo digital.
