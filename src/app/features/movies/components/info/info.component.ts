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
    private router: Router
  ) { }

  ngOnInit(): void {
    //this.subscription = this.moviesService.getDetail(this.activatedRoute.snapshot.params['id']).subscribe(movie => console.log(movie));
    this.moviesService.getDetailAPI(this.activatedRoute.snapshot.params['id'])  //obtiene el id desde la ruta url a la llamada al componente
    .subscribe(respose => {this.movie = respose
    console.log(this.movie);
  });
}

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  addMovie(movie: MovieAPI){
    this.cartService.addMovie(movie)
    this.router.navigate(['cart']);
  }

}

