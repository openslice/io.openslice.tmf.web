import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignProductOfferingsComponent } from './assign-product-offerings.component';

describe('AssignProductOfferingsComponent', () => {
  let component: AssignProductOfferingsComponent;
  let fixture: ComponentFixture<AssignProductOfferingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignProductOfferingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignProductOfferingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
