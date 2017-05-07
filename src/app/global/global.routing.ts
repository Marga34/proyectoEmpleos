import { Routes, RouterModule } from '@angular/router';
import { ListaComponent } from './principal/lista/lista.component';
import { DescrComponent } from './principal/descr/descr.component';
import { FormComponent } from './principal/form/form.component';
import { LISTA_ROUTES } from './principal/lista/lista.routing';


export const GLOBAL_ROUTES: Routes = [
    {path: 'lista', component: ListaComponent},
    { path: 'lista/:nombre', component: DescrComponent },
    {path: 'form', component: FormComponent}
];