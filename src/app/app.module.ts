import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HolamundoComponent } from './components/holamundo/holamundo.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';


@NgModule({
  declarations: [
    AppComponent,
    HolamundoComponent,
    CalculadoraComponent,
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
