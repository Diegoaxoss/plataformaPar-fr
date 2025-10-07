import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'plataformaPar';
  productos = [
    { nombre: 'Cemento', precio: 50000 },
    { nombre: 'Arena', precio: 30000 }
  ];

  constructor() { }


}
