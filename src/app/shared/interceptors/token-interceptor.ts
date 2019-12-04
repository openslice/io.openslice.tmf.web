
  import { Injectable } from '@angular/core';
  import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
  } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
  
  @Injectable()
  export class TokenInterceptor implements HttpInterceptor {

    constructor(
      private authService: AuthService
    ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      if (this.authService.hasValidToken()) {
        req = req.clone({
          setHeaders: {
            Authorization: `Bearer ${this.authService.getAccessToken()}`
          }
        })
      }
      return next.handle(req);
    }
  }

