import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AsistentesService } from '../../../services/asistentes.service';
import { Router } from '@angular/router';
import { CategoriasService } from '../../../services/categorias.service';
import alertasSistema from '../../alertas/alerta';
import JsBarcode from 'jsbarcode';


@Component({
  selector: 'app-listado-asistentes',
  templateUrl: './listado-asistentes.component.html',
  styleUrl: './listado-asistentes.component.scss'
})
export class ListadoAsistentesComponent implements OnInit {
  @ViewChild('areaImpresion') areaImpresion!: ElementRef;
  @ViewChild('barcode') barcode!: ElementRef;

  products!: any[];
  cities: any | undefined;
  selectedCity: any;
  mostarTabla: boolean = true;
  visible: boolean = false;
  visibleEdicion: boolean = false;


  infoRegistro = {
    nombres: '',
    apellidos: '',
    asistencia: '',
    tipo_documento: '',
    documento: '',
    especialidad: '',
    categoria: '',
    direccion: '',
    telefono: '',
    ciudad: '',
    pais: '',
    pago: '',
    notas: ''
  }

  infoEdicion = {
    idasistentes: 0,
    nombres: '',
    apellidos: '',
    asistencia: '',
    tipo_documento: '',
    documento: '',
    especialidad: '',
    categoria: '',
    direccion: '',
    telefono: '',
    ciudad: '',
    pais: '',
    pago: '',
    notas: '',
    user_registro: "Diego",
    fha_registro: "2025-10-10"
  }

  impresionAsistente = {
    idasistentes: 0,
    nombres: '',
    apellidos: '',
    categoria: ''
  }

  globalFilter: string = '';

  tipoDocumento: any;
  categorias: any;
  estados: any[] = [
    { estado: 'Si' },
    { estado: 'No' },
  ];

  constructor(private router: Router,
    private cdr: ChangeDetectorRef,
    private _asistentesService: AsistentesService,
    private _categorias: CategoriasService) { }


  ngOnInit(): void {
    this.listarAsistentes();
    this.listarTipoDocumento();
    this.listarCategorias();
  }

  listarAsistentes() {
    this._asistentesService.getAsistentes().subscribe((data: any) => {
      this.products = data;
    });
  }

  listarTipoDocumento() {
    this._asistentesService.getTipoDocumento().subscribe((data: any) => {
      this.tipoDocumento = data;
    });
  }

  listarCategorias() {
    this._categorias.getCategorias().subscribe((data: any) => {
      this.categorias = data;
    });
  }

  estadisticas() {
    this.router.navigate(['/estadisticas']);
  }

  crearUsuario() {
    this.visible = true;
  }

  editarUsuario(infoEdicionBtn: any) {
    this.visibleEdicion = true;
    this.infoEdicion = infoEdicionBtn;
    console.log(this.infoEdicion, 'info de registroooo');
  }

  marcarAsistencia(documento: any) {
    this._asistentesService.postAsistencia({ documento: documento }).subscribe((data: any) => {
      if (data.status === 'success') {
        alertasSistema.alertaExitosa(data.message);
        this.listarAsistentes();
      } else {
        alertasSistema.errorAlertaTop(data.message);
      }
    });
  }


  registrar() {
    if (this.infoRegistro.nombres === '' || this.infoRegistro.apellidos === '' || this.infoRegistro.asistencia === '' || this.infoRegistro.tipo_documento === '' || this.infoRegistro.documento === '' || this.infoRegistro.especialidad === '' || this.infoRegistro.categoria === '' || this.infoRegistro.direccion === '' || this.infoRegistro.telefono === '' || this.infoRegistro.ciudad === '' || this.infoRegistro.pais === '' || this.infoRegistro.pago === '') {
      alertasSistema.errorAlertaValidar("Por favor complete todos los campos");
    } else {
      this._asistentesService.postCrearAsistente(this.infoRegistro)
        .subscribe((data: any) => {
          if (data.status === 'success') {
            alertasSistema.alertaExitosa(data.message);
            this.listarAsistentes();
            this.visible = false;
            this.limpiar();
          } else {
            alertasSistema.errorAlertaTop(data.message);
          }
        });

    }

  }

