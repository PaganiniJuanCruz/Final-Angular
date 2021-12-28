import { Component, OnDestroy, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { MovieService } from '../../services/movies.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit, OnDestroy {

  private subscription: Subscription | undefined;

  constructor(
    private movieService: MovieService,
    private router: Router,
    private cartService: CartService
   ) { }
    movies: Movie[] = [];

  ngOnInit(): void {
    this.subscription = this.movieService.getMovies().
    subscribe(movies => this.movies = movies);

    
  }
  navigateToDetail(id: string){
    this.router.navigate(['movies', id])
  }
  ngOnDestroy(): void {
      this.subscription?.unsubscribe();
  }
}

