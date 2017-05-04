import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListaComponent } from './lista/lista.component';
import { FormComponent } from './form/form.component';
import { DescrComponent } from './descr/descr.component';
import { OfertaComponent } from './lista/oferta/oferta.component';
import { FiltroComponent } from './lista/filtro/filtro.component';
import { FormularioComponent } from './form/formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    FormComponent,
    DescrComponent,
    OfertaComponent,
    FiltroComponent,
    FormularioComponent
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
