import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MovieAPI } from 'src/app/models/movieAPI.model';
import { CartService } from 'src/app/services/cart.service';
import { MovieService } from '../../services/movies.service';



@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit, OnDestroy {
  
  movie: MovieAPI | any;

  private subscription: Subscription | undefined;

  urlPath: string = 'https://image.tmdb.org/t/p/w500';

  constructor( 
    private activatedRoute: ActivatedRoute,
    private moviesService: MovieService,
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
    //this.subscription = this.moviesService.getDetail(this.activatedRoute.snapshot.params['id']).subscribe(movie => console.log(movie));
    this.moviesService.getDetailAPI(this.activatedRoute.snapshot.params['id'])  //obtiene el id desde la ruta url a la llamada al componente
    .subscribe(resp => {this.movie = resp
    console.log(this.movie);
  });
  }

  addMovie(){
    const id = this.movie.id;
    const title = this.movie.title;
    const poster_path = this.movie.poster_path;

    this.cartService.addMovie(id, title, poster_path)
    .subscribe(resp => {
      console.log(resp);
      alert("MOVIE IN CART")
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

} 

