import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reponse } from '../models/reponse';
import { Observable } from 'rxjs';
import { Souscription } from '../models/souscription';

@Injectable({
  providedIn: 'root'
})
export class ReponseService {



  localUrl:string="http://localhost:9999/Api/v1/Reponse"

  constructor(private http:HttpClient) {}


  ajoutersous(sous:Reponse ):Observable<Reponse> {
    return this.http.post<Reponse>(`${this.localUrl}/save`, sous)

  }

  listSous():Observable<Reponse[]>{
        return this.http.get<Reponse[]>(`${this.localUrl}/lister`)
  }
  findReponsenByQuestion(id: number): Observable<Reponse> {
    return this.http.get<Reponse>(`${this.localUrl}/findbyidetape/${id}`)
  }
}
