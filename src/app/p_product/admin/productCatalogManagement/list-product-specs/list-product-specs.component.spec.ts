import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductSpecsComponent } from './list-product-specs.component';

describe('ListProductSpecsComponent', () => {
  let component: ListProductSpecsComponent;
  let fixture: ComponentFixture<ListProductSpecsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProductSpecsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProductSpecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
