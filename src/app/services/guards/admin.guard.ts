import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthServiceService } from '../../services/auth-service.service'; // 👈 ajusta la ruta según tu proyecto
import alertasSistema from '../../components/alertas/alerta';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private authService: AuthServiceService, private router: Router) { }

  canActivate(): boolean {
    // Verifica si el usuario está autenticado y tiene rol admin
    const usuario = this.authService.getUsuario();
    console.log(usuario, 'usuario en guard');
    if (usuario || usuario.rol === 'admin') {
      alertasSistema.alertaExitosa('validado');
      return true; // ✅ acceso permitido
    }

    // 🚫 si no es admin, redirige
    this.router.navigate(['/login']);
    return false;
  }
}
