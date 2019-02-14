import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from "rxjs/index";
import {AuthService} from "../service/auth.service";

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {


  constructor(private authService:AuthService){}


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


    if (this.authService.token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.authService.token}`
        }
      });
    }


    return next.handle(request);
  }
}
