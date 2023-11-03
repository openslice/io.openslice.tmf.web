import { AuthConfig } from 'angular-oauth2-oidc';

export interface IAppConfig {	      
    "TITLE": string,
    "PORTALVERSION":string,
    "WIKI": string,
    "BUGZILLA": string,
    "STATUS": string,
    "WEBURL": string,
    "PORTAL_REPO_APIURL": string,
    "ASSURANCE_SERVICE_MGMT_APIURL": string,
    "APITMFURL": string,
    "OAUTH_CONFIG": AuthConfig
}