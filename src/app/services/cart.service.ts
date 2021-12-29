import { Injectable } from '@angular/core';
import { MovieService } from '../features/movies/services/movies.service';
import { MovieAPI } from '../models/movieAPI.model';


@Injectable({
  providedIn: 'root'
})
export class CartService {


  private listMovie: MovieAPI[] = [];

  constructor(
    private movieService: MovieService
  ) { }

  addMovie(movie: MovieAPI){
    if(!this.listMovie.find(element => element.id === movie.id)){
      this.listMovie.push(movie)
    }else{
      alert("YA AGREGADA!")
    }
  }  
  
  setList(listMovie: MovieAPI[]){
    this.listMovie = listMovie;
  }

  getList():MovieAPI[]{
    return this.listMovie;
  }

  clear():MovieAPI[]{
    return this.listMovie = [];
  }

  remove(movie: MovieAPI): MovieAPI[] {
    console.log(movie);

    let index = this.listMovie.indexOf(movie);
    console.log(index);

    this.listMovie.splice(index,1);
    console.log(this.listMovie);
    return this.listMovie;
  }
}
