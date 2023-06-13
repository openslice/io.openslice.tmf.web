import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProductOfferingComponent } from './delete-product-offering.component';

describe('DeleteProductOfferingComponent', () => {
  let component: DeleteProductOfferingComponent;
  let fixture: ComponentFixture<DeleteProductOfferingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteProductOfferingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteProductOfferingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
