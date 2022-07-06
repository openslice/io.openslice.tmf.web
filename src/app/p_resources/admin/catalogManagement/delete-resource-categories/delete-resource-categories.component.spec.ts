import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteResourceCategoriesComponent } from './delete-resource-categories.component';

describe('DeleteResourceCategoriesComponent', () => {
  let component: DeleteResourceCategoriesComponent;
  let fixture: ComponentFixture<DeleteResourceCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteResourceCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteResourceCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
