import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {

  constructor(private http: HttpClient) { }

  createOne(data, url): Observable<any> {
    // console.log(data);
    const headers = { 'content-type': 'application/json', 'timeout': '300' }
    const body = JSON.stringify(data);
    // console.log(body);
    return this.http.post<any>(url, body, { 'headers': headers });
  }
}
