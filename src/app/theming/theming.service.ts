import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAppThemingConfig } from 'src/app/shared/models/app-config-theming.model';

@Injectable({
  providedIn: 'root'
})
export class ThemingService {

  constructor(private http: HttpClient) { }

  private config: IAppThemingConfig = {
    "DEPLOYMENT_LOGO_PATH": "assets/images/logo_clear.png",
    "DEFAULT_SERVICE_LOGO_PATH": "assets/images/logo_icon_original.png",
    "FAVICON_PATH":"favicon.ico",
    "THEME_ID": "default"
  }

  public getConfig(): IAppThemingConfig {
    return this.config
  }

  loadConfig() {
    const jsonFile = `assets/config/config.theming.json`;

    return new Promise( (resolve, reject) => {
      this.http.get<IAppThemingConfig>(jsonFile).subscribe(
        response => {
          // this.config = response

          for (let key in response) {
            if (response.hasOwnProperty(key)) {
              if (response[key]) {
                this.config[key] = response[key]
              }
            }
          }
          resolve(true)
        },
        error => {
          console.warn('Theming config file not found. Falling back to default theming.')
          resolve(`Could not load file '${jsonFile}': ${JSON.stringify(error)}`)
        }
      )
    })
  }

}
