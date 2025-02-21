import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MovieRequestServiceService } from '../services/movie-request-service.service';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module
import { RouterLink } from '@angular/router';
import { TruncatePipe } from '../pipes/truncate.pipe';

@Component({
  selector: 'app-movie-list',
  imports: [
    CommonModule,
    DatePipe,
    NgxPaginationModule,
    RouterLink,
    TruncatePipe,
  ],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css',
})
export class MovieListComponent {
  isHovered = false;
  ismouseEnter = false;
  movieList: any;
  p: number = 1;
  pageSize: number = 20;
  total: number = 0;
  numPages: number[] = [];
  currentPage: number = this.p;
  Math = Math;

  constructor(private movieRequist: MovieRequestServiceService) {}

  toggleHeart() {
    this.isHovered = !this.isHovered;
  }

  toggleHeartHover(state: boolean) {
    this.ismouseEnter = state;
  }

  ngOnInit() {
    this.loadMovies();
  }

  loadMovies() {
    this.movieRequist.getMovieList(this.p).subscribe((res: any) => {
      this.movieList = res.results;
      this.total = res.total_pages;
    });
  }

  handlePagePrev(page: number) {
    if (page < 1) {
      page = 1;
    }
    if (page > this.total) {
      page = this.total;
    }
    this.p = page;
    this.loadMovies();

    this.currentPage = page;
  }

  handleCurrentPage(page: number) {
    if (page < 1) {
      page = 1;
    }
    if (page > this.total) {
      page = this.total;
    }
    this.p = page;
    this.loadMovies();
  }

  handlePageNext(page: number) {
    if (page < 1) {
      page = 1;
    }
    if (page > this.total) {
      page = this.total;
    }
    this.p = page + 2;
    this.loadMovies();

    this.currentPage = page;
  }
}
