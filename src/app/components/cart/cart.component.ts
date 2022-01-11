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
