import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ReadStudentDataService {
  private apiUrl = 'http://localhost:8087/studentrest/1';

  constructor (private http: HttpClient) {
  }

  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
