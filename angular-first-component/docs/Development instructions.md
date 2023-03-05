# Development instructions for Angular

## Create Project

- Create a new project using with `ng new project-name`

## Developing

Notes:

- src/styles.css: global component styling

## Creating a new component manually

- To start creating a new component called container
- Create a new folder inside app: Container (Pascal case naming)
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
