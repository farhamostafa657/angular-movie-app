import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MovieRequestServiceService {
  constructor(private http: HttpClient) {}

  getMovieList(page: number): Observable<any> {
    return this.http.get(
      `${environment.baseURL}${environment.apiKey}&page=${page}`
    );
  }

  getSearchedMovie(movieName: string) {
    return this.http.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${environment.apiKey}&query=${movieName}`
    );
  }
}
