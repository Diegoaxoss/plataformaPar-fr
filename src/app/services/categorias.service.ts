import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  // API_URI = 'http://localhost:3001/api'
    API_URI = 'https://eventos.plataformapar.com/api'

  constructor(private http: HttpClient) { }

  getCategorias(){
    return this.http.get(`${this.API_URI}/categorias`);  
  }
  
  postCrearCategoria(infoCrearCategoria: any){
    return this.http.post(`${this.API_URI}/categorias/crear-categoria`, infoCrearCategoria);  
  }

  postActualizarCategoria(infoActualizarCategoria: any){
    return this.http.post(`${this.API_URI}/categorias/actualizar-categoria`,infoActualizarCategoria);  
  }
}
