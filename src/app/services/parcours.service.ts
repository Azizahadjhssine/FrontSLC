import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Parcours } from '../models/parcours';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParcoursService {
  //localUrl:string=environment.basurl + "/parcours"
  localUrl:string="http://localhost:9999/api/v1/parcours"
  constructor(private http:HttpClient) {}

  ajouterParcours(prc:Parcours):Observable<Parcours>{
   return this.http.post<Parcours>(`${this.localUrl}/save`, prc)
  }
  listParcours():Observable<Parcours[]>{
    return this.http.get<Parcours[]>(`${this.localUrl}/getall`)
  }
  findById(id:number):Observable<Parcours>{
    return this.http.get<Parcours>(`${this.localUrl}/getbyid/${id}`)
  }
  delete(id:number):Observable<Parcours>{
    return this.http.delete<Parcours>(`${this.localUrl}/delet/${id}`)
  }
}
