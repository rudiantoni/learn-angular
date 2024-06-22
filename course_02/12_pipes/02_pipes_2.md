# Curso de Angular 2 (v17+) Typescript do Básico ao Avançado

## 12.2. Pipes 2
[[Home - Curso 2]](../../README.md#curso-2)<br />

- Diretório de arquivos: [02_arquivos](./02_arquivos/)
- Projetos
  - [Projeto 1](./02_arquivos/) [(iniciado em)](#pipes-de-manipulação-de-números)
- Conteúdo
  - [Pipes de manipulação de números](#pipes-de-manipulação-de-números)
  - [Adicionando localização aos pipes](#adicionando-localização-aos-pipes)

### Pipes de manipulação de números
[[Topo]](#)<br />

O CurrencyPipe é utilizado para formatar números como valores monetários. Ele permite especificar a moeda, o símbolo da moeda e outras opções de formatação.

O DecimalPipe é utilizado para formatar números decimais. Você pode especificar o número mínimo e máximo de dígitos inteiros e decimais.

O PercentPipe é utilizado para formatar números como porcentagens. Ele multiplica o número por 100 e adiciona o símbolo de porcentagem (%).

**Classe**
```typescript
@Component({
  imports: [CurrencyPipe, DecimalPipe, PercentPipe],
  templateUrl: './angular-pipes.component.html',
})
export class AngularPipesComponent {
}
```

#### CurrencyPipe

Formatando valor para o padrão de moeda utilizado no Brasil, BRL/R$.

**Template**
```html
<p>Currency: {{ 200.5 | currency }}</p>
<p>Currency: {{ 200.5 | currency : "BRL" }}</p>
```

#### DecimalPipe

Formatando número onde 1 é o número mínimo de dígitos inteiros, 0 é o número mínimo de dígitos decimais e 2 é o número máximo de dígitos decimais.

**Template**
```html
<p>Number: {{ 2000.554 | number }}</p>
<p>Number: {{ 2000.554 | number : "1.0-2" }}</p>
```

#### PercentPipe

Formatando porcentagem onde 1 é o número mínimo de dígitos inteiros, 0 é o número mínimo de dígitos decimais e 4 é o número máximo de dígitos decimais.

**Template**
```html
<p>Percent: {{ 0.2 | percent }}</p>
<p>Percent: {{ 0.2 | percent : "1.0-4" }}</p>
```

### Adicionando localização aos pipes
[[Topo]](#)<br />

Mesmo após utilizar esta formatação, pode ser que ainda não esteja adequado para o formato correto de alguns países.

Como exemplo, vamos efetuar a localização desses valores para o Brasil.

Para fazer isso, primeiro importamos a configuração de localização com `import`, depois a registramos com `registerLocaleData` e por último especificamos o `LOCALE_ID` manualmente através do `providers`.

**Classe**
```typescript
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);
@Component({
  imports: [CurrencyPipe, DecimalPipe, PercentPipe],
  templateUrl: './angular-pipes.component.html',
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
})
export class AngularPipesComponent {
}
```
