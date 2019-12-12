import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, combineLatest, Observable } from 'rxjs';
import { OAuthService, OAuthErrorEvent, JwksValidationHandler } from 'angular-oauth2-oidc';
import { Router } from '@angular/router';
import { authConfig } from 'src/assets/config/config.oauth';
import { map } from 'rxjs/operators';
import { PortalUser } from 'src/app/openApis/PortalRepositoryAPI/models';


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

  public portalUser: PortalUser

  constructor(    
    private oauthService: OAuthService,
    private router: Router
    ) 
  {
    window.addEventListener('storage', (event) => {
      console.log(event)
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
      this.isAuthenticatedSubject$.next(this.oauthService.hasValidAccessToken())
      if (ev instanceof OAuthErrorEvent) {
        console.error(ev);
      } else {
        console.warn(ev);
      }
    })

    // this.oauthService.setupAutomaticSilentRefresh()
  }

  public runInitialLoginSequence() {
    this.oauthService.configure(authConfig);
    this.oauthService.setStorage(localStorage);

    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    

    this.oauthService.tryLoginCodeFlow()
    .catch(error => console.error(error))
    .then(
      () => {
        // console.log('tryLoginCodeFlow')
        // console.log('hasValidAccessToken : ', this.oauthService.hasValidAccessToken());
        // console.log('hasValidIdToken : ', this.oauthService.hasValidIdToken());
        // console.log('getAccessTokenExpiration : ', this.oauthService.getAccessTokenExpiration());
        // console.log('getAccessToken : ', this.oauthService.getAccessToken());
        // console.log('getIdToken : ', this.oauthService.getIdToken());
        
        console.warn('AccessTokenExpiration : ', new Date(this.oauthService.getAccessTokenExpiration()).toUTCString());


        if (this.oauthService.hasValidAccessToken()) {
          console.warn('this.oauthService.hasValidAccessToken() === true')
          this.isAuthenticatedSubject$.next(this.oauthService.hasValidAccessToken());
          return Promise.resolve();
        } 
        
        //If Silent LOGIN isn't implemented
        else {
          console.warn('this.oauthService.hasValidAccessToken() === false')
          return Promise.reject();
        }

      //   // 2. SILENT LOGIN:
      //   // Try to log in via silent refresh because the IdServer
      //   // might have a cookie to remember the user, so we can
      //   // prevent doing a redirect:
      //   console.log('silentRefresh')
      //   return this.oauthService.silentRefresh()
      //     .then(() => {
      //       console.log('silentRefresh Fulfilled')
      //       Promise.resolve()
      //     })
      //     .catch(result => {
      //       // Subset of situations from https://openid.net/specs/openid-connect-core-1_0.html#AuthError
      //       // Only the ones where it's reasonably sure that sending the
      //       // user to the IdServer will help.
      //       const errorResponsesRequiringUserInteraction = [
      //         'interaction_required',
      //         'login_required',
      //         'account_selection_required',
      //         'consent_required',
      //       ];

      //       if (result
      //         && result.reason
      //         && errorResponsesRequiringUserInteraction.includes(result.reason.error)) {

      //         // 3. ASK FOR LOGIN:
      //         // At this point we know for sure that we have to ask the
      //         // user to log in, so we redirect them to the IdServer to
      //         // enter credentials.
      //         //
      //         // Enable this to ALWAYS force a user to login.
      //         // this.oauthService.initImplicitFlow();
      //         //
      //         // Instead, we'll now do this:
      //         console.warn('User interaction is needed to log in, we will wait for the user to manually log in.');
      //         return Promise.resolve();
      //       }

      //       // We can't handle the truth, just pass on the problem to the
      //       // next handler.
      //       console.error(result)
      //       return Promise.reject(result);
      //     });
    })
    .then( _ => {
      this.isDoneLoadingSubject$.next(true)
    }
    )
    .catch( error => { 
      this.isDoneLoadingSubject$.next(true)
    })

    // this.oauthService.setupAutomaticSilentRefresh()
  }

  public login() {
    this.oauthService.initCodeFlow()
  }

  public logout() { 
    this.oauthService.logOut()
  }


  // public logout() { this.oauthService.logOut(); }
  public refresh() { this.oauthService.silentRefresh(); }
  public hasValidToken() { return this.oauthService.hasValidAccessToken(); }
  public getAccessToken() { return this.oauthService.getAccessToken(); }
}
