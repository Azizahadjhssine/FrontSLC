import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Etape } from '../models/etape';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtapeService {
  localUrl:string="http://localhost:9999/api/v1/Etape"

  constructor(private http:HttpClient) { }

  ajouteretape(etp:Etape ):Observable<Etape> {
    return this.http.post<Etape>(`${this.localUrl}/save`, etp)

  }



  listEtape():Observable<Etape[]>{
    return this.http.get<Etape[]>(`${this.localUrl}/lister`)
}



  ajouterEtapebis(etp:Etape) {
    return this.http.post(`${this.localUrl}/save`, etp)
    }

   /* listeEtape():Observable<Etape[]> {
      return this.http.get<Etape[]> (`${this.localUrl}/lister`)

      //.pipe(map((response:any)=> response as Employee))
    }*/

   /* listeEtapes():Observable<Array <Etape>> {
        return this.http.get<Array <Etape>> (`${this.localUrl}/getall`)
    }*/

   // findEmployee(id:number):Observable<Employee>{
      //return this.http.get<Employee>(`${this.localUrl}/getbyid/${id}`)
   // }
   /* findEtape(id: number): Observable<Etape> {
      return this.http.get(`${this.localUrl}/getbyid/${id}`).pipe(
        map((response:any) => response as Etape)
      );
    }*/
   deleteEtape(id:number):Observable<Etape> {
      return this.http.delete<Etape>(`${this.localUrl}/delete/${id}`)
  }

  findEtapeByParcours(id: number): Observable<Etape[]> {
    return this.http.get<Etape[]>(`${this.localUrl}/findbyidPrc/${id}`)
}

}
