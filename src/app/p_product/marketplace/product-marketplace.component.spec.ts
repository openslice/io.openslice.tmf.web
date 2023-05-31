import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMarketplaceComponent } from './product-marketplace.component';

describe('ProductMarketplaceComponent', () => {
  let component: ProductMarketplaceComponent;
  let fixture: ComponentFixture<ProductMarketplaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductMarketplaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductMarketplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
