import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { MovieAPI, MoviesAPI } from 'src/app/models/movieAPI.model';


@Injectable()
export class MovieService {

  constructor(
    private httpClient: HttpClient
  ) { }
  private urlAllMovies = environment.urlMovieAPI;
  private urlFirstPart = environment.urlAPI;
  private urlLastPart = environment.keyAPI

  //me trae todas las peliculas de la API
  getListAPI(): Observable<MoviesAPI>{                           
    return this.httpClient.get<MoviesAPI>(this.urlAllMovies);
  }

  //me trae la pelicula que coincida con el ID
  getDetailAPI(id:string): Observable<MovieAPI> {              
    return this.httpClient.get<MovieAPI>(`${this.urlFirstPart}${id}${this.urlLastPart}`);
  }
  
  
  
  /*getDetail(id: string): Observable<Movie | undefined>{
    return of(movieMock.find(movie => movie.id === id))
  }

  getMovies(): Observable <Movie[]> {
    return of(movieMock);
  }
  */
}


