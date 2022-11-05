import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcePoolManagementComponent } from './resource-pool-management.component';

describe('ResourcePoolManagementComponent', () => {
  let component: ResourcePoolManagementComponent;
  let fixture: ComponentFixture<ResourcePoolManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourcePoolManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcePoolManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
