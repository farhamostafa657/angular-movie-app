import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MovieRequestServiceService } from '../services/movie-request-service.service';

@Component({
  selector: 'app-movie-list',
  imports: [CommonModule, DatePipe],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css',
})
export class MovieListComponent {
  isHovered = false;
  ismouseEnter = false;
  movieList: any;

  constructor(private movieRequist: MovieRequestServiceService) {}

  toggleHeart() {
    this.isHovered = !this.isHovered;
  }

  toggleHeartHover(state: boolean) {
    this.ismouseEnter = state;
  }

  ngOnInit() {
    this.movieRequist
      .getMovieList()
      .subscribe((res: any) => (this.movieList = res.results));
  }
}
