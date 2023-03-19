import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SharedModule } from './shared.module';
import { AppNetworkingRoutingModule } from './app-networking-routing.module';
import { ServiceDesignComponent } from './p_networking/service-design/service-design.component';
import { AppTestingModule } from './app-testing.module';



@NgModule({
  declarations: [
    ServiceDesignComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppTestingModule,
    AppNetworkingRoutingModule,
  ],
  entryComponents: [
  ],
})

export class AppNetworkingModule { }
