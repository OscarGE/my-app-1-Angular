import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CuestionarioComponent } from './components/cuestionario/cuestionario.component';


@NgModule({
  declarations: [
    AppComponent,
    CuestionarioComponent,
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
