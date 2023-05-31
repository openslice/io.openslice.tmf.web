import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductCatalogsComponent } from './list-product-catalogs.component';

describe('ListProductCatalogsComponent', () => {
  let component: ListProductCatalogsComponent;
  let fixture: ComponentFixture<ListProductCatalogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProductCatalogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProductCatalogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
