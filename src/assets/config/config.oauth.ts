import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {

  // Url of the Identity Provider
  issuer: 'http://portal.openslice.io/osapi-oauth-server/oauth/authorize',
  loginUrl: 'http://portal.openslice.io/osapi-oauth-server/oauth/authorize',
  tokenEndpoint: 'http://portal.openslice.io/osapi-oauth-server/oauth/token',
  redirectUri: window.location.origin + '/services/services_marketplace',
  responseType: 'code',

  // logoutUrl: 'http://portal.openslice.io/logout.html',
  // postLogoutRedirectUri: 'http://portal.openslice.io/login',
  oidc: false,

  clientId: 'osapiWebClientId',
  dummyClientSecret: 'secret',

  // silentRefreshRedirectUri: window.location.origin + '/services/services_marketplace',
  // silentRefreshTimeout: 5000,
  // timeoutFactor: 0.10,

  requireHttps: false,
  useHttpBasicAuth: true,
  
  clearHashAfterLogin: false,

  scope: 'read write admin openapi',

  showDebugInformation: true,
  silentRefreshShowIFrame: true

}