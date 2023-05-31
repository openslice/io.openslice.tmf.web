import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProductSpecsComponent } from './delete-product-specs.component';

describe('DeleteProductSpecsComponent', () => {
  let component: DeleteProductSpecsComponent;
  let fixture: ComponentFixture<DeleteProductSpecsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteProductSpecsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteProductSpecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
