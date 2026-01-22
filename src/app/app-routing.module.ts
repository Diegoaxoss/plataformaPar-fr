import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoAsistentesComponent } from './components/asistencia/listado-asistentes/listado-asistentes.component';
import { ControlAsistentesComponent } from './components/asistencia/control-asistentes/control-asistentes.component';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AdminGuard } from './services/guards/admin.guard';
import { AdminVotacionComponent } from './components/votaciones/admin-votacion/admin-votacion.component';
import { ClienteVotacionComponent } from './components/votaciones/cliente-votacion/cliente-votacion.component';
import { AdministracionComponent } from './components/administracion/administracion.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'administracion', component: AdministracionComponent, canActivate: [AdminGuard] },
  { path: 'listado', component: ListadoAsistentesComponent, canActivate: [AdminGuard] },
  { path: 'estadisticas', component: ControlAsistentesComponent, canActivate: [AdminGuard] },
  { path: 'admin-votacion', component: AdminVotacionComponent, canActivate: [AdminGuard] },
  { path: 'cliente-votacion', component: ClienteVotacionComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
