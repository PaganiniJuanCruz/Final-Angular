import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription, tap } from 'rxjs';
import { MovieAPI } from 'src/app/models/movieAPI.model';
import { CartService } from 'src/app/services/cart.service';
import { MovieService } from '../../services/movies.service';
import Swal from 'sweetalert2';
import { select, Store } from '@ngrx/store';
import { CartState } from 'src/app/components/cart/store/cart-store.model';
import { CartItem } from 'src/app/components/cart/cart.model';
import { cartItemsSelector } from 'src/app/components/cart/store/cart.selector';
import { cartAddItem } from 'src/app/components/cart/store/cart.action';



@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit, OnDestroy {
  cartItems$!: Observable<CartItem[]>;

  movie: MovieAPI | any;

  private subscription: Subscription | undefined;

  urlPath: string = 'https://image.tmdb.org/t/p/w500';

  constructor( 
    private activatedRoute: ActivatedRoute,
    private moviesService: MovieService,
    private cartService: CartService,
    private store: Store<CartState>
  ) { }

  ngOnInit(): void {
    //this.subscription = this.moviesService.getDetail(this.activatedRoute.snapshot.params['id']).subscribe(movie => console.log(movie));
    this.moviesService.getDetailAPI(this.activatedRoute.snapshot.params['id'])  //obtiene el id desde la ruta url a la llamada al componente
    .subscribe(resp => {this.movie = resp
    console.log(this.movie);
  });
    this.cartItems$ = this.store.pipe(
    select(cartItemsSelector),
    tap(data => console.log(data))
  );
  
  }

  addMovie(){
    const id = this.movie.id;
    const title = this.movie.title;
    const poster_path = this.movie.poster_path;

    const item: CartItem = { id, title, poster_path};
    //  this.idSeed++;
      this.store.dispatch(cartAddItem({ id,title,poster_path }));
      Swal.fire('Congrats!', 'You added the movie!', 'success');
      console.log(item);
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}

