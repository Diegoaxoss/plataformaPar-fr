import { Component, OnInit } from '@angular/core';
import alertasSistema from '../alertas/alerta';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../services/auth-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent implements OnInit {
  infoSesion = {
    username: '',
    password: '',
  }
  constructor(private router: Router, private authService: AuthServiceService,) {


  }
  ngOnInit(): void {
    localStorage.clear();
  }

  ingresar() {
    const usuario = this.infoSesion.username.toLocaleLowerCase();
    const pass = this.infoSesion.password.toLocaleLowerCase();

    console.log(usuario, pass, 'info de sesion');
    if (usuario === '' || pass === '') {
      alertasSistema.camposVacios('Los campos no pueden estar vacíos');
    } else {
      if (usuario === 'admin' && pass === 'parplataforma2025*') {

        console.log('ingresando como admin');

        alertasSistema.alertaExitosa('Inicio de sesión exitoso');
        this.authService.login(usuario);
        this.router.navigate(['/inicio']);
      } else {
        if (usuario === 'asistente' || usuario === 'expositor' || usuario === 'conferencista' && pass === 'acn') {
          alertasSistema.alertaExitosa('Inicio de sesión exitoso');
          this.router.navigate(['/inicio']);
        } else {
          alertasSistema.errorAlertaValidar('Usuario o contraseña incorrecta');
        }
      }

    }
  }
}
