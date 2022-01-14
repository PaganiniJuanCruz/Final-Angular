import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import jwt_decode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  private token: any = null;
  private user = "";
  private userName = "";
  private role = ""; 

  url = `${environment.apiRest}login`;

  constructor( 
    private httpClient: HttpClient
   ) { }

  validateCredentials(user: string, password: string):Observable<boolean>{
    return this.httpClient.post<any>(this.url, { user, password })
    .pipe(
      map(response => {
        if(response.status === 'OK'){
          this.token = response.token;
          const decodedToken: any = jwt_decode(this.token);
          this.user = decodedToken?.user;
          this.userName = decodedToken?.userName;
          this.role = decodedToken?.role;
          return true;
        }else{
          this.token = null;
          return false;
        }
      })
    )
  }  
  
  getToken(): any{
    return this.token;
  }

  isUserLoggedIn() {
    return this.user !== '';
  }

  getUserInfo():any {
    return {
      user: this.user,
      userName: this.userName,
      role: this.role
    }
  }

}
