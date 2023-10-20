import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Affaire } from '../models/affaire';

@Injectable({
  providedIn: 'root'
})
export class AffaireService {
  localUrl:string="http://localhost:9999/api/v1/affaire"
  constructor(private http:HttpClient) {}


  listAffaires():Observable<Affaire[]>{
    return this.http.get<Affaire[]>(`${this.localUrl}/listerAffaire`)
  }

  listAffairesByAssure(id:number):Observable<Affaire[]>{
    return this.http.get<Affaire[]>(`${this.localUrl}/AffaireByAssure/${id}`)

  }

  affaireById(id:number):Observable<Affaire>{
    return this.http.get<Affaire>(`${this.localUrl}/findOne/${id}`)

  }
  saveAffaire(aff:Affaire):Observable<Affaire>{
    return this.http.post<Affaire>(`${this.localUrl}/save`,aff)
  }

}
