import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmailRequest } from '../models/email-request';

@Injectable({
  providedIn: 'root'
})
export class EmailigService {

  private baseUrl: string = 'http://localhost:9999/api/v1/email'; // Remplacez avec l'URL correcte

  constructor(private http: HttpClient) { }

  sendEmail(emailRequest: EmailRequest): Observable<void> {
   // const url = `${this.baseUrl}/send-email`;
    return this.http.post<void>(`${this.baseUrl}/send-email`, emailRequest);
  }
}

