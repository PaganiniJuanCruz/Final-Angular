import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = environment.userRestApi + 'persons';

  constructor(
    private httpClient: HttpClient
  ) { }

  getUser(): Observable <User[]> {
    return this.httpClient.get<User[]>(this.url);
  }

  getById(id:string): Observable <User[]> {
    return this.httpClient.get<User[]>(`${this.url}/${id}`)
  }
}
