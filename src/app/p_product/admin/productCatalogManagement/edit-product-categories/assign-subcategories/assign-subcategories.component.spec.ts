import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignSubcategoriesComponent } from './assign-subcategories.component';

describe('AssignSubcategoriesComponent', () => {
  let component: AssignSubcategoriesComponent;
  let fixture: ComponentFixture<AssignSubcategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignSubcategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignSubcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
