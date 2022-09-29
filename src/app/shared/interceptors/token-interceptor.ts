
  import { Injectable } from '@angular/core';
  import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse
  } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';  
import { relative } from 'path';
import { BootstrapService } from 'src/app/bootstrap/bootstrap.service';

  @Injectable()
  export class TokenInterceptor implements HttpInterceptor {

    constructor(
      private authService: AuthService,
      private bootstrapService: BootstrapService
    ) {}

    addToken(req: HttpRequest<any>, token: string): HttpRequest<any> {
      return req.clone({setHeaders: {Authorization: `Bearer ${token}`
        }
      })
    } 

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      // this rule is added, to append "client_id" to token requests after Keycloak update
      if (this.bootstrapService.getConfig() && req.url === this.bootstrapService.getConfig().OAUTH_CONFIG.tokenEndpoint) {
        req = req.clone({ body: req.body.append('client_id', this.bootstrapService.getConfig().OAUTH_CONFIG.clientId) })
      }
      
      if (this.authService.hasValidToken()) {
        req = this.addToken(req, this.authService.getAccessToken())
      }
      return next.handle(req).pipe(
        catchError((e: any) => this.errorHandler(e)))
    } 

    errorHandler(e: any) {
      if (e instanceof HttpErrorResponse) {
        if (e.status === 401) { this.authService.logout() }
      }
      return throwError(e)
    }
  }

