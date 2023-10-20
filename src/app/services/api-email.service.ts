import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiEmailService {

  private baseUrl: string = 'http://localhost:9999/api/v1/getToken'; // Remplacez avec l'URL correcte
  constructor(private http: HttpClient) {}

  sendEmail(dt: string): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/apipdf`, dt);
  }
}
