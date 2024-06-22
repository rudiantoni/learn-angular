# Curso de Angular 2 (v17+) Typescript do Básico ao Avançado

## 11.2. Input
[[Home - Curso 2]](../../README.md#curso-2)<br />

- Diretório de arquivos: [02_arquivos](./02_arquivos/)
- Projetos
  - [Projeto 1](./02_arquivos/proj_01/) [(iniciado em)](#comunicação-básica)
- Conteúdo
  - [Comunicação básica](#comunicação-básica)
  - [Comunicação com signal](#comunicação-com-signal)

### Comunicação básica
[[Topo]](#)<br />

O Input serve para passar informações de um componente pai para um componente filho.

#### Componente pai

**Classe**
```typescript
@Component({
  selector: 'app-pai',
  standalone: true,
  imports: [InputComponent],
  templateUrl: './pai.component.html',
  styleUrl: './pai.component.scss'
})
export class PaiComponent {
  public myName: string = "Rudi Antoni";
}
```

**Template**
```html
<app-input nameA="Rudi Antoni" [nameB]="myName" />
```

#### Componente filho

**Classe**
```typescript
@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input() public nameA: string = "Sem dados";
  @Input() public nameB: string = "Sem dados";
}
```

**Template**
```html
<p>Recebido nameA do pai: {{ nameA }}</p>
<p>Recebido nameB do pai: {{ nameB }}</p>
```

### Comunicação com signal
[[Topo]](#)<br />

Também é possível enviar outros tipos de informações, como objetos, ou signals. Porém signals devem ser enviados com setters, pois eles não são diretamente aceitos.

#### Componente pai

**Classe**
```typescript
@Component({
  selector: 'app-pai',
  standalone: true,
  imports: [InputComponent],
  templateUrl: './pai.component.html',
  styleUrl: './pai.component.scss'
})
export class PaiComponent {
  public name: signal("Rudi Antoni");
}
```

**Template**
```html
<app-input [nameCSetter]="name()" />
```

#### Componente filho

**Classe**
```typescript
@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  public nameC = signal("Sem dados");
  @Input({
    required: true,
    transform: toUpperCase
  }) set nameCSetter(value: string): void {
    this.nameC.set(value);
  }  
}
```

**Template**
```html
<p>Recebido nameC do pai: {{ nameCSig }}</p>
```
