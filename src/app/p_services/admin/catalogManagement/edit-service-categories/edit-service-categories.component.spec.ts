import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditServiceCategoriesComponent } from './edit-service-categories.component';

describe('EditServiceCategoriesComponent', () => {
  let component: EditServiceCategoriesComponent;
  let fixture: ComponentFixture<EditServiceCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditServiceCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditServiceCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
