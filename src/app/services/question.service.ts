import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  localUrl:string="http://localhost:9999/api/v1/question"

  constructor(private http:HttpClient) { }



  ajouterQuestion(etp:Question ):Observable<Question> {
    return this.http.post<Question>(`${this.localUrl}/save`, etp)

  }
  listqQuestion():Observable<Question[]>{
    return this.http.get<Question[]>(`${this.localUrl}/lister`)
}
findQuestionByEtape(id: number): Observable<Question[]> {
  return this.http.get<Question[]>(`${this.localUrl}/findbyidetape/${id}`)
}
deleteQuestion(id:number):Observable<Question> {
  return this.http.delete<Question>(`${this.localUrl}/delete/${id}`)
}
}
