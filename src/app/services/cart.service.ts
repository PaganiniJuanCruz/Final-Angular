import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie } from '../models/movie.model';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private list: Movie[] = [];

  constructor() { }
  
  getList(): Observable<Movie[]>{
    return of(this.list);
  }

  addToCart(movie: Movie){
    this.list.push(movie);
    console.log(this.list);
  }

}
