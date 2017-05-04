import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListaComponent } from './lista/lista.component';
import { FormComponent } from './form/form.component';


const APP_ROUTES: Routes = [
    {path:'form', component: FormComponent},
    {path:'lista', component: ListaComponent},
    { path: '', component: HomeComponent }
];

export const ROUTING = RouterModule.forRoot(APP_ROUTES);