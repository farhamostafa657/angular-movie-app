import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchItemService {
  private search = new BehaviorSubject<string>('');
  private filterMovie = new BehaviorSubject<Array<string>>([]);

  constructor() {}

  getSearch() {
    return this.search.asObservable();
  }

  changeSearch(newValue: string) {
    this.search.next(newValue);
  }

  getFilterMovie() {
    return this.filterMovie.asObservable();
  }
  changeFilterMovie(newFilter: Array<string>) {
    return this.filterMovie.next(newFilter);
  }
}
