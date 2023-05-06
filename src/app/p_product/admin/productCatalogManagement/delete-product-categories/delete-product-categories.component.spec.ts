import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProductCategoriesComponent } from './delete-product-categories.component';

describe('DeleteProductCategoriesComponent', () => {
  let component: DeleteProductCategoriesComponent;
  let fixture: ComponentFixture<DeleteProductCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteProductCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteProductCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
