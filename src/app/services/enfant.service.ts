import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enfant } from '../models/enfant';

@Injectable({
  providedIn: 'root'
})
export class EnfantService {


   localUrl:string="http://localhost:9999/Api/v1/enfant"
    constructor(private http:HttpClient){}


   ajouterenfant(enf:Enfant):Observable<Enfant>{
    return this.http.post<Enfant>(`${this.localUrl}/save`, enf)
   }


   listEnfant():Observable<Enfant[]>{
return this.http.get<Enfant[]>(`${this.localUrl}/listEnfant`)
  }
   findById(id:number):Observable<Enfant>{
     return this.http.get<Enfant>(`${this.localUrl}/getbyid/${id}`)
   }
   delete(id:number):Observable<Enfant>{
     return this.http.delete<Enfant>(`${this.localUrl}/delet/${id}`)
   }

   findEnfantByAffaire(id:any):Observable<Enfant[]>{
    return this.http.get<Enfant[]>(`${this.localUrl}/listEnfant`)

   }
  }
