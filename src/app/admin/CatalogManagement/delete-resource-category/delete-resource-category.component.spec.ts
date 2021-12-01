import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteResourceCategoryComponent } from './delete-resource-category.component';

describe('DeleteResourceCategoryComponent', () => {
  let component: DeleteResourceCategoryComponent;
  let fixture: ComponentFixture<DeleteResourceCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteResourceCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteResourceCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
