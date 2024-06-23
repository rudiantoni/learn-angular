# Curso de Angular 2 (v17+) Typescript do Básico ao Avançado

## 11.3. Output
[[Home - Curso 2]](../../README.md#curso-2)<br />

- Diretório de arquivos: [03_arquivos](./03_arquivos/)
- Projetos
  - [Projeto 1](./03_arquivos/proj_01/) [(iniciado em)](#comunicação-básica)
- Conteúdo
  - [Comunicação básica](#comunicação-básica)
  - [Comunicação com signal](#comunicação-com-signal)

### Comunicação básica
[[Topo]](#)<br />

- Ver projeto: [Projeto 1](./03_arquivos/proj_01/)

O Output serve para enviar dados de um componente filho para um componente pai.

#### Componente pai

**Classe**
```typescript
@Component({
  selector: 'app-pai',
  imports: [OutputComponent],
  templateUrl: './pai.component.html',
})
export class PaiComponent {
  outName = 'Output: sem valor'
  receiveOutputName(value: string): void {
    this.outName = value;
  }
}
```

**Template**
```html
<app-output (outputName)="receiveOutputName($event)" />
<p>{{ outName }}</p>
```

#### Componente filho

**Classe**
```typescript
@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
})
export class OutputComponent {
  @Output() outputName = new EventEmitter<string>();
  sendOutputName(): void {
    this.outputName.emit('Rudi Antoni - From Output');
  }
}
```

**Template**
```html
<button (click)="sendOutputName()">Send</button>
```

### Comunicação com signal
[[Topo]](#)<br />

#### Componente pai

**Classe**
```typescript
@Component({
  selector: 'app-pai',
  imports: [OutputComponent],
  templateUrl: './pai.component.html'
})
export class PaiComponent {
  outNameSig = signal('Output Signal: sem valor')
}
```

**Template**
```html
<app-output (outputNameSig)="outNameSig.set($event)" />
<p>{{ outNameSig() }}</p>
```

#### Componente filho

**Classe**
```typescript
@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
})
export class OutputComponent {
  @Output() outputNameSig = new EventEmitter<string>();
  sendOutputNameSig(): void {
    this.outputNameSig.emit('Rudi Antoni - From Output (Signal)');
  }
}
```

**Template**
```html
<button (click)="sendOutputNameSig()">Send (Signal)</button>
```
