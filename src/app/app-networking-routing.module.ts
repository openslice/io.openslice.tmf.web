import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { ServiceDesignComponent } from './p_networking/service-design/service-design.component';
import { ListServiceTestSpecsComponent } from './p_testing/admin/testSpecificationManagement/list-service-test-specs/list-service-test-specs.component';
import { AuthGuardService } from './shared/services/auth-guard.service';

const routes: Routes = [

  // { path: '', component: PortalsComponent},
  { path: '', component: BootstrapComponent, canActivate: [AuthGuardService], runGuardsAndResolvers: 'always', children: [
    { path: 'design_services', component: ServiceDesignComponent}
  ]}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AppNetworkingRoutingModule { }
