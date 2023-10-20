import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiEmail } from '../models/api-email';

@Injectable({
  providedIn: 'root'
})
export class ApiPdfEmailService {

  private baseUrl = 'http://localhost:9999/api/v1/getToken';  // Remplacez par l'URL de votre API Spring Boot

  constructor(private http: HttpClient) { }

  getApiPdf(data: ApiEmail): Observable<any> {
    return this.http.post(`${this.baseUrl}/apipdf`, data);
  }

  getToken(): Observable<string> {
    const url = `${this.baseUrl}/token`; // Assurez-vous que l'URL est correcte
    return this.http.get<string>(url);
  }
}
