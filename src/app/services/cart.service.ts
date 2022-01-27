/*import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  url = environment.cartRestApi;
  
  constructor(
    private httpClient: HttpClient
  ) { }
  
  addMovie(id: number, title:string, poster_path:string):Observable<boolean>{
    return this.httpClient.post<boolean>(this.url,{
    id,
    title,
    poster_path
    })

  }
  
  getList():Observable<any>{
    
    return this.httpClient.get<any[]>(this.url);
  }

  removeMovie(id:number):Observable<any>{
    return this.httpClient.delete<any>(`${this.url}?id=${id}`)
  }

  clear():Observable<any[]>{
    return this.httpClient.get<any[]>(`${this.url}/clear`)
  }
}

/*clear():MovieAPI[]{
  return this.listMovie = [];
}
*/

/*remove(movie: MovieAPI): MovieAPI[] {
    console.log(movie);

    let index = this.listMovie.indexOf(movie);
    console.log(index);

    this.listMovie.splice(index,1);
    console.log(this.listMovie);
    return this.listMovie;
  }
  */

   /*
  addMovie(movie: MovieAPI){
    if(!this.listMovie.find(element => element.id === movie.id)){
      this.listMovie.push(movie)
    }else{
      alert("YA AGREGADA!")
    }
  }  
  */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Movie {
  id: string
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // url = 'http://localhost:3000/api/cart';
  url=environment.cartRestApi

  constructor(
    private httpClient: HttpClient
  ) { }

  getList(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.url);
  }

  addMovie(id: number, title:string, poster_path:string) {
    return this.httpClient.post<any>(this.url, { id,title,poster_path });
  }

  removeMovie(movieId: number) {
    return this.httpClient.delete<any>(this.url + '?id=' + movieId);
  }

  clear():Observable<any[]>{
      return this.httpClient.get<any[]>(`${this.url}/clear`)
  }

}