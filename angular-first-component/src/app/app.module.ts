import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ContainerComponent } from './Container/container.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
