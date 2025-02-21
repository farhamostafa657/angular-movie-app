import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MovieListComponent } from '../movie-list/movie-list.component';
import { SearchItemService } from '../services/search-item.service';
import { MovieRequestServiceService } from '../services/movie-request-service.service';

@Component({
  selector: 'app-search',
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  searchTrem: string = '';
  searchService = inject(SearchItemService);
  requestService = inject(MovieRequestServiceService);
  filterMovie: any;
  constructor() {}

  handleSearchBtn() {
    this.searchService.changeSearch(this.searchTrem);
    this.requestService.getSearchedMovie(this.searchTrem).subscribe((res) => {
      this.filterMovie = res;
      this.searchService.changeFilterMovie(this.filterMovie);
    });
    this.searchTrem = '';
  }
}
