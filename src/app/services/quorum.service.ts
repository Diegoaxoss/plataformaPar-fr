import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuorumService {
  API_URI = 'http://localhost:3001/api'
  //API_URI = 'https://eventos.plataformapar.com/api'

  constructor(private http: HttpClient) { }

  getQuorumTipo() {
    return this.http.get(`${this.API_URI}/quorum/tipo-quorum`);
  }

  getTiempoRespuesta() {
    return this.http.get(`${this.API_URI}/quorum/tiempo-respuesta`);
  }
}
