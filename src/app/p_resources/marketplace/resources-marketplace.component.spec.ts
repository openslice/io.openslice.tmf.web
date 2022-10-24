import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesMarketplaceComponent } from './resources-marketplace.component';

describe('ServicesMarketplaceComponent', () => {
  let component: ResourcesMarketplaceComponent;
  let fixture: ComponentFixture<ResourcesMarketplaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourcesMarketplaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcesMarketplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
