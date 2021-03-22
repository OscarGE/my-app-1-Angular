import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MiComponente1Component } from './mi-componente1/mi-componente1.component';
import { MiComponente2Component } from './mi-componente2/mi-componente2.component';

@NgModule({
  declarations: [
    AppComponent,
    MiComponente1Component,
    MiComponente2Component,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
