import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/features/movies/services/movies.service';
import { MovieAPI } from 'src/app/models/movieAPI.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartMovies: MovieAPI[] | any = [];
  urlPath: string = 'https://image.tmdb.org/t/p/w500';

  constructor(
    private cartService: CartService,
    private movieService: MovieService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cartMovies = this.cartService.getList();
  }

  clearCarrito(){
    this.cartMovies = this.cartService.clear();
  }

  removeItem(movie: MovieAPI){
    console.log(movie);
    console.table(this.cartMovies);

    this.cartMovies = this.cartService.remove(movie);
  }

  returnToBillboard(){
    this.router.navigate(['movies']);
  }

}
