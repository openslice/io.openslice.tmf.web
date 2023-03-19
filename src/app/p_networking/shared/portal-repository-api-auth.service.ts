import { Injectable } from '@angular/core';
import { PortalRepositoryApiImplService } from 'src/app/openApis/portalRepositoryAPI/services';

@Injectable({
  providedIn: 'root'
})
export class PortalRepositoryAPIAuthService {

  constructor(
    private portalRepositoryApiImplementationService: PortalRepositoryApiImplService, 
  ) { }

  public portalRepositoryUser
  
  public fetchPortalRepositoryUserInfo() {
    this.portalRepositoryApiImplementationService.getUserUsingGET().subscribe(
      data => {
        this.portalRepositoryUser = data
      },
      error => console.error(error)
    )
  }

}
