import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Souscription } from '../models/souscription';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class SouscriptionService {
  localUrl:string="http://localhost:9999/api/v1/Souscription"

  constructor(private http:HttpClient) {}


  ajoutersous(sous:Souscription ):Observable<Souscription> {
    return this.http.post<Souscription>(`${this.localUrl}/save`, sous)

  }

  listSous():Observable<Souscription[]>{
        return this.http.get<Souscription[]>(`${this.localUrl}/lister`)
  }

  deleteSouscription(id:number):Observable<Souscription> {
    return this.http.delete<Souscription>(`${this.localUrl}/delete/${id}`)
}

updateSouscription(souscription:Souscription):Observable<Souscription>{
  return this.http.post<Souscription>('${this.localUrl}/save/',souscription)
}
findSouscription(id: number): Observable<Souscription> {
  return this.http.get<Souscription>(`${this.localUrl}/findbyid/${id}`)
}

}
