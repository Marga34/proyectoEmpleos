import { Routes, RouterModule } from '@angular/router';
import { GlobalComponent } from './global/global.component';
import { HomeComponent } from './home/home.component';
import { ListaComponent } from './global/principal/lista/lista.component';
import { FormComponent } from './global/principal/form/form.component';
import { HeaderComponent } from './global/header/header.component';
import { FooterComponent } from './global/footer/footer.component';
import { GLOBAL_ROUTES } from './global/global.routing';


const APP_ROUTES: Routes = [
    //{path:'form', component: FormComponent},
    //{path:'lista', component: ListaComponent, children: LISTA_ROUTES},
    {path: 'global', component: GlobalComponent, children: GLOBAL_ROUTES},
    { path: '', component: HomeComponent }
];

export const ROUTING = RouterModule.forRoot(APP_ROUTES);