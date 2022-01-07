import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MovieService } from '../../services/movies.service';
import { MovieAPI } from 'src/app/models/movieAPI.model';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit, OnDestroy {

  private subscription = new Subscription;

  moviesAPI : MovieAPI[] = [];

  movie!: MovieAPI | any;

  urlPath: string = 'https://image.tmdb.org/t/p/w500';

  constructor(
    private movieService: MovieService,
    private router: Router,
    private cartService: CartService
   ) { }

  ngOnInit(): void {
    //traigo un array de la api y las muestro en la consola
    this.subscription.add(this.movieService.getListAPI().subscribe(resp => {
      this.moviesAPI = resp.results;
      console.log(this.moviesAPI)
      }));
  }

  addMovie(){
    console.log(this.movie);
    
    const id = this.movie.id;
    const title = this.movie.title;
    const poster_path = this.movie.poster_path;

    this.cartService.addMovie(id, title, poster_path)
    .subscribe(resp => {
      console.log(resp);
      alert("MOVIE IN CART")
    });
  }
  
  navigateToDetail(id: number) {
    this.router.navigate(['movies', id]);
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}

