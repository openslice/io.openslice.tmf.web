import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ServiceSpecificationService } from 'src/app/openApis/serviceCatalogManagement/services';

@Component({
  selector: 'app-clone-vinni-template',
  templateUrl: './clone-vinni-template.component.html',
  styleUrls: ['./clone-vinni-template.component.scss']
})
export class CloneVinniTemplateComponent implements OnInit {

  constructor(
    private specService: ServiceSpecificationService,
    private dialogRef: MatDialogRef<CloneVinniTemplateComponent>
  ) { }

  paramsForm =  new FormGroup({
    serviceName: new FormControl('', Validators.required),
    serviceSpecsToInclude: new FormArray([])
    // addServiceVNF: new FormControl(),
    // addServiceTopology: new FormControl(),
    // addServiceTesting: new FormControl(),
    // addServiceRequirements: new FormControl(),
    // addServiceNSD: new FormControl(),
    // addServiceMonitoring: new FormControl(),
    // addServiceExposureLevel4: new FormControl(),
    // addServiceExposureLevel3: new FormControl(),
    // addServiceExposureLevel2: new FormControl(),
    // addServiceExposureLevel1: new FormControl()
  })

  availableSpecs = [
    {value:"addServiceExposureLevel1", display:"Exposure Level1"},
    {value:"addServiceExposureLevel2", display:"Exposure Level2"},
    {value:"addServiceExposureLevel3", display:"Exposure Level3"},
    {value:"addServiceExposureLevel4", display:"Exposure Level4"},
    {value:"addServiceMonitoring", display:"Monitoring"},
    {value:"addServiceNSD", display:"3rd party NSD"},
    {value:"addServiceRequirements", display:"Requirements"},
    {value:"addServiceTesting", display:"Testing"},
    {value:"addServiceTopology", display:"Topology"},
    {value:"addServiceVNF", display:"3rd party VNF"}
  ]

  ngOnInit() {
    const specsFormArray = this.paramsForm.get('serviceSpecsToInclude') as FormArray
    this.availableSpecs.forEach( spec => {
      specsFormArray.push(new FormControl(false))
    })


  }

  submitDialog() {

    if (this.paramsForm.valid) {
      let cloneObj: ServiceSpecificationService.CloneVINNIServiceSpecificationParams = {}

      let selectedSpecs = this.paramsForm.get('serviceSpecsToInclude').value
        .map( (specBoolean,index) => { return specBoolean ? this.availableSpecs[index].value : null})
        .filter( val => val)
        
      this.availableSpecs.forEach(spec => {
        cloneObj[spec.value] = selectedSpecs.includes(spec.value);
      })
      cloneObj.serviceName = this.paramsForm.value.serviceName
      
      this.specService.cloneVINNIServiceSpecification(cloneObj).subscribe(
        data => { this.dialogRef.close(data) },
        error => console.error(error)
      )
    }

  }

  closeDialog() {
    this.dialogRef.close()
  }

}
