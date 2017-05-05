import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ROUTING } from './app.routing';
import { AppComponent } from './app.component';
import { ListaComponent } from './global/principal/lista/lista.component';
import { FormComponent } from './global/principal/form/form.component';
import { DescrComponent } from './global/principal/descr/descr.component';

import { HeaderComponent } from './global/header/header.component';
import { FooterComponent } from './global/footer/footer.component';
import { HomeComponent } from './home/home.component';


import { FiltroComponent } from './global/principal/lista/filtro/filtro.component';
import { GlobalComponent } from './global/global.component';
import { PrincipalComponent } from './global/principal/principal.component';
import { ServicioService } from './global/principal/lista/servicio.service';




@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    FormComponent,
    DescrComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FiltroComponent,
    GlobalComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ROUTING
  ],
  providers: [ServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
