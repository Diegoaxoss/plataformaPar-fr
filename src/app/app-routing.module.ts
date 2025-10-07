import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoAsistentesComponent } from './components/listado-asistentes/listado-asistentes.component';

const routes: Routes = [
  {path:'', redirectTo:'listado', pathMatch:'full'},  
  {path:'listado', component: ListadoAsistentesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
