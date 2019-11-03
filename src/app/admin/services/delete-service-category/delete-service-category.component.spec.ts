import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteServiceCategoryComponent } from './delete-service-category.component';

describe('DeleteServiceCategoryComponent', () => {
  let component: DeleteServiceCategoryComponent;
  let fixture: ComponentFixture<DeleteServiceCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteServiceCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteServiceCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
