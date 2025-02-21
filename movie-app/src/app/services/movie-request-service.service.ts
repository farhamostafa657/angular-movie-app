import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MovieRequestServiceService {
  constructor(private http: HttpClient) {}

  getMovieList(): Observable<any> {
    return this.http.get(`${environment.baseURL}${environment.apiKey}`);
  }
}
