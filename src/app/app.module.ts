import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListaComponent } from './lista/lista.component';
import { FormComponent } from './form/form.component';
import { DescrComponent } from './descr/descr.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    FormComponent,
    DescrComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
