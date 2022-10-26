import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ResourceService } from 'src/app/openApis/resourceInventoryManagement/services'
import { ResourceUpdate, CharacteristicReq } from 'src/app/openApis/resourceInventoryManagement/models';
import { Resource } from 'src/app/openApis/resourceInventoryManagement/models/resource';
import { ResourceRefOrValueReq,ResourceOrderItemReq, ResourceOrder, ResourceOrderCreate } from 'src/app/openApis/resourceOrderManagement/models';
import { ResourceOrderService } from 'src/app/openApis/resourceOrderManagement/services';
import { ResourceSpecificationRef } from 'src/app/openApis/resourceInventoryManagement/models'
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { trigger } from '@angular/animations';
import { fadeIn } from 'src/app/shared/animations/animations';

@Component({
  selector: 'app-resource-osm-add',
  templateUrl: './resource-osm-add.component.html',
  styleUrls: ['./resource-osm-add.component.scss'],
  animations: [ trigger('fadeIn', fadeIn()) ]
})
export class ResourceOsmAddComponent implements OnInit {


  constructor(
    private activatedRoute: ActivatedRoute,
    private resourceService: ResourceService,
    private resourceOrderCreate: ResourceOrderService,
    private toast: ToastrService,
    private router: Router
  )
  { }

  resourceID: string
  newResource = false
  subscriptions = new Subscription()
  resourceServiceRootUrl : string

  ngOnInit() {
    this.resourceServiceRootUrl = this.resourceService.rootUrl

    this.initSubscriptions()

    if (this.activatedRoute.snapshot.params.id)
    {
      this.resourceID = this.activatedRoute.snapshot.params.id
      this.retrieveResource()
    } else {
      this.newResource = true
      this.finishedLoading = true
    }
  }

  initSubscriptions() {
    this.subscriptions.add(this.router.events.subscribe(
      event => {
        if (event instanceof ActivationEnd) {
          console.log(event.snapshot.params.id)
          this.resourceID = this.activatedRoute.snapshot.params.id
          this.retrieveResource()
        }
      }
    ))
  }
  supportedManoPlatforms = ["OSMvSEVEN","OSMvEIGHT","OSMvNINE","OSMvTEN"]
  updatedResource: Resource
  resourceNotFound: boolean = false
  finishedLoading: boolean = false
  enabledForOnboarding: boolean = false
  enabledForSync: boolean = false

  editForm =  new FormGroup({
    osmTenantName: new FormControl(""),
    osmTenantDescription: new FormControl(""),
    supportedManoPlatform: new FormControl("OSMvTEN"),
    apiUrlEndpoint: new FormControl("https://10.10.10.36:9999/"),
    username: new FormControl(""),
    password: new FormControl(""),
    project: new FormControl(""),
    basicAuthHeader: new FormControl(""),
    enabledForSync: new FormControl(false),
    enabledForOnboarding: new FormControl(true)
  })

  updateResourceGeneral() {
    const resourceCharacteristic: CharacteristicReq[] =
    [
      {
        name: "Name",
        value: {"alias":this.editForm.value.osmTenantName,"value":this.editForm.value.osmTenantName}
      },
      {
        name: "Description",
        value: {"alias":this.editForm.value.osmTenantDescription,"value":this.editForm.value.osmTenantDescription}
      },
      {
        name: "SupportedManoPlatform",
        value: {"alias":this.editForm.value.supportedManoPlatform,"value":this.editForm.value.supportedManoPlatform}
      },
      {
        name: "ApiUrlEndpoint",
        value: {"alias":this.editForm.value.apiUrlEndpoint,"value":this.editForm.value.apiUrlEndpoint}
      },
      {
        name: "Username",
        value: {"alias":this.editForm.value.username,"value":this.editForm.value.username}
      },
      {
        name: "Password",
        value: {"alias":this.editForm.value.password,"value":this.editForm.value.password}
      },
      {
        name: "Project",
        value: {"alias":this.editForm.value.project,"value":this.editForm.value.project}
      },
      {
        name: "BasicAuthHeader",
        value: {"alias":this.editForm.value.basicAuthHeader,"value":this.editForm.value.basicAuthHeader}
      },
      {
        name: "EnabledForSync",
        value: {"alias":this.editForm.value.enabledForSync,"value":this.editForm.value.enabledForSync}
      },
      {
        name: "EnabledForOnBoarding",
        value: {"alias":this.editForm.value.EnabledForOnBoarding,"value":this.editForm.value.enabledForOnboarding}
      },
    ]


    const updateResourceObj: ResourceUpdate ={}
    updateResourceObj.name=this.editForm.value.osmTenantName
    updateResourceObj.resourceCharacteristic=resourceCharacteristic

    if(this.newResource)
    {
      let createdResourceOrder: ResourceOrder={}
      this.resourceOrderCreate.createResourceOrder({name:this.editForm.value.osmTenantName, roCreate:this.createDefaultResourceOrderObj("OSM Tenant")}).subscribe(
        data => { createdResourceOrder = data },
        error => console.error(error),
        () => {
          console.log(JSON.stringify(createdResourceOrder))
          this.resourceService.patchResource({resource: updateResourceObj, id: createdResourceOrder.orderItem[0].resource.id}).subscribe(
            data => { this.updatedResource = data },
            error => console.error(error),
            () => {
              console.log("Second request"+JSON.stringify(this.updatedResource))
              this.newResource = false
              this.toast.success("Resource OSM was successfully created")
              this.refreshResource(this.updatedResource)
            }
          )
        }
      )
    }
    else
    {
      this.resourceService.patchResource({resource: updateResourceObj, id: this.resourceID}).subscribe(
        data => { this.updatedResource = data },
        error => console.error(error),
        () => {
          console.log("Second request"+JSON.stringify(this.updatedResource))
          this.newResource = false
          this.toast.success("Resource OSM was successfully created")
          this.refreshResource(this.updatedResource)
        }
      )
    }
  }

  createDefaultResourceOrderObj(type:string):ResourceOrderCreate
  {
    let resourceSpecificationRef: ResourceSpecificationRef={id:""}
    resourceSpecificationRef.name=type
    let resourceRefOrValueReq: ResourceRefOrValueReq={href:"",id:""}
    resourceRefOrValueReq.name=resourceSpecificationRef.name
    resourceRefOrValueReq.resourceSpecification=resourceSpecificationRef
    let resourceOrderItemReq_tmp: ResourceOrderItemReq={}
    resourceOrderItemReq_tmp.resource=resourceRefOrValueReq;
    let resourceOrderCreateObj: ResourceOrderCreate={}
    resourceOrderCreateObj.orderItem=[resourceOrderItemReq_tmp]
    return resourceOrderCreateObj
  }

  refreshResource(updatedResource : Resource) {
    this.resourceID = updatedResource.id
    this.retrieveResource()
  }

  retrieveResource() {
    this.resourceService.retrieveResource({id: this.resourceID}).subscribe(
      data => this.updatedResource = data,
      error => console.error(error),
      () => {
        //populate General Panel Info
        if (this.updatedResource) {
          this.finishedLoading = true
          //this.editForm.patchValue(this.updatedResource)
          this.editForm.markAsPristine()
        }
        else {
          this.resourceNotFound = true
        }
      }
    )
  }

}
