import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';


import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';
import { TooltipModule } from 'primeng/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ReactiveFormsModule } from '@angular/forms';
import { SpeedDialModule } from 'primeng/speeddial';
import { CheckboxModule } from 'primeng/checkbox';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ListadoAsistentesComponent } from './components/asistencia/listado-asistentes/listado-asistentes.component';
import { HeaderComponent } from './components/formas/header/header.component';
import { ControlAsistentesComponent } from './components/asistencia/control-asistentes/control-asistentes.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AdministracionComponent } from './components/administracion/administracion.component';
import { AdminVotacionComponent } from './components/votaciones/admin-votacion/admin-votacion.component';
import { ClienteVotacionComponent } from './components/votaciones/cliente-votacion/cliente-votacion.component';
import { MenuComponent } from './components/formas/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoAsistentesComponent,
    HeaderComponent,
    ControlAsistentesComponent,
    LoginComponent,
    InicioComponent,
    AdministracionComponent,
    AdminVotacionComponent,
    ClienteVotacionComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ButtonModule,
    TableModule,
    DialogModule,
    InputTextModule,
    ToastModule,
    CardModule,
    TooltipModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DropdownModule,
    InputTextareaModule,
    FloatLabelModule,
    ReactiveFormsModule,
    SpeedDialModule,
    CheckboxModule
    
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
