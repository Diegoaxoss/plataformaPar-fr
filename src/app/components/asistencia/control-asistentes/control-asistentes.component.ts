import { Component, OnInit } from '@angular/core';
import { AsistentesService } from '../../../services/asistentes.service';

@Component({
  selector: 'app-control-asistentes',
  templateUrl: './control-asistentes.component.html',
  styleUrl: './control-asistentes.component.scss'
})
export class ControlAsistentesComponent implements OnInit {
  totalAsistentes: number = 0;
  asistencia: number = 0;
  sinAsistencia: number = 0;

  constructor(private _asistentesService: AsistentesService) {


  }
  ngOnInit(): void {
    this.listarAsistentes();
  }

  listarAsistentes() {
    this._asistentesService.getAsistentes().subscribe((data: any) => {
      const valorAsistentes = data;

      this.totalAsistentes = valorAsistentes.length;
      this.asistencia = valorAsistentes.filter((asistente: any) => asistente.asistencia === 'Si').length;
      this.sinAsistencia = valorAsistentes.filter((asistente: any) => asistente.asistencia === 'No').length;

    });
  }


}
