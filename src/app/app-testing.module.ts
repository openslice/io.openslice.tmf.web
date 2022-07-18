import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppTestingRoutingModule } from './app-testing-routing.module';

import { CommonModule } from '@angular/common';
import { ListOrganizationsComponent } from './shared/components/partyManagement/list-organizations/list-organizations.component';
import { EditOrganizationsComponent } from './shared/components/partyManagement/edit-organizations/edit-organizations.component';
import { ListIndividualsComponent } from './shared/components/partyManagement/list-individuals/list-individuals.component';
import { EditIndividualsComponent } from './shared/components/partyManagement/edit-individuals/edit-individuals.component';
import { EditPartyCharacteristicsComponent } from './shared/components/partyManagement/edit-organizations/edit-party-characteristics/edit-party-characteristics.component';
import { DeletePartyCharacteristicComponent } from './shared/components/partyManagement/edit-organizations/delete-party-characteristic/delete-party-characteristic.component';
import { DeleteOrganizationComponent } from './shared/components/partyManagement/delete-organization/delete-organization.component';
import { DeleteIndividualComponent } from './shared/components/partyManagement/delete-individual/delete-individual.component';
import { ListServiceTestSpecsComponent } from './p_testing/admin/testSpecificationManagement/list-service-test-specs/list-service-test-specs.component';
import { ListServiceTestsComponent } from './p_testing/admin/testManagement/list-service-tests/list-service-tests.component';
import { DiscardChangesComponent, EditServiceTestSpecComponent } from './p_testing/admin/testSpecificationManagement/edit-service-test-spec/edit-service-test-spec.component';
import { DeleteServiceTestSpecComponent } from './p_testing/admin/testSpecificationManagement/delete-service-test-spec/delete-service-test-spec.component';
import { AppModule } from './app.module';
import { SharedModule } from './shared.module';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { EditTestSpecCharacteristicComponent } from './p_testing/admin/testSpecificationManagement/edit-service-test-spec/edit-test-spec-characteristic/edit-test-spec-characteristic.component';
import { DeleteTestSpecCharacteristicComponent } from './p_testing/admin/testSpecificationManagement/edit-service-test-spec/delete-test-spec-characteristic/delete-test-spec-characteristic.component';
import { DeleteTestSpecAttachmentComponent } from './p_testing/admin/testSpecificationManagement/edit-service-test-spec/delete-test-spec-attachment/delete-test-spec-attachment.component';
import { ImportCharacteristicsFromYamlComponent } from './p_testing/admin/testSpecificationManagement/edit-service-test-spec/import-characteristics-from-yaml/import-characteristics-from-yaml.component';
import { EditServiceTestComponent } from './p_testing/admin/testManagement/edit-service-test/edit-service-test.component';
import { DeleteServiceRelationshipComponent } from './p_testing/admin/testSpecificationManagement/edit-service-test-spec/delete-service-relationship/delete-service-relationship.component';
import { DeleteServiceTestComponent } from './p_testing/admin/testManagement/delete-service-test/delete-service-test.component';



@NgModule({
  declarations: [
    // BootstrapComponent,
    // ListOrganizationsComponent,
    // EditOrganizationsComponent,
    // EditPartyCharacteristicsComponent,
    // DeletePartyCharacteristicComponent,
    // DeleteOrganizationComponent,
    // ListIndividualsComponent,
    // EditIndividualsComponent,
    // DeleteIndividualComponent,
    ListServiceTestSpecsComponent,
    ListServiceTestsComponent,
    EditServiceTestSpecComponent,
    DeleteServiceTestSpecComponent,
    EditTestSpecCharacteristicComponent,
    DeleteTestSpecCharacteristicComponent,
    DeleteTestSpecAttachmentComponent,
    ImportCharacteristicsFromYamlComponent,
    DiscardChangesComponent,
    EditServiceTestComponent,
    DeleteServiceRelationshipComponent,
    DeleteServiceTestComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppTestingRoutingModule,
  ],
  entryComponents: [
    // EditPartyCharacteristicsComponent,
    // DeletePartyCharacteristicComponent,
    // DeleteOrganizationComponent,
    // DeleteIndividualComponent,
    // DeleteServiceTestSpecComponent
    EditTestSpecCharacteristicComponent,
    DeleteServiceTestSpecComponent,
    DeleteTestSpecCharacteristicComponent,
    DeleteTestSpecAttachmentComponent,
    ImportCharacteristicsFromYamlComponent,
    DiscardChangesComponent,
    DeleteServiceRelationshipComponent,
    DeleteServiceTestComponent
  ],
})

export class AppTestingModule { }
