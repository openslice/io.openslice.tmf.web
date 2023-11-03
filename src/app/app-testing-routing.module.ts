import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { EditServiceTestComponent } from './p_testing/admin/testManagement/edit-service-test/edit-service-test.component';
import { ListServiceTestsComponent } from './p_testing/admin/testManagement/list-service-tests/list-service-tests.component';
import { EditServiceTestSpecComponent } from './p_testing/admin/testSpecificationManagement/edit-service-test-spec/edit-service-test-spec.component';
import { ListServiceTestSpecsComponent } from './p_testing/admin/testSpecificationManagement/list-service-test-specs/list-service-test-specs.component';
import { EditIndividualsComponent } from './shared/components/partyManagement/edit-individuals/edit-individuals.component';
import { EditOrganizationsComponent } from './shared/components/partyManagement/edit-organizations/edit-organizations.component';
import { ListIndividualsComponent } from './shared/components/partyManagement/list-individuals/list-individuals.component';
import { ListOrganizationsComponent } from './shared/components/partyManagement/list-organizations/list-organizations.component';
import { AuthGuardService } from './shared/services/auth-guard.service';

const routes: Routes = [

  // { path: '', component: PortalsComponent},
  { path: '', component: BootstrapComponent, canActivate: [AuthGuardService], runGuardsAndResolvers: 'always', children: [
    { path: 'service_test_specs', component: ListServiceTestSpecsComponent},
    { path: 'service_test_spec/:id', component: EditServiceTestSpecComponent},
    { path: 'service_test_spec', component: EditServiceTestSpecComponent},
    
    { path: 'service_tests', component: ListServiceTestsComponent},
    { path: 'service_test/:id', component: EditServiceTestComponent},

    { path: 'organizations', component: ListOrganizationsComponent },
    { path: 'organization_update/:id', component: EditOrganizationsComponent },
    { path: 'organization_update', component: EditOrganizationsComponent },

    { path: 'individuals', component: ListIndividualsComponent },
    { path: 'individual_update/:id', component: EditIndividualsComponent },
    { path: 'individual_update', component: EditIndividualsComponent }
  ]}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AppTestingRoutingModule { }
