import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ocorrencia } from '../model/ocorrencia';

@Injectable({
  providedIn: 'root'
})
export class OcorrenciaService {

  constructor(
    private http:HttpClient) { }

  listOcorrencias(): Observable<Ocorrencia[]>{
    const caminho = '/api/incidencia';
    return this.http.get<Ocorrencia[]>(caminho);     
  }
}
