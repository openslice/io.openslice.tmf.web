import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.authService.canActivateProtectedRoutes$
      .pipe(tap(canNavigate => {
        if (!canNavigate) this.router.navigateByUrl('')
        // console.log('You tried to navigate to protected route ' + state.url + ' and auth guard responded with ' + canNavigate)
      }))
  }
}
