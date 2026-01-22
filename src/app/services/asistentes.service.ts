import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AsistentesService {

  // API_URI = 'http://localhost:3001/api'
  API_URI = 'https://eventos.plataformapar.com/api'

  constructor(private http: HttpClient) { }

  getAsistentes(){
    return this.http.get(`${this.API_URI}/asistentes`);
  }

  getTipoDocumento(){
    return this.http.get(`${this.API_URI}/asistentes/tipodocumento`);
  }
  
  postAsistencia(infoAsistencia: any){
    return this.http.post(`${this.API_URI}/asistentes/asistencia`, infoAsistencia);
  }

  postCrearAsistente(infoCrearAsistente: any){
    return this.http.post(`${this.API_URI}/asistentes/crear-asistente`, infoCrearAsistente);
  }

  postActualizarInfoParticipante(infoActualizarParticipante: any){
    return this.http.post(`${this.API_URI}/asistentes/actualizarinfo`,infoActualizarParticipante);
  }
}
