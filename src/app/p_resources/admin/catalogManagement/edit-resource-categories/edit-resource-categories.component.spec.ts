import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditResourceCategoriesComponent } from './edit-resource-categories.component';

describe('EditResourceCategoriesComponent', () => {
  let component: EditResourceCategoriesComponent;
  let fixture: ComponentFixture<EditResourceCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditResourceCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditResourceCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
