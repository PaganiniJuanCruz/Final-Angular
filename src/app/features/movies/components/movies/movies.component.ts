import { Component, OnDestroy, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MovieService } from '../../services/movies.service';
import { MovieAPI } from 'src/app/models/movieAPI.model';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit, OnDestroy {

  private subscription: Subscription | undefined;
  movies: Movie[] = [];
  moviesAPI : MovieAPI[] =[];
  urlPath: string = 'https://image.tmdb.org/t/p/w500';

  constructor(
    private movieService: MovieService,
    private router: Router,
   ) { }

  ngOnInit(): void {
    //traigo un array de la api y las muestro en la consola
    this.subscription = this.movieService.getListAPI().subscribe(response => {
      this.moviesAPI = response.results  
      console.log(this.moviesAPI)
      });
  }

  navigateToDetail(id: number) {
    this.router.navigate(['movies', id]);
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}

