import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductCatalogsComponent } from './edit-product-catalogs.component';

describe('EditProductCatalogsComponent', () => {
  let component: EditProductCatalogsComponent;
  let fixture: ComponentFixture<EditProductCatalogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProductCatalogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProductCatalogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
