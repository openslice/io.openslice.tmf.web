import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductSpecsComponent } from './edit-product-specs.component';

describe('EditProductSpecsComponent', () => {
  let component: EditProductSpecsComponent;
  let fixture: ComponentFixture<EditProductSpecsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProductSpecsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProductSpecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
