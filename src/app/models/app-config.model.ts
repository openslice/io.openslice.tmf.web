import { AuthConfig } from 'angular-oauth2-oidc';

export interface IAppConfig {	      
    "TITLE": string,
    "PORTALVERSION":string,
    "WIKI": string,
    "BUGZILLA": string,
    "STATUS": string,
    "APIURL": string, 
    "WEBURL": string,
    "APIOAUTHURL":  string,
    "APITMFURL": string,
    "OAUTH_CONFIG": AuthConfig
}