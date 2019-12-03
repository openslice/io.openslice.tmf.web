import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {

  // Url of the Identity Provider
  issuer: 'http://portal.openslice.io/osapi-oauth-server/oauth/authorize',

  loginUrl: 'http://portal.openslice.io/osapi-oauth-server/oauth/authorize',

  // logoutUrl: 'http://portal.openslice.io/osapi-oauth-server/oauth/token',

  tokenEndpoint: 'http://portal.openslice.io/osapi-oauth-server/oauth/token',
  
  oidc: false,
  // URL of the SPA to redirect the user to after login
  redirectUri: window.location.origin + '/services/services_marketplace',

  // The SPA's id. The SPA is registered with this id at the auth-server
  clientId: 'osapiWebClientId',

  sessionChecksEnabled: true,
  // dummyClientSecret: 'secret',

  responseType: 'code',

  requireHttps: false,

  clearHashAfterLogin: false,
  // disablePKCE: true,

  // set the scope for the permissions the client should request
  // The first three are defined by OIDC. The 4th is a usecase-specific one
  scope: 'read write admin openapi',

  showDebugInformation: true,
}