import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ROUTING } from './app.routing';
import { AppComponent } from './app.component';
import { ListaComponent } from './lista/lista.component';
import { FormComponent } from './form/form.component';
import { DescrComponent } from './descr/descr.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

import { OfertaComponent } from './lista/oferta/oferta.component';
import { FiltroComponent } from './lista/filtro/filtro.component';
<<<<<<< HEAD
import { FormularioComponent } from './form/formulario/formulario.component';
=======
import { DetalleComponent } from './descr/detalle/detalle.component';
>>>>>>> 538fe5f97994732854385a666030b5f0e907ef94


@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    FormComponent,
    DescrComponent,

    HeaderComponent,
    FooterComponent,
    HomeComponent,

    OfertaComponent,
<<<<<<< HEAD

    FiltroComponent,
    FormularioComponent,
    FiltroComponent
=======

    FiltroComponent,
    DetalleComponent,

    FiltroComponent


>>>>>>> 538fe5f97994732854385a666030b5f0e907ef94
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
