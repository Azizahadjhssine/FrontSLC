import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Assure } from '../models/assure';

@Injectable({
  providedIn: 'root'
})
export class AssureService {
 //localUrl:string=environment.basurl + "/parcours"
 localUrl:string="http://localhost:9999/Api/v1/assure"
 constructor(private http:HttpClient) {}

 ajouterAssure(cnj:Assure):Observable<Assure>{
  return this.http.post<Assure>(`${this.localUrl}/save`, cnj)
 }
 listConjoint():Observable<Assure[]>{
   return this.http.get<Assure[]>(`${this.localUrl}/lister`)
 }
 findById(id:number):Observable<Assure>{
   return this.http.get<Assure>(`${this.localUrl}/findbyid/${id}`)
 }
 delete(id:number):Observable<Assure>{
   return this.http.delete<Assure>(`${this.localUrl}/delete/${id}`)
 }
}
