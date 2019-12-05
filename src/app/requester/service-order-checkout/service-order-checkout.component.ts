import { Component, OnInit } from '@angular/core';
import { RequesterService } from '../services/requester.service';
import { ServiceSpecification } from 'src/app/openApis/ServiceCatalogManagement/models';

@Component({
  selector: 'app-service-order-checkout',
  templateUrl: './service-order-checkout.component.html',
  styleUrls: ['./service-order-checkout.component.scss']
})
export class ServiceOrderCheckoutComponent implements OnInit {

  constructor(
    public requesterService: RequesterService
  ) { }


  ngOnInit() {
    console.log(this.requesterService.serviceSpecsCart)
    this.requesterService.selectedSpecToView = this.requesterService.serviceSpecsCart[0]
  }

  viewAndConfigureSpec(spec: ServiceSpecification) {
    this.requesterService.selectedSpecToView = spec
  }

}
