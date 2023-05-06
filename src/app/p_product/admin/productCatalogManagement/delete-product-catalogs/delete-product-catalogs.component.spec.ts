import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProductCatalogsComponent } from './delete-product-catalogs.component';

describe('DeleteProductCatalogsComponent', () => {
  let component: DeleteProductCatalogsComponent;
  let fixture: ComponentFixture<DeleteProductCatalogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteProductCatalogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteProductCatalogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
