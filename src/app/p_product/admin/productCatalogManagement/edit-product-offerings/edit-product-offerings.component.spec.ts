import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductOfferingsComponent } from './edit-product-offerings.component';

describe('EditProductOfferingsComponent', () => {
  let component: EditProductOfferingsComponent;
  let fixture: ComponentFixture<EditProductOfferingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProductOfferingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProductOfferingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
