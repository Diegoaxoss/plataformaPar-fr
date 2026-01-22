// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private usuarioActual: any = null;

  constructor() { }

  login(usuario: any) {
    this.usuarioActual = usuario;
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }

  logout() {
    this.usuarioActual = null;
    localStorage.removeItem('usuario');
  }

  getUsuario() {
    if (!this.usuarioActual) {
      this.usuarioActual = JSON.parse(localStorage.getItem('usuario') || 'null');
    }
    return this.usuarioActual;
  }

  esAdmin(): boolean {
    const usuario = this.getUsuario();
    return usuario?.rol === 'admin';
  }

  estaAutenticado(): boolean {
    return !!this.getUsuario();
  }
}
