# Curso de Angular 2 (v17+) Typescript do Básico ao Avançado

## 12.4. Pipes personalizados
[[Home - Curso 2]](../../README.md#curso-2)<br />

- Diretório de arquivos: [04_arquivos](./04_arquivos/)
- Projetos
  - [Projeto 1](./04_arquivos/proj_01/) [(iniciado em)](#criando-pipe-personalizado)
- Conteúdo
  - [Criando pipe personalizado](#criando-pipe-personalizado)

### Criando pipe personalizado
[[Topo]](#)<br />

- Ver projeto: [Projeto 1](./04_arquivos/proj_01/)

- Abra o terminal dentro da pasta raiz do projeto.
- Use o comando `ng generate pipe pipe-name`
  - Atalho `ng g p pipe-name`
- O Angular CLI gerará o novo componente dentro da pasta src/app com todos os arquivos necessários e aplicará as mudanças ao app.module.ts.

Neste caso, utilizaremos o comando `ng g p pipes/custom-string`.

#### Utilizando apenas um argumento de pipe opcional

**Pipe**
```typescript
@Pipe({
  name: 'customString',
  standalone: true
})
export class CustomStringPipe implements PipeTransform {
  transform(value: string, arg?: string): string {
    if (arg === 'upper') {
      return value.toUpperCase();
    } else if (arg === 'lower') {
      return value.toLowerCase();
    }
    return value;
  }
}
```

**Classe**
```typescript
@Component({
  selector: 'app-angular-pipes',
  standalone: true,
  imports: [CustomStringPipe],
  templateUrl: './angular-pipes.component.html',
})
export class AngularPipesComponent {
}
```

**Template**
```html
<p>customString: {{ "Rudi Antoni" | customString : "upper" }}</p>
<p>customString: {{ "Rudi Antoni" | customString : "lower" }}</p>
<p>customString: {{ "Rudi Antoni" | customString }}</p>
```

#### Utilizando vários argumentos de pipe

**Pipe**
```typescript
@Pipe({
  name: 'customString',
  standalone: true
})
export class CustomStringPipe implements PipeTransform {
  transform(value: string, ...args: string[]): string {
    console.log(value, args);
    return value;
  }
}
```

**Classe**: (se mantem a mesma que anteriormente)

**Template**
```html
<p>Pipe personalizado customString: {{ "Rudi Antoni" | customString : "arg1" : "arg2" : "arg3" }}</p>
```
