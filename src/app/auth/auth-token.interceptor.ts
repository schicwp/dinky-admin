import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from "rxjs/index";

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


      request = request.clone({
        setHeaders: {
          Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ3aWxsLnNjaGljayIsInJvbGVzIjpbImFmLW1uaS1tb25pdG9yLWFkbWluIiwiYWYtc3BlY2lmaWNhdGlvbi1lZGl0b3IiLCJhZi1lcnMtZWRpdG9yIiwiYWYtbW5pLW1vbml0b3ItZWRpdG9yIiwiYWYtaGlzdG9yaWNhbC1kYXRhLXZpZXdlciIsImFmLWNhbGVuZGFyLWVkaXRvciIsIkRldmVsb3BtZW50IiwiTU5JIEVtcGxveWVlcyIsIlN5c0FkbWlucyIsIkRvbWFpbiBBZG1pbnMiXX0.eI4ViRJr7rsnLZbGlBQAJERfC1qRImX7g2-gn7cuqR5DqwemzSW6DbKbcAPdRWqgiPnJUv8DKqLcdmVQgxAczw"
        }
      });


    return next.handle(request);
  }
}
