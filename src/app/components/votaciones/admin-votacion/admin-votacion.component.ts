import { Component, OnInit } from '@angular/core';
import { QuorumService } from '../../../services/quorum.service';
import { info, log } from 'console';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuItem, MessageService } from 'primeng/api';


@Component({
  selector: 'app-admin-votacion',
  templateUrl: './admin-votacion.component.html',
  styleUrl: './admin-votacion.component.scss',
  providers: [MessageService]

})
export class AdminVotacionComponent implements OnInit {
  tipoQuorum: any;
  tiempoRespuesta: any;

  infoVotacion = {
    quorum: '',
    tiempoRespuesta: '',
    resultadoPantalla: false
  };

  form: FormGroup;

  items: MenuItem[] = [];
  constructor(private quorumService: QuorumService, private fb: FormBuilder, private messageService: MessageService) {
    this.form = this.fb.group({
      preguntas: this.fb.array([])
    });

    // Agregamos la primera pregunta por defecto
    this.agregarPregunta();

  }

  ngOnInit(): void {
    this.listarQuorum();
    this.listarTiemposRespuesta();

    this.items = [
      {
        icon: 'pi pi-question',
        command: () => {
          this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Pregunta Agregada' });
          this.agregarPregunta();
        }
      },
      {
        icon: 'pi pi-info',
        command: () => {
          this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
          this.agregarRespuesta(0);
        }
      }
    ];
  }

  listarQuorum() {
    this.quorumService.getQuorumTipo().subscribe((infoTipoQuorum: any) => {
      this.tipoQuorum = infoTipoQuorum;
      console.log(this.tipoQuorum, 'infoTipoQuorum');

    })
  }

  listarTiemposRespuesta() {
    this.quorumService.getTiempoRespuesta().subscribe((infoTiempoRespuesta: any) => {
      this.tiempoRespuesta = infoTiempoRespuesta;
      console.log(this.tiempoRespuesta, 'infoTiempoRespuesta');
    })
  }


  // Getter preguntas
  get preguntas(): FormArray {
    return this.form.get('preguntas') as FormArray;
  }

  // Respuestas por pregunta
  respuestas(index: number): FormArray {
    return this.preguntas.at(index).get('respuestas') as FormArray;
  }

  // Crear pregunta
  crearPregunta(): FormGroup {
    return this.fb.group({
      texto: ['', Validators.required],
      respuestas: this.fb.array([
        this.fb.control('', Validators.required),
        this.fb.control('', Validators.required)
      ])
    });
  }

  // Agregar pregunta
  agregarPregunta() {
    this.preguntas.push(this.crearPregunta());
  }

  // Agregar respuesta
  agregarRespuesta(index: number) {
    this.respuestas(index).push(
      this.fb.control('', Validators.required)
    );
  }

  // Eliminar pregunta (opcional)
  eliminarPregunta(index: number) {
    this.preguntas.removeAt(index);
  }

  guardar() {
    console.log(this.form.value);
  }
}
