import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { General } from '../models/general';

@Injectable({
  providedIn: 'root'
}) 
export class GeneralService {
  localUrl:string="http://localhost:9999/api/v1/general"
  constructor(private http:HttpClient) {}

  tarifier(dtp:General):Observable<string>{
   return this.http.post<string>(`${this.localUrl}/neoSpvie`, dtp)
  }
}
