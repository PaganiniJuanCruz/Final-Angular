/*
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MovieService } from 'src/app/features/movies/services/movies.service';
import { MovieAPI } from 'src/app/models/movieAPI.model';
import { CartService } from 'src/app/services/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public list: MovieAPI[] = [];
  
  urlPath: string = 'https://image.tmdb.org/t/p/w500';

  private subscription= new Subscription;

  constructor(
    private cartService: CartService,
    private movieService: MovieService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.subscription.add(this.cartService.getList()
    .subscribe(resp => {
      this.list = resp;
    }));
  }

  removeItem(id: number){
    this.cartService.removeMovie(id)
    .subscribe(resp => {
      console.log(resp);
      this.subscription.add(this.cartService.getList().subscribe(resp => {
        this.list = resp
      }))  
    })
    Swal.fire('Be careful!', 'You delete the movie!', 'error');  
  }
  
  clearCart(){
    this.subscription.add(this.cartService.clear().subscribe(resp => 
      this.list = resp));
      Swal.fire('Well done!', 'You clear the cart!', 'success');
  }


  returnToBillboard(){
    this.router.navigate(['movies']);
  }

  ngOnDestroy(): void{
    this.subscription.unsubscribe();
  }

}
*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import Swal from 'sweetalert2';
import { CartItem } from './cart.model';
import { CartState } from './store/cart-store.model';
import { cartClear, cartDeleteItem } from './store/cart.action';


import { cartItemsSelector } from './store/cart.selector';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
 // private idSeed = 1;
 urlPath: string = 'https://image.tmdb.org/t/p/w500';

  cartItems$!: Observable<CartItem[]>;

  constructor(
    private store: Store<CartState>,
    private router: Router
  ) { }

  ngOnInit(): void {
  //  this.store.dispatch(AppSetTitle({title: 'Cart'}));

    this.cartItems$ = this.store.pipe(
      select(cartItemsSelector),
      tap(data => console.log(data)),
    );
  }

  // addOneItem() {
  //   const item: CartItem = { id: String(this.idSeed), movie: {name: `item ${this.idSeed}`}};
  //   this.idSeed++;
  //   this.store.dispatch(cartAddItem({ item }));
  // }

  removeItem(id: number) {
    this.store.dispatch(cartDeleteItem({ itemId: id }));
    Swal.fire('Be careful!', 'You delete the movie!', 'error');
  }

  clearCart() {
    this.store.dispatch(cartClear())
    this.cartItems$ = this.store.pipe(
    select(cartItemsSelector));
  }

  returnToBillboard(){
    this.router.navigate(['movies']);
  }

}