# Curso de Angular 2 (v17+) Typescript do Básico ao Avançado

## 3.2. Instalando os recursos
[[Home - Curso 2]](../../README.md#curso-2)<br />

- Conteúdo
 - [Instalação do NodeJS e NPM](#instalação-do-nodejs-e-npm)
 - [Instalação do Angular CLI](#instalação-do-angular-cli)

### Instalação do NodeJS e NPM
[[Topo]](#)<br />

- Site oficial do NodeJS: https://nodejs.org/en/
- Versões anteriores do NodeJS: https://nodejs.org/en/about/previous-releases
- Repositório do NVM for Windows (NVM4W): https://github.com/coreybutler/nvm-windows
- Site oficial do cURL: https://curl.se/docs/manpage.html
- Neste curso, vamos utilizar o NodeJS versão 20.11.0 e o NPM versão 10.2.4.

#### Windows

**Usando instalador oficial**
- Baixe o instalador (.msi ou .exe) da versão mais recente (recomenda-se utilizar as versões LTS) no site oficial ou localize a versão desejada nas versões anteriores.
- Feito isso, basta executar o arquivo e instalá-lo.

**Usando NVM4W**
- Acessar o repositório do NVM4W
- Pesquisar nos releases, a versão mais recente.
- Fazer download do arquivo *.nvm-setup.exe* e instalar.
- Após a instalação use o comando `nvm -v` para testar se a instalação está correta, sendo talvez necessário abrir um novo terminal.
  - Deve aparecer a versão atual do software, caso apareça algum erro, é porque houve falha na instalação.

#### Linux

**Usando NVM**
- E necessário possuir o cURL.
- Abrir o terminal e executar o seguinte comando: 
  - `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash`
- Após a instalação use o comando `nvm -v` para testar se a instalação está correta, sendo talvez necessário abrir um novo terminal.
  - Deve aparecer a versão atual do software, caso apareça algum erro, é porque houve falha na instalação.

### Instalação do Angular CLI
[[Topo]](#)<br />

- Instalação do Angular CLI: https://angular.dev/tools/cli/setup-local
- Neste curso, vamos utilizar o Angular CLI versão 17.1.3

- É necessário possuir o NPM
- Abrir um terminal e utilizar o comando: `npm install -g @angular/cli`
- Após a instalação use o comando `ng -v` ou `ng help` para testar se a instalação está correta, sendo talvez necessário abrir um novo terminal.
  - Deve aparecer a versão atual do software, caso apareça algum erro, é porque houve falha na instalação.
