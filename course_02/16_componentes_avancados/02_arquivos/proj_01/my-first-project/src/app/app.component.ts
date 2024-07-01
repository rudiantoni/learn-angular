import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Components
import { NewComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponent } from './components/template-binding/template-binding.component';
import { TemplateVariablesComponent } from './components/template-variables/template-variables.component';
import { TemplateControlFlowComponent } from './components/template-control-flow/template-control-flow.component';
import { TemplateDeferrableViewComponent } from './components/template-deferrable-view/template-deferrable-view.component';
import { SignalsComponent } from './components/signals/signals.component';
import { PaiComponent } from './components/comunicacao-entre-components/pai/pai.component';
import { AngularPipesComponent } from './components/pipes/angular-pipes/angular-pipes.component';
import { TemplateDrivenFormsComponent } from './components/forms/template-driven-forms/template-driven-forms.component';
import { ReactiveFormsComponent } from './components/forms/reactive-forms/reactive-forms.component';
import { ContentComponent } from './components/content/content.component';
import { HostElementsComponent } from './components/host-elements/host-elements.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    NewComponent,
    TemplateBindingComponent,
    TemplateVariablesComponent,
    TemplateControlFlowComponent,
    TemplateDeferrableViewComponent,
    SignalsComponent,
    PaiComponent,
    AngularPipesComponent,
    TemplateDrivenFormsComponent,
    ReactiveFormsComponent,
    ContentComponent,
    HostElementsComponent
  ],
  template: `
    <!-- <router-outlet /> -->
    <h1>Curso de Angular</h1>
    <!-- <app-new-component /> -->
    <!-- <app-template-binding /> -->
    <!-- <app-template-variables /> -->
    <!-- <app-template-control-flow /> -->
    <!-- <app-template-deferrable-view />-->
    <!-- <app-signals /> -->
    <!-- <app-pai /> -->
    <!-- <app-angular-pipes> -->
    <!-- <app-template-driven-forms /> -->
    <!-- <app-reactive-forms /> -->

    <!-- <app-content>
      <p id="header">Cabeçalho</p>
      <p class="footer">Rodapé</p>
      <p text>Texto</p>
      <h4 title>Título</h4>
      <u>Conteúdo sublinhado</u>
    </app-content> -->

    <app-host-elements />
  `
})
export class AppComponent { }
