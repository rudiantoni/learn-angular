# learn-angular

This repository contains projects referring to my personal learning about the Angular framework.

## Course 1

This course has a most hands-on focused approach. So there's no much theory, but there are important annotations inside the [docs](./docs/) folder.

All projects uses Node version 18.12.1 LTS (hydrogen) and were generated with Angular CLI 15.2.1.

There are some requirements in order to make the projects run, they are:

- Linux Ubuntu or any other Debian based distro
  - You can maybe try to run it in Windows with the aid of Git Bash, but I cant' test it for now
    - Softwares: curl, nvm, npm, node 18+ and angular cli (ng) 15+.
      - If you some of them are not yet installed, follow these instructions:
      - Install curl: `sudo apt install curl`
      - Install NVM: `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash`
        - Reopen shell after this installation
      - Install NPM: `sudo apt install npm`
      - Install Node 18.12.1: `nvm install 18.12.1`
      - Install Angular CLI: `npm install -g @angular/cli`
      - Reference: [https://angular.io/](https://angular.io/)

- Clone the project.
- Make sure you are using Node 18.12.1: `nvm use 18.12.1`
- Install dependencies: `npm install`
- Start server: `ng serve`

All the developed projects has only the goal of learning and practicing. There's a list of each developed project and their objectives:

- [angular-first](./angular-first/): First Angular project created. Demonstrates only basic stuff like rewriting the main page and a quick data binding demo.
- [angular-first-component](./angular-first-component/): (...under development...)
