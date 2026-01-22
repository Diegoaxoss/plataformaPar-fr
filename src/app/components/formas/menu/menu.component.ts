import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  isOpen = false;

  menuItems = [
    { icon: '/asistencia.png', label: 'Administración', route: '/administracion' },
    { icon: '/asistencia.png', label: 'Listado', route: '/listado' },
    { icon: '/estadisticas.png', label: 'Estadisticas', route: '/estadisticas' },
    { icon: '/quorum-grupo.png', label: 'Admini Votos', route: '/admin-votacion' },
    { icon: '/quorum-estadistica.png', label: 'Estadisticas Votos', route: '/cliente-votacion' }
  ];

  openSidebar() {
    this.isOpen = true;
  }

  closeSidebar() {
    this.isOpen = false;
  }

  // Cierra al hacer click fuera
  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar && !sidebar.contains(event.target as Node)) {
      this.isOpen = false;
    }
  }


}
