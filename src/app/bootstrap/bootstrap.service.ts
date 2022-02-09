import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IAppConfig } from 'src/app/shared/models/app-config.model'

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

          let baseUrl:string          
          baseUrl = window.location.origin

          depth2ObjectStrReplace(this.config, "{BASEURL}", baseUrl)
          resolve(true)

          function depth2ObjectStrReplace(object, strSearchValue, strReplaceValue) {
            Object.entries(object).forEach( (depth1Entries) => {

              if (depth1Entries[1] instanceof Object) {
                Object.entries(depth1Entries[1]).forEach ( (depth2Entries) => {
                  if (typeof depth2Entries[1] === 'string')            
                    object[depth1Entries[0]][depth2Entries[0]] = depth2Entries[1].replace(strSearchValue, strReplaceValue)
                })
              } else {
                if (typeof depth1Entries[1] === 'string')
                  object[depth1Entries[0]] = depth1Entries[1].replace(strSearchValue, strReplaceValue)
              }
            });
          }

        },
        error => {
          reject(`Could not load file '${jsonFile}': ${(error)}`)
        }
      )
    })
  }
}
