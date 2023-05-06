import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductCategoriesComponent } from './edit-product-categories.component';

describe('EditProductCategoriesComponent', () => {
  let component: EditProductCategoriesComponent;
  let fixture: ComponentFixture<EditProductCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProductCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProductCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
