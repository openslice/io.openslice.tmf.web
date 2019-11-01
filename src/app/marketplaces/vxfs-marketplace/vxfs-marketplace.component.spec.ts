import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VxfsMarketplaceComponent } from './vxfs-marketplace.component';

describe('VxfsMarketplaceComponent', () => {
  let component: VxfsMarketplaceComponent;
  let fixture: ComponentFixture<VxfsMarketplaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VxfsMarketplaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VxfsMarketplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
