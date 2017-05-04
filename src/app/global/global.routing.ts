import { Routes, RouterModule } from '@angular/router';
import { ListaComponent } from './principal/lista/lista.component';
import { FormComponent } from './principal/form/form.component';


export const GLOBAL_ROUTES: Routes = [
    {path:'lista', component: ListaComponent},
    {path:'form', component: FormComponent}
];