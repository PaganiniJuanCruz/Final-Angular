import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.prod";
import { LoginService } from "../services/login.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(
        private loginService: LoginService
    ){ }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.loginService.getToken();

        const isApiUrl = req.url.startsWith(environment.cartRestApi);
            if ( token && isApiUrl){
                req = req.clone({
                    setHeaders: {Authorization: `Bearer ${token}`}
                });
            }
        return next.handle(req);    
    }        


}