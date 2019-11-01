import { Injectable } from '@angular/core';
import { BootstrapService } from 'src/app/bootstrap/bootstrap.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private bootstrapService: BootstrapService,
  ) { }

  config = this.bootstrapService.getConfig()
}
