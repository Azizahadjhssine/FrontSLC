import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Conjoint } from '../models/conjoint';

@Injectable({
  providedIn: 'root'
})
export class ConjointService {

   //localUrl:string=environment.basurl + "/parcours"
   localUrl:string="http://localhost:9999/api/v1/Conjoint"
   constructor(private http:HttpClient) {}

   ajouterConjoint(cnj:Conjoint):Observable<Conjoint>{
    return this.http.post<Conjoint>(`${this.localUrl}/save`, cnj)
   }
   listConjoint():Observable<Conjoint[]>{
     return this.http.get<Conjoint[]>(`${this.localUrl}/lister`)
   }
   findById(id:number):Observable<Conjoint>{
     return this.http.get<Conjoint>(`${this.localUrl}/getbyid/${id}`)
   }
   delete(id:number):Observable<Conjoint>{
     return this.http.delete<Conjoint>(`${this.localUrl}/delete/${id}`)
   }
}
