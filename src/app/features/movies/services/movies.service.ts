import { Injectable } from '@angular/core';
import { movieMock } from './movieMock';
import { Observable, of } from 'rxjs';
import { Movie } from 'src/app/models/movie.model';


@Injectable()
export class MovieService {

  constructor() { }
  
  getDetail(id: string): Observable<Movie | undefined>{
    return of(movieMock.find(movie => movie.id === id))
  }

  getMovies(): Observable <Movie[]> {
    return of(movieMock);
  }
}


