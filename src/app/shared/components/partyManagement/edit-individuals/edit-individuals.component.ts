import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ActivationEnd } from '@angular/router';
import { IndividualService, OrganizationService } from 'src/app/openApis/partyManagement/services';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Individual, Organization, IndividualCreate, IndividualUpdate } from 'src/app/openApis/partyManagement/models';
import { FormGroup, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { trigger } from '@angular/animations';
import { fadeIn } from 'src/app/shared/animations/animations';

@Component({
  selector: 'app-edit-individuals',
  templateUrl: './edit-individuals.component.html',
  styleUrls: ['./edit-individuals.component.scss'],
  animations: [ trigger('fadeIn', fadeIn()) ]
})
export class EditIndividualsComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private individualService: IndividualService,
    private organizationService: OrganizationService,
    private authService: AuthService,
    private router: Router,
    private dialog: MatDialog,
    private toast: ToastrService,
  ) { }

  individualID: string
  individual: Individual

  organizations: Organization[]

  editForm = new FormGroup({
    givenName: new FormControl(),
    familyName: new FormControl(),
    location: new FormControl(),
    contactInfo: new FormGroup({
      city: new FormControl(),
      emailAddress: new FormControl(),
      phoneNumber: new FormControl()
    })
  })
  
  predefinedOrganizationCtrl = new FormControl()
  customOrganizationCtrl = new FormControl()

  contactMediums = [
    { mediumType: 'email', contactType: ['email']},
    { mediumType: 'telephone', contactType: ['mobile', 'fixed home', 'fixed office']},
    { mediumType: 'postal', contactType: ['shipping', 'installation']},
  ]

  newIndividual = false

  subscriptions = new Subscription()
  
  ngOnInit() {
    // this.retrieveOrganizations()
    this.routerEventsSubscription()

    if (this.activatedRoute.snapshot.params.id) 
    {
      this.individualID = this.activatedRoute.snapshot.params.id
      if (this.authService.portalUser && this.authService.portalUser.id === this.individualID) {
        this.individualID = "myuser"
      }
      this.retrieveIndividual()
    } else {
      // this.initNewOrganizationFormArray()  
      this.newIndividual = true
    }

  }

  routerEventsSubscription() {
    this.subscriptions = this.router.events.subscribe(
      event => {
        if (event instanceof ActivationEnd) {
          this.individualID = this.activatedRoute.snapshot.params.id
          this.retrieveIndividual()
        }
      }
    )
  }

  retrieveOrganizations() {
    this.organizationService.listOrganization({}).subscribe(
      data => { this.organizations = data },
      error => { console.error(error) }
    )
  }

  retrieveIndividual() {
    this.individualService.retrieveIndividual({id: this.individualID}).subscribe(
      data => this.individual = data,
      error => console.error(error),
      () => {
        this.editForm.patchValue({
          givenName: this.individual.givenName,
          familyName: this.individual.familyName,
          location: this.individual.location,
          contactInfo: {
            city: this.individual.contactMedium[0].characteristic.city,
            emailAddress: this.individual.contactMedium[0].characteristic.emailAddress,
            phoneNumber: this.individual.contactMedium[0].characteristic.phoneNumber
          }
        })

        if (this.individual.partyCharacteristic.length) {
          this.customOrganizationCtrl.setValue(this.individual.partyCharacteristic.find( char => char.name === 'organization').value.value)
        }

        if (this.individualID ==="myuser") {
          this.authService.portalUser = this.individual
        }

        //prefefined Organization in Related Party
        
        //
      }
      
    )
  }

  updateIndividual() {
    let updateObj: IndividualCreate | IndividualUpdate = {
      familyName: this.editForm.value.familyName,
      givenName: this.editForm.value.givenName,
      location: this.editForm.value.location,
      contactMedium: [{
        mediumType: 'main',
        characteristic: this.editForm.value.contactInfo
      }],
      partyCharacteristic: []
    }

    if (this.customOrganizationCtrl.value)
      updateObj.partyCharacteristic.push({name: 'organization', valueType: 'TEXT', value: {value: this.customOrganizationCtrl.value}})
    // updateObj = this.editForm.value

    let updatedIndividual: Individual

    if (this.newIndividual) {
      // const definedCharacteristics = this.editForm.get('partyCharacteristic').value.filter(el => el.value)
      // if (definedCharacteristics.length) updateObj.partyCharacteristic = definedCharacteristics

      this.individualService.createIndividual(updateObj).subscribe(
        data => { updatedIndividual = data },
        error => console.error(error),
        () => {
          this.newIndividual = false
          this.toast.success("Individual was successfully created")
          this.refreshIndividual(updatedIndividual)
        }
      )
    } 
    else {
      this.individualService.patchIndividual({id: this.individual.id, individual: updateObj}).subscribe(
        data => { updatedIndividual = data },
        error => console.error(error),
        () => {
          this.newIndividual = false
          this.toast.success("Individual was successfully updated")
          this.refreshIndividual(updatedIndividual)
        }
      )
    }

  }

  refreshIndividual(updatedIndividual: Individual) {
    // this.individualID = updatedIndividual.id
    this.retrieveIndividual()
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe()
  }

}
