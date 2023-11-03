import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, combineLatest, Observable } from 'rxjs';
import { OAuthService, OAuthErrorEvent, AuthConfig, JwksValidationHandler } from 'angular-oauth2-oidc';
import { Router } from '@angular/router';
// import { authConfig } from 'src/assets/config/config.oauth';
import { map } from 'rxjs/operators';
import { BootstrapService } from 'src/app/bootstrap/bootstrap.service';
import { userFromJWT } from 'src/app/shared/models/user-from-jwt.model';
import { Individual } from 'src/app/openApis/partyManagement/models';
import decode from 'jwt-decode';
import { IndividualService } from 'src/app/openApis/partyManagement/services';



@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private isAuthenticatedSubject$ = new BehaviorSubject<boolean>(false);
  public isAuthenticated$ = this.isAuthenticatedSubject$.asObservable();

  private isDoneLoadingSubject$ = new ReplaySubject<boolean>();
  public isDoneLoading$ = this.isDoneLoadingSubject$.asObservable();

  public canActivateProtectedRoutes$: Observable<boolean> = combineLatest(
    this.isAuthenticated$,
    this.isDoneLoading$
  ).pipe(map(values => values.every(b => b)));

  private navigateToLoginPage() {
    this.router.navigateByUrl('/');
  }

  private authConfigFile: AuthConfig
  public portalUser: Individual
  public portalUserJWT: userFromJWT

   constructor(    
    private oauthService: OAuthService,
    private router: Router,
    private bootstrapService: BootstrapService,
    private individualService: IndividualService
    ) 
  {
    window.addEventListener('storage', (event) => {
      // The `key` is `null` if the event was caused by `.clear()`
      if (event.key !== 'access_token' && event.key !== null) {
        return;
      }

      console.warn('Noticed changes to access_token (most likely from another tab), updating isAuthenticated');
      this.isAuthenticatedSubject$.next(this.oauthService.hasValidAccessToken());

      if (!this.oauthService.hasValidAccessToken()) {
        this.navigateToLoginPage();
      }
    })

    this.oauthService.events.subscribe( (ev) => {
      // this.isAuthenticatedSubject$.next(this.oauthService.hasValidAccessToken())
      if (ev instanceof OAuthErrorEvent) {
        console.error(ev);
        console.error('AccessTokenExpiration : ', new Date(this.oauthService.getAccessTokenExpiration()).toUTCString());
        this.logout()
      } else {
        // console.warn(ev);
        // console.warn('AccessTokenExpiration : ', new Date(this.oauthService.getAccessTokenExpiration()).toUTCString());
        if (ev.type === 'token_received') {
          this.isAuthenticatedSubject$.next(this.oauthService.hasValidAccessToken())
        }
      }
    })

  }

  public runInitialLoginSequence() {
    this.authConfigFile = this.bootstrapService.getConfig().OAUTH_CONFIG
    
    this.oauthService.configure(this.authConfigFile);
    this.oauthService.setStorage(localStorage);

    // this.oauthService.tokenValidationHandler = new JwksValidationHandler();

    this.oauthService.setupAutomaticSilentRefresh();

    this.oauthService.tryLoginCodeFlow()
    .catch(error => console.error(error))
    .then(
      () => {       
        // console.warn('AccessTokenExpiration : ', new Date(this.oauthService.getAccessTokenExpiration()).toUTCString());

        if (this.oauthService.hasValidAccessToken()) {
          // console.warn('this.oauthService.hasValidAccessToken() === true')
          this.isAuthenticatedSubject$.next(this.oauthService.hasValidAccessToken());
          return Promise.resolve();
        } 
        
        //If Silent LOGIN isn't implemented
        else {
          // console.warn('this.oauthService.hasValidAccessToken() === false')
          return Promise.reject();
        }

    })
    .then( _ => {
      this.isDoneLoadingSubject$.next(true)
    }
    )
    .catch( error => { 
      this.isDoneLoadingSubject$.next(true)
    })

  }
  
  public fetchUserInfo() {
    this.portalUserJWT = decode(this.getAccessToken())
    this.individualService.retrieveIndividual({id:'myuser'}).subscribe(
      data => { this.portalUser = data },
      error => {
        console.error(error)
        // this.toast.error('An error occurred fetching user information')
        this.logout()
      }
    )
  }

  public login() {
    this.oauthService.initCodeFlow()
  }

  public logout() { 
    // this.http.delete(authConfig.tokenEndpoint).subscribe(
    //   data => console.log(data)
    // )
    this.oauthService.logOut()
    localStorage.clear()

    // this.http.delete(this.authConfigFile.tokenEndpoint).subscribe(
    //   data => { 
    //     console.warn(data)
    //     this.oauthService.logOut()
    //     this.router.navigate([this.router.routerState.snapshot.url])
    //   },
    //   error => {
    //     console.error(error)
    //     this.oauthService.logOut()
    //     this.router.navigate([this.router.routerState.snapshot.url])        
    //   }
    // )
  }


  // public logout() { this.oauthService.logOut(); }
  public refresh() { this.oauthService.silentRefresh(); }
  public hasValidToken() { return this.oauthService.hasValidAccessToken(); }
  public getAccessToken() { return this.oauthService.getAccessToken(); }
  public getRefreshToken() { return  this.oauthService.getRefreshToken();}
}
