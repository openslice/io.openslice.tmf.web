import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceOrderCheckoutComponent } from './service-order-checkout.component';

describe('ServiceOrderCheckoutComponent', () => {
  let component: ServiceOrderCheckoutComponent;
  let fixture: ComponentFixture<ServiceOrderCheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceOrderCheckoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceOrderCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
