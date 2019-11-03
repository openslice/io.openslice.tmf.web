import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IAppConfig } from '../models/app-config.model'

@Injectable({
  providedIn: 'root'
})
export class BootstrapService {

  constructor(private http: HttpClient) { }

  private config: IAppConfig

  public getConfig(): IAppConfig {
    return this.config
  }

  loadConfig() {
    const jsonFile = `assets/config/config.${environment.name}.json`;

    return new Promise( (resolve, reject) => {
      this.http.get<IAppConfig>(jsonFile).subscribe(
        response => {
          this.config = response
          resolve(true)
        },
        error => {
          reject(`Could not load file '${jsonFile}': ${JSON.stringify(error)}`)
        }
      )
    })
  }
}
