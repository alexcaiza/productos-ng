import { VerComponent } from './ver/ver.component';
import { ListadoComponent } from './listado/listado.component';
import { FormularioComponent } from './formulario/formulario.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'listado', component: ListadoComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'detalles/:id/:tipo', component: VerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
