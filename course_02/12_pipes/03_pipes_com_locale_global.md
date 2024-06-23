# Curso de Angular 2 (v17+) Typescript do Básico ao Avançado

## 12.3. Pipes com Locale Global
[[Home - Curso 2]](../../README.md#curso-2)<br />

- Diretório de arquivos: [03_arquivos](./03_arquivos/)
- Projetos
  - [Projeto 1](./03_arquivos/proj_01/) [(iniciado em)](#aplicando-a-localização-globalmente)
- Conteúdo
  - [Aplicando a localização globalmente](#aplicando-a-localização-globalmente)

### Aplicando a localização globalmente
[[Topo]](#)<br />

- Ver projeto: [Projeto 1](./03_arquivos/proj_01/)

Para isso, ao invés de adicionar a localização no componente sendo usado, basta realizar a mesma configuração, mas no arquivo `app.config.ts`, ou seja,
1. Importar a configuração de localização com `import` e atribuí-la a uma variável.
2. Registrar a localização importada com `registerLocaleData`.
3. Adicionar a configuração de `LOCALE_ID` manualmente através do array `providers`.

**Classe**
```typescript
import { ApplicationConfig, LOCALE_ID } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ]
};
```