  actualizar() {
    if (this.infoEdicion.nombres === '' || this.infoEdicion.apellidos === '' || this.infoEdicion.asistencia === '' || this.infoEdicion.tipo_documento === '' || this.infoEdicion.documento === '' || this.infoEdicion.especialidad === '' || this.infoEdicion.categoria === '' || this.infoEdicion.direccion === '' || this.infoEdicion.telefono === '' || this.infoEdicion.ciudad === '' || this.infoEdicion.pais === '' || this.infoEdicion.pago === '') {
      alertasSistema.errorAlertaValidar("Por favor complete todos los campos");
    } else {
      console.log(this.infoEdicion, 'info de edicion');
      this._asistentesService.postActualizarInfoParticipante(this.infoEdicion)
        .subscribe((data: any) => {
          if (data.status === 'success') {
            alertasSistema.alertaExitosa(data.message);
            this.listarAsistentes();
            this.visibleEdicion = false;
          } else {
            alertasSistema.errorAlertaTop(data.message);
          }
        });

    }
  }
  limpiar() {
    this.infoRegistro = {
      nombres: '',
      apellidos: '',
      asistencia: '',
      tipo_documento: '',
      documento: '',
      especialidad: '',
      categoria: '',
      direccion: '',
      telefono: '',
      ciudad: '',
      pais: '',
      pago: '',
      notas: ''
    }

    this.infoEdicion = {
      idasistentes: 0,
      nombres: '',
      apellidos: '',
      asistencia: '',
      tipo_documento: '',
      documento: '',
      especialidad: '',
      categoria: '',
      direccion: '',
      telefono: '',
      ciudad: '',
      pais: '',
      pago: '',
      notas: '',
      user_registro: "Jheremy",
      fha_registro: "2025-10-15"
    }
  }
  cancelar() {
    this.infoRegistro = {
      nombres: '',
      apellidos: '',
      asistencia: '',
      tipo_documento: '',
      documento: '',
      especialidad: '',
      categoria: '',
      direccion: '',
      telefono: '',
      ciudad: '',
      pais: '',
      pago: '',
      notas: ''
    }

    this.infoEdicion = {
      idasistentes: 0,
      nombres: '',
      apellidos: '',
      asistencia: '',
      tipo_documento: '',
      documento: '',
      especialidad: '',
      categoria: '',
      direccion: '',
      telefono: '',
      ciudad: '',
      pais: '',
      pago: '',
      notas: '',
      user_registro: "Jheremy",
      fha_registro: "2025-10-15"
    }

    this.visibleEdicion = false;
    this.visible = false;
  }



  imprimir(datosUsuario: any) {
    this.marcarAsistencia(datosUsuario.documento);

    this.impresionAsistente = {
      idasistentes: datosUsuario.idasistentes,
      nombres: datosUsuario.nombres,
      apellidos: datosUsuario.apellidos,
      categoria: datosUsuario.categoria
    };

    this.cdr.detectChanges();

    // ✅ Esperamos a que Angular actualice la vista
    setTimeout(() => {
      const contenido = this.areaImpresion.nativeElement.innerHTML;

      const ventana = window.open('', '_blank', 'width=600,height=400');
      if (!ventana) {
        alert('Por favor permite las ventanas emergentes.');
        return;
      }

      ventana.document.open();
      ventana.document.write(`
          <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="utf-8">
        <title>Constancia de Asistencia</title>
        <style>
          @page {
            margin: 15mm 10mm;
          }

          body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin: 0;
            padding: 0;
          }

          #areaImpresion {
            margin-top: 1mm;
            text-align: center;
          }

          h3 {
            margin: 4mm 0;
            font-size: 17px;
          }

          h5 {
            margin: 2mm 0;
            font-size: 16px;
          }

          svg {
            margin-top: 1mm;
            height: 50px;
          }
        </style>
      </head>
      <body onload="window.print(); window.close();">
        <div id="areaImpresion">
          ${contenido}
        </div>
      </body>
      </html>
      `);
      ventana.document.close();
    }, 100);
  }

  ngAfterViewInit() {
    this.generarCodigoBarras();
  }

  generarCodigoBarras() {
    if (this.barcode) {
      JsBarcode(this.barcode.nativeElement, String(this.impresionAsistente.idasistentes), {
        format: 'CODE128',
        lineColor: '#000',
        width: 2,
        height: 60,
        displayValue: false
      });
    }

  }

}
