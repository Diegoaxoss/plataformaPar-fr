import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent implements OnInit {
pdfUrl = '/Programa.pdf';

constructor(private sanitizer: DomSanitizer) {

}


ngOnInit() {

  // this.pdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl('/Programa.pdf');
}

abrirPDF() {
  window.open(this.pdfUrl, '_blank');
}
}
