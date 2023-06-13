import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductOfferingsComponent } from './list-product-offerings.component';

describe('ListProductOfferingsComponent', () => {
  let component: ListProductOfferingsComponent;
  let fixture: ComponentFixture<ListProductOfferingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProductOfferingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProductOfferingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
