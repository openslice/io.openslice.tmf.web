import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, ActivationEnd } from '@angular/router';
import { OrganizationService } from 'src/app/openApis/partyManagement/services';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { Organization, Characteristic, Any, OrganizationUpdate, OrganizationCreate } from 'src/app/openApis/partyManagement/models';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Subscription } from 'rxjs';
import { EditPartyCharacteristicsComponent } from './edit-party-characteristics/edit-party-characteristics.component';
import { DeletePartyCharacteristicComponent } from './delete-party-characteristic/delete-party-characteristic.component';
import { trigger } from '@angular/animations';
import { fadeIn } from 'src/app/shared/animations/animations';

// const defaultPartyCharacteristics = ['EXTERNAL_TMFAPI_BASEURL', 'EXTERNAL_TMFAPI_CLIENTREGISTRATIONID', 'EXTERNAL_TMFAPI_OAUTH2CLIENTID', 'EXTERNAL_TMFAPI_OAUTH2CLIENTSECRET', 'EXTERNAL_TMFAPI_OAUTH2SCOPES', 'EXTERNAL_TMFAPI_OAUTH2TOKENURI', 'EXTERNAL_TMFAPI_USERNAME', 'EXTERNAL_TMFAPI_PASSWORD', 'EXTERNAL_TMFAPI_SERVICE_CATALOG_URLS', 'EXTERNAL_TMFAPI_SERVICE_ORDER_URLS', 'EXTERNAL_TMFAPI_SERVICE_SPEC']


@Component({
  selector: 'app-edit-organizations',
  templateUrl: './edit-organizations.component.html',
  styleUrls: ['./edit-organizations.component.scss'],
  animations: [ trigger('fadeIn', fadeIn()) ]
})
export class EditOrganizationsComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private orgService: OrganizationService,
    private dialog: MatDialog,
    private toast: ToastrService,
    private router: Router
  ) { }

  organizationID: string
  organization: Organization

  editForm = new FormGroup({
    name: new FormControl(),
    tradingName: new FormControl(),
    isLegalEntity: new FormControl(),
    status: new FormControl()
  })

  newOrganizationPartyCharFA = new FormArray([])


  organizationStatuses = ['initialized', 'validated', 'closed']

  displayColumnsCharacteristics = ['name', 'value', 'actions']
  dataSource = new MatTableDataSource<Characteristic>()
  
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  newOrganization = false

  subscriptions = new Subscription()

  ngOnInit() {
    if (this.activatedRoute.snapshot.params.id) 
    {
      this.organizationID = this.activatedRoute.snapshot.params.id
      this.retrieveOrganization()
    } else {
      // this.initNewOrganizationFormArray()  
      this.newOrganization = true
      this.editForm.patchValue({
        isLegalEntity: false,
        status: 'initialized'  
      })
    }
  }

  // initNewOrganizationFormArray() {
  //   const formArray = this.newOrganizationPartyCharFA as FormArray
  //   defaultPartyCharacteristics.forEach ( val => {
  //     formArray.push(this.updateInitFAItem(val))
  //   })
  //   this.editForm.addControl('partyCharacteristic', formArray)
  // }

  // updateInitFAItem(CharacteristicName: string): FormGroup {
  //   return new FormGroup({
  //     name: new FormControl(CharacteristicName),
  //     valueType: new FormControl('TEXT'),
  //     value: new FormControl()
  //   })
  // }

  retrieveOrganization() {
    this.orgService.retrieveOrganization({id: this.organizationID}).subscribe(
      data => this.organization = data,
      error => console.error(error),
      () => {
        this.editForm.patchValue(this.organization)

        this.dataSource.data = this.organization.partyCharacteristic
        this.dataSource.sort = this.sort
      }
    )
  }

  openCharacteristicDesignDialog(characteristic: Characteristic) {
    const dialogRef = this.dialog.open(EditPartyCharacteristicsComponent, {
      data: {
        organization: this.organization,
        characteristicToBeUpdated: characteristic
      }, 
      disableClose: true
    })

    dialogRef.afterClosed().subscribe (
      result => { 
        if (result) { 
          this.toast.success("Organization characteristics list was successfully updated")
          this.retrieveOrganization() 
        }
      }
    )
  }

  openCharacteristicDeleteDialog(characteristic: Characteristic) {
    const characteristicToBeDeletedIndex = this.organization.partyCharacteristic.findIndex(char => char.uuid === characteristic.uuid)

    const newCharacteristicsArray: Characteristic[] = this.organization.partyCharacteristic.slice()
    
    newCharacteristicsArray.splice(characteristicToBeDeletedIndex, 1)

    const dialogRef = this.dialog.open(DeletePartyCharacteristicComponent, {
      data: {
        organization: this.organization,
        characteristicsArray: newCharacteristicsArray, 
        characteristicToBeDeleted: this.organization.partyCharacteristic[characteristicToBeDeletedIndex]
      }
    })

    dialogRef.afterClosed().subscribe (
      result => { 
        if (result){ 
          this.toast.success("Organization characteristics list was successfully updated")
          this.retrieveOrganization()
        }
      }
    )
  }

  applyCharacteristicFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  updateOrganization() {
    let updateObj: OrganizationUpdate | OrganizationCreate = {
      name: this.editForm.value.name,
      tradingName: this.editForm.value.tradingName,
      status: this.editForm.value.status,
      isLegalEntity: this.editForm.value.isLegalEntity
    }

    let updatedOrganization: Organization

    if (this.newOrganization) {
      // const definedCharacteristics = this.editForm.get('partyCharacteristic').value.filter(el => el.value)
      // if (definedCharacteristics.length) updateObj.partyCharacteristic = definedCharacteristics

      this.orgService.createOrganization(updateObj).subscribe(
        data => { updatedOrganization = data },
        error => console.error(error),
        () => {
          this.newOrganization = false
          this.toast.success("Organization was successfully created")
          this.refreshOrganization(updatedOrganization)
        }
      )
    } 
    else {
      this.orgService.patchOrganization({id: this.organizationID, organization: updateObj}).subscribe(
        data => { updatedOrganization = data },
        error => console.error(error),
        () => {
          this.newOrganization = false
          this.toast.success("Organization was successfully updated")
          this.refreshOrganization(updatedOrganization)
        }
      )
    }

  }

  refreshOrganization(updatedOrganization: Organization) {
    this.organizationID = updatedOrganization.id
    this.retrieveOrganization()
  }

  
 
}
