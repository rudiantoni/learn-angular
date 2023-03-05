# Development instructions for Angular

- Conteúdo
  - [Create project](#create-project)
  - [Development notes](#development-notes)
  - [Creating a new component manually](#creating-a-new-component-manually)
  - [Creating a new component using Angular CLI](#creating-a-new-component-using-angular-cli)

## Create Project

- Create a new project using with `ng new project-name`
  - Naming convention: kebab-case

## Development notes

Notes:

- src/styles.css: global component styling
- To clear the initial page, empty the app.component.html file.

## Creating a new component manually

- To start creating a new component called container
- Create a new folder inside app: Container (kebab case)
- Create files in this new directory:
  - container.component.css
  - container.component.html
  - container.component.ts
- Annotate container.component.ts class (named as ContainerComponent) with @Component, from @angular/core.
  - selector: html element that will be replaced by this component, default naming: kebab case preceeded with app-, so: app-container
  - templateUrl: component view template, just set the html file.
  - styleUrls: one of the styles to apply to this component, just set the css file.
- Import the component annotated class in the app.module.ts, adding it to the declarations array.

## Creating a new component using Angular CLI

- Open the terminal inside the project root folder.
- Use the command `ng generate component component-name`
  - Shortcut is `ng g c component-name`
  - Naming in kebab-case
- The Angular CLI will generate a new component inside the src/app folder with all needed files and apply changes to the app.module.ts
